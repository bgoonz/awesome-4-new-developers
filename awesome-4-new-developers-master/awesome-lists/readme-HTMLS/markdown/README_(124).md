![light bulb icon](https://rawgit.com/AllThingsSmitty/css-protips/master/media/logo.svg)

# CSS suggerimenti per esperti [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Una collezione di dritte per aiutarti a migliorare le tue capacità con CSS.

> Per altre fantastiche liste di questo tipo guarda la [lista di fantastiche liste](https://github.com/sindresorhus/awesome/) curata da <span class="citation" data-cites="sindresorhus">\[@sindresorhus\]</span>(https://github.com/sindresorhus/).

## Sommario

- [Suggerimenti per esperti](#suggerimenti-per-esperti)
- [Supporto](#supporto)
- [Linee guida per contribuire](../../CONTRIBUTING.md)

## Suggerimenti per esperti

1.  [Utilizzare un reset CSS](#utilizzare-un-reset-css)
2.  [Eredita il `box-sizing`](#eredita-il-box-sizing)
3.  [Usa `unset` invece di Reimposta tutte le proprietà](#usa-unset-invece-di-reimposta-tutte-le-proprietà)
4.  [Usa `:not()` per applicare/rimuovere-i-bordi-su-elementi-di-navigazione](#usa-not-per-applicarerimuovere-i-bordi-su-elementi-di-navigazione)
5.  [Controlla se il font è installato localmente](#controlla-se-il-font-è-installato-localmente)
6.  [Aggiungi `line-height` al `body`](#aggiungi-line-height-al-body)
7.  [Imposta `:focus` per gli elementi del modulo](#imposta-focus-per-gli-elementi-del-modulo)
8.  [Centra verticalmente qualsiasi cosa](#centra-verticalmente-qualsiasi-cosa)
9.  [Liste separate da virgola](#liste-separate-da-virgola)
10. [Seleziona un elemento usando gli `nth-child` negativi](#seleziona-un-elemento-usando-gli-nth-child-negativi)
11. [Usa SVG per le icone](#usa-svg-per-le-icone)
12. [Usa il selettore detto “Lobotomized Owl”](#usa-il-selettore-detto-%22lobotomized-owl%22)
13. [Usa `max-height` per slider fatti solo con CSS](#usa-max-height-per-slider-fatti-solo-con-css)
14. [Celle di tabella con larghezza uguale](#celle-di-tabella-con-larghezza-uguale)
15. [Sbarazzati degli hack sui margini grazie a Flexbox](#sbarazzati-degli-hack-sui-margini-grazie-a-flexbox)
16. [Usa il selettore d’attributo con i link senza testo](#usa-il-selettore-d'attributo-con-i-link-senza-testo)
17. [Styling dei link di “Default”](#styling-dei-link-di-%22default%22)
18. [Box con proporzioni intrinseche](#box-con-proporzioni-intrinseche)
19. [Styling delle immagini non scaricate](#styling-delle-immagini-non-scaricate)
20. [Usa `rem` per le grandezze globali; usa `em` per le dimensioni locali](#usa-rem-per-le-grandezze-globali;-usa-em-per-le-dimensioni-locali)
21. [Nascondi i video in riproduzione automatica che non sono silenziati](#nascondi-i-video-in-riproduzione-automatica-che-non-sono-silenziati)
22. [Usa `:root` per caratteri flessibili](#usa-:root-per-caratteri-flessibili)
23. [Imposta il `font-size` sugli elementi dei form per una migliore esperienza da mobile](#imposta-il-font-size-sugli-elementi-dei-form-per-una-migliore-esperienza-da-mobile)
24. [Utilizzare gli eventi puntatore per controllare gli eventi del mouse](#utilizzare-gli-eventi-puntatore-per-controllare-gli-eventi-del-mouse)
25. [Imposta `display: none` su Line Breaks usati come Spaziatura](#imposta-display:-none-su-line-breaks-usati-come-spaziatura)

### Utilizzare un reset CSS

reset CSS aiutare a far rispettare lo stile coerenza tra diversi browser da zero per gli elementi stilistici. È possibile utilizzare libreria di reset CSS come [Normalize](http://necolas.github.io/normalize.css/), et al, oppure è possibile utilizzare un approccio più semplificato di ripristino.:

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

Ora elementi saranno spogliati di margini e padding, e `box-sizing` consente di gestire i layout con il box model CSS.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/kkrkLL)

**Nota:** Se si segue la punta [Eredita il `box-sizing`](#inherit-box-sizing) in basso si potrebbe optare di non includere la proprietà box-sizing nel ripristino CSS.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Eredita il `box-sizing`

Eredita il `box-sizing` dall’elemento `html`:

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

In questo modo diventa più facile cambiare `box-sizing` in plugin o altri componenti che ne sfruttano un altro.

#### [Dimostrazione](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa `unset` invece di Reimposta tutte le proprietà

Quando si ripristinano le proprietà di un elemento, non è necessario reimpostare ogni singola proprietà:

    button {
      background: none;
      border: none;
      color: inherit;
      font: inherit;
      outline: none;
      padding: 0;
    }

Puoi specificare tutte le proprietà di un elemento usando la stenografia `all`. L’impostazione del valore su `unset` modifica le proprietà di un elemento ai valori iniziali:

    button {
      all: unset;
    }

**Nota:** la stenografia `all` e`unset` non è supportata in IE11.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa `:not()` per applicare/rimuovere i bordi su elementi di navigazione

Invece di impostare il bordo…

    /* aggiunge il bordo */
    .nav li {
      border-right: 1px solid #666;
    }

…e poi rimuoverlo dall’ultimo elemento…

    /* rimuove il bordo */
    .nav li:last-child {
      border-right: none;
    }

…usa la pseudo classe `:not()` per applicarlo solo agli elementi che vuoi:

    .nav li:not(:last-child) {
      border-right: 1px solid #666;
    }

Il selettore CSS definisce il confine nel modo in cui un essere umano lo descrive.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Controlla se il font è installato localmente

Puoi verificare se un font è installato localmente prima di recuperarlo da remoto, il che è anche un buon suggerimento per le prestazioni.

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

Punta del cappello ad Adam Argyle per aver condiviso questo prototipo e questa [dimostrazione](https://codepen.io/argyleink/pen/VwYJpgR).

<sup>[torna\ al\ sommario](#sommario)</sup>

### Aggiungi `line-height` al `body`

Non è necessario aggiungere `line-height` a ogni `<p>`,`<h *>`, _et al_. separatamente. Invece, aggiungilo a `body`:

    body {
      line-height: 1.5;
    }

In questo modo gli elementi di testo possono ereditare facilmente da `body`.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Imposta `:focus` per gli elementi del modulo

Gli utenti con tastiera a vista si affidano alla messa a fuoco per determinare dove vanno gli eventi della tastiera nella pagina. Fai attenzione agli elementi del modulo che si distinguono e coerenti rispetto all’implementazione predefinita del browser:

    a:focus,
    button:focus,
    input:focus,
    select:focus,
    textarea:focus {
      box-shadow: none;
      outline: #000 dotted 2px;
      outline-offset: .05em;
    }

#### [Dimostrazione](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Centra verticalmente qualsiasi cosa

No, non è magia nera. Puoi veramente centrare gli elementi verticalmente:

    html,
    body {
      height: 100%;
      margin: 0;
    }

    body {
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-flex;
      display: flex;
    }

…e anche con CSS Grid:

    body {
      display: grid;
      height: 100vh;
      margin: 0;
      place-items: center center;
    }

Vuoi centrare qualcos’altro? In verticale, in orizzontale… qualsiasi cosa, in qualsiasi momento ovunque? Su CSS-Tricks trovi [un ottimo articolo](https://css-tricks.com/centering-css-complete-guide/) a riguardo.

**Nota bene:** si verificano dei [comportamenti anomali](https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items) con flexbox e IE11.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Liste separate da virgola

Visualizza gli elementi di una lista come fossero una vera lista con le virgole:

    ul > li:not(:last-child)::after {
      content: ",";
    }

Usa la pseudo classe `:not()` in modo da non aggiungere la virgola all’ultimo elemento.

**Nota bene:** può non essere l’ideale per garantire l’accessibilità, nello specifico per gli screen reader. Inoltre il copia/incolla dal browser non funziona con il contenuto generato mediante CSS. Procedi con attenzione.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Seleziona un elemento usando gli `nth-child` negativi

Usa gli `nth-child` negativi di CSS per selezionare gli elementi da 1 a n.

    li {
      display: none;
    }

    /* seleziona gli elementi da 1 a 3 e li mostra */
    li:nth-child(-n+3) {
      display: block;
    }

Oppure, dato che hai già imparato un po’ di cose circa l’[uso di `:not()`](#use-not-to-applyunapply-borders-on-navigation), prova:

    /* selezionare tutti gli elementi tranne i primi 3 e visualizzarli */
    li:not(:nth-child(-n+3)) {
      display: none;
    }

Beh… era abbastanza facile.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/WxjKZp)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa SVG per le icone

Non c’è ragione per non usare SVG per le icone:

    .logo {
      background: url("logo.svg");
    }

SVG scala molto bene a tutti i tipi di risoluzione ed è supportata in tutti i browser [fino a IE9](http://caniuse.com/#search=svg). Perciò butta i tuoi file .png, .jpg o .gif-jif-qualsiasicosa.

**Nota bene:** se usi bottoni con esclusivamente grafica SVG e le icone SVG non vengono caricate, questo ti aiuterà a preservare l’accessibilità:

    .no-svg .icon-only::after {
      content: attr(aria-label);
    }

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa il selettore detto “Lobotomized Owl”

Sebbene il suo nome sia un po’ strano, l’uso del selettore universale (`*`) insieme al selettore del fratello adiacente (`+`) può fornire una potenzialità CSS molto potente:

    * + * {
      margin-top: 1.5em;
    }

In questo esempio, tutti gli elementi nel flusso del documento che seguono altri elementi riceveranno la proprietà `margin-top: 1.5em`.

Per saperne di più sul selettore detto “lobotomized owl”, leggi [l’articolo di Heydon Pickering](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls) su _A List Apart_.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/grRvWq)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa `max-height` per slider fatti solo con CSS

Realizza slider fatti solo con CSS usando `max-height` con overflow hidden:

    .slider {
      max-height: 200px;
      overflow-y: hidden;
      width: 300px;
    }

    .slider:hover {
      max-height: 600px;
      overflow-y: scroll;
    }

L’elemento si espande al valore `max-height` all’hover e lo slider diventa visibile come risultato dell’overflow.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Celle di tabella con larghezza uguale

Lavorare con le tabelle può dare il tormento, perciò prova a usare `table-layout: fixed` per avere celle di larghezza uguale:

    .calendar {
      table-layout: fixed;
    }

Layout con le tabelle e senza tormento.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/jALALm)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Sbarazzati degli hack sui margini grazie a Flexbox

Quando lavori con gli spazi tra colonne puoi sbarazzarti di `nth-`, `first-` e `last-child` usando la proprietà `space-between` di flexbox:

    .list {
      display: flex;
      justify-content: space-between;
    }

    .list .person {
      flex-basis: 23%;
    }

Ora le colonne avranno sempre una spaziatura uniforme.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa il selettore d’attributo con i link senza testo

Quando l’elemento `<a>` non ha testo al suo interno ma l’attributo `href` ha un link, lo mostra:

    a[href^="http"]:empty::before {
      content: attr(href);
    }

Decisamente comodo.

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/zBzXRx)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Styling dei link di “Default”

Aggiunge uno stile per i link “default”:

    a[href]:not([class]) {
      color: #008000;
      text-decoration: underline;
    }

Ora i link inseriti mediante un CMS, che solitamente non hanno un attributo `class`, saranno distinti senza intaccare tutti gli altri in cascata.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Box con proporzioni intrinseche

Per creare un contenitore con proporzioni intrinseche tutto ciò che devi fare è applicare a un div del `padding` superiore o inferiore:

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

Uare un `padding` del 20% rende l’altezza del contenitore pari al 20% della sua larghezza. Non importa quale sia la larghezza della finestra, il div figlio manterrà le proporzioni stabilite (100% / 20% = 5:1).

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/jALZvE)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Styling delle immagini non scaricate

Rendi le immagini non scaricate più piacevoli esteticamente con un po’ di CSS:

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

Ora aggiungi le regole per gli pseudo elementi al fine di mostrare un messaggio e un riferimento URL dell’immagine non scaricata:

    img::before {
      content: "Siamo spiacenti, l'immagine non è stata scaricata. :(";
      display: block;
      margin-bottom: 10px;
    }

    img::after {
      content: "(url: " attr(src) ")";
      display: block;
      font-size: 12px;
    }

Ulteriori informazioni sullo styling secondo questo pattern nell’[articolo](http://bitsofco.de/styling-broken-images/) di [Ire Aderinokun](https://github.com/ireade/).

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa `rem` per le grandezze globali; usa `em` per le dimensioni locali

Dopo avere impostato la dimensione di base del font sull’elemento root (`html { font-size: 100%; }`), imposta la dimensione del font per gli elementi testuali con `em`:

    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

Poi imposta il font-size per i moduli con `rem`:

    article {
      font-size: 1.25rem;
    }

    aside .module {
      font-size: .9rem;
    }

A questo punto ogni modulo diventa compartimentalizzato, più facile da modellare, più manutenibile e più flessibile.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Nascondi i video in riproduzione automatica che non sono silenziati

Questo è un fantastico trucchetto per un foglio di stile personalizzato per un utente. Evita di sovraccaricare un utente col suono di un video che parte in riproduzione automatica quando la pagina viene caricata. Se il suono non è disabilitato non mostrare il video:

    video[autoplay]:not([muted]) {
      display: none;
    }

Ancora una volta stiamo sfruttando la pseudo classe [`:not()`](#use-not-to-applyunapply-borders-on-navigation).

<sup>[torna\ al\ sommario](#sommario)</sup>

### Usa `:root` per caratteri flessibili

In un layout responsive la grandezza del carattere dovrebbe essere in grado di adattarsi a ogni risoluzione. Puoi calcolare la dimensione del font basandoti sull’altezza e sulla larghezza della finestra usando `:root`:

    :root {
      font-size: calc(1vw + 1vh + .5vmin);
    }

Adesso puoi usare l’unità basata su `root em` sul valore calcolato da `:root`:

    body {
      font: 1rem/1.6 sans-serif;
    }

#### [Dimostrazione](http://codepen.io/AllThingsSmitty/pen/XKgOkR)

<sup>[torna\ al\ sommario](#sommario)</sup>

### Imposta il `font-size` sugli elementi dei form per una migliore esperienza da mobile

Per evitare lo zoom sugli elementi dei form dai browser mobile (iOS Safari, _et al_.) quando si tocca una `<select>`, aggiungi `font-size` alle regole del selettore:

    input[type="text"],
    input[type="number"],
    select,
    textarea {
      font-size: 16px;
    }

:dancer:

<sup>[torna\ al\ sommario](#sommario)</sup>

### Utilizzare gli eventi puntatore per controllare gli eventi del mouse

[Eventi puntatore](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) consentono di specificare come il mouse interagisce con l’elemento che sta toccando. Per disabilitare l’evento puntatore predefinito su un pulsante, ad esempio:

    .button-disabled {
      opacity: .5;
      pointer-events: none;
    }

È così semplice.

<sup>[torna\ al\ sommario](#sommario)</sup>

### Imposta `display: none` su Line Breaks usati come Spaziatura

Come [Harry Roberts ha sottolineato](https://twitter.com/csswizardry/status/1170835532584235008), questo può aiutare a impedire agli utenti CMS di utilizzare interruzioni di riga aggiuntive per la spaziatura:

    br + br {
      display: none;
    }

<sup>[torna\ al\ sommario](#sommario)</sup>

## Supporto

Le attuali versioni di Chrome, Firefox, Safari, Opera, Edge ed IE11.
