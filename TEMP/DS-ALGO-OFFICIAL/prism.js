/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript+bash+c+cpp+css-extras+docker+git+go+graphql+groovy+http+json+json5+jsonp+jsstacktrace+js-templates+markdown+markup-templating+matlab+mongodb+perl+php+powershell+python+racket+jsx+tsx+regex+rest+ruby+rust+sas+sass+scss+scheme+sql+typescript+xml-doc+yaml&plugins=line-highlight+line-numbers+autolinker+file-highlight+show-language+highlight-keywords+inline-color+autoloader+command-line+toolbar+copy-to-clipboard+download-button+match-braces+treeview */
var _self =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      M = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler:
          u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof W
              ? new W(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id ||
                Object.defineProperty(e, "__id", {
                  value: ++n,
                }),
              e.__id
            );
          },
          clone: function r(e, t) {
            var a, n;
            switch (((t = t || {}), M.util.type(e))) {
              case "Object":
                if (((n = M.util.objId(e)), t[n])) return t[n];
                for (var i in ((a = {}), (t[n] = a), e))
                  e.hasOwnProperty(i) && (a[i] = r(e[i], t));
                return a;
              case "Array":
                return (
                  (n = M.util.objId(e)),
                  t[n]
                    ? t[n]
                    : ((a = []),
                      (t[n] = a),
                      e.forEach(function (e, n) {
                        a[n] = r(e, t);
                      }),
                      a)
                );
              default:
                return e;
            }
          },
          getLanguage: function (e) {
            for (; e && !c.test(e.className); ) e = e.parentElement;
            return e
              ? (e.className.match(c) || [, "none"])[1].toLowerCase()
              : "none";
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
              if (n) {
                var r = document.getElementsByTagName("script");
                for (var t in r) if (r[t].src == n) return r[t];
              }
              return null;
            }
          },
          isActive: function (e, n, r) {
            for (var t = "no-" + n; e; ) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(t)) return !1;
              e = e.parentElement;
            }
            return !!r;
          },
        },
        languages: {
          extend: function (e, n) {
            var r = M.util.clone(M.languages[e]);
            for (var t in n) r[t] = n[t];
            return r;
          },
          insertBefore: function (r, e, n, t) {
            var a = (t = t || M.languages)[r],
              i = {};
            for (var l in a)
              if (a.hasOwnProperty(l)) {
                if (l == e)
                  for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                n.hasOwnProperty(l) || (i[l] = a[l]);
              }
            var s = t[r];
            return (
              (t[r] = i),
              M.languages.DFS(M.languages, function (e, n) {
                n === s && e != r && (this[e] = i);
              }),
              i
            );
          },
          DFS: function e(n, r, t, a) {
            a = a || {};
            var i = M.util.objId;
            for (var l in n)
              if (n.hasOwnProperty(l)) {
                r.call(n, l, n[l], t || l);
                var o = n[l],
                  s = M.util.type(o);
                "Object" !== s || a[i(o)]
                  ? "Array" !== s || a[i(o)] || ((a[i(o)] = !0), e(o, r, l, a))
                  : ((a[i(o)] = !0), e(o, r, null, a));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          M.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, r) {
          var t = {
            callback: r,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          M.hooks.run("before-highlightall", t),
            (t.elements = Array.prototype.slice.apply(
              t.container.querySelectorAll(t.selector)
            )),
            M.hooks.run("before-all-elements-highlight", t);
          for (var a, i = 0; (a = t.elements[i++]); )
            M.highlightElement(a, !0 === n, t.callback);
        },
        highlightElement: function (e, n, r) {
          var t = M.util.getLanguage(e),
            a = M.languages[t];
          e.className =
            e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t;
          var i = e.parentElement;
          i &&
            "pre" === i.nodeName.toLowerCase() &&
            (i.className =
              i.className.replace(c, "").replace(/\s+/g, " ") +
              " language-" +
              t);
          var l = {
            element: e,
            language: t,
            grammar: a,
            code: e.textContent,
          };

          function o(e) {
            (l.highlightedCode = e),
              M.hooks.run("before-insert", l),
              (l.element.innerHTML = l.highlightedCode),
              M.hooks.run("after-highlight", l),
              M.hooks.run("complete", l),
              r && r.call(l.element);
          }
          if ((M.hooks.run("before-sanity-check", l), !l.code))
            return M.hooks.run("complete", l), void (r && r.call(l.element));
          if ((M.hooks.run("before-highlight", l), l.grammar))
            if (n && u.Worker) {
              var s = new Worker(M.filename);
              (s.onmessage = function (e) {
                o(e.data);
              }),
                s.postMessage(
                  JSON.stringify({
                    language: l.language,
                    code: l.code,
                    immediateClose: !0,
                  })
                );
            } else o(M.highlight(l.code, l.grammar, l.language));
          else o(M.util.encode(l.code));
        },
        highlight: function (e, n, r) {
          var t = {
            code: e,
            grammar: n,
            language: r,
          };
          return (
            M.hooks.run("before-tokenize", t),
            (t.tokens = M.tokenize(t.code, t.grammar)),
            M.hooks.run("after-tokenize", t),
            W.stringify(M.util.encode(t.tokens), t.language)
          );
        },
        tokenize: function (e, n) {
          var r = n.rest;
          if (r) {
            for (var t in r) n[t] = r[t];
            delete n.rest;
          }
          var a = new i();
          return (
            I(a, a.head, e),
            (function e(n, r, t, a, i, l) {
              for (var o in t)
                if (t.hasOwnProperty(o) && t[o]) {
                  var s = t[o];
                  s = Array.isArray(s) ? s : [s];
                  for (var u = 0; u < s.length; ++u) {
                    if (l && l.cause == o + "," + u) return;
                    var c = s[u],
                      g = c.inside,
                      f = !!c.lookbehind,
                      h = !!c.greedy,
                      d = c.alias;
                    if (h && !c.pattern.global) {
                      var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                      c.pattern = RegExp(c.pattern.source, v + "g");
                    }
                    for (
                      var p = c.pattern || c, m = a.next, y = i;
                      m !== r.tail && !(l && y >= l.reach);
                      y += m.value.length, m = m.next
                    ) {
                      var k = m.value;
                      if (r.length > n.length) return;
                      if (!(k instanceof W)) {
                        var b,
                          x = 1;
                        if (h) {
                          if (!(b = z(p, y, n, f))) break;
                          var w = b.index,
                            A = b.index + b[0].length,
                            P = y;
                          for (P += m.value.length; P <= w; )
                            (m = m.next), (P += m.value.length);
                          if (
                            ((P -= m.value.length),
                            (y = P),
                            m.value instanceof W)
                          )
                            continue;
                          for (
                            var S = m;
                            S !== r.tail &&
                            (P < A || "string" == typeof S.value);
                            S = S.next
                          )
                            x++, (P += S.value.length);
                          x--, (k = n.slice(y, P)), (b.index -= y);
                        } else if (!(b = z(p, 0, k, f))) continue;
                        var w = b.index,
                          E = b[0],
                          O = k.slice(0, w),
                          L = k.slice(w + E.length),
                          N = y + k.length;
                        l && N > l.reach && (l.reach = N);
                        var j = m.prev;
                        O && ((j = I(r, j, O)), (y += O.length)), q(r, j, x);
                        var C = new W(o, g ? M.tokenize(E, g) : E, d, E);
                        if (((m = I(r, j, C)), L && I(r, m, L), 1 < x)) {
                          var _ = {
                            cause: o + "," + u,
                            reach: N,
                          };
                          e(n, r, t, m.prev, y, _),
                            l && _.reach > l.reach && (l.reach = _.reach);
                        }
                      }
                    }
                  }
                }
            })(e, a, n, a.head, 0),
            (function (e) {
              var n = [],
                r = e.head.next;
              for (; r !== e.tail; ) n.push(r.value), (r = r.next);
              return n;
            })(a)
          );
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var r = M.hooks.all;
            (r[e] = r[e] || []), r[e].push(n);
          },
          run: function (e, n) {
            var r = M.hooks.all[e];
            if (r && r.length) for (var t, a = 0; (t = r[a++]); ) t(n);
          },
        },
        Token: W,
      };

    function W(e, n, r, t) {
      (this.type = e),
        (this.content = n),
        (this.alias = r),
        (this.length = 0 | (t || "").length);
    }

    function z(e, n, r, t) {
      e.lastIndex = n;
      var a = e.exec(r);
      if (a && t && a[1]) {
        var i = a[1].length;
        (a.index += i), (a[0] = a[0].slice(i));
      }
      return a;
    }

    function i() {
      var e = {
          value: null,
          prev: null,
          next: null,
        },
        n = {
          value: null,
          prev: e,
          next: null,
        };
      (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
    }

    function I(e, n, r) {
      var t = n.next,
        a = {
          value: r,
          prev: n,
          next: t,
        };
      return (n.next = a), (t.prev = a), e.length++, a;
    }

    function q(e, n, r) {
      for (var t = n.next, a = 0; a < r && t !== e.tail; a++) t = t.next;
      ((n.next = t).prev = n), (e.length -= a);
    }
    if (
      ((u.Prism = M),
      (W.stringify = function n(e, r) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) {
          var t = "";
          return (
            e.forEach(function (e) {
              t += n(e, r);
            }),
            t
          );
        }
        var a = {
            type: e.type,
            content: n(e.content, r),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: r,
          },
          i = e.alias;
        i &&
          (Array.isArray(i)
            ? Array.prototype.push.apply(a.classes, i)
            : a.classes.push(i)),
          M.hooks.run("wrap", a);
        var l = "";
        for (var o in a.attributes)
          l +=
            " " +
            o +
            '="' +
            (a.attributes[o] || "").replace(/"/g, "&quot;") +
            '"';
        return (
          "<" +
          a.tag +
          ' class="' +
          a.classes.join(" ") +
          '"' +
          l +
          ">" +
          a.content +
          "</" +
          a.tag +
          ">"
        );
      }),
      !u.document)
    )
      return (
        u.addEventListener &&
          (M.disableWorkerMessageHandler ||
            u.addEventListener(
              "message",
              function (e) {
                var n = JSON.parse(e.data),
                  r = n.language,
                  t = n.code,
                  a = n.immediateClose;
                u.postMessage(M.highlight(t, M.languages[r], r)),
                  a && u.close();
              },
              !1
            )),
        M
      );
    var e = M.util.currentScript();

    function r() {
      M.manual || M.highlightAll();
    }
    if (
      (e &&
        ((M.filename = e.src),
        e.hasAttribute("data-manual") && (M.manual = !0)),
      !M.manual)
    ) {
      var t = document.readyState;
      "loading" === t || ("interactive" === t && e && e.defer)
        ? document.addEventListener("DOMContentLoaded", r)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(r)
        : window.setTimeout(r, 16);
    }
    return M;
  })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
  "undefined" != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0,
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/,
        },
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals",
            },
            /"|'/,
          ],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/,
        },
      },
    },
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity",
    },
    /&#x?[\da-f]{1,8};/i,
  ],
}),
  (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside["internal-subset"].inside =
    Prism.languages.markup),
  Prism.hooks.add("wrap", function (a) {
    "entity" === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, "&"));
  }),
  Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (a, e) {
      var s = {};
      (s["language-" + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e],
      }),
        (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var n = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: s,
        },
      };
      n["language-" + e] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[e],
      };
      var t = {};
      (t[a] = {
        pattern: RegExp(
          "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
            /__/g,
            function () {
              return a;
            }
          ),
          "i"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: n,
      }),
        Prism.languages.insertBefore("markup", "cdata", t);
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend("markup", {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  (s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
        "i"
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url",
        },
      },
    },
    selector: RegExp(
      "[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"
    ),
    string: {
      pattern: e,
      greedy: !0,
    },
    property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/,
  }),
    (s.languages.css.atrule.inside.rest = s.languages.css);
  var t = s.languages.markup;
  t &&
    (t.tag.addInlined("style", "css"),
    s.languages.insertBefore(
      "inside",
      "attr-value",
      {
        "style-attr": {
          pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
          lookbehind: !0,
          inside: {
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                style: {
                  pattern: /(["'])[\s\S]+(?=["']$)/,
                  lookbehind: !0,
                  alias: "language-css",
                  inside: s.languages.css,
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals",
                  },
                  /"|'/,
                ],
              },
            },
            "attr-name": /^style/i,
          },
        },
      },
      t.tag
    ));
})(Prism);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0,
    },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/,
    },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    {
      pattern: /((?:^|})\s*)catch\b/,
      lookbehind: !0,
    },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
  (Prism.languages.javascript["class-name"][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex,
        },
        "regex-flags": /[a-z]+$/,
        "regex-delimiter": /^\/|\/$/,
      },
    },
    "function-variable": {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function",
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
      pattern:
        /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string",
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\${|}$/,
              alias: "punctuation",
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
    Prism.languages.markup.tag.addInlined("script", "javascript"),
  (Prism.languages.js = Prism.languages.javascript);
!(function (e) {
  var t =
      "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
    n = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null,
    },
    a = {
      bash: n,
      environment: {
        pattern: RegExp("\\$" + t),
        alias: "constant",
      },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: !0,
              },
              /^\$\(\(/,
            ],
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator:
              /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            punctuation: /\(\(?|\)\)?|,|;/,
          },
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: {
            variable: /^\$\(|^`|\)$|`$/,
          },
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + t),
              lookbehind: !0,
              alias: "constant",
            },
          },
        },
        /\$(?:\w+|[#?*!@$])/,
      ],
      entity:
        /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
    };
  (e.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important",
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0,
    },
    "function-name": [
      {
        pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function",
      },
      {
        pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
        alias: "function",
      },
    ],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0,
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant",
        },
      },
      alias: "variable",
      lookbehind: !0,
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: a,
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: n,
        },
      },
      {
        pattern:
          /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
        lookbehind: !0,
        greedy: !0,
        inside: a,
      },
    ],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant",
    },
    variable: a.variable,
    function: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    keyword: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    builtin: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: "class-name",
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important",
    },
    operator: {
      pattern:
        /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important",
        },
      },
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0,
    },
  }),
    (n.inside = e.languages.bash);
  for (
    var s = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number",
      ],
      i = a.variable[1].inside,
      o = 0;
    o < s.length;
    o++
  )
    i[s[o]] = e.languages.bash[s[o]];
  e.languages.shell = e.languages.bash;
})(Prism);
(Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern:
      /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  function: /[a-z_]\w*(?=\s*\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
})),
  Prism.languages.insertBefore("c", "string", {
    macro: {
      pattern:
        /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: "property",
      inside: {
        string: [
          {
            pattern: /^(#\s*include\s*)<[^>]+>/,
            lookbehind: !0,
          },
          Prism.languages.c.string,
        ],
        comment: Prism.languages.c.comment,
        "macro-name": [
          {
            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
            lookbehind: !0,
          },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: !0,
            alias: "function",
          },
        ],
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: "keyword",
        },
        "directive-hash": /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: {
          pattern: /\S[\s\S]*/,
          inside: Prism.languages.c,
        },
      },
    },
    constant:
      /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
  }),
  delete Prism.languages.c.boolean;
