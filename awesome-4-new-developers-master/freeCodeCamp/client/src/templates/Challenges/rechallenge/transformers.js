import protect from '@freecodecamp/loop-protect';
import {
  attempt,
  cond,
  flow,
  identity,
  isError,
  matchesProperty,
  overSome,
  partial,
  stubTrue
} from 'lodash-es';

// the config files are created during the build, but not before linting
// eslint-disable-next-line import/no-unresolved
import sassData from '../../../../../config/client/sass-compile.json';
import {
  transformContents,
  transformHeadTailAndContents,
  setExt,
  setImportedFiles,
  compileHeadTail
} from '../../../../../utils/polyvinyl';
import createWorker from '../utils/worker-executor';

const { filename: sassCompile } = sassData;

const protectTimeout = 100;
const testProtectTimeout = 1500;
const loopsPerTimeoutCheck = 2000;

function loopProtectCB(line) {
  console.log(
    `Potential infinite loop detected on line ${line}. Tests may fail if this is not changed.`
  );
}

function testLoopProtectCB(line) {
  console.log(
    `Potential infinite loop detected on line ${line}. Tests may be failing because of this.`
  );
}

// hold Babel, presets and options so we don't try to import them multiple times

let Babel;
let presetEnv, presetReact;
let babelOptionsJSBase, babelOptionsJS, babelOptionsJSX, babelOptionsJSPreview;

async function loadBabel() {
  if (Babel) return;
  /* eslint-disable no-inline-comments */
  Babel = await import(
    /* webpackChunkName: "@babel/standalone" */ '@babel/standalone'
  );
  /* eslint-enable no-inline-comments */
  Babel.registerPlugin(
    'loopProtection',
    protect(protectTimeout, loopProtectCB)
  );
  Babel.registerPlugin(
    'testLoopProtection',
    protect(testProtectTimeout, testLoopProtectCB, loopsPerTimeoutCheck)
  );
}

async function loadPresetEnv() {
  /* eslint-disable no-inline-comments */
  if (!presetEnv)
    presetEnv = await import(
      /* webpackChunkName: "@babel/preset-env" */ '@babel/preset-env'
    );
  /* eslint-enable no-inline-comments */

  babelOptionsJSBase = {
    presets: [presetEnv]
  };
  babelOptionsJS = {
    ...babelOptionsJSBase,
    plugins: ['testLoopProtection']
  };
  babelOptionsJSPreview = {
    ...babelOptionsJSBase,
    plugins: ['loopProtection']
  };
}

async function loadPresetReact() {
  /* eslint-disable no-inline-comments */
  if (!presetReact)
    presetReact = await import(
      /* webpackChunkName: "@babel/preset-react" */ '@babel/preset-react'
    );
  if (!presetEnv)
    presetEnv = await import(
      /* webpackChunkName: "@babel/preset-env" */ '@babel/preset-env'
    );
  /* eslint-enable no-inline-comments */
  babelOptionsJSX = {
    plugins: ['loopProtection'],
    presets: [presetEnv, presetReact]
  };
}

const babelTransformCode = options => code =>
  Babel.transform(code, options).code;

// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const testJS = matchesProperty('ext', 'js');
const testJSX = matchesProperty('ext', 'jsx');
const testHTML = matchesProperty('ext', 'html');
const testHTML$JS$JSX = overSome(testHTML, testJS, testJSX);
export const testJS$JSX = overSome(testJS, testJSX);

export const replaceNBSP = cond([
  [
    testHTML$JS$JSX,
    partial(transformContents, contents => contents.replace(NBSPReg, ' '))
  ],
  [stubTrue, identity]
]);

function tryTransform(wrap = identity) {
  return function transformWrappedPoly(source) {
    const result = attempt(wrap, source);
    if (isError(result)) {
      // note(Bouncey): Error thrown here to collapse the build pipeline
      // At the minute, it will not bubble up
      // We collapse the pipeline so the app doesn't fall over trying
      // parse bad code (syntax/type errors etc...)
      throw result;
    }
    return result;
  };
}

const babelTransformer = options => {
  return cond([
    [
      testJS,
      async code => {
        await loadBabel();
        await loadPresetEnv();
        const babelOptions = getBabelOptions(options);
        return partial(
          transformHeadTailAndContents,
          tryTransform(babelTransformCode(babelOptions))
        )(code);
      }
    ],
    [
      testJSX,
      async code => {
        await loadBabel();
        await loadPresetReact();
        return flow(
          partial(
            transformHeadTailAndContents,
            tryTransform(babelTransformCode(babelOptionsJSX))
          ),
          partial(setExt, 'js')
        )(code);
      }
    ],
    [stubTrue, identity]
  ]);
};

function getBabelOptions({ preview = false, protect = true }) {
  let options = babelOptionsJSBase;
  // we always protect the preview, since it evaluates as the user types and
  // they may briefly have infinite looping code accidentally
  if (protect) {
    options = preview ? babelOptionsJSPreview : babelOptionsJS;
  } else {
    options = preview ? babelOptionsJSPreview : options;
  }
  return options;
}

const sassWorker = createWorker(sassCompile);
async function transformSASS(element) {
  // we only teach scss syntax, not sass. Also the compiler does not seem to be
  // able to deal with sass.
  const styleTags = element.querySelectorAll('style[type~="text/scss"]');
  await Promise.all(
    [].map.call(styleTags, async style => {
      style.type = 'text/css';
      style.innerHTML = await sassWorker.execute(style.innerHTML, 5000).done;
    })
  );
}

async function transformScript(element) {
  await loadBabel();
  await loadPresetEnv();
  const scriptTags = element.querySelectorAll('script');
  scriptTags.forEach(script => {
    script.innerHTML = tryTransform(babelTransformCode(babelOptionsJS))(
      script.innerHTML
    );
  });
}

const transformHtml = async function (file) {
  const div = document.createElement('div');
  div.innerHTML = file.contents;
  await Promise.all([transformSASS(div), transformScript(div)]);
  return transformContents(() => div.innerHTML, file);
};

// Find if the base html refers to the css or js files and record if they do. If
// the link or script exists we remove those elements since those files don't
// exist on the site, only in the editor
const transformIncludes = async function (fileP) {
  const file = await fileP;
  const div = document.createElement('div');
  div.innerHTML = file.contents;
  const link =
    div.querySelector('link[href="styles.css"]') ??
    div.querySelector('link[href="./styles.css"]');
  const script =
    div.querySelector('script[src="script.js"]') ??
    div.querySelector('script[src="./script.js"]');
  const importedFiles = [];
  if (link) {
    importedFiles.push('index.css');
    link.remove();
  }
  if (script) {
    importedFiles.push('index.js');
    script.remove();
  }

  return flow(
    partial(setImportedFiles, importedFiles),
    partial(transformContents, () => div.innerHTML)
  )(file);
};

export const composeHTML = cond([
  [
    testHTML,
    flow(
      partial(transformHeadTailAndContents, source => {
        const div = document.createElement('div');
        div.innerHTML = source;
        return div.innerHTML;
      }),
      partial(compileHeadTail, '')
    )
  ],
  [stubTrue, identity]
]);

export const htmlTransformer = cond([
  [testHTML, flow(transformHtml, transformIncludes)],
  [stubTrue, identity]
]);

export const getTransformers = options => [
  replaceNBSP,
  babelTransformer(options ? options : {}),
  composeHTML,
  htmlTransformer
];
