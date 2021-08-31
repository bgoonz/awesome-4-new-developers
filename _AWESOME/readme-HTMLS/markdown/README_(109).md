![light bulb icon](https://rawgit.com/AllThingsSmitty/css-protips/master/media/logo.svg)

# CSS の便利な小技・テクニックのまとめ [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

CSS のプロのスキルになるようにアドバイスのリストを紹介します。

> 他のリストのため： [Awesome リスト](https://github.com/sindresorhus/awesome/)　の　<span class="citation" data-cites="sindresorhus">\[@sindresorhus\]</span>(https://github.com/sindresorhus/)　をチェック S してください。.

## 目次

- [プロチップス](#protips)
- [サポート](#soutien)
- [参考](#references)
- [コントリビュート](../../CONTRIBUTING.md)

## プロチップス

1.  [CSS のリセットを使用します](#use-a-css-reset)
2.  [box-sizing をコンポーネントごとに変更](#inherit-box-sizing)
3.  [すべてのプロパティをリセットする代わりに `unset`を使う](#use-unset-instead-of-resetting-all-properties)
4.  [`:not()` を使用 / ボーダーを削除](#use-not-to-applyunapply-borders-on-navigation)
5.  [フォントがローカルにインストールされているかどうかを確認します](#check-if-font-is-installed-locally)
6.  [`body`に`line-height`を加える](#add-line-height-to-body)
7.  [フォーム要素に `：focus`を設定する](#set-focus-for-form-elements)
8.  [天地の中央に配置](#vertically-center-anything)
9.  [リストをカンマ区切りにする](#comma-separated-lists)
10. [ネガティブな「:nth-child」を使用してアイテムを選択](#select-items-using-negative-nth-child)
11. [SVG のアイコン](#use-svg-for-icons)
12. [Owl を使用](#use-the-lobotomized-owl-selector)
13. [CSS で実装されたスライダーには max-height を使う](#use-max-height-for-pure-css-sliders)
14. [テーブルのセルの幅を均等にする](#equal-width-table-cells)
15. [Flexbox のマージンハックを取り除く](#get-rid-of-margin-hacks-with-flexbox)
16. [リンクにテキストが無い時は URL を表示](#use-attribute-selectors-with-empty-links)
17. [デフォルトのリンクをスタイル](#style-default-links)
18. [内在比率のボックス](#intrinsic-ratio-boxes)
19. [リンク切れの画像要素をスタイル](#style-broken-images)
20. [グローバルのサイズ指定に「rem」、ローカルに「em」を使用](#use-rem-for-global-sizing-use-em-for-local-sizing)
21. [動画の自動再生を隠す](#hide-autoplay-videos-that-arent-muted)
22. [フレクシブルタイプの`:root`を使用](#use-root-for-flexible-type)
23. [スマホ向け、フォーム要素のフォントサイズの設定](#set-font-size-on-form-elements-for-a-better-mobile-experience)
24. [ポインターイベントを使用してマウスイベントを制御する](#use-pointer-events-to-control-mouse-events)
25. [間隔として使用される改行に「display：none」を設定します](#set-display-none-on-line-breaks-being-used-as-spacing)

### CSS のリセットを使用します

CSS のリセットはスタイリング要素のための白紙の状態で異なるブラウザ間でスタイルの一貫性を強化するのに役立ちます。あなたは[Normalize](http://necolas.github.io/normalize.css/)、\_et al.\_のように CSS のリセットライブラリを使用するか、より簡略化リセットアプローチを使用することができます。

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

今の要素は、マージンやパディングを剥奪し、`box-sizing`は、CSS ボックスモデルとレイアウトを管理することができますされます。

#### [デモ](http://codepen.io/AllThingsSmitty/pen/kkrkLL)

**注意：**あなたがあなたの CSS のリセットで[Inherit `box-sizing`](#inherit-box-sizing) プロパティが含まれていないことを選択する可能性があります下に`box-sizing`ヒントに従っている場合。

<sup>[目次へ戻る](#table-of-contents)</sup>

### `box-sizing`をコンポーネントごとに変更

`box-sizing`は html 要素で指定し、継承して利用すると、コンポーネントで変える時に簡単です。

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

これでプラグインかその他のコンポーネントに `box-sizing` を変更しやすくなります。

#### [デモ](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

<sup>[目次へ戻る](#table-of-contents)</sup>

### すべてのプロパティをリセットする代わりに `unset`を使う

要素のプロパティをリセットするときは、個々のプロパティをリセットする必要はありません。

    button {
      background: none;
      border: none;
      color: inherit;
      font: inherit;
      outline: none;
      padding: 0;
    }

要素のプロパティのすべてを `all`省略形で指定することができます。 値を `unset`に設定すると、要素のプロパティが初期値に変更されます：

    button {
      all: unset;
    }

**備考:** IE11 では `all`および`unset`の省略形はサポートされていません。

<sup>[目次へ戻る](#table-of-contents)</sup>

### `:not()`を使用して、リスト要素で実装したナビゲーションの最後のアイテムだけに区切り線を削除します。

ボーダーを書いて。。。

    /* add border */
    .nav li {
      border-right: 1px solid #666;
    }

ラストチャイルドで非表示するより

    /* remove border */
    .nav li:last-child {
      border-right: none;
    }

`:not()`を使用するとシンプルなコードで指定できます。

    .nav li:not(:last-child) {
      border-right: 1px solid #666;
    }

CSS セレクターは、境界線を人間が表現する方法で定義します。

#### [デモ](http://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[目次へ戻る](#table-of-contents)</sup>

### フォントがローカルにインストールされているかどうかを確認します

フォントをリモートでフェッチする前に、フォントがローカルにインストールされているかどうかを確認できます。これもパフォーマンスのヒントになります。

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

このプロチップと[デモ](https://codepen.io/argyleink/pen/VwYJpgR)を共有してくれた Adam Argyle への帽子のヒント.

<sup>[目次へ戻る](#table-of-contents)</sup>

### `body` に`line-height`を加える

`body`要素で`line-height`を指定することで`p`, `h*`などにその値が継承されるため、それぞれに`line-height`を指定する必要がなくなります。

    body {
      line-height: 1.5;
    }

#### [デモ](http://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[目次へ戻る](#table-of-contents)</sup>

### フォーム要素に `：focus`を設定する

視認されたキーボードユーザーは、キーボードイベントがページ内のどこに移動するかを決定するためにフォーカスを当てています。 フォーム要素のフォーカスを目立たせ、ブラウザのデフォルトの実装と一貫性を持たせる：

    a:focus,
    button:focus,
    input:focus,
    select:focus,
    textarea:focus {
      box-shadow: none;
      outline: #000 dotted 2px;
      outline-offset: .05em;
    }

#### [デモ](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

<sup>[目次へ戻る](#table-of-contents)</sup>

### 天地の中央に配置

なんでも天地の中央に配置できます！！

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

…CSS グリッド:

    body {
      display: grid;
      height: 100vh;
      margin: 0;
      place-items: center center;
    }

なんでも中央に揃いたいですか？ CSS-Tricks の[セントリングガイド](https://css-tricks.com/centering-css-complete-guide/) をチェックしてください。

**備考:** IE11 の Flexbox の [バグを気をつけてください](https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items)

#### [デモ](http://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[目次へ戻る](#table-of-contents)</sup>

### リストをカンマ区切りにする

リストの各アイテムをカンマ区切りにします。

    ul > li:not(:last-child)::after {
      content: ",";
    }

`:not()` を使えば最後のエレメントにカンマ追加されないようにします。

**備考:** アクセシビリティによくないので気をつけてをお使いください。

<sup>[目次へ戻る](#table-of-contents)</sup>

### ネガティブな `:nth-child` を使用してアイテムを選択

`nth-child`にはネガティブな値も指定できます。

    li {
      display: none;
    }

    /* select items 1 through 3 and display them */
    li:nth-child(-n+3) {
      display: block;
    }

また [`:not()`](#use-not-to-applyunapply-borders-on-navigation)　を使用してこちらをのコードを書いてみてください：

    /* select all items except the first 3 and display them */
    li:not(:nth-child(-n+3)) {
      display: none;
    }

簡単でしょう〜！

#### [デモ](http://codepen.io/AllThingsSmitty/pen/WxjKZp)

<sup>[目次へ戻る](#table-of-contents)</sup>

### SVG のアイコン

アイコンとして SVG を使えない理由がないです！

    .logo {
      background: url("logo.svg");
    }

SVG は [IE9](http://caniuse.com/#search=svg)以降のすべてのブラウザでサポートされています。

**備考:** ボタンが SVG だけで作られている場合、SVG がローディングされなかったらアクセシビリティのためこちらのコードを書いて見てください:

    .no-svg .icon-only::after {
      content: attr(aria-label);
    }

<sup>[目次へ戻る](#table-of-contents)</sup>

### Owl を使用

変な名前ですが(`*`) と (`+`) を使用するとパワフル CSS セレクターになります！

    * + * {
      margin-top: 1.5em;
    }

全てのページの要素にある要素が`margin-top: 1.5em`をもらいます。

Owl について詳しくはこちら：_List Apart_ の[ヘイドンピケリングの記事](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls)

#### [デモ](http://codepen.io/AllThingsSmitty/pen/XKgOkR)

<sup>[目次へ戻る](#table-of-contents)</sup>

### CSS で実装されたスライダーには`max-height`を使う

CSS で実装されたスライダーは、`max-height`を`overflow: hidden;`と一緒に使ってください。

    .slider {
      max-height: 200px;
      overflow-y: hidden;
      width: 300px;
    }

    .slider:hover {
      max-height: 600px;
      overflow-y: scroll;
    }

ホバーの時`max-height`の要素を拡張オバーフローの結果でスライダーが表示されます。

<sup>[目次へ戻る](#table-of-contents)</sup>

### テーブルのセルの幅を均等にする

テーブルの各セルの幅を均等にするには、`table-layout: fixed;`を使うと簡単にできます。

    .calendar {
      table-layout: fixed;
    }

簡単にテーブルレイアウトを作れます。

#### [デモ](http://codepen.io/AllThingsSmitty/pen/jALALm)

<sup>[目次へ戻る](#table-of-contents)</sup>

### Flexbox のマージンハックを取り除く

`flexbox`でカラムの溝をつくる時、`nth-`, `first-`, `last-child`などのハックで最後の溝を取り除くことができますが、それは`flexbox`の`space-between`プロパティを使うだけで解決します。

    .list {
      display: flex;
      justify-content: space-between;
    }

    .list .person {
      flex-basis: 23%;
    }

column のスペースが揃えている。

<sup>[目次へ戻る](#table-of-contents)</sup>

### リンクにテキストが無い時は URL を表示

リンクの`href`属性には URL があり、リンクのテキストがない場合に、下記の CSS を使用すると、リンク先の URL を表示します。

    a[href^="http"]:empty::before {
      content: attr(href);
    }

便利ですよー！

#### [デモ](http://codepen.io/AllThingsSmitty/pen/zBzXRx)

<sup>[目次へ戻る](#table-of-contents)</sup>

### `:not`を使ってデフォルトのリンクをスタイル

デフォルトのリンクのスタイルを追加：

    a[href]:not([class]) {
      color: #008000;
      text-decoration: underline;
    }

CMS で挿入される通常 class 属性を持たないリンクに`:not`を使ってスタイルを定義します。

<sup>[目次へ戻る](#table-of-contents)</sup>

### 内在比率のボックス

ボックスを内在比率で作成するには、ボックスの上部か下部に`div`の詰め物を適用します。

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

padding に 20%を使っているのは、そのボックスの高さを幅の 20%と等しくします。ビューポートの幅に関わらず、子の div 要素のアスペクト比は「100%:20%(5:1)」を保持します。

#### [デモ](http://codepen.io/AllThingsSmitty/pen/jALZvE)

<sup>[目次へ戻る](#table-of-contents)</sup>

### リンク切れの画像要素をスタイル

よりよいユーザエクスペリエンスを提供するために、リンク切れの画像要素にスタイルを定義します。もちろんリンク切れがないのがベストですが、絶対に存在しない訳ではありません。

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

疑似要素を使い、ユーザーの役に立つ情報を加えることもできます。

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

このようなスタイリングに興味があればこちらに参考してください：[イレ　アデリノクン](https://github.com/ireade/)’ [リンク切れの画像についての記事](http://bitsofco.de/styling-broken-images/).

<sup>[目次へ戻る](#table-of-contents)</sup>

### グローバルのサイズ指定に`rem`、ローカルに`em`を使用

ベースのフォントサイズを`html{font-size: 16px;}`にルート指定し、テキスト要素を`em`で指定します。

    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

モジュールのフォントサイズは`rem`で指定します。

    article {
      font-size: 1.25rem;
    }

    aside .module {
      font-size: .9rem;
    }

モジュールごとに分けるとスタイルするのが簡単で、メンテナンス性もアップします。

<sup>[目次へ戻る](#table-of-contents)</sup>

### 動画の自動再生を隠す

これはカスタマイズされたユーザースタイルシートのための素晴らしいテクニックです。ページがロードされた時、動画が自動再生されて音がでてしまうユーザーの負担を軽減します。もし無音にできないなら、動画を使わないでください。

    video[autoplay]:not([muted]) {
      display: none;
    }

こちらも [`:not()`](#use-not-to-applyunapply-borders-on-navigation)を使用できます！

<sup>[目次へ戻る](#table-of-contents)</sup>

### フレクシブルタイプの`:root`を使用

レスポンシブ対応時に、フォントのサイズをビューポートごとに適応することができます。`:root`を使い、ビューポートの高さと幅に基づいてフォントのサイズを定義することができます。

    :root {
      font-size: calc(1vw + 1vh + .5vmin);
    }

#### [デモ](http://codepen.io/AllThingsSmitty/pen/XKgOkR)

`:root`で定義した値に基づいて、それぞれのタグや要素に`em`を使って利用します。

    body {
      font: 1rem/1.6 sans-serif;
    }

<sup>[目次へ戻る](#table-of-contents)</sup>

### スマホ向け、フォーム要素のフォントサイズの設定

スマホでセレクト要素のドロップダウンをタップした時に、iOS Safari でフォーム要素にズームインするのを回避するために、フォントサイズを加えます。

    input[type="text"],
    input[type="number"],
    select,
    textarea {
      font-size: 16px;
    }

:dancer:

<sup>[目次へ戻る](#table-of-contents)</sup>

### ポインターイベントを使用してマウスイベントを制御する

[Pointer events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)では、マウスがタッチしている要素とどのように対話するかを指定することができます。 ボタン上のデフォルトポインタイベントを無効にするには、次のようにします。

    .button-disabled {
      opacity: .5;
      pointer-events: none;
    }

それは簡単です。

<sup>[目次へ戻る](#table-of-contents)</sup>

### 間隔として使用される改行に `display：none` を設定します

[ハリー・ロバーツが指摘したように](https://twitter.com/csswizardry/status/1170835532584235008)、これは CMS ユーザーがスペースのために余分な改行を使用するのを防ぐのに役立ちます：

    br + br {
      display: none;
    }

<sup>[目次へ戻る](#table-of-contents)</sup>

## サポート

現在の Chrome, Firefox, Safari, Opera と Edge のバージョンと IE11.