!(function (e) {
  var t =
    /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  (e.languages.cpp = e.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(
          "(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
            /<keyword>/g,
            function () {
              return t.source;
            }
          )
        ),
        lookbehind: !0,
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
    ],
    keyword: t,
    number: {
      pattern:
        /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0,
    },
    operator:
      />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:true|false)\b/,
  })),
    e.languages.insertBefore("cpp", "string", {
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0,
      },
    }),
    e.languages.insertBefore("cpp", "class-name", {
      "base-clause": {
        pattern:
          /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: e.languages.extend("cpp", {}),
      },
    }),
    e.languages.insertBefore(
      "inside",
      "operator",
      {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i,
      },
      e.languages.cpp["base-clause"]
    );
})(Prism);
!(function (e) {
  var a,
    n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  (e.languages.css.selector = {
    pattern: e.languages.css.selector,
    inside: (a = {
      "pseudo-element":
        /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword",
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/,
            },
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0,
          },
          "attr-value": [
            n,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: !0,
            },
          ],
          operator: /[|~*^$]?=/,
        },
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: !0,
          inside: {
            number: /[\dn]+/,
            operator: /[+-]/,
          },
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: !0,
        },
      ],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/,
    }),
  }),
    (e.languages.css.atrule.inside["selector-function-argument"].inside = a),
    e.languages.insertBefore("css", "property", {
      variable: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
        lookbehind: !0,
      },
    });
  var r = {
      pattern: /(\b\d+)(?:%|[a-z]+\b)/,
      lookbehind: !0,
    },
    i = {
      pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
      lookbehind: !0,
    };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0,
    },
    hexcode: {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: "color",
    },
    color: [
      /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
      {
        pattern:
          /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: r,
          number: i,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/,
        },
      },
    ],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: i,
  });
})(Prism);
!(function (e) {
  var r = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(
      /<SP_BS>/g,
      function () {
        return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
      }
    ),
    n =
      "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
    t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(
      /<STR>/g,
      function () {
        return n;
      }
    ),
    o = {
      pattern: RegExp(n),
      greedy: !0,
    },
    i = {
      pattern: /(^[ \t]*)#.*/m,
      lookbehind: !0,
      greedy: !0,
    };

  function a(e, n) {
    return (
      (e = e
        .replace(/<OPT>/g, function () {
          return t;
        })
        .replace(/<SP>/g, function () {
          return r;
        })),
      RegExp(e, n)
    );
  }
  (e.languages.docker = {
    instruction: {
      pattern:
        /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: !0,
      greedy: !0,
      inside: {
        options: {
          pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
          lookbehind: !0,
          greedy: !0,
          inside: {
            property: {
              pattern: /(^|\s)--[\w-]+/,
              lookbehind: !0,
            },
            string: [
              o,
              {
                pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                lookbehind: !0,
              },
            ],
            operator: /\\$/m,
            punctuation: /=/,
          },
        },
        keyword: [
          {
            pattern: a(
              "(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b",
              "i"
            ),
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: a(
              "(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS",
              "i"
            ),
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: a("(^ONBUILD<SP>)\\w+", "i"),
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: /^\w+/,
            greedy: !0,
          },
        ],
        comment: i,
        string: o,
        variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
        operator: /\\$/m,
      },
    },
    comment: i,
  }),
    (e.languages.dockerfile = e.languages.docker);
})(Prism);
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
  command: {
    pattern: /^.*\$ git .*$/m,
    inside: {
      parameter: /\s--?\w+/m,
    },
  },
  coord: /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m,
};
(Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: !0,
  },
  keyword:
    /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|iota|nil|true|false)\b/,
  number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin:
    /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
})),
  delete Prism.languages.go["class-name"];
Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown,
      },
    },
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0,
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:true|false)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function",
  },
  "attr-name": {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
    lookbehind: !0,
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  keyword:
    /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  punctuation: /[!(){}\[\]:=,]/,
  constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
};
(Prism.languages.groovy = Prism.languages.extend("clike", {
  string: [
    {
      pattern:
        /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
      greedy: !0,
    },
    {
      pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
  ],
  keyword:
    /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
  number:
    /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
  operator: {
    pattern:
      /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
    lookbehind: !0,
  },
  punctuation: /\.+|[{}[\];(),:$]/,
})),
  Prism.languages.insertBefore("groovy", "string", {
    shebang: {
      pattern: /#!.+/,
      alias: "comment",
    },
  }),
  Prism.languages.insertBefore("groovy", "punctuation", {
    "spock-block": /\b(?:setup|given|when|then|and|cleanup|expect|where):/,
  }),
  Prism.languages.insertBefore("groovy", "function", {
    annotation: {
      pattern: /(^|[^.])@\w+/,
      lookbehind: !0,
      alias: "punctuation",
    },
  }),
  Prism.hooks.add("wrap", function (e) {
    if ("groovy" === e.language && "string" === e.type) {
      var t = e.content[0];
      if ("'" != t) {
        var n = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
        "$" === t && (n = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),
          (e.content = e.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&")),
          (e.content = Prism.highlight(e.content, {
            expression: {
              pattern: n,
              lookbehind: !0,
              inside: Prism.languages.groovy,
            },
          })),
          e.classes.push("/" === t ? "regex" : "gstring");
      }
    }
  });
!(function (t) {
  t.languages.http = {
    "request-line": {
      pattern:
        /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,
      inside: {
        method: {
          pattern: /^[A-Z]+\b/,
          alias: "property",
        },
        "request-target": {
          pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
          lookbehind: !0,
          alias: "url",
          inside: t.languages.uri,
        },
        "http-version": {
          pattern: /^(\s)HTTP\/[0-9.]+/,
          lookbehind: !0,
          alias: "property",
        },
      },
    },
    "response-status": {
      pattern: /^HTTP\/[0-9.]+ \d+ .+/m,
      inside: {
        "http-version": {
          pattern: /^HTTP\/[0-9.]+/,
          alias: "property",
        },
        "status-code": {
          pattern: /^(\s)\d+(?=\s)/,
          lookbehind: !0,
          alias: "number",
        },
        "reason-phrase": {
          pattern: /^(\s).+/,
          lookbehind: !0,
          alias: "string",
        },
      },
    },
    "header-name": {
      pattern: /^[\w-]+:(?=.)/m,
      alias: "keyword",
    },
  };
  var a,
    e,
    s,
    n = t.languages,
    r = {
      "application/javascript": n.javascript,
      "application/json": n.json || n.javascript,
      "application/xml": n.xml,
      "text/xml": n.xml,
      "text/html": n.html,
      "text/css": n.css,
    },
    i = {
      "application/json": !0,
      "application/xml": !0,
    };
  for (var p in r)
    if (r[p]) {
      a = a || {};
      var o = i[p]
        ? (void 0,
          (s = (e = p).replace(/^[a-z]+\//, "")),
          "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + s + "(?![+\\w.-]))")
        : p;
      a[p.replace(/\//g, "-")] = {
        pattern: RegExp(
          "(content-type:\\s*" +
            o +
            "(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*",
          "i"
        ),
        lookbehind: !0,
        inside: r[p],
      };
    }
  a && t.languages.insertBefore("http", "header-name", a);
})(Prism);
(Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:true|false)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword",
  },
}),
  (Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
  var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
  n.languages.json5 = n.languages.extend("json", {
    property: [
      {
        pattern: RegExp(e.source + "(?=\\s*:)"),
        greedy: !0,
      },
      {
        pattern:
          /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: "unquoted",
      },
    ],
    string: {
      pattern: e,
      greedy: !0,
    },
    number:
      /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
  });
})(Prism);
(Prism.languages.jsonp = Prism.languages.extend("json", {
  punctuation: /[{}[\]();,.]/,
})),
  Prism.languages.insertBefore("jsonp", "punctuation", {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
  });
Prism.languages.jsstacktrace = {
  "error-message": {
    pattern: /^\S.*/m,
    alias: "string",
  },
  "stack-frame": {
    pattern: /^[ \t]+at[ \t].*/m,
    inside: {
      "not-my-code": {
        pattern:
          /[ \t]+at[ \t]+(?!\s)(?:node\.js|\<unknown\>|.*(?:node_modules|\(\<anonymous\>\)|\(\<unknown\>|\<anonymous\>$|\(internal\/|\(node\.js)).*/m,
        alias: "comment",
      },
      filename: {
        pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
        lookbehind: !0,
        alias: "url",
      },
      function: {
        pattern:
          /(at\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
        lookbehind: !0,
        inside: {
          punctuation: /\./,
        },
      },
      punctuation: /[()]/,
      keyword: /\b(?:at|new)\b/,
      alias: {
        pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
        alias: "variable",
      },
      "line-number": {
        pattern: /:[0-9]+(?::[0-9]+)?\b/,
        alias: "number",
        inside: {
          punctuation: /:/,
        },
      },
    },
  },
};
!(function (u) {
  var e = u.languages.javascript["template-string"],
    n = e.pattern.source,
    a = e.inside.interpolation,
    i = a.inside["interpolation-punctuation"],
    r = a.pattern.source;

  function t(e, t) {
    if (u.languages[e])
      return {
        pattern: RegExp("((?:" + t + ")\\s*)" + n),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string",
          },
          "embedded-code": {
            pattern: /[\s\S]+/,
            alias: e,
          },
        },
      };
  }

  function o(e, t, n) {
    var r = {
      code: e,
      grammar: t,
      language: n,
    };
    return (
      u.hooks.run("before-tokenize", r),
      (r.tokens = u.tokenize(r.code, r.grammar)),
      u.hooks.run("after-tokenize", r),
      r.tokens
    );
  }

  function d(e) {
    var t = {};
    t["interpolation-punctuation"] = i;
    var n = u.tokenize(e, t);
    if (3 === n.length) {
      var r = [1, 1];
      r.push.apply(r, o(n[1], u.languages.javascript, "javascript")),
        n.splice.apply(n, r);
    }
    return new u.Token("interpolation", n, a.alias, e);
  }

  function c(a, e, i) {
    var t = u.tokenize(a, {
        interpolation: {
          pattern: RegExp(r),
          lookbehind: !0,
        },
      }),
      f = 0,
      y = {},
      n = o(
        t
          .map(function (e) {
            if ("string" == typeof e) return e;
            for (
              var t, n = e.content;
              -1 !==
              a.indexOf(
                ((r = f++), (t = "___" + i.toUpperCase() + "_" + r + "___"))
              );

            );
            return (y[t] = n), t;
            var r;
          })
          .join(""),
        e,
        i
      ),
      v = Object.keys(y);
    return (
      (f = 0),
      (function e(t) {
        for (var n = 0; n < t.length; n++) {
          if (f >= v.length) return;
          var r = t[n];
          if ("string" == typeof r || "string" == typeof r.content) {
            var a = v[f],
              i = "string" == typeof r ? r : r.content,
              o = i.indexOf(a);
            if (-1 !== o) {
              ++f;
              var s = i.substring(0, o),
                p = d(y[a]),
                l = i.substring(o + a.length),
                g = [];
              if ((s && g.push(s), g.push(p), l)) {
                var u = [l];
                e(u), g.push.apply(g, u);
              }
              "string" == typeof r
                ? (t.splice.apply(t, [n, 1].concat(g)), (n += g.length - 1))
                : (r.content = g);
            }
          } else {
            var c = r.content;
            Array.isArray(c) ? e(c) : e([c]);
          }
        }
      })(n),
      new u.Token(i, n, "language-" + i, a)
    );
  }
  u.languages.javascript["template-string"] = [
    t(
      "css",
      "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"
    ),
    t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),
    t("svg", "\\bsvg"),
    t("markdown", "\\b(?:md|markdown)"),
    t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),
    e,
  ].filter(Boolean);
  var s = {
    javascript: !0,
    js: !0,
    typescript: !0,
    ts: !0,
    jsx: !0,
    tsx: !0,
  };

  function f(e) {
    return "string" == typeof e
      ? e
      : Array.isArray(e)
      ? e.map(f).join("")
      : f(e.content);
  }
  u.hooks.add("after-tokenize", function (e) {
    e.language in s &&
      !(function e(t) {
        for (var n = 0, r = t.length; n < r; n++) {
          var a = t[n];
          if ("string" != typeof a) {
            var i = a.content;
            if (Array.isArray(i))
              if ("template-string" === a.type) {
                var o = i[1];
                if (
                  3 === i.length &&
                  "string" != typeof o &&
                  "embedded-code" === o.type
                ) {
                  var s = f(o),
                    p = o.alias,
                    l = Array.isArray(p) ? p[0] : p,
                    g = u.languages[l];
                  if (!g) continue;
                  i[1] = c(s, g, l);
                }
              } else e(i);
            else "string" != typeof i && e([i]);
          }
        }
      })(e.tokens);
  });
})(Prism);
!(function (u) {
  function n(n) {
    return (
      (n = n.replace(/<inner>/g, function () {
        return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))";
      })),
      RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    );
  }
  var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
    t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(
      /__/g,
      function () {
        return e;
      }
    ),
    a =
      "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
  (u.languages.markdown = u.languages.extend("markup", {})),
    u.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "font-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: u.languages.yaml,
          },
        },
      },
      blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation",
      },
      table: {
        pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(e),
                inside: u.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
          "table-line": {
            pattern: RegExp("^(" + t + ")" + a + "$"),
            lookbehind: !0,
            inside: {
              punctuation: /\||:?-{3,}:?/,
            },
          },
          "table-header-row": {
            pattern: RegExp("^" + t + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(e),
                alias: "important",
                inside: u.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
        },
      },
      code: [
        {
          pattern:
            /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: "keyword",
        },
        {
          pattern: /``.+?``|`[^`\r\n]+`/,
          alias: "keyword",
        },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0,
            },
            "code-language": {
              pattern: /^(```).+/,
              lookbehind: !0,
            },
            punctuation: /```/,
          },
        },
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: {
            punctuation: /==+$|--+$/,
          },
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: "important",
          inside: {
            punctuation: /^#+|#+$/,
          },
        },
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      "url-reference": {
        pattern:
          /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: !0,
          },
          string:
            /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: "url",
      },
      bold: {
        pattern: n(
          "\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /\*\*|__/,
        },
      },
      italic: {
        pattern: n(
          "\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /[*_]/,
        },
      },
      strike: {
        pattern: n("(~~?)(?:(?!~)<inner>)+?\\2"),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /~~?/,
        },
      },
      url: {
        pattern: n(
          '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {},
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: !0,
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: !0,
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0,
          },
        },
      },
    }),
    ["url", "bold", "italic", "strike"].forEach(function (e) {
      ["url", "bold", "italic", "strike"].forEach(function (n) {
        e !== n &&
          (u.languages.markdown[e].inside.content.inside[n] =
            u.languages.markdown[n]);
      });
    }),
    u.hooks.add("after-tokenize", function (n) {
      ("markdown" !== n.language && "md" !== n.language) ||
        !(function n(e) {
          if (e && "string" != typeof e)
            for (var t = 0, a = e.length; t < a; t++) {
              var i = e[t];
              if ("code" === i.type) {
                var r = i.content[1],
                  o = i.content[3];
                if (
                  r &&
                  o &&
                  "code-language" === r.type &&
                  "code-block" === o.type &&
                  "string" == typeof r.content
                ) {
                  var l = r.content
                      .replace(/\b#/g, "sharp")
                      .replace(/\b\+\+/g, "pp"),
                    s =
                      "language-" +
                      (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                  o.alias
                    ? "string" == typeof o.alias
                      ? (o.alias = [o.alias, s])
                      : o.alias.push(s)
                    : (o.alias = [s]);
                }
              } else n(i.content);
            }
        })(n.tokens);
    }),
    u.hooks.add("wrap", function (n) {
      if ("code-block" === n.type) {
        for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
          var i = n.classes[t],
            r = /language-(.+)/.exec(i);
          if (r) {
            e = r[1];
            break;
          }
        }
        var o = u.languages[e];
        if (o) {
          var l = document.createElement("div");
          l.innerHTML = n.content;
          var s = l.textContent;
          n.content = u.highlight(s, o, e);
        } else if (e && "none" !== e && u.plugins.autoloader) {
          var d =
            "md-" +
            new Date().valueOf() +
            "-" +
            Math.floor(1e16 * Math.random());
          (n.attributes.id = d),
            u.plugins.autoloader.loadLanguages(e, function () {
              var n = document.getElementById(d);
              n &&
                (n.innerHTML = u.highlight(n.textContent, u.languages[e], e));
            });
        }
      }
    }),
    (u.languages.md = u.languages.markdown);
})(Prism);
!(function (h) {
  function v(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }
  Object.defineProperties((h.languages["markup-templating"] = {}), {
    buildPlaceholders: {
      value: function (a, r, e, o) {
        if (a.language === r) {
          var c = (a.tokenStack = []);
          (a.code = a.code.replace(e, function (e) {
            if ("function" == typeof o && !o(e)) return e;
            for (var n, t = c.length; -1 !== a.code.indexOf((n = v(r, t))); )
              ++t;
            return (c[t] = e), n;
          })),
            (a.grammar = h.languages.markup);
        }
      },
    },
    tokenizePlaceholders: {
      value: function (p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k];
          var m = 0,
            d = Object.keys(p.tokenStack);
          !(function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t];
              if (
                "string" == typeof a ||
                (a.content && "string" == typeof a.content)
              ) {
                var r = d[m],
                  o = p.tokenStack[r],
                  c = "string" == typeof a ? a : a.content,
                  i = v(k, r),
                  u = c.indexOf(i);
                if (-1 < u) {
                  ++m;
                  var g = c.substring(0, u),
                    l = new h.Token(
                      k,
                      h.tokenize(o, p.grammar),
                      "language-" + k,
                      o
                    ),
                    s = c.substring(u + i.length),
                    f = [];
                  g && f.push.apply(f, e([g])),
                    f.push(l),
                    s && f.push.apply(f, e([s])),
                    "string" == typeof a
                      ? n.splice.apply(n, [t, 1].concat(f))
                      : (a.content = f);
                }
              } else a.content && e(a.content);
            }
            return n;
          })(p.tokens);
        }
      },
    },
  });
})(Prism);
Prism.languages.matlab = {
  comment: [/%\{[\s\S]*?\}%/, /%.+/],
  string: {
    pattern: /\B'(?:''|[^'\r\n])*'/,
    greedy: !0,
  },
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
  keyword:
    /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
  function: /(?!\d)\w+(?=\s*\()/,
  operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
  punctuation: /\.{3}|[.,;\[\](){}!]/,
};
!(function ($) {
  var e = [
      "$eq",
      "$gt",
      "$gte",
      "$in",
      "$lt",
      "$lte",
      "$ne",
      "$nin",
      "$and",
      "$not",
      "$nor",
      "$or",
      "$exists",
      "$type",
      "$expr",
      "$jsonSchema",
      "$mod",
      "$regex",
      "$text",
      "$where",
      "$geoIntersects",
      "$geoWithin",
      "$near",
      "$nearSphere",
      "$all",
      "$elemMatch",
      "$size",
      "$bitsAllClear",
      "$bitsAllSet",
      "$bitsAnyClear",
      "$bitsAnySet",
      "$comment",
      "$elemMatch",
      "$meta",
      "$slice",
      "$currentDate",
      "$inc",
      "$min",
      "$max",
      "$mul",
      "$rename",
      "$set",
      "$setOnInsert",
      "$unset",
      "$addToSet",
      "$pop",
      "$pull",
      "$push",
      "$pullAll",
      "$each",
      "$position",
      "$slice",
      "$sort",
      "$bit",
      "$addFields",
      "$bucket",
      "$bucketAuto",
      "$collStats",
      "$count",
      "$currentOp",
      "$facet",
      "$geoNear",
      "$graphLookup",
      "$group",
      "$indexStats",
      "$limit",
      "$listLocalSessions",
      "$listSessions",
      "$lookup",
      "$match",
      "$merge",
      "$out",
      "$planCacheStats",
      "$project",
      "$redact",
      "$replaceRoot",
      "$replaceWith",
      "$sample",
      "$set",
      "$skip",
      "$sort",
      "$sortByCount",
      "$unionWith",
      "$unset",
      "$unwind",
      "$abs",
      "$accumulator",
      "$acos",
      "$acosh",
      "$add",
      "$addToSet",
      "$allElementsTrue",
      "$and",
      "$anyElementTrue",
      "$arrayElemAt",
      "$arrayToObject",
      "$asin",
      "$asinh",
      "$atan",
      "$atan2",
      "$atanh",
      "$avg",
      "$binarySize",
      "$bsonSize",
      "$ceil",
      "$cmp",
      "$concat",
      "$concatArrays",
      "$cond",
      "$convert",
      "$cos",
      "$dateFromParts",
      "$dateToParts",
      "$dateFromString",
      "$dateToString",
      "$dayOfMonth",
      "$dayOfWeek",
      "$dayOfYear",
      "$degreesToRadians",
      "$divide",
      "$eq",
      "$exp",
      "$filter",
      "$first",
      "$floor",
      "$function",
      "$gt",
      "$gte",
      "$hour",
      "$ifNull",
      "$in",
      "$indexOfArray",
      "$indexOfBytes",
      "$indexOfCP",
      "$isArray",
      "$isNumber",
      "$isoDayOfWeek",
      "$isoWeek",
      "$isoWeekYear",
      "$last",
      "$last",
      "$let",
      "$literal",
      "$ln",
      "$log",
      "$log10",
      "$lt",
      "$lte",
      "$ltrim",
      "$map",
      "$max",
      "$mergeObjects",
      "$meta",
      "$min",
      "$millisecond",
      "$minute",
      "$mod",
      "$month",
      "$multiply",
      "$ne",
      "$not",
      "$objectToArray",
      "$or",
      "$pow",
      "$push",
      "$radiansToDegrees",
      "$range",
      "$reduce",
      "$regexFind",
      "$regexFindAll",
      "$regexMatch",
      "$replaceOne",
      "$replaceAll",
      "$reverseArray",
      "$round",
      "$rtrim",
      "$second",
      "$setDifference",
      "$setEquals",
      "$setIntersection",
      "$setIsSubset",
      "$setUnion",
      "$size",
      "$sin",
      "$slice",
      "$split",
      "$sqrt",
      "$stdDevPop",
      "$stdDevSamp",
      "$strcasecmp",
      "$strLenBytes",
      "$strLenCP",
      "$substr",
      "$substrBytes",
      "$substrCP",
      "$subtract",
      "$sum",
      "$switch",
      "$tan",
      "$toBool",
      "$toDate",
      "$toDecimal",
      "$toDouble",
      "$toInt",
      "$toLong",
      "$toObjectId",
      "$toString",
      "$toLower",
      "$toUpper",
      "$trim",
      "$trunc",
      "$type",
      "$week",
      "$year",
      "$zip",
      "$comment",
      "$explain",
      "$hint",
      "$max",
      "$maxTimeMS",
      "$min",
      "$orderby",
      "$query",
      "$returnKey",
      "$showDiskLoc",
      "$natural",
    ],
    t =
      "(?:" +
      (e = e.map(function ($) {
        return $.replace("$", "\\$");
      })).join("|") +
      ")\\b";
  ($.languages.mongodb = $.languages.extend("javascript", {})),
    $.languages.insertBefore("mongodb", "string", {
      property: {
        pattern:
          /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
        greedy: !0,
        inside: {
          keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$"),
        },
      },
    }),
    ($.languages.mongodb.string.inside = {
      url: {
        pattern:
          /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
        greedy: !0,
      },
      entity: {
        pattern:
          /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
        greedy: !0,
      },
    }),
    $.languages.insertBefore("mongodb", "constant", {
      builtin: {
        pattern: RegExp(
          "\\b(?:" +
            [
              "ObjectId",
              "Code",
              "BinData",
              "DBRef",
              "Timestamp",
              "NumberLong",
              "NumberDecimal",
              "MaxKey",
              "MinKey",
              "RegExp",
              "ISODate",
              "UUID",
            ].join("|") +
            ")\\b"
        ),
        alias: "keyword",
      },
    });
})(Prism);
Prism.languages.perl = {
  comment: [
    {
      pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
      lookbehind: !0,
    },
    {
      pattern: /(^|[^\\$])#.*/,
      lookbehind: !0,
    },
  ],
  string: [
    {
      pattern:
        /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: !0,
    },
    {
      pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: !0,
    },
    {
      pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
      greedy: !0,
    },
    {
      pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
      greedy: !0,
    },
    {
      pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
      greedy: !0,
    },
    {
      pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
      greedy: !0,
    },
    {
      pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: !0,
    },
    {
      pattern: /'(?:[^'\\\r\n]|\\.)*'/,
      greedy: !0,
    },
  ],
  regex: [
    {
      pattern:
        /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern:
        /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
      greedy: !0,
    },
  ],
  variable: [
    /[&*$@%]\{\^[A-Z]+\}/,
    /[&*$@%]\^[A-Z_]/,
    /[&*$@%]#?(?=\{)/,
    /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i,
    /[&*$@%]\d+/,
    /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/,
  ],
  filehandle: {
    pattern: /<(?![<=])\S*>|\b_\b/,
    alias: "symbol",
  },
  vstring: {
    pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
    alias: "string",
  },
  function: {
    pattern: /sub [a-z0-9_]+/i,
    inside: {
      keyword: /sub/,
    },
  },
  keyword:
    /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
  number:
    /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
  operator:
    /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
  punctuation: /[{}[\];(),:]/,
};
!(function (a) {
  var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
    t = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean",
      },
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
      /\b(?:null)\b/i,
    ],
    i =
      /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    n =
      /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
    s = /[{}\[\](),:;]/;
  a.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important",
    },
    comment: e,
    variable: /\$+(?:\w+\b|(?={))/i,
    package: {
      pattern:
        /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/,
      },
    },
    "class-name-definition": {
      pattern: /(\b(?:class|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name",
    },
    keyword: [
      {
        pattern:
          /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
        alias: "type-casting",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
        alias: "type-declaration",
        greedy: !0,
      },
      {
        pattern: /(\|\s*)(?:null|false)\b/i,
        alias: "type-declaration",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: "static-context",
        greedy: !0,
      },
      /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    ],
    "argument-name": /\b[a-z_]\w*(?=\s*:(?!:))/i,
    "class-name": [
      {
        pattern:
          /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
        greedy: !0,
      },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/,
        },
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        inside: {
          punctuation: /\\/,
        },
      },
      {
        pattern:
          /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/,
        },
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: "type-declaration",
        greedy: !0,
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-declaration"],
        greedy: !0,
        inside: {
          punctuation: /\\/,
        },
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*::)/i,
        alias: "static-context",
        greedy: !0,
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ["class-name-fully-qualified", "static-context"],
        greedy: !0,
        inside: {
          punctuation: /\\/,
        },
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-hint"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/,
        },
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ["class-name-fully-qualified", "return-type"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/,
        },
      },
    ],
    constant: t,
    function: /\w+\s*(?=\()/,
    property: {
      pattern: /(->)[\w]+/,
      lookbehind: !0,
    },
    number: i,
    operator: n,
    punctuation: s,
  };
  var l = {
      pattern:
        /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
      lookbehind: !0,
      inside: a.languages.php,
    },
    r = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<'?|[';]$/,
            },
          },
        },
      },
      {
        pattern:
          /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<"?|[";]$/,
            },
          },
          interpolation: l,
        },
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0,
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0,
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: !0,
        inside: {
          interpolation: l,
        },
      },
    ];
  a.languages.insertBefore("php", "variable", {
    string: r,
  }),
    a.languages.insertBefore("php", "variable", {
      attribute: {
        pattern:
          /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=]$)/,
            lookbehind: !0,
            inside: {
              comment: e,
              string: r,
              "attribute-class-name": [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "class-name",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: ["class-name", "class-name-fully-qualified"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                    punctuation: /\\/,
                  },
                },
              ],
              constant: t,
              number: i,
              operator: n,
              punctuation: s,
            },
          },
          delimiter: {
            pattern: /^#\[|]$/,
            alias: "punctuation",
          },
        },
      },
    }),
    a.hooks.add("before-tokenize", function (e) {
      if (/<\?/.test(e.code)) {
        a.languages["markup-templating"].buildPlaceholders(
          e,
          "php",
          /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi
        );
      }
    }),
    a.hooks.add("after-tokenize", function (e) {
      a.languages["markup-templating"].tokenizePlaceholders(e, "php");
    });
})(Prism);
!(function (e) {
  var i = (Prism.languages.powershell = {
      comment: [
        {
          pattern: /(^|[^`])<#[\s\S]*?#>/,
          lookbehind: !0,
        },
        {
          pattern: /(^|[^`])#.*/,
          lookbehind: !0,
        },
      ],
      string: [
        {
          pattern: /"(?:`[\s\S]|[^`"])*"/,
          greedy: !0,
          inside: {
            function: {
              pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
              lookbehind: !0,
              inside: {},
            },
          },
        },
        {
          pattern: /'(?:[^']|'')*'/,
          greedy: !0,
        },
      ],
      namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
      boolean: /\$(?:true|false)\b/i,
      variable: /\$\w+\b/,
      function: [
        /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
        /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
      ],
      keyword:
        /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
      operator: {
        pattern:
          /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
        lookbehind: !0,
      },
      punctuation: /[|{}[\];(),.]/,
    }),
    r = i.string[0].inside;
  (r.boolean = i.boolean), (r.variable = i.variable), (r.function.inside = i);
})();
(Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
  },
  "string-interpolation": {
    pattern:
      /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern:
          /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: !0,
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation",
          },
          rest: null,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string",
  },
  string: {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0,
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0,
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0,
  },
  decorator: {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./,
    },
  },
  keyword:
    /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin:
    /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:True|False|None)\b/,
  number:
    /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/,
}),
  (Prism.languages.python[
    "string-interpolation"
  ].inside.interpolation.inside.rest = Prism.languages.python),
  (Prism.languages.py = Prism.languages.python);
Prism.languages.scheme = {
  comment:
    /;.*|#;\s*\((?:[^()]|\([^()]*\))*\)|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
  string: {
    pattern: /"(?:[^"\\]|\\.)*"/,
    greedy: !0,
  },
  symbol: {
    pattern: /'[^()#'\s]+/,
    greedy: !0,
  },
  character: {
    pattern:
      /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,
    greedy: !0,
    alias: "string",
  },
  "lambda-parameter": [
    {
      pattern: /((?:^|[^'`#])\(lambda\s+)(?:[^|()'\s]+|\|(?:[^\\|]|\\.)*\|)/,
      lookbehind: !0,
    },
    {
      pattern: /((?:^|[^'`#])\(lambda\s+\()[^()']+/,
      lookbehind: !0,
    },
  ],
  keyword: {
    pattern:
      /((?:^|[^'`#])\()(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|export|except|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\s]|$)/,
    lookbehind: !0,
  },
  builtin: {
    pattern:
      /((?:^|[^'`#])\()(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\s]|$)/,
    lookbehind: !0,
  },
  operator: {
    pattern: /((?:^|[^'`#])\()(?:[-+*%/]|[<>]=?|=>?)(?=[()\s]|$)/,
    lookbehind: !0,
  },
  number: {
    pattern: RegExp(
      (function (r) {
        for (var e in r)
          r[e] = r[e].replace(/<[\w\s]+>/g, function (e) {
            return "(?:" + r[e].trim() + ")";
          });
        return r[e];
      })({
        "<ureal dec>":
          "\\d+(?:/\\d+)?|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?",
        "<real dec>": "[+-]?<ureal dec>|[+-](?:inf|nan)\\.0",
        "<imaginary dec>": "[+-](?:<ureal dec>|(?:inf|nan)\\.0)?i",
        "<complex dec>":
          "<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>",
        "<num dec>": "(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>",
        "<ureal box>": "[0-9a-f]+(?:/[0-9a-f]+)?",
        "<real box>": "[+-]?<ureal box>|[+-](?:inf|nan)\\.0",
        "<imaginary box>": "[+-](?:<ureal box>|(?:inf|nan)\\.0)?i",
        "<complex box>":
          "<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>",
        "<num box>": "#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>",
        "<number>": "(^|[\\s()])(?:<num dec>|<num box>)(?=[()\\s]|$)",
      }),
      "i"
    ),
    lookbehind: !0,
  },
  boolean: {
    pattern: /(^|[\s()])#(?:[ft]|false|true)(?=[()\s]|$)/,
    lookbehind: !0,
  },
  function: {
    pattern: /((?:^|[^'`#])\()(?:[^|()'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\s]|$)/,
    lookbehind: !0,
  },
  identifier: {
    pattern: /(^|[\s()])\|(?:[^\\|]|\\.)*\|(?=[()\s]|$)/,
    lookbehind: !0,
    greedy: !0,
  },
  punctuation: /[()']/,
};
(Prism.languages.racket = Prism.languages.extend("scheme", {
  "lambda-parameter": {
    pattern: /(\(lambda\s+\()[^()'\s]+/,
    lookbehind: !0,
  },
})),
  Prism.languages.DFS(Prism.languages.racket, function (e, a) {
    if ("RegExp" === Prism.util.type(a)) {
      var r = a.source.replace(
        /\\(.)|\[\^?((?:\\.|[^\\\]])*)\]/g,
        function (e, a, r) {
          if (a) {
            if ("(" === a) return "[([]";
            if (")" === a) return "[)\\]]";
          }
          return r
            ? ("^" === e[1] ? "[^" : "[") +
                r.replace(/\\(.)|[()]/g, function (e, a) {
                  return "(" === e || "(" === a
                    ? "(["
                    : ")" === e || ")" === a
                    ? ")\\]"
                    : e;
                }) +
                "]"
            : e;
        }
      );
      this[e] = RegExp(r, a.flags);
    }
  }),
  Prism.languages.insertBefore("racket", "string", {
    lang: {
      pattern: /^#lang.+/m,
      greedy: !0,
      alias: "keyword",
    },
  }),
  (Prism.languages.rkt = Prism.languages.racket);
!(function (o) {
  var t = o.util.clone(o.languages.javascript),
    e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";

  function n(t, n) {
    return (
      (t = t
        .replace(/<S>/g, function () {
          return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
        })
        .replace(/<BRACES>/g, function () {
          return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
        })
        .replace(/<SPREAD>/g, function () {
          return e;
        })),
      RegExp(t, n)
    );
  }
  (e = n(e).source),
    (o.languages.jsx = o.languages.extend("markup", t)),
    (o.languages.jsx.tag.pattern = n(
      "</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
    )),
    (o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
    (o.languages.jsx.tag.inside["attr-value"].pattern =
      /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
    (o.languages.jsx.tag.inside.tag.inside["class-name"] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (o.languages.jsx.tag.inside.comment = t.comment),
    o.languages.insertBefore(
      "inside",
      "attr-name",
      {
        spread: {
          pattern: n("<SPREAD>"),
          inside: o.languages.jsx,
        },
      },
      o.languages.jsx.tag
    ),
    o.languages.insertBefore(
      "inside",
      "attr-value",
      {
        script: {
          pattern: n("=<BRACES>"),
          inside: {
            "script-punctuation": {
              pattern: /^=(?={)/,
              alias: "punctuation",
            },
            rest: o.languages.jsx,
          },
          alias: "language-javascript",
        },
      },
      o.languages.jsx.tag
    );
  var i = function (t) {
      return t
        ? "string" == typeof t
          ? t
          : "string" == typeof t.content
          ? t.content
          : t.content.map(i).join("")
        : "";
    },
    r = function (t) {
      for (var n = [], e = 0; e < t.length; e++) {
        var a = t[e],
          g = !1;
        if (
          ("string" != typeof a &&
            ("tag" === a.type && a.content[0] && "tag" === a.content[0].type
              ? "</" === a.content[0].content[0].content
                ? 0 < n.length &&
                  n[n.length - 1].tagName === i(a.content[0].content[1]) &&
                  n.pop()
                : "/>" === a.content[a.content.length - 1].content ||
                  n.push({
                    tagName: i(a.content[0].content[1]),
                    openedBraces: 0,
                  })
              : 0 < n.length && "punctuation" === a.type && "{" === a.content
              ? n[n.length - 1].openedBraces++
              : 0 < n.length &&
                0 < n[n.length - 1].openedBraces &&
                "punctuation" === a.type &&
                "}" === a.content
              ? n[n.length - 1].openedBraces--
              : (g = !0)),
          (g || "string" == typeof a) &&
            0 < n.length &&
            0 === n[n.length - 1].openedBraces)
        ) {
          var s = i(a);
          e < t.length - 1 &&
            ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) &&
            ((s += i(t[e + 1])), t.splice(e + 1, 1)),
            0 < e &&
              ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) &&
              ((s = i(t[e - 1]) + s), t.splice(e - 1, 1), e--),
            (t[e] = new o.Token("plain-text", s, null, s));
        }
        a.content && "string" != typeof a.content && r(a.content);
      }
    };
  o.hooks.add("after-tokenize", function (t) {
    ("jsx" !== t.language && "tsx" !== t.language) || r(t.tokens);
  });
})(Prism);
!(function (e) {
  (e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null,
    },
    keyword:
      /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
    builtin:
      /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
  })),
    delete e.languages.typescript.parameter;
  var n = e.languages.extend("typescript", {});
  delete n["class-name"],
    (e.languages.typescript["class-name"].inside = n),
    e.languages.insertBefore("typescript", "function", {
      "generic-function": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: n,
          },
        },
      },
    }),
    (e.languages.ts = e.languages.typescript);
})(Prism);
!(function (a) {
  var e = a.util.clone(a.languages.typescript);
  a.languages.tsx = a.languages.extend("jsx", e);
  var t = a.languages.tsx.tag;
  (t.pattern = RegExp(
    "(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")",
    t.pattern.flags
  )),
    (t.lookbehind = !0);
})(Prism);
!(function (a) {
  var e = {
      pattern: /\\[\\(){}[\]^$+*?|.]/,
      alias: "escape",
    },
    n =
      /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,
    t = "(?:[^\\\\-]|" + n.source + ")",
    s = RegExp(t + "-" + t),
    i = {
      pattern: /(<|')[^<>']+(?=[>']$)/,
      lookbehind: !0,
      alias: "variable",
    };
  a.languages.regex = {
    charset: {
      pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
      lookbehind: !0,
      inside: {
        "charset-negation": {
          pattern: /(^\[)\^/,
          lookbehind: !0,
          alias: "operator",
        },
        "charset-punctuation": {
          pattern: /^\[|\]$/,
          alias: "punctuation",
        },
        range: {
          pattern: s,
          inside: {
            escape: n,
            "range-punctuation": {
              pattern: /-/,
              alias: "operator",
            },
          },
        },
        "special-escape": e,
        charclass: {
          pattern: /\\[wsd]|\\p{[^{}]+}/i,
          alias: "class-name",
        },
        escape: n,
      },
    },
    "special-escape": e,
    charclass: {
      pattern: /\.|\\[wsd]|\\p{[^{}]+}/i,
      alias: "class-name",
    },
    backreference: [
      {
        pattern: /\\(?![123][0-7]{2})[1-9]/,
        alias: "keyword",
      },
      {
        pattern: /\\k<[^<>']+>/,
        alias: "keyword",
        inside: {
          "group-name": i,
        },
      },
    ],
    anchor: {
      pattern: /[$^]|\\[ABbGZz]/,
      alias: "function",
    },
    escape: n,
    group: [
      {
        pattern:
          /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
        alias: "punctuation",
        inside: {
          "group-name": i,
        },
      },
      {
        pattern: /\)/,
        alias: "punctuation",
      },
    ],
    quantifier: {
      pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
      alias: "number",
    },
    alternation: {
      pattern: /\|/,
      alias: "keyword",
    },
  };
})(Prism);
Prism.languages.rest = {
  table: [
    {
      pattern:
        /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1[+|].+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
      lookbehind: !0,
      inside: {
        punctuation: /\||(?:\+[=-]+)+\+/,
      },
    },
    {
      pattern:
        /(\s*)=+ [ =]*=(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1=+ [ =]*=(?=(?:\r?\n|\r){2}|\s*$)/,
      lookbehind: !0,
      inside: {
        punctuation: /[=-]+/,
      },
    },
  ],
  "substitution-def": {
    pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
    lookbehind: !0,
    inside: {
      substitution: {
        pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
        alias: "attr-value",
        inside: {
          punctuation: /^\||\|$/,
        },
      },
      directive: {
        pattern: /( +)(?! )[^:]+::/,
        lookbehind: !0,
        alias: "function",
        inside: {
          punctuation: /::$/,
        },
      },
    },
  },
  "link-target": [
    {
      pattern: /(^\s*\.\. )\[[^\]]+\]/m,
      lookbehind: !0,
      alias: "string",
      inside: {
        punctuation: /^\[|\]$/,
      },
    },
    {
      pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
      lookbehind: !0,
      alias: "string",
      inside: {
        punctuation: /^_|:$/,
      },
    },
  ],
  directive: {
    pattern: /(^\s*\.\. )[^:]+::/m,
    lookbehind: !0,
    alias: "function",
    inside: {
      punctuation: /::$/,
    },
  },
  comment: {
    pattern:
      /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
    lookbehind: !0,
  },
  title: [
    {
      pattern:
        /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
      inside: {
        punctuation:
          /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
        important: /.+/,
      },
    },
    {
      pattern:
        /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
      lookbehind: !0,
      inside: {
        punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
        important: /.+/,
      },
    },
  ],
  hr: {
    pattern:
      /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
    lookbehind: !0,
    alias: "punctuation",
  },
  field: {
    pattern: /(^\s*):[^:\r\n]+:(?= )/m,
    lookbehind: !0,
    alias: "attr-name",
  },
  "command-line-option": {
    pattern:
      /(^\s*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
    lookbehind: !0,
    alias: "symbol",
  },
  "literal-block": {
    pattern: /::(?:\r?\n|\r){2}([ \t]+)(?![ \t]).+(?:(?:\r?\n|\r)\1.+)*/,
    inside: {
      "literal-block-punctuation": {
        pattern: /^::/,
        alias: "punctuation",
      },
    },
  },
  "quoted-literal-block": {
    pattern:
      /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
    inside: {
      "literal-block-punctuation": {
        pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
        alias: "punctuation",
      },
    },
  },
  "list-bullet": {
    pattern:
      /(^\s*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
    lookbehind: !0,
    alias: "punctuation",
  },
  "doctest-block": {
    pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
    lookbehind: !0,
    inside: {
      punctuation: /^>>>/,
    },
  },
  inline: [
    {
      pattern:
        /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
      lookbehind: !0,
      inside: {
        bold: {
          pattern: /(^\*\*).+(?=\*\*$)/,
          lookbehind: !0,
        },
        italic: {
          pattern: /(^\*).+(?=\*$)/,
          lookbehind: !0,
        },
        "inline-literal": {
          pattern: /(^``).+(?=``$)/,
          lookbehind: !0,
          alias: "symbol",
        },
        role: {
          pattern: /^:[^:]+:|:[^:]+:$/,
          alias: "function",
          inside: {
            punctuation: /^:|:$/,
          },
        },
        "interpreted-text": {
          pattern: /(^`).+(?=`$)/,
          lookbehind: !0,
          alias: "attr-value",
        },
        substitution: {
          pattern: /(^\|).+(?=\|$)/,
          lookbehind: !0,
          alias: "attr-value",
        },
        punctuation: /\*\*?|``?|\|/,
      },
    },
  ],
  link: [
    {
      pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
      alias: "string",
      inside: {
        punctuation: /^\[|\]_$/,
      },
    },
    {
      pattern:
        /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
      alias: "string",
      inside: {
        punctuation: /^_?`|`$|`?_?_$/,
      },
    },
  ],
  punctuation: {
    pattern: /(^\s*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
    lookbehind: !0,
  },
};
!(function (e) {
  e.languages.ruby = e.languages.extend("clike", {
    comment: [
      /#.*/,
      {
        pattern: /^=begin\s[\s\S]*?^=end/m,
        greedy: !0,
      },
    ],
    "class-name": {
      pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/,
      },
    },
    keyword:
      /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
  });
  var n = {
    pattern: /#\{[^}]+\}/,
    inside: {
      delimiter: {
        pattern: /^#\{|\}$/,
        alias: "tag",
      },
      rest: e.languages.ruby,
    },
  };
  delete e.languages.ruby.function,
    e.languages.insertBefore("ruby", "keyword", {
      regex: [
        {
          pattern: RegExp(
            "%r(?:" +
              [
                "([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}",
                "\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}",
                "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}",
                "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}",
                "<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}",
              ].join("|") +
              ")"
          ),
          greedy: !0,
          inside: {
            interpolation: n,
          },
        },
        {
          pattern:
            /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
          lookbehind: !0,
          greedy: !0,
        },
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: {
        pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
        lookbehind: !0,
      },
      "method-definition": {
        pattern: /(\bdef\s+)[\w.]+/,
        lookbehind: !0,
        inside: {
          function: /\w+$/,
          rest: e.languages.ruby,
        },
      },
    }),
    e.languages.insertBefore("ruby", "number", {
      builtin:
        /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
      constant: /\b[A-Z]\w*(?:[?!]|\b)/,
    }),
    (e.languages.ruby.string = [
      {
        pattern: RegExp(
          "%[qQiIwWxs]?(?:" +
            [
              "([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1",
              "\\((?:[^()\\\\]|\\\\[^])*\\)",
              "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}",
              "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]",
              "<(?:[^<>\\\\]|\\\\[^])*>",
            ].join("|") +
            ")"
        ),
        greedy: !0,
        inside: {
          interpolation: n,
        },
      },
      {
        pattern:
          /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
        greedy: !0,
        inside: {
          interpolation: n,
        },
      },
    ]),
    (e.languages.rb = e.languages.ruby);
})(Prism);
!(function (e) {
  for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++)
    a = a.replace(/<self>/g, function () {
      return a;
    });
  (a = a.replace(/<self>/g, function () {
    return "[^\\s\\S]";
  })),
    (e.languages.rust = {
      comment: [
        {
          pattern: RegExp("(^|[^\\\\])" + a),
          lookbehind: !0,
          greedy: !0,
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0,
        },
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0,
      },
      char: {
        pattern:
          /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0,
        alias: "string",
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: {
          string: null,
        },
      },
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": {
            pattern: /^\||\|$/,
            alias: "punctuation",
          },
          rest: null,
        },
      },
      "lifetime-annotation": {
        pattern: /'\w+/,
        alias: "symbol",
      },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation",
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function",
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name",
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace",
        },
        {
          pattern:
            /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: {
            punctuation: /::/,
          },
        },
      ],
      keyword: [
        /\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/,
      ],
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\w+!/,
        alias: "property",
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/,
        },
      },
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
    }),
    (e.languages.rust["closure-params"].inside.rest = e.languages.rust),
    (e.languages.rust.attribute.inside.string = e.languages.rust.string);
})(Prism);
!(function (e) {
  var t = "(?:\"(?:\"\"|[^\"])*\"(?!\")|'(?:''|[^'])*'(?!'))",
    a = /\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    n = {
      pattern: RegExp(t + "[bx]"),
      alias: "number",
    },
    i = {
      pattern: /&[a-z_][a-z_0-9]*/i,
    },
    r = {
      pattern:
        /((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMGLOBL|SYMLOCAL|SYMEXIST|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,
      lookbehind: !0,
      alias: "keyword",
    },
    s = {
      pattern: /(^|\s+)(?:proc\s+\w+|quit|run|data(?!\=))\b/i,
      alias: "keyword",
      lookbehind: !0,
    },
    o = [
      /\/\*[\s\S]*?\*\//,
      {
        pattern: /(^\s*|;\s*)\*[^;]*;/m,
        lookbehind: !0,
      },
    ],
    l = {
      pattern: RegExp(t),
      greedy: !0,
    },
    c = /[$%@.(){}\[\];,\\]/,
    d = {
      pattern: /%?\w+(?=\()/,
      alias: "keyword",
    },
    p = {
      function: d,
      "arg-value": {
        pattern: /(\s*=\s*)[A-Z\.]+/i,
        lookbehind: !0,
      },
      operator: /=/,
      "macro-variable": i,
      arg: {
        pattern: /[A-Z]+/i,
        alias: "keyword",
      },
      number: a,
      "numeric-constant": n,
      punctuation: c,
      string: l,
    },
    u = {
      pattern: /\b(?:format|put)\b=?[\w'$.]+/im,
      inside: {
        keyword: /^(?:format|put)(?=\=)/i,
        equals: /=/,
        format: {
          pattern: /(?:\w|\$\d)+\.\d?/i,
          alias: "number",
        },
      },
    },
    m = {
      pattern: /\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,
      inside: {
        keyword: /^(?:format|put)/i,
        format: {
          pattern: /[\w$]+\.\d?/,
          alias: "number",
        },
      },
    },
    b = {
      pattern:
        /((?:^|[\s])=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,
      lookbehind: !0,
      alias: "keyword",
    },
    g = {
      pattern: /(^|\s)(?:submit(?:\s+(?:load|parseonly|norun))?|endsubmit)\b/i,
      lookbehind: !0,
      alias: "keyword",
    },
    k =
      "accessControl|cdm|aggregation|aStore|ruleMining|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|sccasl|clustering|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deepLearn|deepNeural|varReduce|simSystem|ds2|deduplication|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gam|gleam|graphSemiSupLearn|gVarCluster|hiddenMarkovModel|hyperGroup|image|iml|ica|kernalPca|langModel|ldaTopic|sparseML|mlTools|mixed|modelPublishing|mbc|network|optNetwork|neuralNet|nonlinear|nmf|nonParametricBayes|optimization|panel|pls|percentile|pca|phreg|qkb|qlim|quantreg|recommend|tsReconcile|deepRnn|regression|reinforcementLearn|robustPca|sampling|sparkEmbeddedProcess|search(?:Analytics)?|sentimentAnalysis|sequence|configuration|session(?:Prop)?|severity|simple|smartData|sandwich|spatialreg|stabilityMonitoring|spc|loadStreams|svDataDescription|svm|table|conditionalRandomFields|text(?:Rule(?:Develop|Score)|Mining|Parse|Topic|Util|Filters|Frequency)|tsInfo|timeData|transpose|uniTimeSeries",
    y = {
      pattern: RegExp(
        "(^|\\s)(?:action\\s+)?(?:<act>)\\.[a-z]+\\b[^;]+".replace(
          /<act>/g,
          function () {
            return k;
          }
        ),
        "i"
      ),
      lookbehind: !0,
      inside: {
        keyword: RegExp(
          "(?:<act>)\\.[a-z]+\\b".replace(/<act>/g, function () {
            return k;
          }),
          "i"
        ),
        action: {
          pattern: /(?:action)/i,
          alias: "keyword",
        },
        comment: o,
        function: d,
        "arg-value": p["arg-value"],
        operator: p.operator,
        argument: p.arg,
        number: a,
        "numeric-constant": n,
        punctuation: c,
        string: l,
      },
    },
    S = {
      pattern:
        /((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?=\=)|define|delete|describe|document|do\s+over|do|dol|drop|dul|end(?:source|comp)?|entryTitle|else|eval(?:uate)?|exec(?:ute)?|exit|fill(?:attrs)?|file(?:name)?|flist|fnc|function(?:list)?|goto|global|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|name|noobs|nowd|_?null_|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|put|print|raise|ranexp|rannor|rbreak|retain|return|select|set|session|sessref|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|yaxisopts|y2axisopts)\b/i,
      lookbehind: !0,
    };
  e.languages.sas = {
    datalines: {
      pattern: /^(\s*)(?:(?:data)?lines|cards);[\s\S]+?^[ \t]*;/im,
      lookbehind: !0,
      alias: "string",
      inside: {
        keyword: {
          pattern: /^(?:(?:data)?lines|cards)/i,
        },
        punctuation: /;/,
      },
    },
    "proc-sql": {
      pattern:
        /(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        sql: {
          pattern: RegExp(
            "^[ \t]*(?:select|alter\\s+table|(?:create|describe|drop)\\s+(?:index|table(?:\\s+constraints)?|view)|create\\s+unique\\s+index|insert\\s+into|update)(?:<str>|[^;\"'])+;".replace(
              /<str>/g,
              function () {
                return t;
              }
            ),
            "im"
          ),
          alias: "language-sql",
          inside: e.languages.sql,
        },
        "global-statements": b,
        "sql-statements": {
          pattern:
            /(^|\s)(?:disconnect\s+from|exec(?:ute)?|begin|commit|rollback|reset|validate)\b/i,
          lookbehind: !0,
          alias: "keyword",
        },
        number: a,
        "numeric-constant": n,
        punctuation: c,
        string: l,
      },
    },
    "proc-groovy": {
      pattern:
        /(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        comment: o,
        groovy: {
          pattern: RegExp(
            "(^[ \t]*submit(?:\\s+(?:load|parseonly|norun))?)(?:<str>|[^\"'])+?(?=endsubmit;)".replace(
              /<str>/g,
              function () {
                return t;
              }
            ),
            "im"
          ),
          lookbehind: !0,
          alias: "language-groovy",
          inside: e.languages.groovy,
        },
        keyword: S,
        "submit-statement": g,
        "global-statements": b,
        number: a,
        "numeric-constant": n,
        punctuation: c,
        string: l,
      },
    },
    "proc-lua": {
      pattern:
        /(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        comment: o,
        lua: {
          pattern: RegExp(
            "(^[ \t]*submit(?:\\s+(?:load|parseonly|norun))?)(?:<str>|[^\"'])+?(?=endsubmit;)".replace(
              /<str>/g,
              function () {
                return t;
              }
            ),
            "im"
          ),
          lookbehind: !0,
          alias: "language-lua",
          inside: e.languages.lua,
        },
        keyword: S,
        "submit-statement": g,
        "global-statements": b,
        number: a,
        "numeric-constant": n,
        punctuation: c,
        string: l,
      },
    },
    "proc-cas": {
      pattern:
        /(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,
      lookbehind: !0,
      inside: {
        comment: o,
        "statement-var": {
          pattern: /((?:^|\s)=?)saveresult\s[^;]+/im,
          lookbehind: !0,
          inside: {
            statement: {
              pattern: /^saveresult\s+\S+/i,
              inside: {
                keyword: /^(?:saveresult)/i,
              },
            },
            rest: p,
          },
        },
        "cas-actions": y,
        statement: {
          pattern: /((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,
          lookbehind: !0,
          inside: p,
        },
        step: s,
        keyword: S,
        function: d,
        format: u,
        altformat: m,
        "global-statements": b,
        number: a,
        "numeric-constant": n,
        punctuation: c,
        string: l,
      },
    },
    "proc-args": {
      pattern: RegExp(
        "(^proc\\s+\\w+\\s+)(?!\\s)(?:[^;\"']|<str>)+;".replace(
          /<str>/g,
          function () {
            return t;
          }
        ),
        "im"
      ),
      lookbehind: !0,
      inside: p,
    },
    "macro-keyword": r,
    "macro-variable": i,
    "macro-string-functions": {
      pattern:
        /((?:^|\s|=))%(?:NRBQUOTE|NRQUOTE|NRSTR|BQUOTE|QUOTE|STR)\(.*?(?:[^%]\))/i,
      lookbehind: !0,
      inside: {
        function: {
          pattern: /%(?:NRBQUOTE|NRQUOTE|NRSTR|BQUOTE|QUOTE|STR)/i,
          alias: "keyword",
        },
        "macro-keyword": r,
        "macro-variable": i,
        "escaped-char": {
          pattern: /%['"()<>=¬^~;,#]/i,
        },
        punctuation: c,
      },
    },
    "macro-declaration": {
      pattern: /^%macro[^;]+(?=;)/im,
      inside: {
        keyword: /%macro/i,
      },
    },
    "macro-end": {
      pattern: /^%mend[^;]+(?=;)/im,
      inside: {
        keyword: /%mend/i,
      },
    },
    macro: {
      pattern: /%_\w+(?=\()/,
      alias: "keyword",
    },
    input: {
      pattern: /\binput\s[-\w\s/*.$&]+;/i,
      inside: {
        input: {
          alias: "keyword",
          pattern: /^input/i,
        },
        comment: o,
        number: a,
        "numeric-constant": n,
      },
    },
    "options-args": {
      pattern: /(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,
      lookbehind: !0,
      inside: p,
    },
    "cas-actions": y,
    comment: o,
    function: d,
    format: u,
    altformat: m,
    "numeric-constant": n,
    datetime: {
      pattern: RegExp(t + "(?:dt?|t)"),
      alias: "number",
    },
    string: l,
    step: s,
    keyword: S,
    "operator-keyword": {
      pattern: /\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
      alias: "operator",
    },
    number: a,
    operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?/i,
    punctuation: c,
  };
})(Prism);
!(function (e) {
  (e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/m,
        },
      },
    }),
    delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
    a = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
      {
        pattern: /(\s+)-(?=\s)/,
        lookbehind: !0,
      },
    ];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        punctuation: /:/,
        variable: t,
        operator: a,
      },
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          {
            pattern: /(:)[^:\s]+/,
            lookbehind: !0,
          },
        ],
        punctuation: /:/,
        variable: t,
        operator: a,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern:
          /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
        lookbehind: !0,
      },
    });
})(Prism);
(Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0,
  },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/,
    },
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern:
      /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important",
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
})),
  Prism.languages.insertBefore("scss", "atrule", {
    keyword: [
      /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
      {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: !0,
      },
    ],
  }),
  Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/,
  }),
  Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|with|show|hide)\b/i,
      alias: "keyword",
    },
    placeholder: {
      pattern: /%[-\w]+/,
      alias: "selector",
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: "keyword",
    },
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword",
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0,
    },
  }),
  (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0,
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0,
    },
    /@[\w.$]+/,
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0,
  },
  function:
    /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword:
    /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator:
    /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/,
};
!(function (n) {
  function a(a, e) {
    n.languages[a] &&
      n.languages.insertBefore(a, "comment", {
        "doc-comment": e,
      });
  }
  var e = n.languages.markup.tag,
    t = {
      pattern: /\/\/\/.*/,
      greedy: !0,
      alias: "comment",
      inside: {
        tag: e,
      },
    },
    g = {
      pattern: /'''.*/,
      greedy: !0,
      alias: "comment",
      inside: {
        tag: e,
      },
    };
  a("csharp", t), a("fsharp", t), a("vbnet", g);
})(Prism);
!(function (e) {
  var n = /[*&][^\s[\]{},]+/,
    r =
      /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    t =
      "(?:" +
      r.source +
      "(?:[ \t]+" +
      n.source +
      ")?|" +
      n.source +
      "(?:[ \t]+" +
      r.source +
      ")?)",
    a =
      "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(
        /<PLAIN>/g,
        function () {
          return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
        }
      ),
    d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";

  function o(e, n) {
    n = (n || "").replace(/m/g, "") + "m";
    var r =
      "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\\s*)?#))"
        .replace(/<<prop>>/g, function () {
          return t;
        })
        .replace(/<<value>>/g, function () {
          return e;
        });
    return RegExp(r, n);
  }
  (e.languages.yaml = {
    scalar: {
      pattern: RegExp(
        "([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(
          /<<prop>>/g,
          function () {
            return t;
          }
        )
      ),
      lookbehind: !0,
      alias: "string",
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        "((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)"
          .replace(/<<prop>>/g, function () {
            return t;
          })
          .replace(/<<key>>/g, function () {
            return "(?:" + a + "|" + d + ")";
          })
      ),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule",
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important",
    },
    datetime: {
      pattern: o(
        "\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"
      ),
      lookbehind: !0,
      alias: "number",
    },
    boolean: {
      pattern: o("true|false", "i"),
      lookbehind: !0,
      alias: "important",
    },
    null: {
      pattern: o("null|~", "i"),
      lookbehind: !0,
      alias: "important",
    },
    string: {
      pattern: o(d),
      lookbehind: !0,
      greedy: !0,
    },
    number: {
      pattern: o(
        "[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)",
        "i"
      ),
      lookbehind: !0,
    },
    tag: r,
    important: n,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
  }),
    (e.languages.yml = e.languages.yaml);
})(Prism);
!(function () {
  if (
    "undefined" != typeof self &&
    self.Prism &&
    self.document &&
    document.querySelector
  ) {
    var t,
      o = "line-numbers",
      s = "linkable-line-numbers",
      a = function () {
        if (void 0 === t) {
          var e = document.createElement("div");
          (e.style.fontSize = "13px"),
            (e.style.lineHeight = "1.5"),
            (e.style.padding = "0"),
            (e.style.border = "0"),
            (e.innerHTML = "&nbsp;<br />&nbsp;"),
            document.body.appendChild(e),
            (t = 38 === e.offsetHeight),
            document.body.removeChild(e);
        }
        return t;
      },
      l = !0,
      u = 0;
    Prism.hooks.add("before-sanity-check", function (e) {
      var t = e.element.parentElement;
      if (c(t)) {
        var n = 0;
        v(".line-highlight", t).forEach(function (e) {
          (n += e.textContent.length), e.parentNode.removeChild(e);
        }),
          n &&
            /^( \n)+$/.test(e.code.slice(-n)) &&
            (e.code = e.code.slice(0, -n));
      }
    }),
      Prism.hooks.add("complete", function e(t) {
        var n = t.element.parentElement;
        if (c(n)) {
          clearTimeout(u);
          var i = Prism.plugins.lineNumbers,
            r = t.plugins && t.plugins.lineNumbers;
          if (b(n, o) && i && !r) Prism.hooks.add("line-numbers", e);
          else d(n)(), (u = setTimeout(f, 1));
        }
      }),
      window.addEventListener("hashchange", f),
      window.addEventListener("resize", function () {
        v("pre")
          .filter(c)
          .map(function (e) {
            return d(e);
          })
          .forEach(y);
      });
  }

  function v(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }

  function b(e, t) {
    return e.classList.contains(t);
  }

  function y(e) {
    e();
  }

  function c(e) {
    return (
      !(!e || !/pre/i.test(e.nodeName)) &&
      (!!e.hasAttribute("data-line") || !(!e.id || !Prism.util.isActive(e, s)))
    );
  }

  function d(u, e, c) {
    var t = (e = "string" == typeof e ? e : u.getAttribute("data-line") || "")
        .replace(/\s+/g, "")
        .split(",")
        .filter(Boolean),
      d = +u.getAttribute("data-line-offset") || 0,
      f = (a() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
      p = Prism.util.isActive(u, o),
      n = u.querySelector("code"),
      h = p ? u : n || u,
      m = [],
      g =
        n && h != n
          ? (function (e, t) {
              var n = getComputedStyle(e),
                i = getComputedStyle(t);

              function r(e) {
                return +e.substr(0, e.length - 2);
              }
              return (
                t.offsetTop +
                r(i.borderTopWidth) +
                r(i.paddingTop) -
                r(n.paddingTop)
              );
            })(u, n)
          : 0;
    t.forEach(function (e) {
      var t = e.split("-"),
        n = +t[0],
        i = +t[1] || n,
        r =
          u.querySelector('.line-highlight[data-range="' + e + '"]') ||
          document.createElement("div");
      if (
        (m.push(function () {
          r.setAttribute("aria-hidden", "true"),
            r.setAttribute("data-range", e),
            (r.className = (c || "") + " line-highlight");
        }),
        p && Prism.plugins.lineNumbers)
      ) {
        var o = Prism.plugins.lineNumbers.getLine(u, n),
          s = Prism.plugins.lineNumbers.getLine(u, i);
        if (o) {
          var a = o.offsetTop + g + "px";
          m.push(function () {
            r.style.top = a;
          });
        }
        if (s) {
          var l = s.offsetTop - o.offsetTop + s.offsetHeight + "px";
          m.push(function () {
            r.style.height = l;
          });
        }
      } else
        m.push(function () {
          r.setAttribute("data-start", String(n)),
            n < i && r.setAttribute("data-end", String(i)),
            (r.style.top = (n - d - 1) * f + g + "px"),
            (r.textContent = new Array(i - n + 2).join(" \n"));
        });
      m.push(function () {
        h.appendChild(r);
      });
    });
    var i = u.id;
    if (p && Prism.util.isActive(u, s) && i) {
      b(u, s) ||
        m.push(function () {
          u.classList.add(s);
        });
      var r = parseInt(u.getAttribute("data-start") || "1");
      v(".line-numbers-rows > span", u).forEach(function (e, t) {
        var n = t + r;
        e.onclick = function () {
          var e = i + "." + n;
          (l = !1),
            (location.hash = e),
            setTimeout(function () {
              l = !0;
            }, 1);
        };
      });
    }
    return function () {
      m.forEach(y);
    };
  }

  function f() {
    var e = location.hash.slice(1);
    v(".temporary.line-highlight").forEach(function (e) {
      e.parentNode.removeChild(e);
    });
    var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
    if (t && !document.getElementById(e)) {
      var n = e.slice(0, e.lastIndexOf(".")),
        i = document.getElementById(n);
      if (i)
        i.hasAttribute("data-line") || i.setAttribute("data-line", ""),
          d(i, t, "temporary ")(),
          l &&
            document
              .querySelector(".temporary.line-highlight")
              .scrollIntoView();
    }
  }
})();
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var o = "line-numbers",
      a = /\n(?!$)/g,
      e = (Prism.plugins.lineNumbers = {
        getLine: function (e, n) {
          if ("PRE" === e.tagName && e.classList.contains(o)) {
            var t = e.querySelector(".line-numbers-rows");
            if (t) {
              var i = parseInt(e.getAttribute("data-start"), 10) || 1,
                r = i + (t.children.length - 1);
              n < i && (n = i), r < n && (n = r);
              var s = n - i;
              return t.children[s];
            }
          }
        },
        resize: function (e) {
          u([e]);
        },
        assumeViewportIndependence: !0,
      }),
      t = function (e) {
        return e
          ? window.getComputedStyle
            ? getComputedStyle(e)
            : e.currentStyle || null
          : null;
      },
      n = void 0;
    window.addEventListener("resize", function () {
      (e.assumeViewportIndependence && n === window.innerWidth) ||
        ((n = window.innerWidth),
        u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))));
    }),
      Prism.hooks.add("complete", function (e) {
        if (e.code) {
          var n = e.element,
            t = n.parentNode;
          if (
            t &&
            /pre/i.test(t.nodeName) &&
            !n.querySelector(".line-numbers-rows") &&
            Prism.util.isActive(n, o)
          ) {
            n.classList.remove(o), t.classList.add(o);
            var i,
              r = e.code.match(a),
              s = r ? r.length + 1 : 1,
              l = new Array(s + 1).join("<span></span>");
            (i = document.createElement("span")).setAttribute(
              "aria-hidden",
              "true"
            ),
              (i.className = "line-numbers-rows"),
              (i.innerHTML = l),
              t.hasAttribute("data-start") &&
                (t.style.counterReset =
                  "linenumber " +
                  (parseInt(t.getAttribute("data-start"), 10) - 1)),
              e.element.appendChild(i),
              u([t]),
              Prism.hooks.run("line-numbers", e);
          }
        }
      }),
      Prism.hooks.add("line-numbers", function (e) {
        (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
      });
  }

  function u(e) {
    if (
      0 !=
      (e = e.filter(function (e) {
        var n = t(e)["white-space"];
        return "pre-wrap" === n || "pre-line" === n;
      })).length
    ) {
      var n = e
        .map(function (e) {
          var n = e.querySelector("code"),
            t = e.querySelector(".line-numbers-rows");
          if (n && t) {
            var i = e.querySelector(".line-numbers-sizer"),
              r = n.textContent.split(a);
            i ||
              (((i = document.createElement("span")).className =
                "line-numbers-sizer"),
              n.appendChild(i)),
              (i.innerHTML = "0"),
              (i.style.display = "block");
            var s = i.getBoundingClientRect().height;
            return (
              (i.innerHTML = ""),
              {
                element: e,
                lines: r,
                lineHeights: [],
                oneLinerHeight: s,
                sizer: i,
              }
            );
          }
        })
        .filter(Boolean);
      n.forEach(function (e) {
        var i = e.sizer,
          n = e.lines,
          r = e.lineHeights,
          s = e.oneLinerHeight;
        (r[n.length - 1] = void 0),
          n.forEach(function (e, n) {
            if (e && 1 < e.length) {
              var t = i.appendChild(document.createElement("span"));
              (t.style.display = "block"), (t.textContent = e);
            } else r[n] = s;
          });
      }),
        n.forEach(function (e) {
          for (
            var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
            r < t.length;
            r++
          )
            void 0 === t[r] &&
              (t[r] = n.children[i++].getBoundingClientRect().height);
        }),
        n.forEach(function (e) {
          var n = e.sizer,
            t = e.element.querySelector(".line-numbers-rows");
          (n.style.display = "none"),
            (n.innerHTML = ""),
            e.lineHeights.forEach(function (e, n) {
              t.children[n].style.height = e + "px";
            });
        });
    }
  }
})();
!(function () {
  if (
    ("undefined" == typeof self || self.Prism) &&
    ("undefined" == typeof global || global.Prism)
  ) {
    var t =
        /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,
      r = /\b\S+@[\w.]+[a-z]{2}/,
      a = /\[([^\]]+)]\(([^)]+)\)/,
      l = ["comment", "url", "attr-value", "string"];
    (Prism.plugins.autolinker = {
      processGrammar: function (i) {
        i &&
          !i["url-link"] &&
          (Prism.languages.DFS(i, function (i, n, e) {
            -1 < l.indexOf(e) &&
              !Array.isArray(n) &&
              (n.pattern ||
                (n = this[i] =
                  {
                    pattern: n,
                  }),
              (n.inside = n.inside || {}),
              "comment" == e && (n.inside["md-link"] = a),
              "attr-value" == e
                ? Prism.languages.insertBefore(
                    "inside",
                    "punctuation",
                    {
                      "url-link": t,
                    },
                    n
                  )
                : (n.inside["url-link"] = t),
              (n.inside["email-link"] = r));
          }),
          (i["url-link"] = t),
          (i["email-link"] = r));
      },
    }),
      Prism.hooks.add("before-highlight", function (i) {
        Prism.plugins.autolinker.processGrammar(i.grammar);
      }),
      Prism.hooks.add("wrap", function (i) {
        if (/-link$/.test(i.type)) {
          i.tag = "a";
          var n = i.content;
          if ("email-link" == i.type && 0 != n.indexOf("mailto:"))
            n = "mailto:" + n;
          else if ("md-link" == i.type) {
            var e = i.content.match(a);
            (n = e[2]), (i.content = e[1]);
          }
          i.attributes.href = n;
          try {
            i.content = decodeURIComponent(i.content);
          } catch (i) {}
        }
      });
  }
})();
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector);
    var r = window.Prism,
      h = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex",
      },
      g = "data-src-status",
      c = "loading",
      u = "loaded",
      p =
        "pre[data-src]:not([" +
        g +
        '="' +
        u +
        '"]):not([' +
        g +
        '="' +
        c +
        '"])',
      i = /\blang(?:uage)?-([\w-]+)\b/i;
    r.hooks.add("before-highlightall", function (e) {
      e.selector += ", " + p;
    }),
      r.hooks.add("before-sanity-check", function (e) {
        var t = e.element;
        if (t.matches(p)) {
          (e.code = ""), t.setAttribute(g, c);
          var n = t.appendChild(document.createElement("CODE"));
          n.textContent = "Loading…";
          var i = t.getAttribute("data-src"),
            a = e.language;
          if ("none" === a) {
            var s = (/\.(\w+)$/.exec(i) || [, "none"])[1];
            a = h[s] || s;
          }
          d(n, a), d(t, a);
          var l = r.plugins.autoloader;
          l && l.loadLanguages(a);
          var o = new XMLHttpRequest();
          o.open("GET", i, !0),
            (o.onreadystatechange = function () {
              4 == o.readyState &&
                (o.status < 400 && o.responseText
                  ? (t.setAttribute(g, u),
                    (n.textContent = o.responseText),
                    r.highlightElement(n))
                  : (t.setAttribute(g, "failed"),
                    400 <= o.status
                      ? (n.textContent = (function (e, t) {
                          return "✖ Error " + e + " while fetching file: " + t;
                        })(o.status, o.statusText))
                      : (n.textContent =
                          "✖ Error: File does not exist or is empty")));
            }),
            o.send(null);
        }
      });
    var e = !(r.plugins.fileHighlight = {
      highlight: function (e) {
        for (
          var t, n = (e || document).querySelectorAll(p), i = 0;
          (t = n[i++]);

        )
          r.highlightElement(t);
      },
    });
    r.fileHighlight = function () {
      e ||
        (console.warn(
          "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
        ),
        (e = !0)),
        r.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }

  function d(e, t) {
    var n = e.className;
    (n = n.replace(i, " ") + " language-" + t),
      (e.className = n.replace(/\s+/g, " ").trim());
  }
})();
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var i = [],
      l = {},
      c = function () {};
    Prism.plugins.toolbar = {};
    var e = (Prism.plugins.toolbar.registerButton = function (e, n) {
        var t;
        (t =
          "function" == typeof n
            ? n
            : function (e) {
                var t;
                return (
                  "function" == typeof n.onClick
                    ? (((t = document.createElement("button")).type = "button"),
                      t.addEventListener("click", function () {
                        n.onClick.call(this, e);
                      }))
                    : "string" == typeof n.url
                    ? ((t = document.createElement("a")).href = n.url)
                    : (t = document.createElement("span")),
                  n.className && t.classList.add(n.className),
                  (t.textContent = n.text),
                  t
                );
              }),
          e in l
            ? console.warn(
                'There is a button with the key "' + e + '" registered already.'
              )
            : i.push((l[e] = t));
      }),
      t = (Prism.plugins.toolbar.hook = function (a) {
        var e = a.element.parentNode;
        if (
          e &&
          /pre/i.test(e.nodeName) &&
          !e.parentNode.classList.contains("code-toolbar")
        ) {
          var t = document.createElement("div");
          t.classList.add("code-toolbar"),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
          var r = document.createElement("div");
          r.classList.add("toolbar");
          var n = i,
            o = (function (e) {
              for (; e; ) {
                var t = e.getAttribute("data-toolbar-order");
                if (null != t)
                  return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                e = e.parentElement;
              }
            })(a.element);
          o &&
            (n = o.map(function (e) {
              return l[e] || c;
            })),
            n.forEach(function (e) {
              var t = e(a);
              if (t) {
                var n = document.createElement("div");
                n.classList.add("toolbar-item"),
                  n.appendChild(t),
                  r.appendChild(n);
              }
            }),
            t.appendChild(r);
        }
      });
    e("label", function (e) {
      var t = e.element.parentNode;
      if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
        var n,
          a,
          r = t.getAttribute("data-label");
        try {
          a = document.querySelector("template#" + r);
        } catch (e) {}
        return (
          a
            ? (n = a.content)
            : (t.hasAttribute("data-url")
                ? ((n = document.createElement("a")).href =
                    t.getAttribute("data-url"))
                : (n = document.createElement("span")),
              (n.textContent = r)),
          n
        );
      }
    }),
      Prism.hooks.add("complete", t);
  }
})();
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document)
    if (Prism.plugins.toolbar) {
      var r = {
        none: "Plain text",
        html: "HTML",
        xml: "XML",
        svg: "SVG",
        mathml: "MathML",
        ssml: "SSML",
        rss: "RSS",
        css: "CSS",
        clike: "C-like",
        js: "JavaScript",
        abap: "ABAP",
        abnf: "ABNF",
        al: "AL",
        antlr4: "ANTLR4",
        g4: "ANTLR4",
        apacheconf: "Apache Configuration",
        apl: "APL",
        aql: "AQL",
        arff: "ARFF",
        asciidoc: "AsciiDoc",
        adoc: "AsciiDoc",
        aspnet: "ASP.NET (C#)",
        asm6502: "6502 Assembly",
        autohotkey: "AutoHotkey",
        autoit: "AutoIt",
        basic: "BASIC",
        bbcode: "BBcode",
        bnf: "BNF",
        rbnf: "RBNF",
        bsl: "BSL (1C:Enterprise)",
        oscript: "OneScript",
        csharp: "C#",
        cs: "C#",
        dotnet: "C#",
        cpp: "C++",
        cil: "CIL",
        cmake: "CMake",
        coffee: "CoffeeScript",
        conc: "Concurnas",
        csp: "Content-Security-Policy",
        "css-extras": "CSS Extras",
        dataweave: "DataWeave",
        dax: "DAX",
        django: "Django/Jinja2",
        jinja2: "Django/Jinja2",
        "dns-zone-file": "DNS zone file",
        "dns-zone": "DNS zone file",
        dockerfile: "Docker",
        dot: "DOT (Graphviz)",
        gv: "DOT (Graphviz)",
        ebnf: "EBNF",
        editorconfig: "EditorConfig",
        ejs: "EJS",
        etlua: "Embedded Lua templating",
        erb: "ERB",
        "excel-formula": "Excel Formula",
        xlsx: "Excel Formula",
        xls: "Excel Formula",
        fsharp: "F#",
        "firestore-security-rules": "Firestore security rules",
        ftl: "FreeMarker Template Language",
        gml: "GameMaker Language",
        gamemakerlanguage: "GameMaker Language",
        gcode: "G-code",
        gdscript: "GDScript",
        gedcom: "GEDCOM",
        glsl: "GLSL",
        graphql: "GraphQL",
        hs: "Haskell",
        hcl: "HCL",
        hlsl: "HLSL",
        http: "HTTP",
        hpkp: "HTTP Public-Key-Pins",
        hsts: "HTTP Strict-Transport-Security",
        ichigojam: "IchigoJam",
        ignore: ".ignore",
        gitignore: ".gitignore",
        hgignore: ".hgignore",
        npmignore: ".npmignore",
        inform7: "Inform 7",
        javadoc: "JavaDoc",
        javadoclike: "JavaDoc-like",
        javastacktrace: "Java stack trace",
        jq: "JQ",
        jsdoc: "JSDoc",
        "js-extras": "JS Extras",
        json: "JSON",
        webmanifest: "Web App Manifest",
        json5: "JSON5",
        jsonp: "JSONP",
        jsstacktrace: "JS stack trace",
        "js-templates": "JS Templates",
        kts: "Kotlin Script",
        kt: "Kotlin",
        kumir: "KuMir (КуМир)",
        kum: "KuMir (КуМир)",
        latex: "LaTeX",
        tex: "TeX",
        context: "ConTeXt",
        lilypond: "LilyPond",
        ly: "LilyPond",
        emacs: "Lisp",
        elisp: "Lisp",
        "emacs-lisp": "Lisp",
        llvm: "LLVM IR",
        lolcode: "LOLCODE",
        md: "Markdown",
        "markup-templating": "Markup templating",
        matlab: "MATLAB",
        mel: "MEL",
        mongodb: "MongoDB",
        moon: "MoonScript",
        n1ql: "N1QL",
        n4js: "N4JS",
        n4jsd: "N4JS",
        "nand2tetris-hdl": "Nand To Tetris HDL",
        naniscript: "Naninovel Script",
        nani: "Naninovel Script",
        nasm: "NASM",
        neon: "NEON",
        nginx: "nginx",
        nsis: "NSIS",
        objectivec: "Objective-C",
        objc: "Objective-C",
        ocaml: "OCaml",
        opencl: "OpenCL",
        parigp: "PARI/GP",
        objectpascal: "Object Pascal",
        psl: "PATROL Scripting Language",
        pcaxis: "PC-Axis",
        px: "PC-Axis",
        peoplecode: "PeopleCode",
        pcode: "PeopleCode",
        php: "PHP",
        phpdoc: "PHPDoc",
        "php-extras": "PHP Extras",
        plsql: "PL/SQL",
        powerquery: "PowerQuery",
        pq: "PowerQuery",
        mscript: "PowerQuery",
        powershell: "PowerShell",
        promql: "PromQL",
        properties: ".properties",
        protobuf: "Protocol Buffers",
        purebasic: "PureBasic",
        pbfasm: "PureBasic",
        purs: "PureScript",
        py: "Python",
        q: "Q (kdb+ database)",
        qml: "QML",
        rkt: "Racket",
        jsx: "React JSX",
        tsx: "React TSX",
        renpy: "Ren'py",
        rpy: "Ren'py",
        rest: "reST (reStructuredText)",
        robotframework: "Robot Framework",
        robot: "Robot Framework",
        rb: "Ruby",
        sas: "SAS",
        sass: "Sass (Sass)",
        scss: "Sass (Scss)",
        "shell-session": "Shell session",
        "sh-session": "Shell session",
        shellsession: "Shell session",
        sml: "SML",
        smlnj: "SML/NJ",
        solidity: "Solidity (Ethereum)",
        sol: "Solidity (Ethereum)",
        "solution-file": "Solution file",
        sln: "Solution file",
        soy: "Soy (Closure Template)",
        sparql: "SPARQL",
        rq: "SPARQL",
        "splunk-spl": "Splunk SPL",
        sqf: "SQF: Status Quo Function (Arma 3)",
        sql: "SQL",
        iecst: "Structured Text (IEC 61131-3)",
        "t4-templating": "T4 templating",
        "t4-cs": "T4 Text Templates (C#)",
        t4: "T4 Text Templates (C#)",
        "t4-vb": "T4 Text Templates (VB)",
        tap: "TAP",
        tt2: "Template Toolkit 2",
        toml: "TOML",
        trig: "TriG",
        ts: "TypeScript",
        tsconfig: "TSConfig",
        uscript: "UnrealScript",
        uc: "UnrealScript",
        uri: "URI",
        url: "URL",
        vbnet: "VB.Net",
        vhdl: "VHDL",
        vim: "vim",
        "visual-basic": "Visual Basic",
        vba: "VBA",
        vb: "Visual Basic",
        wasm: "WebAssembly",
        wiki: "Wiki markup",
        xeoracube: "XeoraCube",
        "xml-doc": "XML doc (.net)",
        xojo: "Xojo (REALbasic)",
        xquery: "XQuery",
        yaml: "YAML",
        yml: "YAML",
        yang: "YANG",
      };
      Prism.plugins.toolbar.registerButton("show-language", function (e) {
        var a = e.element.parentNode;
        if (a && /pre/i.test(a.nodeName)) {
          var t,
            s =
              a.getAttribute("data-language") ||
              r[e.language] ||
              ((t = e.language)
                ? (t.substring(0, 1).toUpperCase() + t.substring(1)).replace(
                    /s(?=cript)/,
                    "S"
                  )
                : t);
          if (s) {
            var o = document.createElement("span");
            return (o.textContent = s), o;
          }
        }
      });
    } else console.warn("Show Languages plugin loaded before Toolbar plugin.");
})();
("undefined" != typeof self && !self.Prism) ||
  ("undefined" != typeof global && !global.Prism) ||
  Prism.hooks.add("wrap", function (e) {
    "keyword" === e.type && e.classes.push("keyword-" + e.content);
  });
!(function () {
  if (
    "undefined" != typeof self &&
    "undefined" != typeof Prism &&
    "undefined" != typeof document
  ) {
    var a =
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
      c = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i,
      f = [
        function (n) {
          var r = c.exec(n);
          if (r) {
            for (
              var o = 6 <= (n = r[1]).length ? 2 : 1,
                e = n.length / o,
                s = 1 == o ? 1 / 15 : 1 / 255,
                t = [],
                i = 0;
              i < e;
              i++
            ) {
              var a = parseInt(n.substr(i * o, o), 16);
              t.push(a * s);
            }
            return (
              3 == e && t.push(1),
              "rgba(" +
                t
                  .slice(0, 3)
                  .map(function (n) {
                    return String(Math.round(255 * n));
                  })
                  .join(",") +
                "," +
                String(Number(t[3].toFixed(3))) +
                ")"
            );
          }
        },
        function (n) {
          var r = new Option().style;
          return (r.color = n), r.color ? n : void 0;
        },
      ];
    Prism.hooks.add("wrap", function (n) {
      if ("color" === n.type || 0 <= n.classes.indexOf("color")) {
        for (
          var r, o = n.content, e = o.split(a).join(""), s = 0, t = f.length;
          s < t && !r;
          s++
        )
          r = f[s](e);
        if (!r) return;
        var i =
          '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' +
          r +
          ';"></span></span>';
        n.content = i + o;
      }
    });
  }
})();
!(function () {
  if (
    "undefined" != typeof self &&
    self.Prism &&
    self.document &&
    document.createElement
  ) {
    var l = {
        javascript: "clike",
        actionscript: "javascript",
        apex: ["clike", "sql"],
        arduino: "cpp",
        aspnet: ["markup", "csharp"],
        birb: "clike",
        bison: "c",
        c: "clike",
        csharp: "clike",
        cpp: "c",
        chaiscript: ["clike", "cpp"],
        coffeescript: "javascript",
        crystal: "ruby",
        "css-extras": "css",
        d: "clike",
        dart: "clike",
        django: "markup-templating",
        ejs: ["javascript", "markup-templating"],
        etlua: ["lua", "markup-templating"],
        erb: ["ruby", "markup-templating"],
        fsharp: "clike",
        "firestore-security-rules": "clike",
        flow: "javascript",
        ftl: "markup-templating",
        gml: "clike",
        glsl: "c",
        go: "clike",
        groovy: "clike",
        haml: "ruby",
        handlebars: "markup-templating",
        haxe: "clike",
        hlsl: "c",
        java: "clike",
        javadoc: ["markup", "java", "javadoclike"],
        jolie: "clike",
        jsdoc: ["javascript", "javadoclike", "typescript"],
        "js-extras": "javascript",
        json5: "json",
        jsonp: "json",
        "js-templates": "javascript",
        kotlin: "clike",
        latte: ["clike", "markup-templating", "php"],
        less: "css",
        lilypond: "scheme",
        markdown: "markup",
        "markup-templating": "markup",
        mongodb: "javascript",
        n4js: "javascript",
        nginx: "clike",
        objectivec: "c",
        opencl: "c",
        parser: "markup",
        php: "markup-templating",
        phpdoc: ["php", "javadoclike"],
        "php-extras": "php",
        plsql: "sql",
        processing: "clike",
        protobuf: "clike",
        pug: ["markup", "javascript"],
        purebasic: "clike",
        purescript: "haskell",
        qml: "javascript",
        qore: "clike",
        racket: "scheme",
        jsx: ["markup", "javascript"],
        tsx: ["jsx", "typescript"],
        reason: "clike",
        ruby: "clike",
        sass: "css",
        scss: "css",
        scala: "java",
        "shell-session": "bash",
        smarty: "markup-templating",
        solidity: "clike",
        soy: "markup-templating",
        sparql: "turtle",
        sqf: "clike",
        squirrel: "clike",
        swift: "clike",
        "t4-cs": ["t4-templating", "csharp"],
        "t4-vb": ["t4-templating", "vbnet"],
        tap: "yaml",
        tt2: ["clike", "markup-templating"],
        textile: "markup",
        twig: "markup",
        typescript: "javascript",
        v: "clike",
        vala: "clike",
        vbnet: "basic",
        velocity: "markup",
        wiki: "markup",
        xeora: "markup",
        "xml-doc": "markup",
        xquery: "markup",
      },
      n = {
        html: "markup",
        xml: "markup",
        svg: "markup",
        mathml: "markup",
        ssml: "markup",
        atom: "markup",
        rss: "markup",
        js: "javascript",
        g4: "antlr4",
        adoc: "asciidoc",
        shell: "bash",
        shortcode: "bbcode",
        rbnf: "bnf",
        oscript: "bsl",
        cs: "csharp",
        dotnet: "csharp",
        coffee: "coffeescript",
        conc: "concurnas",
        jinja2: "django",
        "dns-zone": "dns-zone-file",
        dockerfile: "docker",
        gv: "dot",
        eta: "ejs",
        xlsx: "excel-formula",
        xls: "excel-formula",
        gamemakerlanguage: "gml",
        hs: "haskell",
        gitignore: "ignore",
        hgignore: "ignore",
        npmignore: "ignore",
        webmanifest: "json",
        kt: "kotlin",
        kts: "kotlin",
        kum: "kumir",
        tex: "latex",
        context: "latex",
        ly: "lilypond",
        emacs: "lisp",
        elisp: "lisp",
        "emacs-lisp": "lisp",
        md: "markdown",
        moon: "moonscript",
        n4jsd: "n4js",
        nani: "naniscript",
        objc: "objectivec",
        objectpascal: "pascal",
        px: "pcaxis",
        pcode: "peoplecode",
        pq: "powerquery",
        mscript: "powerquery",
        pbfasm: "purebasic",
        purs: "purescript",
        py: "python",
        rkt: "racket",
        rpy: "renpy",
        robot: "robotframework",
        rb: "ruby",
        "sh-session": "shell-session",
        shellsession: "shell-session",
        smlnj: "sml",
        sol: "solidity",
        sln: "solution-file",
        rq: "sparql",
        t4: "t4-cs",
        trig: "turtle",
        ts: "typescript",
        tsconfig: "typoscript",
        uscript: "unrealscript",
        uc: "unrealscript",
        url: "uri",
        vb: "visual-basic",
        vba: "visual-basic",
        xeoracube: "xeora",
        yml: "yaml",
      },
      p = {},
      e = "components/",
      a = Prism.util.currentScript();
    if (a) {
      var r =
          /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
        s = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
        t = a.getAttribute("data-autoloader-path");
      if (null != t) e = t.trim().replace(/\/?$/, "/");
      else {
        var i = a.src;
        r.test(i)
          ? (e = i.replace(r, "components/"))
          : s.test(i) && (e = i.replace(s, "$1components/"));
      }
    }
    var o = (Prism.plugins.autoloader = {
      languages_path: e,
      use_minified: !0,
      loadLanguages: m,
    });
    Prism.hooks.add("complete", function (e) {
      var a = e.element,
        r = e.language;
      if (a && r && "none" !== r) {
        var s = (function (e) {
          var a = (e.getAttribute("data-dependencies") || "").trim();
          if (!a) {
            var r = e.parentElement;
            r &&
              "pre" === r.tagName.toLowerCase() &&
              (a = (r.getAttribute("data-dependencies") || "").trim());
          }
          return a ? a.split(/\s*,\s*/g) : [];
        })(a);
        /^diff-./i.test(r)
          ? (s.push("diff"), s.push(r.substr("diff-".length)))
          : s.push(r),
          s.every(u) ||
            m(s, function () {
              Prism.highlightElement(a);
            });
      }
    });
  }

  function u(e) {
    if (0 <= e.indexOf("!")) return !1;
    if ((e = n[e] || e) in Prism.languages) return !0;
    var a = p[e];
    return a && !a.error && !1 === a.loading;
  }

  function m(e, a, r) {
    "string" == typeof e && (e = [e]);
    var s = e.length,
      t = 0,
      i = !1;

    function c() {
      i || (++t === s && a && a(e));
    }
    0 !== s
      ? e.forEach(function (e) {
          !(function (a, r, s) {
            var t = 0 <= a.indexOf("!");

            function e() {
              var e = p[a];
              e ||
                (e = p[a] =
                  {
                    callbacks: [],
                  }),
                e.callbacks.push({
                  success: r,
                  error: s,
                }),
                !t && u(a)
                  ? k(a, "success")
                  : !t && e.error
                  ? k(a, "error")
                  : (!t && e.loading) ||
                    ((e.loading = !0),
                    (e.error = !1),
                    (function (e, a, r) {
                      var s = document.createElement("script");
                      (s.src = e),
                        (s.async = !0),
                        (s.onload = function () {
                          document.body.removeChild(s), a && a();
                        }),
                        (s.onerror = function () {
                          document.body.removeChild(s), r && r();
                        }),
                        document.body.appendChild(s);
                    })(
                      (function (e) {
                        return (
                          o.languages_path +
                          "prism-" +
                          e +
                          (o.use_minified ? ".min" : "") +
                          ".js"
                        );
                      })(a),
                      function () {
                        (e.loading = !1), k(a, "success");
                      },
                      function () {
                        (e.loading = !1), (e.error = !0), k(a, "error");
                      }
                    ));
            }
            (a = a.replace("!", "")), (a = n[a] || a);
            var i = l[a];
            i && i.length ? m(i, e, s) : e();
          })(e, c, function () {
            i || ((i = !0), r && r(e));
          });
        })
      : a && setTimeout(a, 0);
  }

  function k(e, a) {
    if (p[e]) {
      for (var r = p[e].callbacks, s = 0, t = r.length; s < t; s++) {
        var i = r[s][a];
        i && setTimeout(i, 0);
      }
      r.length = 0;
    }
  }
})();
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var f = /(?:^|\s)command-line(?:\s|$)/,
      p = "command-line-prompt",
      m = "".startsWith
        ? function (e, t) {
            return e.startsWith(t);
          }
        : function (e, t) {
            return 0 === e.indexOf(t);
          };
    Prism.hooks.add("before-highlight", function (e) {
      var t = h(e);
      if (!t.complete && e.code) {
        var n = e.element.parentElement;
        if (
          n &&
          /pre/i.test(n.nodeName) &&
          (f.test(n.className) || f.test(e.element.className))
        ) {
          var a = e.element.querySelector("." + p);
          a && a.remove();
          var s = e.code.split("\n");
          t.numberOfLines = s.length;
          var o = (t.outputLines = []),
            r = n.getAttribute("data-output"),
            i = n.getAttribute("data-filter-output");
          if (null !== r)
            r.split(",").forEach(function (e) {
              var t = e.split("-"),
                n = parseInt(t[0], 10),
                a = 2 === t.length ? parseInt(t[1], 10) : n;
              if (!isNaN(n) && !isNaN(a)) {
                n < 1 && (n = 1), a > s.length && (a = s.length), a--;
                for (var r = --n; r <= a; r++) (o[r] = s[r]), (s[r] = "");
              }
            });
          else if (i)
            for (var l = 0; l < s.length; l++)
              m(s[l], i) && ((o[l] = s[l].slice(i.length)), (s[l] = ""));
          e.code = s.join("\n");
        } else t.complete = !0;
      } else t.complete = !0;
    }),
      Prism.hooks.add("before-insert", function (e) {
        var t = h(e);
        if (!t.complete) {
          for (
            var n = e.highlightedCode.split("\n"),
              a = t.outputLines || [],
              r = 0,
              s = a.length;
            r < s;
            r++
          )
            a.hasOwnProperty(r) && (n[r] = a[r]);
          e.highlightedCode = n.join("\n");
        }
      }),
      Prism.hooks.add("complete", function (e) {
        var t = h(e);
        if (!t.complete) {
          var n,
            a = e.element.parentElement;
          f.test(e.element.className) &&
            (e.element.className = e.element.className.replace(f, " ")),
            f.test(a.className) || (a.className += " command-line");
          var r = t.numberOfLines || 0,
            s = u("data-prompt", "");
          if ("" !== s) n = d('<span data-prompt="' + s + '"></span>', r);
          else
            n = d(
              '<span data-user="' +
                u("data-user", "user") +
                '" data-host="' +
                u("data-host", "localhost") +
                '"></span>',
              r
            );
          var o = document.createElement("span");
          (o.className = p), (o.innerHTML = n);
          for (var i = t.outputLines || [], l = 0, m = i.length; l < m; l++)
            if (i.hasOwnProperty(l)) {
              var c = o.children[l];
              c.removeAttribute("data-user"),
                c.removeAttribute("data-host"),
                c.removeAttribute("data-prompt");
            }
          e.element.insertBefore(o, e.element.firstChild), (t.complete = !0);
        }

        function u(e, t) {
          return (a.getAttribute(e) || t).replace(/"/g, "&quot");
        }
      });
  }

  function d(e, t) {
    for (var n = "", a = 0; a < t; a++) n += e;
    return n;
  }

  function h(e) {
    var t = (e.vars = e.vars || {});
    return (t["command-line"] = t["command-line"] || {});
  }
})();
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document)
    if (Prism.plugins.toolbar) {
      var c = window.ClipboardJS || void 0;
      c || "function" != typeof require || (c = require("clipboard"));
      var u = [];
      if (!c) {
        var t = document.createElement("script"),
          o = document.querySelector("head");
        (t.onload = function () {
          if ((c = window.ClipboardJS)) for (; u.length; ) u.pop()();
        }),
          (t.src =
            "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"),
          o.appendChild(t);
      }
      Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (t) {
        var o = t.element,
          e = (function (t) {
            var o = {
              copy: "Copy",
              "copy-error": "Press Ctrl+C to copy",
              "copy-success": "Copied!",
              "copy-timeout": 5e3,
            };
            for (var e in o) {
              for (
                var n = "data-prismjs-" + e, r = t;
                r && !r.hasAttribute(n);

              )
                r = r.parentElement;
              r && (o[e] = r.getAttribute(n));
            }
            return o;
          })(o),
          n = document.createElement("button");
        return (
          (n.textContent = e.copy),
          n.setAttribute("type", "button"),
          c ? r() : u.push(r),
          n
        );

        function r() {
          var t = new c(n, {
            text: function () {
              return o.textContent;
            },
          });
          t.on("success", function () {
            (n.textContent = e["copy-success"]), i();
          }),
            t.on("error", function () {
              (n.textContent = e["copy-error"]), i();
            });
        }

        function i() {
          setTimeout(function () {
            n.textContent = e.copy;
          }, e["copy-timeout"]);
        }
      });
    } else
      console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
})();
"undefined" != typeof self &&
  self.Prism &&
  self.document &&
  document.querySelector &&
  Prism.plugins.toolbar.registerButton("download-file", function (t) {
    var e = t.element.parentNode;
    if (
      e &&
      /pre/i.test(e.nodeName) &&
      e.hasAttribute("data-src") &&
      e.hasAttribute("data-download-link")
    ) {
      var a = e.getAttribute("data-src"),
        n = document.createElement("a");
      return (
        (n.textContent =
          e.getAttribute("data-download-link-label") || "Download"),
        n.setAttribute("download", ""),
        (n.href = a),
        n
      );
    }
  });
!(function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var d = {
        "(": ")",
        "[": "]",
        "{": "}",
      },
      u = {
        "(": "brace-round",
        "[": "brace-square",
        "{": "brace-curly",
      },
      f = {
        "${": "{",
      },
      h = 0,
      n = /^(pair-\d+-)(open|close)$/;
    Prism.hooks.add("complete", function (e) {
      var t = e.element,
        n = t.parentElement;
      if (n && "PRE" == n.tagName) {
        var c = [];
        if (
          (Prism.util.isActive(t, "match-braces") && c.push("(", "[", "{"),
          0 != c.length)
        ) {
          n.__listenerAdded ||
            (n.addEventListener("mousedown", function () {
              var e = n.querySelector("code");
              Array.prototype.slice
                .call(e.querySelectorAll(".brace-selected"))
                .forEach(function (e) {
                  e.classList.remove("brace-selected");
                });
            }),
            Object.defineProperty(n, "__listenerAdded", {
              value: !0,
            }));
          var o = Array.prototype.slice.call(
              t.querySelectorAll("span.token.punctuation")
            ),
            l = [];
          c.forEach(function (e) {
            for (
              var t = d[e], n = u[e], c = [], r = [], s = 0;
              s < o.length;
              s++
            ) {
              var a = o[s];
              if (0 == a.childElementCount) {
                var i = a.textContent;
                (i = f[i] || i) === e
                  ? (l.push({
                      index: s,
                      open: !0,
                      element: a,
                    }),
                    a.classList.add(n),
                    a.classList.add("brace-open"),
                    r.push(s))
                  : i === t &&
                    (l.push({
                      index: s,
                      open: !1,
                      element: a,
                    }),
                    a.classList.add(n),
                    a.classList.add("brace-close"),
                    r.length && c.push([s, r.pop()]));
              }
            }
            c.forEach(function (e) {
              var t = "pair-" + h++ + "-",
                n = o[e[0]],
                c = o[e[1]];
              (n.id = t + "open"),
                (c.id = t + "close"),
                [n, c].forEach(function (e) {
                  e.addEventListener("mouseenter", p),
                    e.addEventListener("mouseleave", v),
                    e.addEventListener("click", m);
                });
            });
          });
          var r = 0;
          l.sort(function (e, t) {
            return e.index - t.index;
          }),
            l.forEach(function (e) {
              e.open
                ? (e.element.classList.add("brace-level-" + ((r % 12) + 1)),
                  r++)
                : ((r = Math.max(0, r - 1)),
                  e.element.classList.add("brace-level-" + ((r % 12) + 1)));
            });
        }
      }
    });
  }

  function e(e) {
    var t = n.exec(e.id);
    return document.querySelector(
      "#" + t[1] + ("open" == t[2] ? "close" : "open")
    );
  }

  function p() {
    Prism.util.isActive(this, "brace-hover", !0) &&
      [this, e(this)].forEach(function (e) {
        e.classList.add("brace-hover");
      });
  }

  function v() {
    [this, e(this)].forEach(function (e) {
      e.classList.remove("brace-hover");
    });
  }

  function m() {
    Prism.util.isActive(this, "brace-select", !0) &&
      [this, e(this)].forEach(function (e) {
        e.classList.add("brace-selected");
      });
  }
})();
(Prism.languages.treeview = {
  "treeview-part": {
    pattern: /^.+/m,
    inside: {
      "entry-line": [
        {
          pattern: /\|-- |├── /,
          alias: "line-h",
        },
        {
          pattern: /\|   |│   /,
          alias: "line-v",
        },
        {
          pattern: /`-- |└── /,
          alias: "line-v-last",
        },
        {
          pattern: / {4}/,
          alias: "line-v-gap",
        },
      ],
      "entry-name": {
        pattern: /.*\S.*/,
        inside: {
          operator: / -> /,
        },
      },
    },
  },
}),
  Prism.hooks.add("wrap", function (e) {
    if ("treeview" === e.language && "entry-name" === e.type) {
      var t = e.classes,
        n = /(^|[^\\])\/\s*$/;
      if (n.test(e.content))
        (e.content = e.content.replace(n, "$1")), t.push("dir");
      else {
        e.content = e.content.replace(/(^|[^\\])[=*|]\s*$/, "$1");
        for (
          var a = e.content.toLowerCase().replace(/\s+/g, "").split(".");
          1 < a.length;

        )
          a.shift(), t.push("ext-" + a.join("-"));
      }
      "." === e.content[0] && t.push("dotfile");
    }
  });
