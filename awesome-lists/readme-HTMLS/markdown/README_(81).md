<img src="https://rawgit.com/AllThingsSmitty/css-protips/master/media/logo.svg" alt="light bulb icon" width="200" />

# CSS પ્રોપ્સ [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

તમારા CSS કુશળતાને ધ્યાનમાં રાખવામાં સહાય માટે ટિપ્સનો સંગ્રહ.

> અન્ય મહાન યાદીઓ માટે તપાસો <span class="citation" data-cites="sindresorhus">\[@sindresorhus\]</span>(https://github.com/sindresorhus/)’s ની યાદી [અદ્ભુત યાદીઓ](https://github.com/sindresorhus/awesome/).

## વિષયસુચીકોષ્ટક

અરજી / અનપ્પેલી કરવા માટે \* [પ્રોપ્સ](#પ્રોપ્સ) \* [આધાર](#આધાર) \* [ફાળો માર્ગદર્શિકા](../../CONTRIBUTING.md)

## પ્રોપ્સ

1.  [એક સીએસએસ રીસેટ વાપરો](#વાપરવ-a-css-રીસેટ)
2.  [વારસો `box-sizing`](#વારસો-box-sizing)F
3.  [બધા ગુણધર્મોને ફરીથી સેટ કરવાને બદલે ‘અનસેટ’ નો ઉપયોગ કરો](#બધા-ગુણધર્મોને-ફરીથી-સેટ-કરવાને-બદલે-અનસેટ-નો-ઉપયોગ-કરો)
4.  [વાપરવ `:not()` અરજી / અનપ્પેલી કરવા માટે નેવિગેશન પર બોર્ડર્સ](#વાપરવ-not-અરજી--અનપ્પેલી-કરવા-માટે-નેવિગેશન-પર-બોર્ડર્સ)
5.  [સ્થાનિક રીતે ફોન્ટ ઇન્સ્ટોલ કરેલું છે કે નહીં તે તપાસો](#સ્થાનિક-રીતે-ફોન્ટ-ઇન્સ્ટોલ-કરેલું-છે-કે-નહીં-તે-તપાસો)
6.  [ઉમેરો `line-height` તરફ `body`](#ઉમેર-line-height-તરફ-body)
7.  [ફોર્મ તત્વો માટે ‘ધ્યાન કેન્દ્રિત કરો’ સેટ કરો](#ફોર્મ-તત્વો-માટે-ધ્યાન-કેન્દ્રિત-કરો-સેટ-કરો)
8.  [વર્ટિકલ-કેન્દ્ર કંઈપણ](#ઊભું-કેન્દ્ર-કંઈપણ)
9.  [કોમા-વિભાજિત સૂચિ](#કોમા-વિભાજિત-સૂચિ)
10. [નકારાત્મક મદદથી વસ્તુઓ પસંદ કરો `nth-child`](#નકારાત્મક-મદદથી-વસ્તુઓ-પસંદ-કરો-nth-child)
11. [ચિહ્નો માટે SVG નો ઉપયોગ કરો](#વાપરવુ-માટે-svg-નો-ઉપયોગ-કરો)
12. [આ વાપરો “Lobotomized Owl” પસંદગીકાર](#આ-વાપરો-lobotomized-owl-પસંદગીકાર)
13. [વાપરવ `max-height` શુદ્ધ માટે CSS સ્લાઇડર્સનો](#વાપરવ-max-height-શુદ્ધ-માટે-css-સ્લાઇડર્સનો)
14. [સમાન-પહોળાઈ કોષ્ટક કોષ](#સમાન-પહોળાઈ-કોષ્ટક-કોષ)
15. [છુટકારો મેળવવા માર્જિન હેક્સ સાથે Flexbox](#છુટકારો-મેળવવા-માર્જિન-હેક્સ-સાથે-flexbox)
16. [વાપરવ એટ્રીબ્યુટ પસંદગીકારો સાથે ખાલી કડીઓ](#વાપરવ-એટ્રીબ્યુટ-પસંદગીકારો-સાથે-ખાલી-કડીઓ)
17. [પ્રકાર “Default” કડીઓ](#પ્રકાર-default-કડીઓ)
18. [આંતરિક ગુણોત્તર બૉક્સીસ](#આંતરિક-ગુણોત્તર-બૉક્સીસ)
19. [પ્રકાર તૂટેલી છબીઓ](#પ્રકાર-તૂટેલી-છબીઓ)
20. [વાપરવ `rem` માટે વૈશ્વિક કદ બદલવાનું; વાપરવ `em` માટે સ્થાનિક કદ બદલવાનું](#વાપરવ-rem-માટે-વૈશ્વિક-કદ-બદલવાનું-વાપરવ-em-માટે-સ્થાનિક-કદ-બદલવાનું)
21. [છુપાવો ઑટોપ્લે વિડિઓઝ તે નથ ચૂપ](#છુપાવો-ઑટોપ્લે-વિડિઓઝ-તે-નથ-ચૂપ)
22. [વાપરવ `:root` માટે Flexible Type](#વાપરવ-root-માટે-flexible-type)
23. [સેટ `font-size` on ફોર્મ તત્વો માટે a બેટર મોબાઇલ અનુભવ](#સેટ-font-size-on-ફોર્મ-તત્વો-માટે-a-બેટર-મોબાઇલ-અનુભવ)
24. [માઉસ ઇવેન્ટ્સ નિયંત્રણ કરવા માટે પોઇન્ટર ઇવેન્ટ્સનો ઉપયોગ કરો](#માઉસ-ઇવેન્ટ્સ-નિયંત્રણ-કરવા-માટે-પોઇન્ટર-ઇવેન્ટ્સનો-ઉપયોગ-કરો)
25. [અંતર `display: none` તરીકે વપરાયેલ લાઇન બ્રેક્સ પર સેટ કરો](#અંતર-display-none-તરીકે-વપરાયેલ-લાઇન-બ્રેક્સ-પર-સેટ-કરો)

### વાપરવ a CSS રીસેટ

સીએસએસ રીસેટ્સ સ્ટાઇલ ઘટકો માટે સ્વચ્છ સ્લેટ સાથે વિવિધ બ્રાઉઝર્સમાં સ્ટાઇલ સુસંગતતાને અમલમાં મૂકવા માટે મદદ કરે છે. તમે જેમ કે CSS રીસેટ લાઇબ્રેરીનો ઉપયોગ કરી શકો છો [Normalize](http://necolas.github.io/normalize.css/), _et al._, અથવા તમે વધુ સરળ રીસેટ અભિગમનો ઉપયોગ કરી શકો છો:

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

હવે તત્વો માર્જિન અને પેડિંગની છીનવી લેવામાં આવશે, અને `box-sizing` તમે સીએસએસ બોક્સ મોડેલ સાથે લેઆઉટ મેનેજ કરી શકો છો.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/kkrkLL)

**નોટ:** જો તમે અનુસરશો તો [Inherit `box-sizing`](#inherit-box-sizing) નીચે ટીપ તમે નીચેની શામેલ ન કરવાનું પસંદ કરી શકો છો `box-sizing` મિલકત માં તમારા CSS રીસેટ .

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વારસો `box-sizing`

પરવાનગી આપો `box-sizing` માંથી વારસામાં આવશે `html`:

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

આનાથી ફેરફાર કરવાનું સરળ બને છે `box-sizing` પ્લગઇન્સ અથવા અન્ય ઘટકોમાં લીવરેજ કે અન્ય વર્તન.

#### [પ્રદર્શન](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### બધા ગુણધર્મોને ફરીથી સેટ કરવાને બદલે ‘અનસેટ’ નો ઉપયોગ કરો

તત્વના ગુણધર્મોને ફરીથી સેટ કરતી વખતે, પ્રત્યેક વ્યક્તિગત સંપત્તિને ફરીથી સેટ કરવું જરૂરી નથી:

    button {
      background: none;
      border: none;
      color: inherit;
      font: inherit;
      outline: none;
      padding: 0;
    }

તમે ‘બધા’ લઘુલિપિનો ઉપયોગ કરીને એક તત્વની તમામ ગુણધર્મોને સ્પષ્ટ કરી શકો છો. `અનસેટ` માટે મૂલ્યને સેટ કરવાથી એક ઘટકના ગુણધર્મોને તેમની પ્રારંભિક મૂલ્યોમાં બદલાય છે:

    button {
      all: unset;
    }

**નોંધ:** આઇ 11 માં `all` અને`અનસેટ` શોર્ટહેન્ડ સપોર્ટેડ નથી.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વાપરવ `:not()` અરજી / અનપ્પેલી કરવા માટે નેવિગેશન પર બોર્ડર્સ

તેના બદલે નો મૂકવા સરહદ પર…

    /* add border */
    .nav li {
      border-right: 1px solid #666;
    }

…અને પછી તે છેલ્લા તત્વ બોલ લેવા…

    /* remove border */
    .nav li:last-child {
      border-right: none;
    }

…વાપરવ `:not()` pseudo-class ફક્ત તમે ઇચ્છો તે તત્વો પર જ લાગુ કરો:

    .nav li:not(:last-child) {
      border-right: 1px solid #666;
    }

CSS પસંદગીકાર સીમાને વ્યાખ્યાયિત કરે છે કે જે રીતે મનુષ્ય તેનું વર્ણન કરશે.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### સ્થાનિક રીતે ફોન્ટ ઇન્સ્ટોલ કરેલું છે કે નહીં તે તપાસો

તમે તપાસ કરી શકો છો કે ફોન્ટ તેને દૂરસ્થ રીતે લાવવા પહેલાં સ્થાનિક રૂપે ઇન્સ્ટોલ કરેલું છે કે નહીં, તે પણ એક સારા પ્રદર્શનની મદદ છે.

    @font-face {
      font-family: "Dank Mono";
      src:
        /* Full name */
        local("Dank Mono"),
        /* Postscript name */
        local("Dank Mono"),
        /* Otherwise, download it! */
        url("//...a.server/fonts/DankMono.woff");
    }

    code {
      font-family: "Dank Mono", system-ui-monospace;
    }

આ પ્રોટીપ અને ડેમો શેર કરવા માટે એડમ આર્ગીલેને ટોપીની [મદદ](https://codepen.io/argyleink/pen/VwYJpgR).

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### ઉમેર `line-height` તરફ `body`

તમારે ઉમેરવાની જરૂર નથી `line-height` to દરેક `<p>`, `<h*>`, _et al_. અલગ. તેની જગ્યાએ, તેને ઉમેરવા `body`:

    body {
      line-height: 1.5;
    }

આ માર્ગ textual તત્વો શકવું બોલાવે થી `body` સરળતાથી.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### ફોર્મ તત્વો માટે ‘ધ્યાન કેન્દ્રિત કરો’ સેટ કરો

દૃશ્યમાન કીબોર્ડ વપરાશકર્તાઓ પૃષ્ઠમાં કીબોર્ડ ઇવેન્ટ્સ ક્યાં જાય છે તે નિર્ધારિત કરવા પર ધ્યાન કેન્દ્રિત કરે છે. ફોર્મ ઘટકો માટે ધ્યાન કેન્દ્રિત કરો અને બ્રાઉઝરનું ડિફૉલ્ટ અમલીકરણ પછી સુસંગત રહો:

    a:focus,
    button:focus,
    input:focus,
    select:focus,
    textarea:focus {
      box-shadow: none;
      outline: #000 dotted 2px;
      outline-offset: .05em;
    }

#### [Demo](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### ઊભું કેન્દ્ર કંઈપણ

ના, તે કાળા જાદુ નથી, તમે ખરેખર ઊભી તત્વોને કેન્દ્રિત કરી શકો છો:

\`\`\`css html, body { height: 100%; margin: 0; }

body { -webkit-align-items: center; -ms-flex-align: center; align-items: center; display: -webkit-flex; display: flex; } \`\` …અને CSS ગ્રીડ સાથે પણ:

    body {
      display: grid;
      height: 100vh;
      margin: 0;
      place-items: center center;
    }

કેન્દ્ર માંગો છો કંઈક બીજું? વર્ટિકલ, આડા…કંઈપણ, કોઈપણ સમયે, ગમે ત્યાં? CSS-Tricks has [a nice write-up](https://css-tricks.com/centering-css-complete-guide/) on કરવાનું બધા કે.

**નોટ:** જુઓ કેટલાક માટે [buggy behavior](https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items) સાથે flexbox માં IE11.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### કોમા-વિભાજિત સૂચિ

સૂચિ આઇટમ્સ વાસ્તવિક, અલ્પવિરામથી વિભાજીત સૂચિની જેમ દેખાય છે તે બનાવો:

    ul > li:not(:last-child)::after {
      content: ",";
    }

વાપરવ આ `:not()` pseudo-class તેથી છેલ્લી વસ્તુમાં કોઈ અલ્પવિરામ ઉમેરવામાં આવી નથી.

**નોટ:** આ ટિપ સુલભતા માટે આદર્શ નથી, ખાસ કરીને સ્ક્રીન વાચકો. અને બ્રાઉઝરમાંથી કૉપિ / પેસ્ટ CSS- જનરેટેડ સામગ્રી સાથે કામ કરતું નથી. સાવધાની સાથે આગળ વધો.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### નકારાત્મક મદદથી વસ્તુઓ પસંદ કરો `nth-child`

વાપરવ નકારાત્મક `nth-child` વસ્તુઓ પસંદ કરવા માટે CSS માં 1 દ્વારા n.

    li {
      display: none;
    }

    /* select items 1 through 3 and display them */
    li:nth-child(-n+3) {
      display: block;
    }

અથવા, કારણ કે તમે પહેલેથી જ વિશે થોડું શીખ્યા છે [using `:not()`](#use-not-to-applyunapply-borders-on-navigation), પ્રયત્ન કરો:

    /* select all items except the first 3 and display them */
    li:not(:nth-child(-n+3)) {
      display: none;
    }

વેલ તે ખૂબ સરળ હતું.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/WxjKZp)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વાપરવુ માટે SVG નો ઉપયોગ કરો

ચિહ્નો માટે એસવીજીનો ઉપયોગ ન કરવા માટે કોઈ કારણ નથી

    .logo {
      background: url("logo.svg");
    }

The SVG scale is good for all resolution types and it is supported in all browsers [back to IE9](http://caniuse.com/#search=svg). તેથી છુટકારો મેળવવા .png, .jpg, or .gif-jif-whatev ફાઈલો.

**નોટ:** જો તમારી પાસે SVG આઇકોન-માત્ર બટનો છે અને જોવામાં આવેલાં વપરાશકર્તાઓ માટે SVG લોડ કરવામાં નિષ્ફળ જાય, તો તે એક્સેસીબિલીટી જાળવી રાખવામાં મદદ કરશે.:

    .no-svg .icon-only::after {
      content: attr(aria-label);
    }

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછ](#કોષ્ટક-સામગ્રીઓ)</sup>

### આ વાપરો “Lobotomized Owl” પસંદગીકાર

તેમાં વિચિત્ર નામ હોઈ શકે છે પરંતુ સાર્વત્રિક પસંદગીકારનો ઉપયોગ કરી શકો છો (`*`) અડીન બહેન સિલેક્ટર સાથે (`+`) શક્તિશાળી CSS ક્ષમતા પ્રદાન કરી શકે છે:

    * + * {
      margin-top: 1.5em;
    }

આ ઉદાહરણમાં, અન્ય ઘટકોને અનુસરતા દસ્તાવેજના પ્રવાહમાંના બધા તત્વો પ્રાપ્ત થશે `margin-top: 1.5em`.

વધુ માટે “lobotomized owl” પસંદગીકાર, વાંચવું [Heydon Pickering’s post](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls) on _A List Apart_.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/grRvWq)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વાપરવ `max-height` શુદ્ધ માટે CSS સ્લાઇડર્સન

ફક્ત ઉપયોગ કરીને CSS- ફક્ત સ્લાઇડર્સનો અમલ કરો `max-height` ઓવરફ્લો છુપાયેલ સાથે:

    .slider {
      max-height: 200px;
      overflow-y: hidden;
      width: 300px;
    }

    .slider:hover {
      max-height: 600px;
      overflow-y: scroll;
    }

આ તત્વ વિસ્તરે છે `max-height` Value on hover and slider display as a result of overflow.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### સમાન-પહોળાઈ કોષ્ટક કોષ

કોષ્ટકો સાથે કામ કરવા માટે પીડા હોઈ શકે છે જેથી આનો ઉપયોગ કરીને પ્રયાસ કરો `table-layout: fixed` કોષો સમાન પહોળાઈ પર રાખો:

    .calendar {
      table-layout: fixed;
    }

પેઇન-મુક્ત કોષ્ટક લેઆઉટ.

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/jALALm)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### છુટકારો મેળવવા માર્જિન હેક્સ સાથે Flexbox

સ્તંભ ગટર સાથે કામ કરતી વખતે તમે છુટકારો મેળવી શકો છો `nth-`, `first-`, અને `last-child` હેક્સ દ્વારા ઉપયોગ કરીને flexbox’s `space-between` મિલકત:

    .list {
      display: flex;
      justify-content: space-between;
    }

    .list .person {
      flex-basis: 23%;
    }

હવે સ્તંભ ગટર હંમેશા સરખે ભાગે-અંતરે દેખાય છે.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વાપરવ એટ્રીબ્યુટ પસંદગીકારો સાથે ખાલી કડીઓ

લિંક્સ દર્શાવો જ્યારે `<a>` તત્વ કોઈ લખાણ કિંમત નથી પરંતુ `href` લક્ષણ એક લિંક છે:

    a[href^="http"]:empty::before {
      content: attr(href);
    }

તે ખૂબ અનુકૂળ છે

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/zBzXRx)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### પ્રકાર “Default” કડીઓ

માટે એક શૈલી ઉમેરો “default” લિંક્સ:

    a[href]:not([class]) {
      color: #008000;
      text-decoration: underline;
    }

હવે લિંક્સ કે જે CMS દ્વારા દાખલ કરવામાં આવે છે, જે સામાન્ય રીતે એક નથી `class` એટ્રિબ્યુટ, સામાન્ય રીતે કાસ્કેડને અસર કરતા વગર ભેદ રાખશે.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### આંતરિક ગુણોત્તર બૉક્સીસ

સ્વભાવિક રેશિયો સાથે બૉક્સ બનાવવા માટે, તમારે ફક્ત ટોચ અથવા તળિયે ગાદીને DIV પર લાગુ કરવાની જરૂર છે:

    .container {
      height: 0;
      padding-bottom: 20%;
      position: relative;
    }

    .container div {
      border: 2px dashed #ddd;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

પેડિંગ માટે 20% નો ઉપયોગ કરીને તેના પહોળાઈના 20% જેટલા બૉક્સની ઊંચાઇને બનાવે છે. કોઈ વ્યૂપોર્ટની પહોળાઇ, બાળક ડિવ તેના પાસા રેશિયો રાખશે (100% / 20% = 5:1).

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/jALZvE)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### પ્રકાર તૂટેલી છબીઓ

તૂટેલી તસવીરો CSS ના થોડુંક સાથે વધુ સૌંદર્યલક્ષી-આનંદી બનાવો:

    img {
      display: block;
      font-family: sans-serif;
      font-weight: 300;
      height: auto;
      line-height: 2;
      position: relative;
      text-align: center;
      width: 100%;
    }

હવે ઉમેરો pseudo-elements તૂટેલી છબીના વપરાશકર્તા સંદેશ અને URL સંદર્ભને પ્રદર્શિત કરવાના નિયમો:

    img::before {
      content: "We're sorry, the image below is broken :(";
      display: block;
      margin-bottom: 10px;
    }

    img::after {
      content: "(url: " attr(src) ")";
      display: block;
      font-size: 12px;
    }

આ પેટર્ન માટે સ્ટાઇલ વિશે વધુ જાણો [Ire Aderinokun](https://github.com/ireade/)’s [original post](http://bitsofco.de/styling-broken-images/).

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વાપરવ `rem` માટે વૈશ્વિક કદ બદલવાનું; વાપરવ `em` માટે સ્થાનિક કદ બદલવાનું

રુટ પર મૂળ ફોન્ટ માપ સુયોજિત કર્યા પછી (`html { font-size: 100%; }`), શાબ્દિક તત્વો માટે ફૉન્ટનું કદ સેટ કરો `em`:

    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

પછી મોડ્યુલો માટે ફૉન્ટ-કદ સેટ કરો to `rem`:

    article {
      font-size: 1.25rem;
    }

    aside .module {
      font-size: .9rem;
    }

હવે દરેક મોડ્યુલ શ્રેણીબદ્ધ અને સરળ, વધુ નિભાવવા યોગ્ય અને લવચીક બની જાય છે.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### છુપાવો ઑટોપ્લે વિડિઓઝ તે નથ ચૂપ

આ વૈવિધ્યપૂર્ણ વપરાશકર્તા સ્ટાઇલશીટ માટે એક મહાન યુક્તિ છે. એક વપરાશકર્તા દ્વારા અવાજ સાથે ઓવરલોડિંગ કરવાનું ટાળો, જે જ્યારે પૃષ્ઠ લોડ થાય ત્યારે ઑટોપ્લે કરે છે. જો અવાજ મૌન નથી, તો વિડિઓ બતાવશો નહીં:

    video[autoplay]:not([muted]) {
      display: none;
    }

ફરી એક વાર, અમે આનો ઉપયોગ કરીને લાભ લઈ રહ્યાં છીએ [`:not()`](#use-not-to-applyunapply-borders-on-navigation) pseudo-class.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### વાપરવ `:root` માટે Flexible Type

એક પ્રતિસાદિત લેઆઉટમાં ટાઇપ ફૉન્ટનું કદ દરેક વ્યૂપોર્ટ સાથે વ્યવસ્થિત થવું જોઈએ. તમે ઉપયોગ કરીને વ્યૂપોર્ટની ઊંચાઈ અને પહોળાઈના આધારે ફોન્ટ કદની ગણતરી કરી શકો છો `:root`:

    :root {
      font-size: calc(1vw + 1vh + .5vmin);
    }

હવે તમે આ ઉપયોગ શ `root em` દ્વારા ગણવામાં આવેલ કિંમત પર આધારિત એકમ `:root`:

    body {
      font: 1rem/1.6 sans-serif;
    }

#### [પ્રદર્શન](http://codepen.io/AllThingsSmitty/pen/XKgOkR)

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### સેટ `font-size` on ફોર્મ તત્વો માટે a બેટર મોબાઇલ અનુભવ

મોબાઇલ બ્રાઉઝર્સને ટાળવા માટે (iOS Safari, _et al_.) થી ઝુમિંગ HTML ફોર્મ એલિમેન્ટ્સ પર જ્યારે એક `<select>` ડ્રોપ ડાઉન ટેપ થયેલ છે, ઉમેરો `font-size` to the selector rule:

    input[type="text"],
    input[type="number"],
    select,
    textarea {
      font-size: 16px;
    }

:dancer:

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### માઉસ ઇવેન્ટ્સ નિયંત્રણ કરવા માટે પોઇન્ટર ઇવેન્ટ્સનો ઉપયોગ કરો

[પોઇન્ટર ઇવેન્ટ્સ](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) તમને સ્પષ્ટ કરવા માટે પરવાનગી આપે છે કે માઉસ કેવી રીતે તૃપ્તિ સાથે સંપર્ક કરે છે. બટનો પર ડિફૉલ્ટ પોઇન્ટર ઇવેન્ટને અક્ષમ કરવા માટે, ઉદાહરણ તરીકે:

    .button-disabled {
      opacity: .5;
      pointer-events: none;
    }

તે સરળ છે.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

### અંતર `display: none` તરીકે વપરાયેલ લાઇન બ્રેક્સ પર સેટ કરો

[હેરી રોબર્ટ્સે નિર્દેશ કર્યો](https://twitter.com/csswizardry/status/1170835532584235008), આ સીએમએસ વપરાશકર્તાઓને અંતર માટે વધારાના લાઇન બ્રેકનો ઉપયોગ કરવાથી અટકાવી શકે છે:

    br + br {
      display: none;
    }

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>

## આધાર

વર્તમાન આવૃત્તિઓ of Chrome, Firefox, Safari, Opera, Edge, અને IE11.

<sup>[સામગ્રીઓના\ કોષ્ટકમાં\ પાછા](#પ્રોપ્સ)</sup>
