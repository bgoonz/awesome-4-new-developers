<img src="https://rawgit.com/AllThingsSmitty/css-protips/master/media/logo.svg" alt="light bulb icon" width="200" />

# CSS Protips [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Một bộ gồm những tips để giúp kỹ năng CSS trở nên pro

> For other great lists check out <span class="citation" data-cites="sindresorhus">\[@sindresorhus\]</span>(https://github.com/sindresorhus/)’s curated list of [awesome lists](https://github.com/sindresorhus/awesome/).

## Table of Contents

- [Protips](#protips)
- [Support](#support)
- [Translations](#translations)
- [Contribution Guidelines](CONTRIBUTING.md)

## Protips

1.  [Dùng CSS Reset](#dùng-css-reset)
2.  [Thừa kế `box-sizing`](#thừa-kế-box-sizing)
3.  [Dùng `unset` thay vì đặt lại tất cả thuộc tính](#dùng-unset-thay-vì-đặt-lại-tất-cả-thuộc-tính)
4.  [Dùng `:not()` để Áp dụng/Không áp dụng các đường viền trên Điều hướng](#dùng-not-để-áp-dụngkhông-áp-dụng-các-đường-viền-trên-điều-hướng)
5.  [Kiểm tra xem Phông chữ có được cài đặt cục bộ không](#kiểm-tra-xem-phông-chữ-có-được-cài-đặt-cục-bộ-không)
6.  [Thêm `line-height`cho `body`](#thêm-line-height-cho-body)
7.  [Đặt `:focus` cho Form Elements](#đặt-focus-cho-form-elements)
8.  [Mọi thứ ở giữa theo chiều dọc](#mọi-thứ-ở-giữa-theo-chiều-dọc)
9.  [Danh sách được phân tách bằng dấu phẩy](#danh-sách-được-phân-tách-bằng-dấu-phẩy)
10. [Chọn items sử dụng Negative `nth-child`](#chọn-items-sử-dụng-negative-nth-child)
11. [Dùng SVG cho Icons](#dùng-svg-cho-icons)
12. [Sử dụng “Lobotomized Owl” Selector](#sử-dụng-lobotomized-owl-selector)
13. [Dùng `max-height` cho thanh trượt CSS Sliders](#dùng-max-height-cho-thanh-trượt-css-sliders)
14. [Các ô trong bảng có chiều rộng bằng nhau](#các-ô-trong-bảng-có-chiều-rộng-bằng-nhau)
15. [Get Rid of Margin Hacks With Flexbox](#get-rid-of-margin-hacks-with-flexbox)
16. [Sử dụng thuộc tính Selectors với các liên kết trống](#sử-dụng-thuộc-tính-selectors-với-liên-kết-trống)
17. [Style “Default” Links](#style-default-links)
18. [Intrinsic Ratio Boxes](#intrinsic-ratio-boxes)
19. [Hình ảnh bị vỡ](#hình-ảnh-bị-vỡ)
20. [Dùng `rem` cho toàn cục; dùng `em` cho cục bộ](#dùng-rem-cho-toàn-cục-dùng-em-cho-cục-bộ)
21. [Ẩn các video tự động phát không bị tắt tiếng](#ẩn-các-video-tự-động-phát-không-bị-tắt-tiếng)
22. [Dùng `:root` cho Flexible Type](#dùng-root-cho-flexible-type)
23. [Đặt `font-size` trong Form Elements để có một trải nghiệm mobile tốt hơn](#đặt-font-size-trong-form-elements-để-có-một-trải-nghiệm-mobile-tốt-hơn)
24. [Dùng Pointer Events để kiểm soát mouse events](#dùng-pointer-events-để-kiểm-soát-mouse-events)
25. [Đặt `display: none` trên ngắt dòng được sử dụng làm khoảng cách](#đặt-display-none-trên-ngắt-dòng-được-sử-dụng-làm-khoảng-cách)

### Dùng CSS Reset

Css resets giúp thực thi tính nhất quán về kiểu dáng trên các trình duyệt khác nhau với một phương tiện chặn rõ ràng cho các yếu tố tạo kiểu.Bạn có thể sử dụng thư viện CSS Reset như [Normalize](http://necolas.github.io/normalize.css/),hoặc bạn có thể sử dụng phương pháp đặt lại đơn giản hơn:

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

Bây giờ các phần tử sẽ bị loại bỏ magins và padding, và `box-sizing` cho phép bạn quản lý bố cục bằng CSS box model.

#### [Demo](http://codepen.io/AllThingsSmitty/pen/kkrkLL)

**Note:** Nếu bạn làm theo [Inherit `box-sizing`](#inherit-box-sizing) mẹo dưới đây, bạn có thể chọn không bao gồm `box-sizing` thuộc tính trong CSS reset của bạn.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Thừa kế `box-sizing`

`box-sizing` được thừa kế từ `html`:

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

Điều này giúp bạn dễ dàng thay đổi `box-sizing` hơn trong các plugin hoặc các thành phần khác thúc đẩy hành vi khác.

#### [Demo](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng `unset` thay vì đặt lại tất cả thuộc tính

Khi đặt lại thuộc tính của một phần tử, không cần thiết phải đặt lại từng thuộc tính riêng lẻ:

    button {
      background: none;
      border: none;
      color: inherit;
      font: inherit;
      outline: none;
      padding: 0;
    }

Bạn có thể chỉ định tất cả các thuộc tính của một phần tử bằng cách sử dụng tất cả các viết tắt. Đặt giá trị thành không đặt sẽ thay đổi thuộc tính của phần tử thành giá trị ban đầu của chúng:

    button {
      all: unset;
    }

**Note:** tốc độ viết tắt `all` và`unset` không được hỗ trợ trong IE11.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng `:not()` để Áp dụng / Không áp dụng các đường viền trên Điều hướng

Thay vì đặt trên border…

    /* add border */
    .nav li {
      border-right: 1px solid #666;
    }

…và sau đó lấy nó ra khỏi phần tử cuối cùng…

    /* remove border */
    .nav li:last-child {
      border-right: none;
    }

…dùng `:not()` pseudo-class để chỉ áp dụng cho các phần tử bạn muốn:

    .nav li:not(:last-child) {
      border-right: 1px solid #666;
    }

Ở đây, CSS selector được đọc như một con người sẽ mô tả nó.

#### [Demo](http://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Kiểm tra xem Phông chữ có được cài đặt cục bộ không

Bạn có thể kiểm tra xem phông chữ có được cài đặt cục bộ hay không trước khi tìm nạp từ xa, đây cũng là một mẹo hiệu suất tốt.

\`\`\`css <span class="citation" data-cites="font-face">@font-face</span> { font-family: “Dank Mono”; src: /\* Full name _/ local(“Dank Mono”), /_ Postscript name _/ local(“Dank Mono”), /_ Otherwise, download it! \*/ url(“//…a.server/fonts/DankMono.woff”); }

code { font-family: “Dank Mono”, system-ui-monospace; }

H / T tới Adam Argyle vì đã chia sẻ chú giải này và [demo](https://codepen.io/argyleink/pen/VwYJpgR).

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Thêm `line-height` cho `body`

Bạn không cần thêm `line-height` cho mỗi `<p>`, `<h*>`… riêng biệt. Thay vào đó, hãy thêm nó vào `body`:

    body {
      line-height: 1.5;
    }

Bằng cách này, các yếu tố văn bản có thể kế thừa từ `body` dễ dàng.

#### [Demo](http://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Đặt `:focus` cho Form Elements

Người dùng bàn phím bị cận dựa vào tiêu điểm để xác định vị trí của các sự kiện bàn phím trong trang. Làm cho tiêu điểm cho các phần tử biểu mẫu nổi bật và nhất quán sau đó triển khai mặc định của trình duyệt:

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

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Mọi thứ ở giữa theo chiều dọc

Không, đó không phải là ảo thuật, bạn thực sự có thể căn giữa các yếu tố theo chiều dọc.Bạn có thể làm điều này với flexbox …

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

… và với Grid cũng vậy:

    body {
      display: grid;
      height: 100vh;
      margin: 0;
      place-items: center center;
    }

Muốn căn giữa một cái gì đó khác? Theo chiều dọc,chiều ngang … bất cứ điều gì, mọi lúc, mọi nơi? CSS-Tricks có [a nice write-up](https://css-tricks.com/centering-css-complete-guide/) để làm được tất cả những điều đó.

**Note:** Xem một ít [buggy behavior](https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items) với Flexbox trên IE11.

#### [Demo](http://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Danh sách được phân tách bằng dấu phẩy

Làm cho các mục trong danh sách trông giống như một danh sách thực, được phân tách bằng dấu phẩy:

    ul > li:not(:last-child)::after {
      content: ",";
    }

Dùng `:not()` pseudo-class và không có dấu phẩy nào sẽ được thêm vào mục cuối cùng.

**Note:** Mẹo này có thể không lý tưởng cho khả năng tiếp cận, đặc biệt là trình đọc màn hình.Và sao chép / dán từ trình duyệt không hoạt động với nội dung do CSS tạo.Khi làm hãy thận trọng.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Chọn items sử dụng Negative `nth-child`

Sử dụng phủ định `nth-child` trong CSS để chọn các mục từ 1 đến n.

    li {
      display: none;
    }

    /* select items 1 through 3 and display them */
    li:nth-child(-n+3) {
      display: block;
    }

Hoặc,bạn đã biết một chút về [dùng `:not()`](#use-not-to-applyunapply-borders-on-navigation), thử:

    /* select all items except the first 3 and display them */
    li:not(:nth-child(-n+3)) {
      display: block;
    }

#### [Demo](http://codepen.io/AllThingsSmitty/pen/WxjKZp)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng SVG cho Icons

Không có lý do gì để không sử dụng SVG cho các biểu tượng:

    .logo {
      background: url("logo.svg");
    }

SVG tỉ lệ tốt cho tất cả các loại độ phân giải và được hỗ trợ trong tất cả các trình duyệt [back to IE9](http://caniuse.com/#search=svg). Loại bỏ các tệp .png, .jpg hoặc .gif-jif-whatev của bạn

**Note:** Nếu bạn có các nút chỉ có biểu tượng SVG cho người dùng bị cận và SVG không tải được, điều này sẽ giúp duy trì khả năng truy cập:

    .no-svg .icon-only::after {
      content: attr(aria-label);
    }

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Sử dụng “Lobotomized Owl” Selector

Nó có thể có một cái tên lạ nhưng việc sử dụng bộ chọn phổ quát (`*`) với bộ chọn anh chị em kế cận (`+`) có thể cung cấp khả năng CSS mạnh mẽ:

    * + * {
      margin-top: 1.5em;
    }

Trong ví dụ này, tất cả các phần tử trong luồng dữ liệu theo sau các phần tử khác sẽ nhận được `margin-top: 1.5em`.

Để biết thêm về bộ chọn “lobotomized owl”, hãy đọc [Heydon Pickering’s post](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls).

#### [Demo](http://codepen.io/AllThingsSmitty/pen/grRvWq)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng `max-height` cho thanh trượt CSS Sliders

Áp dụng CSS-only sliders dùng `max-height` với overflow hidden:

    .slider {
      max-height: 200px;
      overflow-y: hidden;
      width: 300px;
    }

    .slider:hover {
      max-height: 600px;
      overflow-y: scroll;
    }

Những thành phần sẽ được mở rộng bằng `max-height` khi di chuột và thanh trượt hiển thị do overflow.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Các ô trong bảng có chiều rộng bằng nhau

Tables có thể gây nhức đầu khi làm việc với nó. Hãy thử dùng `table-layout: fixed` để giữ cho các ô có chiều rộng bằng nhau:

    .calendar {
      table-layout: fixed;
    }

Bố cục bảng dễ chịu

#### [Demo](http://codepen.io/AllThingsSmitty/pen/jALALm)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Get Rid of Margin Hacks With Flexbox

Khi làm việc với các rãnh cột bạn có thể loại bỏ `nth-`, `first-`, và `last-child` hack dùng flexbox’s bằng `space-between` thuộc tính:

    .list {
      display: flex;
      justify-content: space-between;
    }

    .list .person {
      flex-basis: 23%;
    }

Giờ đây, các rãnh cột luôn xuất hiện cách đều nhau

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Sử dụng thuộc tính Selectors với các liên kết trống

Hiển thị các liên kết khi `<a>` phần tử không có giá trị văn bản nhưng `herf` thuộc tính có một liên kết:

    a[href^="http"]:empty::before {
      content: attr(href);
    }

Điều đó khá tiện lợi

#### [Demo](http://codepen.io/AllThingsSmitty/pen/zBzXRx)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Style “Default” Links

Thêm kiểu cho các liên kết “default”:

    a[href]:not([class]) {
      color: #008000;
      text-decoration: underline;
    }

Giờ đây, các liên kết được chèn qua CMS, thường không có thuộc tính `class`, sẽ có sự phân biệt mà không ảnh hưởng chung đến tầng.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Intrinsic Ratio Boxes

Để tạo một hộp có tỷ lệ nội tại, tất cả những gì bạn cần làm là áp dụng phần đệm trên cùng hoặc dưới cùng cho div:

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

Sử dụng 20% ​​cho phần đệm làm cho chiều cao của hộp bằng 20% ​​chiều rộng của nó. Bất kể chiều rộng của khung nhìn, div con sẽ giữ nguyên tỷ lệ co của nó (100% / 20% = 5: 1).

#### [Demo](http://codepen.io/AllThingsSmitty/pen/jALZvE)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Hình ảnh bị vỡ

Làm cho hình ảnh bị hỏng trở nên đẹp hơn về mặt thẩm mỹ với một chút CSS:

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

Bây giờ, hãy thêm các quy tắc phần tử giả để hiển thị thông báo người dùng và tham chiếu URL của hình ảnh bị hỏng:

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

Tìm hiểu thêm về cách tạo kiểu cho mẫu này trong [Ire Aderinokun](https://github.com/ireade/)’s [original post](http://bitsofco.de/styling-broken-images/).

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng `rem` cho toàn cục; dùng `em` cho cục bộ

Sau khi đặt kích thước phông chữ cơ sở ở gốc (`html { font-size: 100%; }`), đặt kích thước phông chữ cho các yếu tố văn bản thành `em`:

    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

Sau đó, đặt kích thước phông chữ cho mô-đun thành `rem`:

    article {
      font-size: 1.25rem;
    }

    aside .module {
      font-size: .9rem;
    }

Giờ đây, mỗi mô-đun trở nên được chia nhỏ và dễ tạo kiểu hơn, dễ bảo trì hơn và linh hoạt hơn.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Ẩn các video tự động phát không bị tắt tiếng

Đây là một thủ thuật tuyệt vời cho một biểu định kiểu người dùng tùy chỉnh. Tránh làm người dùng quá tải với âm thanh từ video tự động phát khi tải trang. Nếu âm thanh không bị tắt, không hiển thị video:

    video[autoplay]:not([muted]) {
      display: none;
    }

Một lần nữa, chúng ta đang tận dụng lợi thế của việc sử dụng [`:not()`](#use-not-to-applyunapply-borders-on-navigation) pseudo-class.

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng `:root` cho Flexible Type

Kích thước phông chữ loại trong bố cục đáp ứng có thể điều chỉnh theo từng chế độ xem. Bạn có thể tính toán kích thước phông chữ dựa trên chiều cao và chiều rộng của khung nhìn bằng cách sử dụng `:root`:

    :root {
      font-size: calc(1vw + 1vh + .5vmin);
    }

Bây giờ bạn có thể sử dụng `root em` đơn vị dựa trên giá trị được tính bằng `:root`:

    body {
      font: 1rem/1.6 sans-serif;
    }

#### [Demo](http://codepen.io/AllThingsSmitty/pen/XKgOkR)

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Đặt `font-size` trong Form Elements để có một trải nghiệm mobile tốt hơn

Để tránh các trình duyệt di động (iOS Safari, v.v.) phóng to các phần tử biểu mẫu HTML khi `<select>` thả xuống được nhấn, thêm `font-size` quy tắc bộ chọn:

    input[type="text"],
    input[type="number"],
    select,
    textarea {
      font-size: 16px;
    }

:dancer:

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Dùng Pointer Events để kiểm soát mouse events

[Pointer events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) cho phép bạn chỉ định cách con chuột tương tác với phần tử mà nó chạm vào. Để tắt sự kiện con trỏ mặc định trên một nút, ví dụ:

    .button-disabled {
      opacity: .5;
      pointer-events: none;
    }

Nó thật đơn giản:

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

### Đặt `display: none` trên ngắt dòng được sử dụng làm khoảng cách

Như [Harry Roberts pointed out](https://twitter.com/csswizardry/status/1170835532584235008),điều này có thể giúp ngăn người dùng CMS sử dụng thêm dấu ngắt dòng cho khoảng cách:

    br + br {
      display: none;
    }

<sup>[back\ to\ table\ of\ contents](#table-of-contents)</sup>

## Support

versions hiện tại Chrome, Firefox, Safari, Opera, Edge, and IE11.
