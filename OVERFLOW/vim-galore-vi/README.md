<div align='center'>
  <br /><br /><br />
  <img src='https://raw.githubusercontent.com/kyoz/vim-galore-vi/main/static/images/logo-vim-galore.png' alt='vim-galore logo' />
  <br /><br /><br /><br />
  <div>
    <a href='https://github.com/mhinz/vim-galore'>English</a> |
    <a href='https://github.com/wsdjeg/vim-galore-zh_cn'>Chinese</a> |
    <a href='http://postd.cc/?s=vim-galore'>Japanese</a> |
    <a href='https://github.com/lsrdg/vim-galore'>Portuguese</a> |
    <a href='http://givi.olnd.ru/vim-galore/vim-galore-ru.html'>Russian</a>
    <div>
      <br />
      <sub>Được cấp phép theo <a href='https://creativecommons.org/licenses/by-sa/4.0'>CC BY-SA 4.0<a/>.</sub>
    </div>
  </div>
  <br /><br />
</div>

### [Giới thiệu](#giới-thiệu-1)

- [Vim là gì?](#vim-là-gì)
- [Triết lý của Vim](#triết-lý-của-vim)
- [Những bước đầu tiên](#những-bước-đầu-tiên)
- [File cấu hình vimrc đơn giản](#file-cấu-hình-vimrc-đơn-giản)
- [Bạn đang sử dụng phiên bản Vim nào?](#bạn-đang-sử-dụng-phiên-bản-vim-nào)
- [Cheatsheets](#cheatsheets)

### [Cơ bản](#cơ-bản-1)

- [Buffer, window và tab](#buffer-window-và-tab)
- [Hiểu rõ hơn về buffer](#hiểu-rõ-hơn-về-buffer)
- [Danh sách tham số](#danh-sách-tham-số)
- [Mapping lệnh](#mapping-lệnh)
- [Phím leader](#phím-leader)
- [Bộ ghi nhớ](#bộ-ghi-nhớ)
- [Phạm vi](#phạm-vi)
- [Đánh dấu](#đánh-dấu)
- [Gợi ý code](#gợi-ý-code)
- [Chuyển động, các toán tử, các đối tượng văn bản](#chuyển-động-các-toán-tử-các-đối-tượng-văn-bản)
- [Lệnh tự động](#lệnh-tự-động)
- [Danh sách thay đổi, danh sách nhảy](#danh-sách-thay-đổi-danh-sách-nhảy)
- [Cây hoàn tác](#cây-hoàn-tác)
- [Danh sách sửa lỗi nhanh và danh sách vị trí](##danh-sách-sửa-lỗi-nhanh-và-danh-sách-vị-trí)
- [Macros](#macros)
- [Bảng màu](#bảng-màu)
- [Thu gọn code](#thu-gọn-code)
- [Phiên làm việc](#phiên-làm-việc)
- [Tính cục bộ](#tính-cục-bộ)

### [Cách sử dụng](#cách-sử-dụng-1)

- [Nhận trợ giúp ngoại tuyến](#nhận-trợ-giúp-ngoại-tuyến)
- [Nhận trợ giúp ngoại tuyến (cách khác)](#nhận-trợ-giúp-ngoại-tuyến-cách-khác)
- [Nhận trợ giúp trực tuyến](#nhận-trợ-giúp-trực-tuyến)
- [Sử dụng lệnh tự động trong thực tế](#sử-dụng-lệnh-tự-động-trong-thực-tế)
  - [Các sự kiện người dùng](#các-sự-kiện-người-dùng)
  - [Các lệnh tự động lồng vào nhau](#các-lệnh-tự-động-lồng-vào-nhau)
- [Clipboard](#clipboard)
  - [Sử dụng Clipboard (Windows, macOS)](#sử-dụng-clipboard-windows-macos)
  - [Sử dụng Clipboard (Linux, BSD, ...)](#sử-dụng-clipboard-linux-bsd-)
- [Khôi phục vị trí của con trỏ khi mở file](#khôi-phục-vị-trí-của-con-trỏ-khi-mở-file)
- [Các file tạm](#các-file-tạm)
  - [Các file sao lưu](#các-file-sao-lưu)
  - [Các file swap](#các-file-swap)
  - [Các file hoàn tác](#các-file-hoàn-tác)
  - [File Viminfo](#file-viminfo)
  - [Cấu hình ví dụ cho các file tạm](#example-configuration-for-temporary-files)
- [Chỉnh sửa file từ xa](#chỉnh-sửa-file-từ-xa)
- [Quản lý plugin](#quản-lý-plugins)
- [Chèn khối](#chèn-khối)
- [Chạy các chương trình bên ngoài Vim và sử dụng các bộ lọc](#chạy-các-chương-trình-bên-ngoài-vim-và-sử-dụng-các-bộ-lọc)
- [Cscope](#cscope)
- [MatchIt](#matchit)
- [True colors](#true-colors)

### [Các mẹo sử dụng](#các-mẹo-sử-dụng-1)

- [Chuyển đến đầu hoặc cuối của văn bản đang được chọn](#chuyển-đến-đầu-hoặc-cuối-của-văn-bản-đang-được-chọn)
- [Hành vi tốt hơn của n và N](#hành-vi-tốt-hơn-của-n-và-n)
- [Lịch sử các lệnh sử dụng tốt hơn](#lịch-sử-các-lệnh-sử-dụng-tốt-hơn)
- [CTRL-L tốt hơn](#ctrl-l-tốt-hơn)
- [Tắt hình ảnh và âm thanh của chuông](#tắt-hình-ảnh-và-âm-thanh-của-chuông)
- [Di chuyển nhanh dòng hiện tại](#di-chuyển-nhanh-dòng-hiện-tại)
- [Thêm nhanh các dòng trống](#thêm-nhanh-các-dòng-trống)
- [Chỉnh sửa nhanh macros của bạn](#chỉnh-sửa-nhanh-macros-của-bạn)
- [Nhảy nhanh đến header file hoặc file mã nguồn](#nhảy-nhanh-đến-file-header-hoặc-file-mã-nguồn)
- [Thay đổi kích thước font trong giao diện](#thay-đổi-kích-thước-font-trong-giao-diện)
- [Thay đổi kiểu con trỏ tùy thuộc vào chế độ](#thay-đổi-kiểu-con-trỏ-tùy-thuộc-vào-chế-độ)
- [Không bị mất những lựa chọn (selection) khi di chuyển sang một bên](#không-bị-mất-những-lựa-chọn-selection-khi-di-chuyển-sang-một-bên)
- [Tải lại file khi lưu](#tải-lại-file-khi-lưu)
- [Con trỏ thông minh hơn](#con-trỏ-thông-minh-hơn)
- [Hoàn thành từ khóa nhanh hơn](#hoàn-thành-từ-khóa-nhanh-hơn)
- [Thay đổi màu sắc](#thay-đổi-màu-sắc)

### [Các lệnh](#các-lệnh-1)

- [:global và :vglobal](#global-và-vglobal) - Thực thi một lệnh trên tất cả các dòng phù hợp.
- [:normal và :execute](#normal-and-execute) - Viết kịch bản trong mơ của bạn.
- [:redir và execute()](#redir-and-execute) - Bắt lấy đầu ra (output) khi thực thi lệnh.

### [Gỡ lỗi](#gỡ-lỗi-1)

- [Các mẹo chung](#các-mẹo-chung)
- [Độ chi tiết](#độ-chi-tiết)
- [Lập hồ sơ thời gian khởi động](#lập-hồ-sơ-thời-gian-khởi-động)
- [Lập hồ sơ thời gian trong quá trình sử dụng Vim](#lập-hồ-sơ-thời-gian-trong-quá-trình-sử-dụng-vim)
- [Gỡ lỗi các lệnh Vim](#gỡ-lỗi-các-lệnh-vim)
- [Gỡ lỗi các file syntax](#gỡ-lỗi-các-file-syntax)

### [Linh tinh](#linh-tinh-1)

- [Tài liệu bổ sung](#tài-liệu-bổ-sung)
- [Các bản phân phối Vim](#các-bản-phân-phối-vim)
- [Các plugin tiêu chuẩn](#các-plugin-tiêu-chuẩn)
- [Map CapsLock sang Control](#map-capslock-sang-control)
- [Tạo file HTML từ buffer](#tạo-file-html-từ-buffer)
- [Những điều thú vị](#những-điều-thú-vị)
- [Tại sao lại dùng hjkl để điều hướng?](#tại-sao-lại-dùng-hjkl-để-điều-hướng)

### [Các vấn đề thường gặp](#các-vấn-đề-thường-gặp-1)

- [Chỉnh sửa file nhỏ bị chậm](#chỉnh-sửa-file-nhỏ-bị-chậm)
- [Chỉnh sửa file lớn bị chậm](#chỉnh-sửa-file-lớn-bị-chậm)
- [Dán nội dung trong ngoặc (hoặc tại sao tôi phải đặt lệnh 'dán' mọi lúc?)](#dán-nội-dung-trong-ngoặc-hoặc-tại-sao-tôi-phải-đặt-lệnh-dán-mọi-lúc)
- [Độ trễ khi sử dụng phím esc trong terminal](#độ-trễ-khi-sử-dụng-phím-esc-trong-terminal)
- [Hoàn tác các hàm tìm kiếm](#hoàn-tác-các-hàm-tìm-kiếm)

### [Các vấn đề kĩ thuật kì quặc](#các-vấn-đề-kĩ-thuật-kì-quặc-1)

- [Dòng mới được sử dụng cho NUL](#dòng-mới-được-sử-dụng-cho-nul)

### [Thuật ngữ](#thuật-ngữ-1)

- [Vim script? Vimscript? VimL?](#vim-script-vimscript-viml)

### [Danh sách bảng màu](PLUGINS.md#các-bảng-màu)

### [Danh sách plugin](PLUGINS.md)

<br>

# Giới thiệu

## Vim là gì?

[Vim](http://www.vim.org) là một trình soạn thảo văn bản có nguồn gốc lâu đời
[qed](https://en.wikipedia.org/wiki/QED_(text_editor)). Được 
[Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar) phát hành vào 
năm 1991.

Dự án của Vim được công khai trực tuyến tại [vim.org](http://www.vim.org/index.php).

Để tải Vim: Sử dụng trình quản lý package yêu thích của bạn hoặc tải trực tiếp 
tại [vim.org](http://www.vim.org/download.php).

Bạn nên thảo luận và đặt các câu hỏi tại 
[vim_use](https://groups.google.com/forum/#!forum/vim_use) hoặc sử dụng 
IRC ([Freenode](https://freenode.net)) trong kênh của `#vim`.

Xem quá trình phát triển của Vim tại [GitHub](https://github.com/vim/vim), 
và cùng nhau thảo luận trên 
[vim_dev](https://groups.google.com/forum/#!forum/vim_dev).

Bạn cũng có thể đọc bài viết [Why, oh WHY, do those #?@! nutheads use
vi?](http://www.viemu.com/a-why-vi-vim.html) để được giải thích thêm về những 
quan niệm sai lầm phổ biến về Vim.

**Chú ý:** mình sẽ giữ nguyện một số tên gọi và khái niệm ở nguyên bản tiếng anh, 
bời vì có rất nhiều từ được sử dụng rộng rãi và phổ biến trong giới lập trình 
rồi, nếu dịch hết sang Tiếng Việt, dù bạn có hiểu nhưng sau này khi muốn cài 
thêm plugin, viết plugin, hoặc hoặc VimScript, các bạn sẽ dễ nhầm lẫn với các 
khái niệm và tên gọi đó. Hơn hết nhiều từ dịch sang Tiếng Việt đọc rất chuối :3.

## Triết lý của Vim

Vim tuân thủ triết lý chỉnh sửa theo phương thức. Điều này có nghĩa là Vim sẽ 
cung cấp nhiều chế độ và nhiều phím tắt khác nhau, ý nghĩa của các phím tắt sẽ 
được thay đổi theo từng chế độ. Bạn có thể sử dụng chế độ _normal_ để điều hướng 
các tệp tin và con trỏ chuột, sử dụng chế độ _insert_ để chèn văn bản, sử dụng 
chế độ _visual_ để chọn nhiều dòng cùng một lúc, hoặc bạn có thể sử dụng chế độ 
_command-line_ để truy cập các lệnh trong Vim, v.v. Điều này thoạt nghe thì có vẻ 
phức tạp, nhưng nó lại mạng đến một lợi thế rất lớn: đó là bạn không phải làm 
khổ các ngón tay của mình khi giữ nhiều nút trên bàn phím cùng một lúc, hầu hết 
thời gian khi bạn sử dụng Vim, bạn chỉ cần nhấn lần lượt từ phím này đến phím 
khác. Công việc càng thông dụng, thì càng ít phím phải nhấn.

Các khái niệm hoạt động cùng với việc chỉnh sửa theo phương thức là 
các toán tử (operators) và chuyển động (motions). _Operators_ sẽ bắt đầu một hành 
động nhất định, ví dụ như: thay đổi, xóa hoặc chọn văn bản. Sau đó, bạn sẽ chỉ 
định vùng văn bản bạn muốn thực hiện thay đổi bằng cách sử dụng _motion_. Để thay 
đổi mọi thứ giữa các dấu ngoặc đơn, bạn có thể dùng `ci(`. Để xóa toàn bộ nội 
dung của một đoạn văn bản, chỉ cần nhấn `dap`. (Bạn không cần quá lo lắng nếu 
bạn không hiểu các ví dụ này, nội dung chi tiết sẽ được diễn giải cặn kẽ trong 
các phần sau)

Nếu bạn nhìn những người sử dụng Vim thành thạo làm việc, bạn sẽ nhận thấy rằng 
họ nói _ngôn ngữ của Vim_, cũng giống như các nghệ sĩ piano xử lý các nhạc cụ của 
họ vậy. Các thao tác phức tạp được xử lý chỉ bằng một vài phím bấm. Họ thậm chí 
còn không thèm nghĩ về nó nữa, bởi vì 
[bộ nhớ cơ bắp (muscle memory)](https://en.wikipedia.org/wiki/Muscle_memory) đã 
tiếp quản công việc thay họ.  Điều này làm giảm 
[gánh nặng nhận thức (cognitive load)](https://en.wikipedia.org/wiki/Cognitive_load) 
và giúp họ tập trung vào công việc thực sự của họ.

## Những bước đầu tiên

Vim đi kèm với một hướng dẫn tương tác (sử dụng), giúp bạn hiểu và dạy bạn 
những điều cơ bản nhất mà bạn cần biết. Bạn có thể bắt đầu nó với lệnh:

```
$ vimtutor
```

Đừng bỏ cuộc bởi vì trông nó thật nhàm chán mà hãy cố gắng vượt qua hết tất cả 
các bài tập. Các trình soạn thảo văn bản hoặc IDE mà bạn sử dụng trước đây có 
lẽ hầu hết đều không theo triết lý chỉnh sửa theo phương thức, vì vậy việc phải 
chuyển qua, chuyển lại giữa các chế độ ban đầu sẽ có đôi chút khó khăn với bạn, 
nhưng bạn càng tập luyện, càng sử dụng Vim nhiều, nó sẽ trở thành
[bộ nhớ cơ bắp (muscle memory)](https://en.wikipedia.org/wiki/Muscle_memory) 
của bạn.

Vim đã được tích hợp vào 
[Stevie](https://en.wikipedia.org/wiki/Stevie_(text_editor)), một bản sao của 
[vi](https://en.wikipedia.org/wiki/Vi), và hỗ trợ hai chế độ hoạt động khác 
nhau: "tương thích (compatible)" và "không tương thích (nocompatible)". Sử dụng 
vim ở chế độ compatible nghĩa là bạn sẽ sử dụng vi cho tất cả các thao tác, 
thay vì Vim (theo mặc định). Miễn là bạn chưa tạo file cấu hình (vimrc) hoặc 
khởi động Vim bằng cú pháp `vim -N`, chế độ tương thích chỉ là giả định, bạn 
không nên sử dụng Vim ở chế độ tương thích. Đừng nhé.

Các bước tiếp theo:

1. Tạo file cấu hình [vimrc](#file-cấu-hình-vimrc-đơn-giản) cho riêng bạn.
2. Chọn một vài [cheatsheets](#cheatsheets) để chuẩn bị sử dụng cho những tuần 
đầu tiên sử dụng Vim.
3. Đọc qua phần [cơ bản](#cơ-bản) để biết được những điều khó tin mà Vim có 
thể làm.
4. Học theo nhu cầu sử dụng! Bạn sẽ không bao giờ hết được Vim. Nếu bạn gặp bất 
kì vấn đề nào, chỉ cần tìm kiếm nó trên mạng. Vấn đề mà bạn mắc phải đã được 
giải quyết sẵn trên mạng. Vim đi kèm với một bộ tài liệu tuyệt vời, và việc bạn 
phải biết cách sử dụng, tra khảo nó là một điều bắt buộc: 
[Nhận hỗ trợ mà không cần kết nối mạng](#nhận-hỗ-trợ-mà-không-cần-kết-nối-mạng).
5. Đọc qua [tài liệu bổ sung](#tài-liệu-bổ-sung).

Lời khuyên cuối cùng: Vui lòng học cách sử dụng Vim đúng cách trước khi bạn bắt 
đầu thêm thắt các loại [plugin](#quản-lý-plugin) mà bạn không hề biết rằng 
những tính năng của các plugin đó đã sẵn có trong Vim.

## File cấu hình vimrc đơn giản

Bạn có thể đặt file cấu hình vimrc của bạn ở `~/.vimrc` hoặc để quản lý tốt 
hơn, bạn có thể phân chia nó ra và đặt nó vào `~/.vim/vimrc`. Việc tách các 
file cấu hình ra sẽ giúp bạn dễ dàng quản lý các phiên bản cho từng bộ cấu hình 
của mình, và tải nó lên mạng, giả sử như Github chẳng hạn.

Bạn có thể tìm thấy nhiều file cấu hình `vimrc đơn giản` trên mạng, ví dụ như 
những file cấu hình của tôi, mặc dù trông chúng không được đơn giản cho lắm, 
nhưng nó sẽ cung cấp cho bạn một bộ cài đặt, cấu hình ổn định mà tôi cho là 
rất hữu ích để bạn bắt đầu.

Cuối cùng, bạn vẫn phải đọc qua hết tất cả các cài đặt có trong file cấu hình 
và tự quyết định sẽ cấu hình như thế nào cho chính bản thân mình. :-)

Xem file cấu hình ở đây nhé: [vimrc](static/minimal-vimrc.vim)

Trong trường hợp bạn quan tâm, đây là 
[file cấu hình của tôi](https://github.com/kyoz/neovim).

**MẸO NHỎ**: Hầu hết những người làm ra plugin đều chia sẻ file cấu hình vimrc 
của họ trên Github (thường thì họ sẽ đặt trong repo có tên "dotfiles" hoặc 
"vim-config"), vì vậy bất cứ khi nào bạn tìm thấy một plugin bạn thích, bạn hãy 
xem qua GitHub của tác giả làm ra plugin đó và xem qua các repo để tham khảo 
các file cấu hình của họ.

## Bạn đang sử dụng phiên bản Vim nào?

Dùng lệnh `:version` trong vim sẽ cung cấp cho bạn tất cả các thông tin bạn cần 
biết về phiên bản Vim mà bạn đang sử dụng.

Dòng đầu tiên cho bạn biết phiên bản Vim bạn đang sử dụng được biên dịch khi 
nào, cũng như phiên bản của nó, ví dụ: 7.4. Dòng tiếp theo có cấu trúc 
`Included patches: 1-1051`, là bản patch của Vim. Do đó, phiên bản Vim chính 
xác của bạn là 7.4.1051.

Dòng tiếp theo có thể là `Tiny version without GUI (Phiên bản tối giản với giao diện)` 
hoặc `Huge version with GUI (Phiên bản đầy đủ với giao diện)` . Thông tin chúng 
muốn đề cập là liệu Vim của bạn có hỗ trợ giao diện (GUI) hay không, ví dụ: để 
khởi động `gvim` từ shell hoặc chạy `:gui` từ Vim trong terminal. Một thông tin 
quan trọng khác là `Tiny` và `Huge`. Vim phân biệt giữa các tập tính năng bằng 
các tên gọi như `tiny`, `small`, `normal`, `big`, và `huge`, mỗi tập sẽ cũng 
cấp những tính năng khác nhau cho Vim của bạn.

Hầu hết các phiên bản của vim khi bạn xem `:version` sẽ đều hiển thị các tính 
năng đang được hay không được tích hợp sẵn. Ví dụ `+clipboard` nghĩa là tính 
năng clipboard được tính hợp sẵn, `-clipboard` nghĩa là tính năng clipboard 
không được tính hợp sẵn trong phiên bản Vim hiện tại của bạn.

Một số tính năng của Vim cần được biên dịch để có thể hoạt động. Ví dụ để chạy 
được lệnh `:prof`, bạn sẽ cần phiên bản Vim với tập tính năng `Huge`, bởi vì 
tập đó có sẵn tính năng `+profile`.

Nếu không rành, hoặc giả sử bạn cài đặt Vim từ trình quản lý package, hãy đảm 
bảo bạn đã cài đặt các gói có tên `vim-x`, `vim-x11`, `vim gtk`, `vim-gnome` 
hoặc tương tự, vì các gói này thường đi kèm với bộ tính năng khổng lồ.

Bạn cũng có thể kiểm tra phiên bản hoặc các tính năng của Vim bằng các lập 
trình với lệnh như sau:

```vim
" Chạy lệnh gì nó nếu phiên bản của Vim mới hơn hoặc bằng 7.4.42
" Và phải có +profile
if (v:version > 704 || v:version == 704 && has('patch42')) && has('profile')
  " do stuff
endif
```

Để hiểu rõ hơn bạn có thể dùng các lệnh sau để tra cứu thêm thông tin:

```
:h :version
:h feature-list
:h +feature-list
:h has-patch
```

## Cheatsheets

- http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
- https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
- http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_screen.png
- http://www.rosipov.com/images/posts/vim-movement-commands-cheatsheet.png

Hoặc bạn cũng có thể mở nhanh một bảng cheatsheet ngay bên trong vim: 
[vim-cheat40](https://github.com/lifepillar/vim-cheat40).

# Cơ bản

## Buffer, window và tab

Vim là một trình soạn thảo văn bản. Mỗi khi văn bản được hiển thị, văn bản sẽ 
là một phần của **buffer (bộ nhớ đệm)**. Mỗi file sẽ được mở trong buffer của riêng 
nó. Các plugin sẽ hiển thị nội dung của chúng trong buffer của riêng từng 
plugin, vv.

Các buffer có rất nhiều thuộc tính, ví dụ: văn bản có bạn có thể chỉnh sửa 
(modifiable) được hay không, hoặc liệu nó có được liên kết với một file nào đó 
hay không, và do đó nó cần được đồng bộ với ổ đĩa khi bạn lưu văn bản.

**Các window** là các cửa sổ (khung hiển thị) _để hiển thị_ các buffer. Nếu bạn muốn 
xem nhiều file cùng một lúc hoặc nhiều vị trí các nhau trên một file, bạn sẽ 
phải sử dụng window.

Và làm ơn, đừng gọi chúng là _splits (chia cửa sổ)_ . Bạn có thể chia một window 
làm 2, nhưng điều đó không khiến chúng trở thành _splits_.

Window có thể được chia theo chiều ngang hoặc chiều dọc, chiều dài và rộng của 
chúng cũng có thể được thay đổi. Do đó, bạn có thể sử dụng bất kì cách phân 
chia cửa sổ nào mà bạn thích nhất.

Tab (hay còn được gọi là Tab page), là tập hợp của các cửa sổ. Vì vậy, nếu bạn 
muốn sử dụng nhiều bố cục cửa sổ khác nhau, hãy sử dụng các tab.

Tóm lại, nếu bạn khởi động Vim mà không có bất kì arguments (tham số) nào, bạn 
sẽ chỉ có một tab, bên trong tab là một window đang hiển thị một buffer.

Ngoài ra, tất cả các buffer đều khả dụng trong toàn bộ trình soạn thảo Vim, và 
bạn có thể truy cập mọi buffer từ bất kì tab nào.

## Hiểu rõ hơn về buffer

Bạn có thể khởi động Vim bằng các chạy lệnh `vim file-1`. Nội dung của file sẽ 
được load vào buffer. Nội dung của buffer chỉ được đồng bộ hóa vào ổ đĩa (ghi 
vào file) khi bạn lưu nó bằng lệnh bên trong Vim.

Bởi vì buffer cũng được hiển thị bên trong window, nó cũng là một **active buffer 
(buffer đang hoạt động)**. Bây giờ nếu bạn load một file khác với lệnh `e file-2`, 
`file-1` sẽ trở thành **hidden buffer (buffer ẩn)** và `file-2` sẽ trở thành 
`active buffer`.

Cả hai buffer đều được **liệt kê** trong danh sách buffer, do đó, khi bạn dùng lệnh 
`:ls` để hiển thị danh sách buffer, chúng đều sẽ được hiển thị trong danh sách. 
Buffer của các plugin hoặc các buffer trợ giúp (help buffer) thông thường sẽ 
không được hiển thị trong danh sách buffer, bởi vì chúng không đại diện cho các 
file thông thường mà bạn hay chỉnh sửa bằng các trình soạn thảo văn bản. Để 
hiển thị tất cả buffer (kể các các buffer ẩn) bạn có thể sử dụng lệnh `:ls!`.

**Unnamed buffers (các buffer không tên)**, cũng thường được sử dụng bởi các plugin, 
chúng là các buffer không có liên kết và cũng không đại diện cho một file cụ 
thể nào cả. Ví dụ: dùng lệnh `:enew` sẽ tạo ra một buffer tạm không có tên 
(unnamed buffer). Bạn có thể gõ vài dòng chữ vào đó và ghi nó vào đĩa bằng cách 
chỉ định một file để liên kết, ví dụ: `:w /tmp/foo`, nội dung bạn vừa gõ sẽ 
được lưu vào file `/tmp/foo` và buffer vô danh vừa tạo sẽ trở thành một buffer 
bình thường.

## Danh sách tham số

[Danh sách buffer toàn cục (global buffer list)](#buffer,-window-và-tab) là một 
đặc trưng của Vim. Trước đây, bên trong vi, những thứ này chỉ được sử dụng như 
là các tham số, trong khi đó chúng lại có sẵn bên trong Vim.

Mỗi file (tên file) được cung cấp cho Vim bằng lệnh, đều được ghi nhớ trong 
danh sách tham số (argument list). Trong Vim, có thể có nhiều danh sách tham 
số khác nhau: theo mặc định, tất cả các tham số được đưa vào danh sách tham số 
toàn cục (global argument list), nhưng bạn có thể sử dụng lệnh `:arglocal` để 
tạo một danh sách tham số cục bộ (local) cho window.

Bạn có thể liệt kê danh sách tham số với lệnh `:args`. Chuyển đổi qua lại giữa 
các file từ danh sách tham số với lệnh `:next`, `:before`, `:previous`, `:first`,
`:last` và các lệnh khác. Hoặc bạn cũng có thể thay thế file đó với file khác 
với lệnh `:argadd`, `:argdelete` hoặc `:args` với một danh sách các file.

Việc sử dụng buffer hoặc danh sách tham số để làm việc với các file là tùy 
thuộc vào sở thích của bạn. Thông thường tôi thấy mọi người chỉ sử dụng danh 
sách buffer.

Tuy nhiên, có một trường hợp bạn cần phải sử dụng danh sách đối số để xử lý. Ví 
dụ: xử lý hàng loạt với lệnh `:argdo`!. Đây làm một ví dụ đơn giản:

```vim
:args **/*.[ch]
:argdo %s/foo/bar/ge | update
```

Các lệnh trên sẽ thay thế tất cả các chữ "foo" thành "bar" trong tất cả các 
file C và header file của chúng trong thư mục hiện tại.

Xem thêm: `:h argument-list`

## Mapping lệnh

Bạn có thể định nghĩa các mapping của mình với danh sách các lệnh `:map`. Mỗi 
lệnh trong danh sách các lệnh đó sẽ định nghĩa một mapping cho một chế độ (mode) 
nhất định. Về mặt kĩ thuật, Vim đi kèm với 12 chế độ, 6 trong số đó chúng ta có 
thể sử dụng được mapping. Ngoài ra, một số lệnh hoạt động trên nhiều chế độ 
cùng một lúc.

| Đệ quy    | Không đệ quy  | Bỏ mapping | Chế độ                           |
|-----------|---------------|------------|----------------------------------|
| `:map`    | `:noremap`    | `:unmap`   | normal, visual, operator-pending |
| `:nmap`   | `:nnoremap`   | `:nunmap`  | normal                           |
| `:xmap`   | `:xnoremap`   | `:xunmap`  | visual                           |
| `:cmap`   | `:cnoremap`   | `:cunmap`  | command-line                     |
| `:omap`   | `:onoremap`   | `:ounmap`  | operator-pending                 |
| `:imap`   | `:inoremap`   | `:iunmap`  | insert                           |

Ví dụ: lệnh sau đây sẽ map phím `space` cho chế độ normal

```vim
:nmap <space> :echo "foo"<cr>
```

Bỏ mapping của phím vừa map bằng lệnh `:nunmap <space>`.

Để biết thêm một số chế độ phổ biến khác (hoặc sự kết hợp của chúng), bạn có 
thể xem `:h map-modes`.

Càng học bạn sẽ càng thấy Vim tuyệt vời. Chỉ có một vấn đề khá khó hiểu với 
những người mới bắt đầu, `:nmap` có tính _đệ quy_ !. Đúng vậy, vế phải của lệnh 
sẽ nhận các lệnh mà bạn muốn map.

Vì vậy, nếu bạn muốn map một lệnh đơn giản ghi ra màn hình chữ "Foo", dùng lệnh:
So you defined a mapping that simply echoes "Foo":

```vim
:nmap b :echo "Foo"<cr>
```

Nhưng nếu bạn muốn map hành vi mặc định của phím `b` vừa map cho một phím khác (
di chuyển con trỏ về 1 từ đứng trước từ hiện tại) thì sao?. Hãy dùng lệnh:

```vim
:nmap a b
```

Nếu bạn nhấn nút <kbd>a</kbd>, chúng ta nghĩ là con trỏ sẽ nhảy đến từ đứng 
trước từ hiện tại, nhưng thay vào đó, "Foo" sẽ được in ra trong dòng lệnh! Bởi 
vì chúng ta đã map phím `b` cho một hành động khác rồi, đó là `:echo "Foo"<cr>`.

Cách thích hợp để giải quyết vấn đề này là sử dụng mapping _không đệ quy_ 
(_non-recursive_ mapping):

```vim
:nnoremap a b
```

Quy tắc: Luôn sử dụng mapping không đệ quy (non-recursive mapping) trừ khi bạn 
biết bạn đang làm gì.

Tra cứu các mapping mà bạn đã map bằng cách dùng lệnh `:nmap`. Lệnh `:nmap` sẽ 
liệt kê tất cả các mapping normal và `:nmap <leader>` sẽ liệt kê tất cả các 
mapping bắt đầu mới mapleader (Phím leader mặc định, bạn có thể thay đổi phím 
này, chi tiết sẽ được trình bày trong phần sau).

Nếu bạn muốn vô hiệu hóa một mapping, hãy map chúng thành kí tự đặc biệt `<nop>`
, ví dụ: `:noremap <left> <nop>`.

Xem thêm:

    :h key-notation
    :h mapping
    :h 05.3

## Phím leader

Phím leader có thể sử dụng chung với các mapping của bạn, giúp bạn thao tác đơn 
giản và nhanh chóng hơn. Mặc định, phím leader sẽ là `\`;

```vim
nnoremap <leader>h :helpgrep<space>
```

Sau khi map với lệnh trên, bạn có thể nhấn trên bàn phím lần lượt 2 phím 
<kbd>/</kbd><kbd>h</kbd> để chạy lệnh `:helpgrep<space>`. Ngoài phím leader, 
bạn cũng có thể map với phím cách (space) bằng cách thay `<leader>` bằng 
`<space>`.

```vim
let mapleader = ' '
nnoremap <leader>h :helpgrep<space>
```

Ngoài `<leader>`` và `<space>`, bạn còn có thể sử dụng `<localleader>`.
`<localleader>` là một bản sao cục bộ của `<leader>` được sử dụng để map các 
phím cho một buffer. Ví dụ: plugin filetype-specific cũng sử dụng `\` làm phím 
leader mặc định.

Lưu ý: Bạn cần phải cấu hình các leader trước khi tiến hành định nghĩa các 
mapping của mình. Tất cả các mapping đã được định nghĩa trước khi bạn định 
nghĩa các mapleader đều đã có hiệu lực, chúng sẽ không thay đổi vì bạn định 
nghĩa mapleader sau chúng. `:nmap <leader>` sẽ liệt kê tất cả các mapping với 
mapleader đã được áp dụng, bạn nên dùng lệnh này để kiểm tra lại các mapping 
của mình.

Xem thêm `:h mapleader` và `:h maplocalleader` để biết thêm chi tiết.

## Bộ ghi nhớ

Bộ ghi nhớ (register) là nơi lưu trữ các thao tác trên văn bản của 
bạn. Việc bạn sao chép một đoạn văn bản vào bộ ghi nhớ được gọi là **yanking** và 
việc bạn trích xuất dữ liệu từ bộ ghi nhớ được gọi là **pasting**.

Vim cung cấp cho bạn các bộ ghi nhớ sau:

| Loại                | Kí tự                  | Được nhập bởi? | Không được chỉnh sửa? | Contains text from? |
|---------------------|------------------------|----------------|-----------------------|---------------------|
| Unnamed             | `"`                    | vim            | [ ]                   | Thông tin sao chép hoặc xóa gần nhất. (`d`, `c`, `s`, `x`, `y`) |
| Numbered            | `0` to `9`             | vim            | [ ]                   | bộ ghi nhớ `0`: Lần sao chép gần nhất. bộ ghi nhớ `1`: Lần xóa gần nhất. bộ ghi nhớ `2`: Lần xóa gần thứ nhì. Và cứ như vậy. Các bộ ghi nhớ từ `1`-`9` không được phép chỉnh sửa [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)). |
| Small delete        | `-`                    | vim            | [ ]                   | Lần xóa gần nhất mà có ít hơn 1 dòng. |
| Named               | `a` to `z`, `A` to `Z` | user           | [ ]                   | Nếu bạn muốn sao chép vào bộ ghi nhớ `a`, bạn có thể thay thế nội dung của nó. Nếu bạn muốn sao chép vào bộ ghi nhớ `A`, bạn thêm nó vào sau nội dung của bộ ghi nhớ `a`. |
| Read-only           | `:`, `.`, `%`          | vim            | [x]                   | `:`: Lệnh bạn dùng cuối cùng, `.`: Những từ gần nhất bạn thêm vào, `%`: Tên file của buffer hiện tại. |
| Alternate buffer    | `#`                    | vim            | [ ]                   | Những buffer được truy cập gần nhất của window hiện tại. Xem `:h alternate-file` |
| Expression          | `=`                    | user           | [ ]                   | Đánh giá biểu thức VimL đã được sao chép. Ví dụ, nhập lệnh sao đây trong chế độ insert: `<c-r>=5+5<cr>` và "10" sẽ được chèn vào buffer. |
| Selection           | `+`, `*`               | vim            | [ ]                   | `*` và `+` là bộ ghi nhớ [clipboard](#clipboard). |
| Drop                | `~`                    | vim            | [x]                   | Lần kéo thả gần nhất. |
| Black hole          | `_`                    | vim            | [ ]                   | Nếu bạn không muốn bất kì bộ ghi nhớ nào khác bị ảnh hưởng. Ví dụ, lệnh `"_dd` sẽ xóa dòng hiện tại mà không thay đổi (ảnh hưởng) đến các bộ ghi nhớ `"`, `1`, `+`, `*`. |
| Last search pattern | `/`                    | vim            | [ ]                   | Pattern gần nhất được sử dụng vơi `/`, `?`, `:global`, etc. |

Mỗi bộ ghi nhớ không bị giới hạn ghi chép (readonly), có thể được thiết lập bởi 
người dùng:

```vim
:let @/ = 'register'
```

Sau đó, phím <kbd>n</kbd> sẽ di chuyển con trỏ đến lần xuất hiện tiếp theo của 
"bộ ghi nhớ".

Có rất nhiều trường hợp ngoại lệ khi các thanh ghi được lấp đầy một cách âm thầm,
do đó, để chắc ăn, bạn nên đọc thêm `:h registers`.

Sao chép với `y` và dán với `p`/`P`, nhưng hãy nhớ rằng Vim phân biệt giữa các 
lựa chọn trực quan theo chiều của ký tự, và theo dòng. Xem thêm `:h linewise`.

**Ví dụ: sao chép dòng**

`yy` (hoặc `Y`) sẽ sao chép dòng hiện tại. Sau đó, bạn di chuyển con trỏ đến 1 
nơi nào khác tùy ý, dùng `p` để dán nội dung đã sao chép bên dưới dòng hiện 
tại, `P` để dán bên trên dòng hiện tại.

**Ví dụ: sao chép chữ**

Sao chép từ đầu tiên với `0yw`, sau đó bạn di chuyển con trỏ đến một nơi nào 
khác, dán từ vừa sao chép phía sau con trỏ của dòng hiện tại với phím `p` và 
phía trước con trỏ với phím `P`;

**Ví dụ: đặt tên cho bộ ghi nhớ**

Lệnh `"aY` sẽ sao chép dòng hiện tại vào bộ ghi nhớ `a`. Di chuyển sang một dòng 
khác. Lệnh `"AY` sẽ chèn dòng hiện tại vào phía cuối của bộ ghi nhớ `a`.

Tôi khuyên bạn nên thử với tất cả các thanh ghi này một chút và liên tục dùng 
lệnh `:reg` để kiểm tra những gì đang thực sự diễn ra.

**Sự thật thú vị**: Trong Emacs "yanking" (sao chép) lại có nghĩa là pasting (dán)
(hoặc chèn lại vào văn bản đã bị xóa trước đó), chứ không phải mang nghĩa 
copying (sao chép).

## Phạm vi

Ranges (phạm vi) khá là dễ hiểu, những hầu hết các Vimmers đều không biết về 
chức năng đầy đủ của chúng.

- Rất nhiều lệnh đều có phạm vi.
- Một địa chỉ sẽ chỉ định một dòng nhất định.
- Một phạm vi có thể là một địa chỉ duy nhất hoặc một cặp địa chỉ được phân cách 
bởi `,` hoặc là `;`.
- Ranges cho biết cách lệnh nên thực thi trên dòng nào.
- Hầu hết các lệnh chỉ hoạt động trông dòng hiện tại theo mặc định. Các trường 
hợp đáng chú ý có thể kể đến là `:write` và `:global`, chúng sẽ hoạt động trên 
tất cả các dòng.

Việc sử dụng các phạm vi khá là trực quan, đây là một số ví dụ (lệnh `:d`
là viết tắt của `:delete`):

| Lệnh     | Các dòng sẽ thực thi lệnh |
|----------|----------------|
| `:d`     | Dòng hiện tại. |
| `:.d`    | Dòng hiện tại. |
| `:1d`    | Dòng đầu tiên. |
| `:$d`    | Dòng cuối. |
| `:1,$d`  | Tất cả các dòng. |
| `:%d`    | Tất cả các dòng (cú pháp ngắn gọn cho lệnh `1,$`). |
| `:.,5d`  | Dòng hiện tại tới dòng thứ 5. |
| `:,5d`   | Cũng là dòng hiện tại tới dòng thứ 5. |
| `:,+3d`  | Dòng hiện tại và 3 dòng tiếp theo. |
| `:1,+3d` | Dòng đầu tiên tới dòng hiện tại, và thêm 3 dòng sau đó. |
| `:,-3d`  | Dòng hiện tại và 3 dòng cuối. (Vim sẽ cảnh báo bạn, vì đây là phạm vi đảo ngược.) |
| `:3,'xdelete` | Dòng thứ 3 cho tới dòng được [đánh dấu](#đánh-dấu) x. |
| `:/^foo/,$delete` | Từ dòng tiếp theo, bắt đầu với từ "foo" cho tới hết file. |
| `:/^foo/+1,$delete` | Từ dòng kế tiếp của dòng bắt đầu với "foo" cho tới hết file. |

Lưu ý là thay vì dùng `,`, `;` có thể được dùng như là dấu phân cách. Sự khác 
biệt là trong trường hợp của công thức `from,to`, thì _to_ là chỉ cho dòng hiện 
tại, nhưng khi dùng công thức `from;to`, _to_ ở đây có liên quan đến địa chỉ 
của _from_!. Giả sử bạn đang ở dòng 5, `:1;+1d` sẽ chỉ xóa dòng 1 và 2.

Địa chỉ `/` có thể được đặt trước bằng một địa chỉ khác. Điều này cho phép bạn 
_gộp các pattern_ lại với nhau. Ví dụ:

```vim
:/foo//bar//quux/d
```

Lệnh trên sẽ xóa dòng đầu tiên có chứa "quux" sau dòng đầu tiên chứa "bar" sau 
dòng đầu tiên có chứa "foo" kể từ sau dòng hiện tại.

Đôi khi Vim tự động thêm một phạm vi vào trước dòng lệnh của bạn. Ví dụ: bắt 
đầu lựa chọn nhiều dòng với chế độ visual bằng lệnh `V`, chọn một số dòng bạn 
thích và nhập `:`. Dòng lệnh sẽ được điền với phạm vi `'<,'>`, có nghĩa là lệnh 
bạn chuẩn bị thực thi sẽ được áp dụng cho các dòng đã chọn trước đó. (Đây cũng 
là lý do tại sao đôi khi bạn thấy các mapping như là 
`:vnoremap foo :<c-u>command`. Ở đây `<c-u>` được sử dụng để loại bỏ phạm vi, 
bởi vì Vim sẽ quăng lỗi khi bạn cho phạm vi vào một lệnh không hỗ trợ phạm vi.

Một ví dụ khác nữa là sử dụng `!!` ở chế độ normal. Thao tác này sẽ tự động 
điền `:.!` vào dòng lệnh của bạn. Nếu bạn điền tiếp theo sau bởi một dòng lệnh,
hay ứng dụng bên ngoài, đầu ra của dòng lệnh, ứng dụng đó sẽ thay thế cho dòng 
hiện tại. Vì vậy, bạn có thể thay thế đoạn văn hiện tại bằng đầu ra của lệnh 
`ls` bằng cách sử dụng: `:?^$?+1,/^$/-1!ls`. Thật tuyệt.

Xem thêm:

```
:h cmdline-ranges
:h 10.3
```

## Đánh dấu

Bạn có thể đánh dấu (marks) để ghi nhớ một vị trí, đó là vị trí dòng và 
cột bên trong một file.

| Marks | Được đặt bởi.. | Công dụng |
|-------|----------|-------|
| `a` - `z` | Người dùng | Chỉ khả dụng cục bộ trong một file. Chuyển đến một dấu được đánh dấu bằng chữ viết thường nghĩa là chuyển con trỏ qua lại trong một file. |
| `A` - `Z` | Người dùng | Khả dụng toàn cục, cho tất cả các file. Còn được gọi là các _file mark. Chuyển cho trỏ đến một marker được đánh dấu bằng chữ viết hoa có thể nhảy sang một buffer khác buffer hiện tại. |
| `0` - `9` | viminfo | `0` là vị trí khi file viminfo được ghi lần cuối. Trong thực tế, điều này có nghĩa là khi Vim được đóng lần cuối. `1` là vị trí khi Vim kết thúc lần gần thứ 2, và cứ thế cho các số tiếp theo. |

Đặt `'`/`g'` hoặc `` ` ``/`` g` `` trước một đánh dấu để tạo một cử chỉ (motion).

Sử dụng `mm` để ghi nhớ vị trí hiện tại với marker "m". Di chuyển xung quanh file 
và sau đó quay lại với `'m` (ký tự đầu tiên không phải khoảng trống trên 1 dòng) 
hoặc `` `m `` (vị trí cột chính xác đã đánh dấu).
Các marker được đánh dấu bằng chữ thường sẽ được ghi nhớ khi bạn thoát Vim, nếu 
bạn yêu cầu file viminfo của mình làm như vậy, xem thêm `:h viminfo-'`.

Sử dụng `mM` để ghi nhớ vị trí hiện tại với marker "M". Chuyển sang buffer khác 
và quay lại vị trí vừa đánh dấu với `'M` hoặc `` `M ``.

Các cử chỉ khác:

| Cử chỉ           | Nhảy đến.. |
|------------------|-----------|
| `'[`, `` `[ ``   | Dòng hoặc ký tự đầu tiên của văn bản đã thay đổi hay được sao chép trước đó. |
| `']`, `` `] ``   | Dòng hoặc ký tự cuối cùng của văn bản đã thay đổi hay được sao chép trước đó. |
| `'<`, `` `< ``   | Dòng bắt đầu hoặc ký tự của các lựa chọn được chọn trong chế độ visual lần gần nhất. |
| `'>`, `` `> ``   | Dòng kết thúc hoặc ký tự của các lựa chọn được chọn trong chế độ visual lần gần nhất. |
| `''`, ``` `` ``` | Vị trí mà bạn vừa từ đó nhảy đến. |
| `'"`, `` `" ``   | Ví trí khi bạn thoát buffer lần gần nhất. |
| `'^`, `` `^ ``   | Vị trí bạn thực hiện chèn kí tự lần gần nhất. |
| `'.`, `` `. ``   | Vị trí bạn thực hiện thay đổi lần gần nhất. |
| `'(`, `` `( ``   | Bắt đầu câu hiện tại. |
| `')`, `` `) ``   | Kết thúc của câu hiện tại. |
| `'{`, `` `{ ``   | Bắt đầu của đoạn văn bản hiện tại. |
| `'}`, `` `} ``   | Kết thúc của đoạn văn bản hiện tại. |

Các marker cũng có thể được sử dụng trong một [phạm vi](#phạm-vi). Bạn hẳn 
là đã thấy điều này trước đây và tự hỏi ý nghĩa của nó là gì: Chọn một số đoạn 
văn bản bạn thích ở chế độ visual và nhấn `:`, dòng lệnh sẽ hiển thị, và được 
thêm sẵn vào phía trước như thế này `:'<,'>`, có nghĩa là lệnh sau sẽ nhận được 
một phạm vi mà bạn đã chọn với chế độ visual.

Sử dụng `:marks` để liệt kê tất cả marker mà bạn đã đánh dấu. Đọc thêm tất cả mọi 
thứ về đánh dấu trong `:h mark-motions`.

## Gợi ý code

Vim cung cấp nhiều loại gợi ý code tự động (completion) trong chế 
độ insert. Nếu có nhiều kết quả gợi ý phù hợp, vim sẽ hiện một popup để bạn có 
thể lựa chọn kết quả phù hợp với ý của mình.

Các loại gợi ý code điển thì là các thẻ (tag), các hàm (function) được import 
từ các module hoặc các thư viện (library), tên file, từ điển (dictionary) hoặc 
các từ đơn giản xuất hiện trong buffer hiện tại.

Vim cung cấp các mapping cho các loại gợi ý code và chúng đều bắt đầu với 
`<c-x>` (Hãy nhớ là bạn cần sử dụng chúng trong chế độ insert):

| Mapping | Phân loại | Xem thêm chi tiết |
|---------|------|--------------|
| `<c-x><c-l>` | toàn bộ dòng | `:h i^x^l` |
| `<c-x><c-n>` | các từ khóa trong file hiện tại | `:h i^x^n` |
| `<c-x><c-k>` | các từ khóa trong tùy chọn `'dictionary'` | `:h i^x^k` |
| `<c-x><c-t>` | các từ khóa trong tùy chọn `'thesaurus'` | `:h i^x^t` |
| `<c-x><c-i>` | các từ khóa trong các files hiện tại được mở | `:h i^x^i` |
| `<c-x><c-]>` | các thẻ (tags) | `:h i^x^]` |
| `<c-x><c-f>` | tên file | `:h i^x^f` |
| `<c-x><c-d>` | các định nghĩa (definitions) hoặc macros | `:h i^x^d` |
| `<c-x><c-v>` | các lệnh của Vim | `:h i^x^v` |
| `<c-x><c-u>` | người dùng tự định nghĩa (như đã được chỉ định trong `'completefunc'`) | `:h i^x^u` |
| `<c-x><c-o>` | omni completion (như đã được chỉ định trong `'omnifunc'`) | `:h i^x^o` |
| `<c-x>s`     | gợi ý chính tả | `:h i^Xs` |

Mọi người có lẽ sẽ nhầm lẫn về sự khác biệt giữa các gợi ý code do người dùng 
tự định nghĩa và omni completion, nhưng về mặt kĩ thuật, chúng đều làm những 
việc tương tự nhau. Chúng nhận một hàm kiểm tra vị trí hiện tại và trả về một 
danh sách gợi ý. Các gợi ý code do người dùng tự định nghĩa sẽ được định nghĩa 
theo mục đích cá nhân của người dùng đó. (Ngạc nhiên chưa!) Chúng có thể là bất 
cứ thứ gì. Omni gợi ý code thì có mục đích sử dụng cụ thể cho từng loại file, ví 
dụ như gợi ý các thành phần của struct, các phương thức (method) của class, và 
thường được cấu hình bởi các loại plugin cho từng loại file cụ thể.


Vim cũng cho phép thực hiện gợi ý code (completing) cho nhiều loại gợi ý code 
cùng một lúc bằng cách cấu hình cho cài đặt `'complete'`. Theo mặc định, cấu 
hình đó bao gồm khá nhiều thứ, vì vậy hãy nhớ loại bỏ bớt chúng để tối ưu theo 
sở thích của bạn. Bạn có thể kích hoạt gợi ý code bằng cách sử dụng `<c-n>`
(chọn gợi ý tiếp theo) and `<c-p>` (chọn gợi ý trước), đây cũng là các phím 
được sử dụng để chọn các lựa chọn trong popup menu. Xem `:h i^n` và 
`:h 'complete'` để có thêm nhiều thông tin bổ ích.

Bạn cũng phải xem qua `:h 'completeopt'` để biết cách cấu hình cách hoặt động 
của các popup menu. Cấu hình mặc định là khá tốt, nhưng tôi cũng thích thêm 
cài đặt "noselect" vào.

Xem thêm:

```
:h ins-completion
:h popupmenu-keys
:h new-omni-completion
```

## Chuyển động, các toán tử, các đối tượng văn bản

**Sự di chuyển (Motions)** giúp bạn di chuyển con trỏ của mình. Sau khi tập luyện qua vimtutor , 
các bạn đều biết các phím `h`/`j`/`k`/`l`. Hoặc `w` và `b`. Thậm chí cả phím 
`/` cũng là chuyển động. Chúng cũng có nhận cho mình số lần thực hiện. Ví dụ 
`2?the<cr>` sẽ di chuyển con trỏ đến lần xuất hiện gần thứ nhì của từ "the".

Xem qua `:h navigation` và tất cả những thứ bên dưới để biết tất cả các loại 
chuyển động khả dụng.

**Operators** hoạt động trên một vùng văn bản, một vài ví dụ như  `d`, `~`, `gU`, 
`>`. Chúng được sử dụng trong cả hai chế độ normal và visual. Ở chế độ normal, 
toán tử sẽ đi trước, kèm theo sau là một chuyển động, ví dụ `>j`. Trong chế độ 
visual, các toán tử chỉ đơn giản là để thực hiện các lựa chọn, ví như `Vjd`.

Giống như các chuyển động, các toán tử cũng nhận cho mình số lần thực hiện, ví dụ `2gUw`
sẽ viết hoa phần còn lại của từ hiện tại và từ tiếp theo. Vì các toán tử có số 
lần thực hiện, `2gU2w` cũng hoạt động giống như `gU2w` nhưng được thực hiện 2 
lần.

Xem `:h toán tử` để biết tất cả các toán tử khả dụng. Sử dụng `:set tildeop` 
để cho phím `~` hoạt động như một toán tử.

**Các đối tượng văn bản** hoạt động trên khu vực xung quanh chúng, trái ngược với 
các chuyển động chỉ hoạt động trên một hướng. Trên thực tế, chúng hoạt động trên 
các đối tượng (object), ví dụ: cả một từ, toàn bộ một câu, mọi thứ nằm trong 
dấu ngoặc đơn, v.v.

Các đối tượng văn bản không thể được sử dụng để di chuyển con trỏ trong chế độ 
normal, bởi vì ngay cả những con trỏ đỉnh cao nhất cũng không thể nhảy về 2 
hướng cùng một lúc. Mặc dù vậy, chúng hoạt động trong chế độ visual, vì khi đó 
một bên của đối tượng đã được chọn, và con trỏ chỉ đơn giản là nhảy sang bên 
còn lại.

Các đối tượng văn bản bắt đầu bằng `i` (_inner_) hoặc `a` (_around_) theo sau là 
một ký tự biểu thị đối tượng. Với `i`, chúng chỉ hoạt động trên chính đối 
tượng đó, còn với `a` chúng hoạt động trên đối tượng đó cộng với khoảng trắng 
đi theo sau đó. Ví dụ, `diw` sẽ xóa từ hiện tại và `ci(` thay đổi mọi thứ nằm 
bên trong dấu ngoặc đơn.

Các đối tượng văn bản cũng nhận vào số lượng. Hãy tưởng tượng `((( )))` và con 
trỏ trên hoặc giữa đấu ngoặc đơn trong cùng, thì `d2a(` sẽ xóa 2 cặp dấu ngoặc 
đơn bên trong và mọi thứ ở giữa chúng.

Xem thêm `:h text-objects` để biết tất cả các đối tượng văn bản khả dụng.

## Lệnh tự động

Bạn có thể kích hoạt một hành động sau các sự kiện (events) của Vim, chẳng hạn 
như khi buffer được lưu hoặc khi Vim đã khởi động, bằng thứ gọi là các lệnh tự 
động (_autocmds_).

Vim phụ thuộc rất nhiều vào các lệnh tự động. Không tin tôi ư? Thử chạy lệnh 
`:au` xem, nhưng bạn cũng đừng lo lắng với danh sách khổng lồ đó. Đó là tất cả 
các lệnh tự động đang có hiệu lực trong Vim của bạn.

Xem `:h {event}` để biết một cách tổng quan về các sự kiện có sẵn trong Vim và 
`:h autocmd-events-abc` để biết thêm chi tiết.

Một ví dụ điển hình sẽ là áp dụng các cài đặt riêng cho từng loại file khác nhau.

```vim
autocmd FileType ruby setlocal shiftwidth=2 softtabstop=2 comments-=:#
```

Nhưng làm sao một buffer có thể biết rằng nó đang chứa code Ruby? Bởi vì một 
lệnh tự động khác đã xác định nó và đặt loại file (filetype) phù hợp cho buffer 
đó rồi, điều này một lần nữa lại kích hoạt một sự kiện `FileType`;

Một trong những cài đặt đầu tiên mà mọi người thường thêm vào file cấu hình Vim 
của họ đó là `filetype on`. Điều này hiểu nôm na là `filetype.vim` được thực 
thi khi Vim khởi động, đặt các lệnh tự động để xác định loại file cho hều hết 
các loại file trên thế giới này :).

Nếu bạn đủ dũng cảm, hãy xem thử: `:e $VIMRUNTIME/filetype.vim`. Tìm "Ruby" và 
bạn sẽ thấy là Vim chỉ đơn giản sử dụng phần mở rộng của file (file extension) 
để xác định đó có phải một file Ruby hay không.

Lưu ý: Autocmds của cùng một sự kiện được thực thi theo thứ tự chúng được tạo.
Nếu bạn chạy lệnh `:au` chúng sẽ được liệt kê theo đúng thứ tự (từ trên xuống).

```vim
au BufNewFile,BufRead *.rb,*.rbw  setf ruby
```

Các sự kiện `BufNewFile` và `BufRead` trong trường hợp này được code cứng trong 
mã nguồn (ngôn ngữ C) và sẽ thực thi mỗi khi bạn mở một file với lệnh `:e` và 
các lệnh tương tự. Sau đó, hàng trăm loại file đều được `filetype.vim` kiểm tra.

Tóm lại, Vim sử dụng nhiều sự kiện và các lệnh tự động nhưng cũng chìa ra các 
interface gọn gàng để kết nối với hệ thống hướng sự kiện (event-driven system) 
của nó để chúng ta dễ dàng tùy biến.

Xem thêm: `:h autocommand`

## Danh sách thay đổi, danh sách nhảy

Vị trí của 100 sự thay đổi gần nhất được Vim lưu trữ trong danh sách thay đổi (
changelist). Một vài thay đổi nhỏ trên cùng một dòng sẽ được gộp lại với nhau,
tuy nhiên, ví trí thay đổi sẽ được lấy vị trí của thay đổi cuối cùng (trong 
trường hợp bạn đã thêm gì đó vào giữa một dòng).

Mỗi khi bạn nhảy con trỏ của mình đến một vị trí khác, vị trí trước đó sẽ được 
lưu vào danh sách nhảy (jumplist). Một danh sách nhảy có thể có tới 100 mục. 
Mỗi window sẽ có danh sách nhảy riêng của nó. Khi bạn tách một window, danh 
sách nhảy sẽ được sao chép theo.

Lệnh nhảy (nhảy) con trỏ là một trong các lệnh sau: `'`, `` ` ``, `G`, 
`/`, `?`, `n`, `N`, `%`, `(`, `)`, `[[`, `]]`, `{`, `}`, `:s`, `:tag`, `L`, 
`M`, `H` và các lệnh để bạn bắt đầu chỉnh sửa một file mới.

| Danh sách  | Lệnh để liệt kê  | Về vị trí trước đó   | Tới vị trí sau vị trí hiện tại |
|------------|------------------|----------------------|-----------------------|
| jumplist   | `:jumps`         | `[count]<c-o>`       | `[count]<c-i>`        |
| changelist | `:changes`       | `[count]g;`          | `[count]g,`           |

Khi bạn liệt kê tất cả các mục, một marker `>` sẽ được dùng để hiển thị vị trí 
hiện tại của bạn. Thông thường đó sẽ là bên dưới vị trí 1, vị trí gần nhất.

Nếu bạn muốn cả hai danh sách vẫn còn tồn tại sau khi bạn khởi động lại Vim, 
bạn cần sửa dụng file viminfo và `:h viminfo-`.

**Chú ý**: Vị trí lần nhảy mới nhất cũng được lưu trữ dưới dạng một 
[marker](#đánh-dấu) và có thể được nhảy đến với lệnh ``` `` ``` hoặc `''`.

Xem thêm:

```
:h changelist
:h jumplist
```

## Cây hoàn tác

Những thay đổi mới nhất của một văn bản đều được Vim ghi nhớ vào cây hoàn tác 
(Undo tree). Bạn có thể dử dụng _undo_ để hoàn tác một thay đổi và _redo_ để 
áp dụng lại thay đổi vừa hoàn tác.

Điều quan trọng mà bạn cần hiểu là cấu trúc dữ liệu để lưu trữ các thay đổi 
trong Vim không phải là [hàng đợi (queue)](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) 
mà là [cấu trúc cây (tree)](https://en.wikipedia.org/wiki/Tree_(data_structure))!. 
Các thay đổi của bạn sẽ là các nút (node) trong cây, và mỗi nút (trừ nút trên 
cùng), sẽ có một nút cha. Mỗi nút giữ thông tin về văn bản của bạn, và thời gian 
bạn đã thay đổi chúng. Một nhánh (branch) là một danh sách các nút bắt đầu từ 
nút bất kì nào đó và đi lên đến nút trên cùng (nút gốc). Các nhánh sẽ được tạo 
khi bạn hoàn tác một thay đổi và sau đó chèn một đoạn khác vào văn bản bạn vừa 
hoàn tác.

```
ifoo<esc>
obar<esc>
obaz<esc>
u
oquux<esc>
```

Bây giờ bạn có 3 dòng và cây hoàn tác của bạn sẽ trông như thế này:

```
     foo(1)
       /
    bar(2)
   /      \
baz(3)   quux(4)
```

Cây hoàn tác có 4 thay đổi. Các con số đại diện cho _thời gian_ các nút được tạo.

Bạn có hai cách để đi qua cây hoàn tác này, hãy gọi chúng là _branch-wise_ and
_time-wise_ (Duyệt cây theo nhánh hoặc theo thời gian).

Hoàn tác (`u`) và áp dụng lại (`<c-r>`) hoạt động theo nhánh. Chúng sẽ đi lên 
và xuống trong nhánh hiện tại. `u` sẽ hoàn tác lại nguyên trạng văn bản của nút 
"bar". Nhấn `u` một lần nữa sẽ hoàn tác lại nguyên trạng văn bản của nút xa hơn 
nữa đó là nút "foo". Tiếp theo, nếu bạn nhấn `<c-r>`, văn bản của bạn sẽ quay 
trở lại trạng thái của nút "bar", nhấn tiếp một lần nữa bạn sẽ có văn bản ở 
trạng thái của nút "baz". (Bạn không thể dùng lệnh để đi đến node "baz" bằng 
cách duyệt cây theo nhánh (branch-wise)).

Khác với việc duyệt theo nhánh, `g-` và `g+` duyệt cây theo thời gian. Do đó, 
`g-` không hoàn tác trạng thái của văn bản về nút "bar", giống như khi bạn dùng 
`u`, mà nó sẽ hoàn tác về trạng thái trước đó theo thời gian, nghĩa là nút "baz".
Nhấn `g-` một lần nữa sẽ hoàn tác văn bản về trạng thái của nút "bar", và cứ thế 
tiếp tục. Vì vậy `g-` và `g+` chỉ đơn giản là hoàn tác về trạng thái trước tuần 
tự theo thời gian.

| Lệnh / Mapping | Hành động |
|-------------------|--------|
| `[count]u`, `:undo [count]` | Hoàn tác thay đổi [số] lần. |
| `[count]<c-r>`, `:redo` | Áp dụng lại thay đổi [số] lần. |
| `U` | Hoàn tác tất cả các thay đổi đối với dòng được thay đổi gần nhất. |
| `[count]g-`, `:earlier [count]?` | Chuyển đến trạng thái của văn bản trước đó [số] lần. Trong đó "?" có thể là "s", "m", "h", "d", hoặc "f". Ví dụ: `:earlier 2d` sẽ hoàn tác văn bản về trạng thái của 2 ngày trước. `:earlier 1f` sẽ hoàn tác văn bản về trạng thái của lần lưu gần nhất. |
| `[count]g+`, `:later [count]?` | Giống như trên, nhưng theo hướng ngược lại. |

Cây hoàn tác được Vim lưu trữ trong bộ nhớ và sẽ bị xóa khi bạn thoát Vim. Xem 
thêm [Hoàn tác file](#hoàn-tác-file) để biết thêm chi tiết.

Nếu bạn cảm thấy khó khăn với cây hoàn tác, 
[undotree](https://github.com/mbbill/undotree) sẽ giúp bạn hiểu cây hoàn tác 
với cái nhìn trực quan hơn.

Xem thêm:

```
:h undo.txt
:h usr_32
```

## Danh sách sửa lỗi nhanh và danh sách vị trí

Danh sách Sửa lỗi nhanh (Quickfix) là một cấu trúc dữ liệu chứa vị trí của các 
file. Về cơ bản, mỗi mục trong danh sách sửa lỗi nhanh sẽ liệt kê đường dẫn của một 
file, số thứ tự của một dòng, cột và một mô tả.

Các trường hợp sử dụng điển hình là để tập hợp các lỗi biên dịch hoặc kết quả 
của một công cụ grep (Tìm nội dung trong file).

Vim có một loại buffer đặc biệt để hiển thị danh sách sửa lỗi nhanh: bộ đệm sửa 
lỗi nhanh (quickfix bufer).  Mỗi dòng trong buffer sửa lỗi nhanh hiển thị một mục 
từ danh sách sửa lỗi nhanh.

Thông thường, bạn sẽ mở một window mới để hiển thị danh sách sửa lỗi nhanh. Khi 
bạn làm điều đó, window được sử dụng lần gần nhất sẽ được liên kết với cửa sổ 
sửa lỗi nhanh (quickfix window).

Trong buffer sửa lỗi nhanh, dùng `<cr>` để mở một mục đang được chọn trong 
window đang được liên kết và `<c-w><cr>` để mở mục đó trong một window mới.

Danh sách sửa lỗi nhanh được đặt tên theo tính năng "quick fix" của 
[Aztec C compiler](https://en.wikipedia.org/wiki/Aztec_C).

Trên thực tế, có hai loại danh sách: danh sách sửa lỗi nhanh (quickfix) và danh 
sách vị trí (location list). Chúng hoạt động gần như giống nhau, nhưng có các 
điểm khác biệt sau:

- Chỉ có thể có một danh sách sửa lỗi nhanh duy nhất. Nhưng có thể có nhiều 
danh sách vị trí; mỗi danh sách tương ứng với một window.
- Chúng sử dụng các lệnh hơi khác nhau để điều hướng.

| Hành động      | Sửa lỗi nhanh | Vị trí       |
|----------------|---------------|--------------|
| mở window      | `:copen`      | `:lopen`     |
| đóng window    | `:cclose`     | `:lclose`    |
| mục tiếp theo  | `:cnext`      | `:lnext`     |
| mục trước đó   | `:cprevious`  | `:lprevious` |
| mục đầu tiên   | `:cfirst`     | `:lfirst`    |
| mục cuối cùng  | `:clast`      | `:llast`     |

Lưu ý rằng các cửa sổ định vị và sửa lỗi nhanh không cần phải mở để các lệnh 
này có thể hoạt động.

Xem thêm `:h quickfix` để có thêm nhiều thông tin chi tiết và danh sách các 
lệnh đầy đủ.

Để ngắn gọn, _quickfix_ và _location_ thường được viết tắt là _qf_ và _loc_.

Ví dụ**:

Hãy dùng `grep` để tìm kiếm các file trong thư mục hiện tại cho một truy vấn 
nhất định nào đó và đưa kết quả tìm được vào danh sách sửa lỗi nhanh.

```vim
:let &grepprg = 'grep -Rn $* .'
:grep! foo
<grep output - hit enter>
:copen
```

Giả sử tất cả các file đều chứa chuỗi "foo", cửa sổ sửa lỗi nhanh sẽ được hiển 
thị với các kết quả từ grep.

## Macros

Vim cho phép bạn _ghi lại_ các ký tự đã nhập vào [bộ ghi nhớ](#bộ-ghi-nhớ).
Vim cho phép _ ghi âm_ các ký tự đã nhập vào [sổ đăng ký] (# đăng ký). Đó là 
một cách tuyệt vời để tự động hóa một số tác vụ mà bạn phải làm đi làm lại. 
(Đối với các tác vụ phức tạp hơn, bạn nên sử dụng VimScript để thay thế.)

- Bắt đầu ghi lại hành động của bạn bằng cách nhấn phím `q` theo sau là tên bộ 
ghi, ví dụ : `q`. (Thanh trạng thái lúc này sẽ hiển thị "recording @q".)
- Kết thúc quá trì ghi bằng cách nhấn phím `q` một lần nữa.
- Chạy macro vừa ghi với `[số lượng]@q`. Ví dụ `2@q` sẽ chạy cách lệnh bạn vừa 
ghi lại 2 lần.
- Lặp lại macro được sử dụng lần gần nhất với `[số lần]@@`.

**Ví dụ 1:**

Chèn một dòng và lặp lại nó 10 lần:

```
qq
iabc<cr><esc>
q
10@q
```

(Ví dụ trên cũng có thể được thực hiện mà không cần macro: `oabc <esc> 10. ')

**Ví dụ 2:**

Để thêm số thứ tự vào trước tất cả các dòng, bạn hãy tự thêm "1." vào dòng đầu 
tiên. Tăng số đang hiển thị tại con trỏ bằng cách sử dụng `<c-a>`, lệnh này có 
thể được viết dưới dạng `^A`.

```
qq
0yf jP0^A
q
1000@q
```

Ở đây, chúng ta giả định rằng file không chứa nhiều hơn 1000 dòng khi sử 
dụng `1000 @ q`, nhưng chúng ta cũng có thể sử dụng macro_ đệ quy, nó sẽ thực 
thi cho đến khi không thể áp dụng macro cho một dòng nữa:

```
qq
0yf jP0^A@q
q
@q
```

(Ví dụ trên cũng có thể được thực hiện mà không cần macro: `:%s/^/\=line('.') . '. '`)

Lưu ý rằng tôi cũng chỉ bạn cách làm tương tự với những ví dụ trên mà không cần 
phải sử dụng macros, nhưng chúng chỉ thích hợp với những công việc đơn giản. 
Đối với những công việc cần thực hiện tự động nhưng phức tạp hơn, macros mới 
chính là thứ bạn cần.

Bạn cũng nên xem: [Chỉnh sửa nhanh macros của bạn](#chỉnh-sửa-nhanh-macros-của-bạn)

Xem thêm:

```
:h recording
:h 'lazyredraw'
```

## Bảng màu

Bảng màu (Colorschemes) là cách bạn áp dụng màu sắc cho Vim của bạn. Vim được 
cấu thành từ nhiều thành phần (component) và mỗi thành phần có thể được tùy 
chỉnh với các màu sắc khác nhau cho màu chữ, màu nền của chữ và một số thuộc 
tính khác như in đậm chữ, v.v. Chúng có thể được thiết lập như sau:

```vim
:highlight Normal ctermbg=1 guibg=red
```

Lệnh trên sẽ tô màu nền thành màu đỏ cho trình soạn thảo của bạn. Xem 
`:h :highlight` để biết thêm chi tiết.

Vì vậy, các bảng màu hầu như đều là tập hợp các lệnh cho `:highlight`.

Trên thực tế, hầu hết các bảng màu thực sự đều là 2 bảng màu! Ví dụ trên cài 
đặt màu thông qua `ctermbg` và `guibg`. Theo định nghĩa của thì (`cterm*`) sẽ 
chỉ được áp dụng nếu bạn khởi động Vim từ terminal, ví dụ: xterm. Còn (`gui*`)
sẽ được sử dụng khi bạn sử dụng Vim với giao diện đồ họa, như là gvim hoặc 
MacVim.

Nếu bạn từng sử dụng một bảng màu trong khi mở Vim trong terminal, và các màu 
sắc không trông giống như màu được cung cấp trong screenshot demo, thì rất có 
thể bảng màu đó chỉ định nghĩa các màu cho Vim với giao diện đồ họa. Ngược lại, 
nếu bạn sử dụng Vim với giao diện đồ họa (ví dụ gvim hoặc MacVim) và các màu 
sắc trông không giống như màu mẫu, thì rất có thể bảng màu chỉ định nghĩa màu 
sắc cho Vim chạy trên terminal.

Trường hợp thứ hai có thể được "giải quyết" bằng cách bắt chế độ màu sắc trung 
thực (true colors) trên Neovim hoặc Vim có phiên bản 7.4.1830 hoặc mới hơn. 
Điều này làm cho Vim chạy dưới terminal sẽ sử dụng các định nghĩa của Vim với 
giao diện thay cho các định nghĩa mặc định, nhưng đồng thời việc này cũng yêu 
cầu bản thân terminal cũng như các phần mềm trung gian (ví dụ: tmux) phải có 
khả năng xử lý màu sắc thực (true color). 
([Hãy xem gist này](https://gist.github.com/XVilka/8346728) để có thêm nhiều 
thông tin về vấn đề này.)

Xem thêm:

- `:h 'termguicolors'`
- [Danh sách bảng màu](PLUGINS.md#các-bảng-màu)
- [Thay đổi màu sắc](#thay-đổi-màu-sắc)

## Thu gọn Code

Mọi văn bản (hoặc mã nguồn) đều có một cấu trúc (structure) nhất định. Nếu văn 
bản, mã nguồn code của bạn có một cấu trúc, điều đó có nghĩa là bạn có các 
vùng văn bản được phân tách một cách hợp lý. Thu gọn code, hay còn gọi là gấp 
code (folding) cho phép bạn "thu gọn" một vùng như vậy thành một dòng duy nhất 
và chỉ hiển thị một mô tả ngắn. Có nhiều lệnh trong Vim có thể hoạt động trên các 
vùng này, mỗi vùng thường được gọi là các _fold_. Các fold có thể được lồng vào 
nhau.

Vim phân biệt giữa một số loại phương pháp thu gọn code:

| 'phương thức thu gọn (fold method)' | Cách sử dụng |
|--------------|-------|
| diff         | Used in diff windows to fold unchanged text. |
| expr         | Uses `'foldexpr'` to basically create a new fold method. |
| indent       | Folds based on indentation. |
| manual       | Create folds yourself via `zf`, `zF`, and `:fold`. |
| marker       | Folds based on markers in the text (often in comments). |
| syntax       | Folds based on syntax, e.g. folding `if` blocks. |

**LƯU Ý**: Việc thu gọn code có thể cần rất nhiều xử lý! Nếu bạn gặp bất kỳ hạn chế 
nào về hiệu suất (độ trễ khi nhập liệu), hãy xem plugin 
[FastFold](https://github.com/Konfekt/FastFold), plugin này ngăn Vim cập nhật 
các fold khi không cần thiết.

Xem thêm:

```
:h usr_28
:h folds
```

## Phiên làm việc

Nếu bạn lưu một **view** (Xem `:h :mkview`), trạng thái hiện tại của window (cũng 
như các cài đặt và mapping của nó) cũng sẽ được lưu để sử dụng sau này 
(`:h :loadview`).

Một phiên làm việc sẽ lưu các view của tất cả các window và cả các cài đặt 
chung. Về cơ bản, nó sẽ tạo một snapshot của phiên làm việc hiện tại của bạn và 
lưu trong trong một file. Để tôi nhấn mạnh điều này: Vim sẽ lưu trạng thái hiện 
tại; mọi thứ được thực hiện sau khi bạn lưu một phiên làm việc sẽ không nằm 
trong file lưu trữ phiên làm việc, tức chúng sẽ không được lưu lại. Để 
"cập nhật" một phiên làm việc, chỉ cần lưu lại.

Điều này giúp bạn dễ dàng lưu lại, cũng như chuyển đổi qua lại giữa các _dự án_ 
của mình.

Thử ngay đi! Mở một vài window, tab, và dùng lệnh `:mksession Foo.vim`. Nếu bạn 
không điền tên file, `Session.vim` sẽ mặc định được dùng. File này sẽ được lưu 
vào thư mục làm việc hiện tại của bạn, xem `:pwd`. Khởi động lại Vim là nhập 
`source Foo.vim` và bất ngờ chưa, danh sách buffer, bố trí của các window, các 
mapping, thư mục làm việc hiện tại, v.v. sẽ giống y chang lúc bạn lưu phiên làm 
việc. Làm một vài thứ, và chập nhật phiên làm việc bằng cách ghi đè lên file 
lưu trữ phiên làm việc đã tồn tại với lệnh `:mksession! Foo.vim`.

Lưu ý rằng một file lưu trữ phiên làm việc thực sự chỉ là một tập hợp của các 
lệnh trong vim để khôi phục lại trạng thái của Vim khi bạn thực hiện lưu phiên 
làm việc. Vì vậy hãy xem: `:vs Foo.vim`.

Bạn có thể cho Vim biết những gì cần lưu trong một phiên bản với cài đặt 
`'sessionoptions'`.

Đối với việc viết code, Vim sẽ giữ tên của phiên làm việc được áp dụng hoặc lưu 
lại lần cuối vào biến cục bộ (internal variable) `v:this_session`.

Xem thêm:

```
:h Session
:h 'sessionoptions'
:h v:this_session
```

## Tính cục bộ

Nhiều khái niệm được đề cập ở trên cũng có các phiên bản chạy _cục bộ_:

| Toàn cục   | Cục bộ | Phạm vi | Xem thêm |
|------------|--------|-------|------|
| `:set`     | `:setlocal`           | buffer or window | `:h local-options`    |
| `:map`     | `:map <buffer>`       | buffer           | `:h :map-local`       |
| `:autocmd` | `:autocmd * <buffer>` | buffer           | `:h autocmd-buflocal` |
| `:cd`      | `:lcd`                | window           | `:h :lcd`             |
| `<leader>` | `<localleader>`       | buffer           | `:h maplocalleader`   |

[Các biến (variables) cũng có các phạm vi khác nhau](https://vimhelp.appspot.com/usr_41.txt.html#41.2).

# Cách sử dụng

## Nhận trợ giúp ngoại tuyến

Vim đi kèm với một bộ tài liệu tuyệt vời dưới dạng các file văn bản đơn lẻ và 
có bố cục đặc biệt. Vim sử dụng một hệ thống dựa trên các thẻ (tag) để truy cập 
các phần nhất định của một file tài liệu.

Trước hết, bạn hãy đọc: `:help :help`. Chạy lệnh trên sẽ mở file 
`$VIMRUNTIME/doc/helphelp.txt` trong một window mới và nhảy tới thẻ `:help` 
trong file đó.

Một vài quy tắc đơn giản:

- Các cài đặt được đặt trong dấu ngoặc kép, ví dụ: `:h 'textwidth'`
- Các hàm trong ngôn ngữ Vim kết thúc bằng `()`. Ví dụ: `:h reverse()`
- Các lệnh bắt đầu với `:`, ví dụ `:h :echo`

Bạn có thể dùng `<c-d>` (tức <kbd>ctrl</kbd>+<kbd>d</kbd>) để liệt kê tất cả 
các thẻ phù hợp với lệnh đang được nhập. Ví dụ: `:h tag <c-d>` sẽ cung cấp cho 
bạn danh sách tất cả các thẻ từ `tab`, `'softtabstop'` cho tới 
`setting-guitablabel`.

Nếu bạn muốn liệt kê tất cả các hàm trong Vim? Đơn giản thôi, chỉ cần dùng 
`:h ()<c-d>`. Bạn muốn liệt kê tất cả các hàm trong vim có liên quan đến window?
 Hãy dùng `:h win*()<c-d>`.

Những điều này sẽ dần trở nên tự nhiên với bạn hơn, nhưng đặc biệt là khi mới 
bắt đầu, đôi khi bạn sẽ không biết bất kì thứ gì về các thẻ mà bạn cần tìm. Bạn 
chỉ cần tưởng tượng ra một từ khóa có liên quan là được. `:helpgrep` sẽ giúp 
ích cho bạn.

```
:helpgrep backwards
```

Lệnh trên sẽ tìm từ "backwards" trong tất cả các file tài liệu và nhảy tới file 
đầu tiên có chứ từ "backwards". Các kết quả tìm được sẽ được tập hợp trong danh 
sách sửa lỗi nhanh (quickfix). Sử dụng `:cn`/`:cp` để nhảy qua lại giữa các kết 
quả tìm được. Hoặc dùng `:copen` để mở một window sửa lỗi nhanh (quicfix window),
điều hướng đến một kết quả và nhấn `<cr>` để nhảy đến file tài liệu ứng với kết 
quả đó. Xem thêm `:h quickfix` để biết thêm chi tiết.

## Nhận trợ giúp ngoại tuyến (cách khác)

Danh sách sày được tổng hợp bởi @chrisbra, một trong những là phát triển Vim 
tích cực nhất và nó được đăng trên 
[vim_dev](https://groups.google.com/forum/#!forum/vim_dev).

Đây là phiên bản của vim-galore với một vài thay đổi nhỏ.

---

Thông thường, nếu bạn biết bạn đang tìm gì, thì bạn sẽ dễ dàng tìm kiếm chúng 
bằng cách sử dụng hệ thống trợ giúp của Vim.Vì các chủ đề được sắp xếp tuân 
theo một phong cách trình bày nhất định.

Ngoài ra, hệ thống trợ giúp của Vim sẽ có lợi thế nhất định phụ thuộc vào phiên 
bản Vim mà bạn đang sử dụng, vì vậy, các chủ đề chủ đề lỗi thời hoặc được thêm 
vào mà không phù hợp với phiên bản Vim mà bạn đang sử dụng sẽ không xuất hiện.

Do đó, điều cần thiết ở đây là bạn phải tìm hiểu hệ thống trợ giúp của Vim và 
ngôn ngữ mà nó sử dụng. Đây là một số ví dụ (không đảm bảo là sẽ đầy đủ vì có 
thể tôi đã quên một vài thứ).

1. Các cài đặt được đặt trong dấu nháy đơn. Vì vậy, bạn hãy sử dụng `:h 'list'` 
   để chuyển đến danh sách các cài đặt của file trợ giúp đó. Nếu bạn biết chính 
   xác cài đặt nào mà bạn muốn xem, bạn có thể dùng `:h options.txt` để mở 
   trang trợ giúp mô tả tất cả các cài đặt và lúc đó bạn có thể sử dụng việc 
   tìm kiếm bằng biểu thức chính quy (regular expressions), ví dụ `/width`. Một 
   số tùy chọn có namespace riêng, ví dụ: `:h cpo-a`, `:h cpo-A`, `:h cpo-b`.
   v.v

2. Các lệnh ở chế độ bình thường thì cũng chỉ có vậy. Hãy dùng lệnh `:h gt` để 
   xem trang trợ giúp của lệnh "gt".

3. Các biểu thức chính quy (regex) luôn bắt đầu bằng "/", vì vậy `:h / \ +` sẽ 
   đưa bạn đến mục trợ giúp cho bộ định lượng "\ +" của các biểu thức chính quy 
   trong Vim. Nếu bạn cần biết bất kỳ điều gì về biểu thức chính quy (regex), 
   hãy đọc tại `:h pattern.txt`.

4. Về các tổ hợp phím. Chúng thường bắt đầu bằng một chữ cái cho biết chế độ mà 
   chúng có thể được sử dụng. Ví dụ. `:h i_CTRL-X` đưa bạn đến tập các lệnh 
   CTRL-X cho chế độ insert, các lệnh này có thể được sử dụng để tự động hoàn 
   thành các công việc khác nhau. Lưu ý rằng một số từ khóa nhất định sẽ luôn 
   được viết giống nhau, ví dụ: Control sẽ luôn là CTRL. Lưu ý, đối với các 
   lệnh ở chế độ normal, chữ "n" sẽ được lược bỏ đi, ví dụ `:h CTRL-A`. Ngược 
   lại, `:h c_CTRL-R` sẽ mô tả CTRL-R làm gì khi nhập lệnh trong dòng lệnh 
   (command line) và `:h v_Ctrl-A` mang ý nghĩa tăng dần một số trong chế độ 
   visual và `:h g_CTRL-A` đại diện cho lệnh g<C-A> (Do đó bạn phải nhấn "g" 
   rồi nhấn <Ctrl-A>). Ở đây, "g" đại diện cho lệnh "g" thông thường, lệnh "g" 
   luôn chờ cho một phím thứ hai được nhấn sau nó để thực hiện một hành động 
   nào đó, tương tự như các lệnh bắt đầu bằng "z".

5. Các bộ ghi nhớ (registers) luôn bắt đầu với "quote", vì vậy hãy sử dụng 
   `:h quote` để tìm hiểu thêm về bộ ghi nhớ đặc biệt ":".

6. Ngôn ngữ lập trình Vim (Vim Script, VimL) có sẵn tại `:h eval.txt`. Một số 
   khía cạnh của ngôn ngữ này có sẵn tại `:h expr-X`, trong đó 'X' là một chữ 
   cái đơn lẻ. Ví dụ `:h expr-!` sẽ đưa bạn để chủ đề mô tả về toán tử '!' (not) 
   trong VimL. Một phần cũng quan trọng khác đó là function-list, hãy xem 
   `:h function-list` để tìm các mô tả ngắn ngọn về tất cả các hàm có sẵn trong 
   VimL.

7. Các mapping được đề cập trong trang trợ giúp `:h map.txt`. Sử dụng 
   `:h mapmode-i` để tìm hiểu về lệnh `:imap`. Bạn cũng nên dùng lệnh
   `:map-topic` để tìm hiểu thêm về một số chủ đề phụ cụ thể cho mapping 
   (ví dụ: `:h :map-local` để tìm hiểu về mapping cho buffer cục bộ 
   (buffer-local mappings) hoặc `:h mapbar` để biết cách xử lý của '|' trong 
   mapping)

8. Định nghĩa của các lệnh được đề cập tại `:h command-*`, vì vậy hãy dùng lệnh 
   `:h command-bar` để tìm hiểu thêm về đối số '!' cho các lệnh được tùy chỉnh.

9. Các lệnh để quản lý window (cửa sổ, khung nhìn) luôn bắt đầu với CTRL-W, vì 
   vậy bạn có thể tìm những tài liệu tương ứng tại `:h CTRL-W_*` 
   (Ví dụ `:h CTRL-W_p` để nhảy đến cửa sổ được truy cập lần gần nhất). Bạn 
   cũng có truy cập `:h windows.txt` và đọc thêm về các lệnh xử lý window mà 
   bạn cần sử dụng.

10. Các lệnh Ex luôn bắt đầu bằng ":", vì vậy hãy dùng lệnh `:h :s` để đọc thêm 
    về lệnh ":s".

11. Sử dụng CTRL-D sau khi truy cập một chủ đề (tài liệu) và để vim cố gắng 
    hoàn thành tất cả các chủ đề có sẵn.

12. Sử dụng `:helpgrep` để tìm kiếm trong tất cả các trang trợ giúp (thông 
    thường sẽ kèm cả các trang trợ giúp của các plugin mà bạn đã cài.). Xem 
    `:h :helpgrep` để biết cách sử dụng. Khi bạn đã tìm kiếm một chủ đề nào đó, 
    tất cả các kết quả trùng khớp sẽ được hiển thị trong một window hiển thị 
    danh sách sửa lỗi nhanh (quickfix) hoặc danh sách vị trí (location) mà bạn 
    có thể mở lên bằng cách dùng lệnh `:copen` hoặc `:lopen`. Sau đó bạn có thể 
    dùng `/` để tìm kiếm cụ thể hơn trong danh sách kết quả đang hiển thị.

13. `:h helphelp` có chứa các nội dung để bạn sử dụng trợ giúp trong vim tốt hơn.

14. Phần hướng dẫn sử dụng trong vim mô tả các chủ đề trợ giúp cho những người 
    mới bắt đầu bằng một cách khá thân thiện.. Bắt đầu với lệnh `:h usr_toc.txt` 
    để xem mục lục. Lướt qua mục lục để tìm chủ đề cụ thể nào đó bạn cần. Ví dụ
    bạn sẽ tìm thấy một mục "Digraphs" và 'Entering special characters' trong 
    chường 24 (Do đó, hãy dùng `:h usr_24.txt` để đi đến trang trợ giúp cụ thể 
    đó)

15. Các nhóm để nhận diện highlight (highlighting groups) luôn bắt đầu với `hl-*`.
    Ví dụ: `:h hl-WarningMsg` nói về nhóm nhận diện màu sắc "WarningMsg".

16. Nhận diện syntax (Syntax highlighting) được đặt tên theo cú pháp ":syn-topic".
    Ví dụ `:h :syn-conceal` nói về đối số conceal cho lệnh :syn.

17. Các lệnh thuộc nhóm lệnh sửa lỗi nhanh (quickfix) thường bắt đầu với ":c", 
    còn đối với danh sách vị trí (location list) thì là ":l".

18. Lệnh `:h BufWinLeave` nói về lệnh tự động BufWinLeave. Ngoài ra, 
    `:h autocommands-events` nói về tất cả các sự kiện có thể xảy ra.

19. Các đối số (arguments) để khởi động Vim luôn bắt đầu với "-", vì vậy `:h -f` 
    sẽ dẫn bạn đến trang trợ giúp của lệnh "-f" trong Vim.

20. Các tính năng bổ sung được biên dịch sẵn vào Vim luôn bắt đầu bằng "+", vì 
    vậy lệnh `:h +conceal` sẽ dẫn bạn đến trang trợ giúp nói về tính năng 
    conceal trong Vim.

21. Các mã lỗi cũng có thể được tìm kiếm trực tiếp trong các trang hướng dẫn. 
    Lệnh `:h E297` sẽ trực tiếp dẫn bạn đến phần mô tả của các lỗi. Tuy nhiên, 
    đôi khi các mã lỗi không được mô rả, mà được liệt kê trong lệnh Vim sẽ 
    thường gây ra lỗi đó. Ví dụ: `:h hE128` sẽ trực tiếp dẫn bạn đến trang trợ 
    giúp của lệnh `:function`;

22. Tài liệu cho các cú pháp có sẵn của các file thường có sẵn tại 
    `:h ft-*-syntax`. Ví dụ: `:h ft-c-syntax` nói về cú pháp của file C và các 
    các đặt mà nó cung cấp. Đôi khi, các phần bổ sung thêm cho tính năng gợi 
    ý code omni completion (Xem `:h ft-php-omni`) hoặc các plugin dành cho loại 
    file (`:h ft-tex-plugin`) có sẵn.

Also, a link to the user documentation (which describes certain commands more
from a user perspective and less detailed) will be mentioned at the top of help
pages if they are available. So `:h pattern.txt` mentions the user guide topics
`:h 03.9` and `:h usr_27`.

Ngoài ra, liên kết đến tài liệu sử dụng (thường sẽ mô tả một số lệnh nhất định 
từ góc đội người dùng và ít được chi tiết hơn) sẽ được đề cập ở đầu trang trợ 
giúp nếu như chúng có sẵn. Vì vậy tài liệu `:h pattern.txt` sẽ đề cập đến các 
chủ đề hướng đẫn sử dụng `:h 03.9` và `:h usr_27`.

## Nhận trợ giúp trực tuyến

Nếu bạn có một vấn đề không thể giải quyết hoặc bạn cần sự hướng dẫn cụ thể, 
vui lòng xem danh sách mailing 
[vim_use](https://groups.google.com/forum/#!forum/vim_use)

Bạn có thể truy cập một nguồn tài liệu tuyệt vời khác bằng cách sử dụng
[IRC](https://de.wikipedia.org/wiki/Internet_Relay_Chat). Kênh chat `#vim` trên
[Freenode](https://freenode.net) luôn có những người sẵn sàng giúp đỡ bạn.

Nếu bạn muốn báo cáo một lỗi của Vim, sử dụng mailing list 
[vim_dev](https://groups.google.com/forum/#!forum/vim_dev).

## Sử dụng lệnh tự động trong thực tế

Bạn có thể kích hoạt bất kì sự kiện nào ngay bây giờ với lệnh 
`:doautocmd BufRead`.

### Các sự kiện người dùng

Đặc biệt là đối với các plugin, sẽ hữu dụng hơn nếu bạn tạo các sự kiện "Người 
dùng" cho riêng bạn.

```vim
function! Chibby()
  " A lot of stuff is happening here.
  " And at last..
  doautocmd User ChibbyExit
endfunction
```

Bây giờ những người sử dụng plugin của bạn có thể thực thi bất cứ thứ gì sau 
khi hàm Chibby được thực thi bằng cách dùng lệnh:

```vim
autocmd User ChibbyExit call ChibbyCleanup()
```
Nhân tiện, nếu không "tìm thấy" lệnh tự động nào, :doautocmd sẽ xuất ra thông 
báo "No matching autocommands" (Không có lệnh tự động nào phù hợp). Đó là lý do 
tại sao nhiều plugin sử dụng `silent doautocmd ...`. Nhưng điều này lại có 
nhược điểm đó là bạn không thể sử dụng `echo "foo"` trong lênh tự động :autocmd, 
mà bạn cần phải sử dụng `unsilent echo "foo"` để xuất một thông báo cho những 
người sử dụng plugin của mình.

Đó là lý do tại sao bạn nên kiểm tra liệu sự kiện đó có nhận các lệnh tự động 
hay không, và không nên làm ảnh hưởng sự kiện này, ví dụ:

```vim
if exists('#User#ChibbyExit')
  doautocmd User ChibbyExit
endif
```

Xem thêm: `:h User`

### Các lệnh tự động lồng vào nhau

Theo mặc định, các lệnh tự động (autocmd) không lồng vào nhau! Nếu lệnh tự động 
thực thi một lệnh, nó thường sẽ kích hoạt một sự kiện khác, điều đó trên thực 
tế lại không xảy ra.

Giả sử, mỗi khi bạn khởi động Vim, bạn muốn Vim tự động mở file cấu hình vimrc 
của mình:

```vim
autocmd VimEnter * edit $MYVIMRC
```

Bây giờ nếu bạn khởi động Vim, Vim sẽ mở file vimrc của bạn, nhưng điều đầu
tiên mà bạn nhận ra là bây giờ nội dung của bạn không được tô màu (highlighting) 
như mọi khi bạn mở file vimrc của mình.

Vấn đề ở đây là: lệnh `:edit` trong ví dụ trên sẽ không kích hoạt sự kiện 
"BufRead", do đó Vim sẽ không thể xác nhận bạn đang mở loại file nào. Vì vậy 
file `$VIMRUNTIME/syntax/vim.vim` sẽ không bao giờ được thực thi. 

Xem thêm `:au BufRead *.vim`. Và thay vì sử dụng ví dụ trên, hãy sử dụng:

```vim
autocmd VimEnter * nested edit $MYVIMRC
```

Xem thêm: `:h autocmd-nested`

## Clipboard

Clipboard (Bộ nhớ sao chép tạm thời) cần 
[tính năng](#bạn-đang-sử-dụng-phiên-bản-vim-nào): `+clipboard` và tùy chọn  
`+xterm_clipboard` nếu bạn muốn sử dụng `'clipboard'` trên một hệ thống Unix 
với Vim không hỗ trợ giao diện (không hỗ trợ GUI).

Xem thêm:

```
:h 'clipboard'
:h gui-clipboard
:h gui-selections
```

Xem thêm: 
[Dán nội dung trong ngoặc (hoặc tại sao tôi phải đặt lệnh 'dán' mọi lúc?)](#dán-nội-dung-trong-ngoặc-hoặc-tại-sao-tôi-phải-đặt-lệnh-dán-mọi-lúc)

### Sử dụng Clipboard (Windows, macOS)

Windows hỗ trợ sẵn 
[clipboard](https://msdn.microsoft.com/en-us/library/windows/desktop/ms649012(v=vs.85).aspx)
và macOS hỗ trợ 
[pasteboard](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/PasteboardGuide106/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008100-SW1).

Cả hai đều hoạt đồng bình thường như chúng ta mong đợi. Bạn sao chép văn bản đã 
chọn với `ctrl+c`/`cmd+c` và dán chúng vào một ứng dụng khác với lệnh 
`ctrl+v`/`cmd+v`.

Lưu ý rằng văn bản đã sao chép thực sự được chuyển vào clipboard, vì vậy bạn có 
thể đóng ứng dụng mà bạn vừa sao chép văn bản đó trước khi dán nội dung vừa sao 
chép vào một ứng dụng khác mà không có vấn đề gì.

Bất cứ khi nào bạn thực hiện sao chép với clipboard trong Vim, bộ ghi nhớ 
(register) `*` sẽ được lấp đầy với đoạn văn bản mà bạn đang chọn. Sử dụng `"*y` 
và `"*p` để sao chép và dán từ clipboard.

Nếu bạn không muốn Vim lúc nào cũng lưu nội dung bạn sao chép vào bộ ghi nhớ 
`*`, thêm đoạn sau vào file cấu hình vimrc của bạn:

```vim
set clipboard=unnamed
```

Thông thường thì tất cả các hành động sao chép/xóa/dán sẽ được lưu vào bộ ghi 
nhớ `"`, lúc này thì bộ ghi nhớ `*` được sử dụng cho hành động tương tự, do đó 
chỉ cần nhấn `y` và `p` là đủ để thực hiện hành động sao chép và dán văn bản.

Để tôi nhắc lại: Khi bạn thiết lập cài đặt phía trên, mỗi khi bạn sao chép/dán, 
thận chí khi bạn sử dụng trong cùng một window của Vim, các hành động sao chép/
dán đó sẽ thay đổi clipboard. Hãy tự mình quyết định xem cài đặt này có hữu 
ích hay không.

Nếu bạn quá lười để nhấn `y`, bạn có thể lưu tất cả những lần bạn lựa chọn văn 
bản trong chế độ visual vào clipboard bằng cách sử dụng các cài đặt:

```vim
set clipboard=unnamed,autoselect
set guioptions+=a
```

Xem thêm:

```
:h clipboard-unnamed
:h autoselect
:h 'go_a'
```

### Sử dụng Clipboard (Linux, BSD, ...)

Nếu hệ điều hành của bạn sử dụng [X](http://www.x.org/wiki), thì có một chút 
khác biệt . X sử dụng [X Window System 
Protocol](http://www.x.org/releases/X11R7.7/doc/xproto/x11protocol.html) từ 
phiên bản 11 từ năm 1987, do đó, thường thường người ta hay gọi X là X11.

Trước đó, ở phiên bản X10, [cut
buffers](http://www.x.org/releases/X11R7.7/doc/xorg-docs/icccm/icccm.html#Peer_to_Peer_Communication_by_Means_of_Cut_Buffers)
được giới thiệu là sẽ hoạt động giống như một _clipboard_, như khi bạn sao chép 
văn bản, thông tin sao chép sẽ được X quản lý và bạn có thể truy cập chúng ở 
bất kì ứng dụng nào. Cơ chế này vẫn tồn tại trong X, nhưng việc sử dụng nó hiện 
không còn khả thi nữa, và hầu hết các ứng dụng đều không sử dụng nó nữa.

Ngày nay, dữ liệu được chuyển qua lại giữa các ứng dụng bằng 
[các lựa chọn (selections)](http://www.x.org/releases/X11R7.7/doc/xorg-docs/icccm/icccm.html#Peer_to_Peer_Communication_by_Means_of_Selections).
Trong 3 _các lựa chọn_ được tình soạn thảo văn bản atoms định nghĩa, chỉ có 2 cái 
thường được sử dụng trong thực tế, đó là: PRIMARY và CLIPBOARD.

Các lựa chọn hoạt động giống như này:

```
Ứng dụng A: <ctrl+c>
Ứng dụng A: xác nhận quyền chiếm dụng CLIPBOARD
Ứng dụng B: <ctrl+v>
Ứng dụng B: lưu ý là quyền chiếm dụng CLIPBOARD đang được giữ bởi ứng dụng A
Ứng dụng B: uêu cầu dữ liệu từ ứng dụng A
Ứng dụng A: phản hồi yêu cầu và gửi dữ liệu đến ứng dụng B
Ứng dụng B: nhận dữ liệu từ ứng dụng A và chèn nó vào window
```

| Lựa chọn  | Trường hợp sử dụng? | Làm sao để dán? | Làm sao để truy cập trong Vim? |
|-----------|---------------------|-----------------|--------------------------------|
| PRIMARY   | Chọn văn bản        | `middle-click`, `shift+insert` | `*` register    |
| CLIPBOARD | Chọn văn bản và thực hiện `ctrl+c` | `ctrl+v`        | `+` register    |

**Lưu ý**: Các lựa chọn (selections), thậm chí cả lựa chọn CLIPBOARD, không bao giờ 
được lưu trong X server! Do đó, bạn sẽ mất dữ liệu được sao chép với lệnh 
`ctrl-c` khi bạn đóng ứng dụng.

Sử dụng `"*p` để dán lựa chọn PRIMARY hoặc `"+y1G` để sao chép toàn bộ nội dung 
của file vào lựa chọn CLIPBOARD.

Nếu bạn tình cờ truy cập một trong hai bộ ghi nhớ (register) cùng một lúc, hãy 
cân nhắc sử dụng:

```vim
set clipboard^=unnamed      " * register
" or
set clipboard^=unnamedplus  " + register
```

(Dấu `^=` được dùng như giá trị mặc định, xem `:h :set^=`.)

Điều này sẽ làm cho tất cả các hoạt động sao chép/xóa/dán sử dụng `*` hoặc `+` 
thay vì bộ ghi nhớ không tên `"`. Sau đó, bạn chỉ cần sử dụng `y` hoặc `p` để 
thao tác với các lựa chọn của bạn.

Xem thêm:

```vim
:h clipboard-unnamed
:h clipboard-unnamedplus
```

## Khôi phục vị trí của con trỏ khi mở file

Khi bạn mở một file, con trỏ sẽ được đặt ở dòng 1, cột 1. Nhưng may mắn thay, 
file viminfo đã ghi nhớ các [đánh dấu (marks)](#đánh-dấu) cho bạn. Marker `"` 
chứa vị trí con trỏ trong buffer mà bạn đã thoát.

```vim
autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   execute "normal! g`\"" |
    \ endif
```

Giải thích: Nếu marker `"` có số dòng lớn hơn 1 nhưng không lớn hơn số dòng cuối 
cùng trong file, hãy chuyển con trỏ đến đó.

Xem thêm:
    :h viminfo-'
    :h `quote
    :h g`

## Các file tạm

### Các file sao lưu

Trước khi sử dụng một file, Vim sẽ tạo một file sao lưu (backup file). Nếu ghi 
vào đĩa thành công, file sao lưu sẽ bị xóa.

Với lệnh `:set backup`, sao lưu của bạn sẽ vẫn tồn tại. Nghĩa là , file sao lưu 
sẽ luôn có cùng nội dung với file gốc _trước khi_ bạn lưu file của bạn lần gần 
nhất. Bạn hãy tự quyết định xem việc này có hữu ích với mình hay không.

Bạn có thể vô hiệu hóa hoàn toàn các sao lưu bằng lệnh 
`:set nobackup nowritebackup`, nhưng bạn không nên làm điều này. 
`'writebackup'` là một tính năng bảo mật đảm bảo rằng bạn không làm mất file 
gốc trong trường hợp bạn lưu file của mình bị lỗi, bất kể bạn có giữ file sao 
lưu sao đó hay không.

Nếu bạn thường xuyên sử dụng Vim để chỉnh sửa các file lớn, 
[và có thể bạn không nên](#chỉnh-sửa-file-lớn-bị-chậm), bạn có thể loại trừ 
những file đó khỏi danh sách sao lưu với lệnh `'backupskip'`.

Vim có hai cách khác nhau để tạo bản sao lưu: _sao chép_ và _đổi tên_.

- **Sao chép**
    1. Một bản sao đầy đủ của file gốc được tạo và sử dụng làm bản sao lưu.
    1. File gốc được làm rỗng và sao đó được lấp đầy bằng nội dung của buffer 
    hiện tại trong Vim.
- **Đổi tên**
    1. Tệp gốc được đổi tên thành file sao lưu.
    1. Nội dung của buffer được ghi vào một file mới với tên của file gốc

Xem thêm `:h 'backupcopy'` để biết thêm nhiều thứ hay ho khác.

---

Demo:

```vim
:set backup backupskip= backupdir=. backupext=-backup
:e /tmp/foo
ifoo<esc>
:w
" file gốc được tạo, không cần file sao lưu
obar<esc>
:w
" file sao lưu được tạo, file gốc được cập nhật
```

```diff
$ diff -u /tmp/foo-backup /tmp/foo
--- /tmp/foo-backup     2017-04-22 15:05:13.000000000 +0200
+++ /tmp/foo    2017-04-22 15:05:25.000000000 +0200
@@ -1 +1,2 @@
 foo
+bar
```

---
Xem thêm:
    :h backup
    :h write-fail

### Các file swap

Khi chỉnh sửa một file, các thay đổi chưa được lưu sẽ được ghi vào một file 
swap.

Xem tên của file swap hiện tại với lệnh `:swapname`. Vô hiệu hóa chúng bằng 
lệnh `:set noswapfile`.

Một file swap sẽ được cập nhật cập sau khi bạn nhập 200 kí tự hoặc không có kí 
tự nào được nhập sau 4 giây. Chúng sẽ bị xóa khi bạn ngừng chỉnh sửa file đó. 
Bạn có thể thay đổi những thông số cài đặt này này bằng lệnh 
`:h 'updatecount'` và `:h 'updatetime'`.

Nếu Vim bị tắt (ví dụ: khi mất điện), bạn sẽ mất tất cả các thay đổi kể từ lần 
cuối cùng file của bạn được ghi vào đĩa, nhưng file swap sẽ không bị xóa. Lúc 
này, nếu bạn chỉnh sửa lại file đó, Vim sẽ cho bạn cơ hội để khôi phục lại dữ 
liệu từ file swap đó.

Khi 2 người cố gắng cùng sửa một file, người thứ hai sẽ nhận được thông báo 
rằng file swap đã tồn tại. Nó ngăn không cho 2 người lưu các phiên bản khác 
nhau của cùng một file. Nếu bạn không muốn hành vi đó xuất hiện, xem 
`:h 'directory'`.

Xem thêm:
    :h swap-file
    :h usr_11

### Các file hoàn tác

[Cây hoàn tác](#cây-hoàn-tác) được giữ trong bộ nhớ và sẽ bị mất khi bạn thoát 
Vim. Nếu bạn muốn nó vẫn tồn tại, dùng lệnh `:set undofile`. Lệnh này sẽ lưu 
file hoàn tác cho file `~/foo.c` dưới dạng `~/foo.c.un~`.

Xem thêm:
    :h 'undofile'
    :h undo-persistence

### File viminfo

Trong khi các file sao lưu, các file swap, các file hoàn tác đều được lưu ở 
dạng văn bản, các file viminfo được sử dụng để lưu mọi thứ khác, những thứ có 
thể mất đi khi bạn thoát Vim. File viminfo sẽ lưu lại lịch sử (các lệnh, các 
tìm kiếm, input), các bộ ghi nhớ, đánh dấu, danh sách buffer, window, các biến...

Mặc định, file viminfo sẽ được lưu ở `~/.viminfo`.

Xem thêm:
    :h viminfo
    :h 'viminfo'

### Cấu hình ví dụ cho các file tạm

Đặt tất cả các file tạm vào thư mục riêng của chúng trong `~/.vim/files`:

```vim
" tạo thư mục nếu cần thiết
if !isdirectory($HOME.'/.vim/files') && exists('*mkdir')
  call mkdir($HOME.'/.vim/files')
endif

" các file sao lưu (backup)
set backup
set backupdir   =$HOME/.vim/files/backup/
set backupext   =-vimbackup
set backupskip  =
" các file swap
set directory   =$HOME/.vim/files/swap//
set updatecount =100
" các file hoàn tác
set undofile
set undodir     =$HOME/.vim/files/undo/
" các file viminfo
set viminfo     ='100,n$HOME/.vim/files/info/viminfo
```

## Chỉnh sửa file từ xa

Vim đi kèm với plugin netrw cho phép chỉnh sửa các file từ xa. Trên thực tế, 
chúng chuyển các file từ xa (remote files) sang các file cục bộ thông qua scp, 
mở một buffer sử dụng file đó, và ghi lại các thay đổi vào file từ xa khi bạn 
lưu file cục bộ.

Điều này cực kỳ hữu ích nếu bạn muốn sử dụng cấu hình cục bộ của mình thay vì 
phải ssh vào một server và sử dụng cấu hình VIm mà quản trị viên của server đó 
đang sử dụng.

```
:e scp://bram@awesome.site.com/.vimrc
```

Nếu bạn đã thiết lập `~/.ssh/config` sẵn, chúng sẽ được tự động sử dụng:

```
Host awesome
    HostName awesome.site.com
    Port 1234
    User bram
```

Giả sử, nội dung trên nằm trong file `~/.ssh/config`, lệnh này cũng sẽ hoạt 
động tốt:

```
:e scp://awesome/.vimrc
```

Điều tương tự có thể được thực hiện với lệnh `~/.netrc`, xem `:h netrw-netrc`.

Hãy đảm bảo rằng bạn đã đọc `:h netrw-ssh-hack` và `:h g:netrw_ssh_cmd`.

---

Một khả năng khác là bạn có thể dùng [sshfs](https://wiki.archlinux.org/index.php/Sshfs)
, sshfs sử dụng [FUSE](https://en.wikipedia.org/wiki/Filesystem_in_Userspace) để 
mount một hệ thống remove vào hệ thống cục bộ của bạn.

## Quản lý plugins

[Pathogen](https://github.com/tpope/vim-pathogen) là công cụ phổ biến đầu tiên 
nếu như bạn muốn quản lý các plugin của mình. Trên thực tế, nó chỉ điều chỉnh 
_runtimepath_ (`:h 'rtp'`) để đặt tất cả các cài đặt vào một thư mục nhất định. 
Bạn phải tự sao chép repo của các plugin đó để có thể sử dụng.

Các trình quản lý plugin sẽ chìa ra các lệnh giúp bạn cài đặt và cập nhật các 
plugin ngay trong Vim.

[Danh sách trình quản lý plugin](PLUGINS.md#các-trình-quản-lý-plugin)

## Chèn khối

Chèn khối (block insert) là một kĩ thuật để chèn cùng một văn bản trên nhiều 
dòng liên tiếp cùng một lúc. Xem 
[demo](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-block_insert.gif).

Chuyển sang chế độ visual block với lệnh `<c-v>`. Sau đó, chọn một vài dòng. 
Nhấn `I` hoặc `A` và bắt đầu thêm văn bản của bạn.

Lúc đầu có thể hơi khó hiểu, nhưng văn bản sẽ được nhập ở dòng hiện tại, sau 
khi bạn kết thúc việc nhập nhiệu, văn bản vừa nhập sẽ được áp dụng cho tất cả 
các dòng mà bạn đã chọn.

Một ví dụ đơn giản: `<c-v>3jItext<esc>`.

Nếu bạn có các dòng có độ dài khác nhau, và muốn nối cùng một văn bản vào sau 
mỗi dòng, hãy dùng lệnh: `<c-v>3j$Atext<esc>`.

Đôi khi, bạn cần đặt con trỏ ở đâu đó sau khi kết thúc dòng hiện tại. Mặc định, 
bạn không thể làm điều đó, nhưng bạn có thể cài đặt trong vimrc của mình với 
cài đặt `virtualedit`:

```vim
set virtualedit=all
```

Sau đó `$10l` or `90|` hoạt động ngay cả khi con trỏ của bạn đang ở cuối một 
dòng.

Xem `:h blockwise-examples` để biết thêm chi tiết. Ban đầu có thể hơi khó khăn,
nhưng nó sẽ sớm trở nên tự nhiên với bạn.

Đây là một plugin hỗ trợ cho tính năng này mà bạn nên xem qua: 
[multiple-cursors](https://github.com/terryma/vim-multiple-cursors).

## Chạy các chương trình bên ngoài Vim và sử dụng các bộ lọc

Lưu ý: Vim chỉ xử lý một luồng duy nhất (single-threaded), vì vậy việc chạy một 
chương trình bên ngoài sẽ chặn Vim thực hiện các xử lý tiếp theo. Dĩ nhiên, bạn 
có thể sử dụng các ngôn ngữ lập trình Vim, ví dụ: Lua, và xử dụng các xử lý hỗ 
trợ đa luồng của chúng, tuy nhiên, trong quá trình xử lý đó, các luồng xử lý 
khác của Vim vẫn bị chặn lại. Neovim (Một phiên bản được viết lại của Vim) đã 
khắc phục điều đó bằng các thêm một API thích hợp.

(Rõ ràng là Bram cũng đang nghĩ đến việc thêm quyền kiểm soát các tiến trình 
vào Vim. Nếu bạn đang sử dụng một phiên bản Vim được publish gần đây, hãy xem 
`:helpgrep startjob`)

Sử dụng `:!` để bắt đầu một công việc. Nếu bạn muốn liệt kê danh sách các file 
trong thư mục hiện tại, hãy dùng `:!ls`. Dùng `|` để thực hiện piping như khi 
bạn sử dụng các lệnh trong shell của mình, ví dụ `:!ls -1 | sort | tail -n5`.

Nếu không được chỉ định phạm vi (ranges), kết quả của lệnh `:!` sẽ được hiển 
thị trong một window mà bạn có thể cuộn lên, xuống (scroll). Mặt khác, nếu một 
phạm vi được chỉ định, các dòng này sẽ được [lọc lại](https://en.wikipedia.org/wiki/Filter_(software)). 
Điều này nghĩa là chúng sẽ được chuyển đến 
[stdin](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_.28stdin.29)
của chương trình lọc và sau khi xử lý chúng sẽ được thay thế bởi 
[stdout](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_.28stdout.29)
của bộ lọc. Ví dụ: để đánh số đầu dòng cho 5 dòng tiếp theo, hãy dùng.

    :.,+4!nl -ba -w1 -s' '

Bởi vì việc thêm vào các phạm vi (ranges) một cách thủ công là khá rườm rà, 
nên Vim cung cấp một số trợ giúp để thuận tiện cho bạn hơn. Như khi sử dụng 
phạm vi, bạn có thể chọn nhiều dòng trong chế độ visual, sau đó nhấn `:`. 
Ngoài ra còn có một toán từ `!` chấp nhận các chuyển động (motions). Ví dụ: 
`!ip!sort` sẽ xắp xếp các dòng của đoạn hiện tại.

Một trường hợp tốt để sử dụng bộ lọc trong vim đó là 
[Ngôn ngữ lập trình Go](https://golang.org). Việc căn thụt đầu dòng khá là cần 
thiết, nên go còn có sẵn luôn một bộ lọc gọi là `gofmt` để thụt lề mã nguồn Go 
đúng cách. Vì vậy các plugin cho Go thường cung cấp các lệnh trợ giúp được gọi 
là `:Fmt`, về cơ bản, chúng sẽ thực hiện lện `:%!gofmt`, lệnh này sẽ tự động 
căn lề tất cả các dòng trong file mã nguồn Go mà bạn đang mở.

Mọi người thường sử dụng lệnh `:r !prog` để đặt đầu ra (output) của chương 
trình bên dưới dòng hiện tại, điều này tốt cho các tập lệnh, nhưng khi cần 
thực hiện nó một cách nhanh chóng, tôi thấy dễ dàng hơn khi sử dụng lệnh 
`!!ls`, lệnh này sẽ thay thế đầu ra cho dòng hiện tại.

Xem thêm:
    :h filter
    :h :read!

## Cscope

[Cscope](http://cscope.sourceforge.net/) làm được nhiều thức hơn 
[ctags](http://ctags.sourceforge.net/), nhưng chỉ hỗ trợ ngôn ngữ lập trình C 
(C++ và Java với một khía cạnh nào đó).

Trong khi một file tags chỉ biết vị trí của một symbol cụ thể, thì một cơ sở 
dữ liệu cscope biết nhiều hơn về dữ liệu của bạn:

- Symbol này được xác định ở đâu?
- Symbol này được dùng ở đâu?
- Định nghĩa toàn của của symbol này là gì?
- Biến này lấy giá trị ở đâu?
- Hàm này nằm ở đâu trong các file mã nguồn?
- Các hàm nào gọi đến hàm này?
- Hàm nào được gọi bởi hàm này?
- Thông báo "out of space" đến từ đâu?
- File nguồn này nằm ở đâu trong cấu trúc thư mục?
- File nào include file header này

### 1. Xây dựng cơ sở dữ liệu

Chạy lệnh này trong thư mục hiện tại của project bạn đang làm:

```sh
$ cscope -bqR
```

Lệnh trên sẽ tạo ra 3 file: `cscope{,.in,.po}.out` trong thư mục hiện tại. Cứ 
nghĩ chúng là cơ sở dữ liệu (database) của bạn đi.

Không may thay, theo mặc định thì `cscope` chỉ phân tích các file 
`*.[c|h|y|l]`. nên nếu bạn muốn sử dụng cscope cho một project Java, hãy dùng 
lệnh:

```sh
$ find . -name "*.java" > cscope.files
$ cscope -bq
```

### 2. Thêm cơ sở dữ liệu

Mở một kết nối đến cơ sở dữ liệu mới được tạo:

```vim
:cs add cscope.out
```

Xác minh rằng kết nối đã được thực hiện:

```vim
:cs show
```

(Dĩ nhiên, bạn có thể thêm nhiều kết nối.)

### 3. Truy vấn cơ sở dữ liệu

```vim
:cs find <kind> <query>
```

Ví dụ: lệnh `:cs find d foo` sẽ liệt kê tất cả các hàm được gọi bởi hàm 
`foo(...)`.

| Loại | Giải thích  |
|------|-------------|
| s    | **s**ymbol: tìm tất cả tham chiếu đến token         |
| g    | **g**lobal: tìm các định nghĩa toàn cục của token   |
| c    | **c**alls: tìm tất cả các liên kết gọi đến hàm      |
| t    | **t**ext: tìm tất cả các bản sao (instance) của văn bản |
| e    | **e**grep: egrep để tìm một từ                      |
| f    | **f**ile: mở file với tên file                      |
| i    | **i**ncludes: tìm các file có chứa tên file         |
| d    | **d**epends: tìm các hàm được gọi bởi hàm này       |

Đây là một số mapping tiện lợi mà tôi có thể gợi ý. Ví dụ:

```vim
nnoremap <buffer> <leader>cs :cscope find s  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cg :cscope find g  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cc :cscope find c  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>ct :cscope find t  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>ce :cscope find e  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cf :cscope find f  <c-r>=expand('<cfile>')<cr><cr>
nnoremap <buffer> <leader>ci :cscope find i ^<c-r>=expand('<cfile>')<cr>$<cr>
nnoremap <buffer> <leader>cd :cscope find d  <c-r>=expand('<cword>')<cr><cr>
```

Vì vậy, lệnh `:tag` (hoặc `<c-]>`) sẽ nhảy đến một định nghĩa trong các file 
tag, `:cstag` cũng làm điều tương tự, nhưng cũng nhận các kết nối đến csdl 
cscope. Tùy chọn `'cscopetag'` sẽ làm cho `:tag` hoạt động giống `:cstag` một 
cách tự động. Điều này rất thuận tiện nếu bạn đã có các mapping liên quan đến 
tag.

Xem thêm: `:h cscope`

## MatchIt

Vì Vim được viết bằng ngôn ngữ lập trình C, nên rất nhiều tính năng đều được 
giả định giống như ngôn ngữ C. Theo mặc định, nếu con trỏ của bạn đang ở `{` 
hoặc `#endif`, bạn có thể dùng `%` để nhảy đến kí tự `}` hoặc `#ifdef` tương 
ứng.

Vim đi kèm với một plugin có tên là matchit.vim, theo mặc định, plugin này sẽ 
không hoạt động. Plugin này làm cho phím `%` cũng nhảy quanh các thẻ HTML, các 
lệnh if/else/endif trong VimL, và plugin này cũng giới thiệu thêm một vài lệnh 
khác cũng khá hữu dụng.

#### Cài đặt MatchIt cho Vim 8

```vim
" vimrc
packadd! matchit
```

#### Cài đặt MatchIt cho Vim 7 và các phiên bản cũ hơn

```vim
" vimrc
runtime macros/matchit.vim
```

Vì tài liệu về matchit khá phong phú, tôi khuyên bạn nên làm như sau:

```vim
:!mkdir -p ~/.vim/doc
:!cp $VIMRUNTIME/macros/matchit.txt ~/.vim/doc
:helptags ~/.vim/doc
```

#### Giới thiệu nhanh

Sau khi cài đặt, plugin đã sẵn sàng để bạn sử dụng. Xem `:h matchit-intro`, để 
biết các lệnh được hỗ trợ và `:h matchit-languages` để biết các ngôn ngữ được 
matchit hỗ trợ.

Bạn cũng có thể dễ dàng định nghĩa các matching pairs phù hợp cho riêng bạn:

```vim
autocmd FileType python let b:match_words = '\<if\>:\<elif\>:\<else\>'
```

Với lệnh trên, bạn có thể nhảy lần lượt từ if, đến elif, rồi đến else trong bất 
kì file Python nào bằng cách sử dụng `%` (forward) hoặc `g%` (backward).

Đọc thêm:

```
:h matchit-install
:h matchit
:h b:match_words
```

## True colors

Sử dụng các màu sắc trong một trình giả lập terminal nghĩa là bạn có thể sử 
dụng 24 bits cho màu RGB. Điều này sẽ tạo ra 16777216 (2^24) màu thay vì 256 
màu thông thường.

Như đã giải thích [ở đây](#bảng-màu), mỗi bảng màu (colorschemes) thực chất đều 
có _hai_ phiên bản, một được định nghĩa cho các terminal (xterm) và phiên bản còn 
lại là cho giao diện GUIs (gvim). Điều này có ý nghĩa vì nếu các terminal không 
thể sử dụng true colors, chúng sẽ sử dụng bảng màu dành riêng cho terminal.

Sau khi chạy lệnh `:set termguicolors`, Vim bắt đầu phát ra các chuỗi chỉ được 
hiểu bởi terminal được hỗ trợ true colors. Khi màu sắc của bạn trông kỳ lạ, rất 
có thể trình giả lập terminal của bạn không hỗ trợ true colors hoặc bảng màu 
của bạn không được định nghĩa sẵn các màu sắc cho phiên bản GUIs.

Có rất nhiều người sửa dụng 
[tmux](https://github.com/tmux/tmux/wiki), tmux về cơ bản sẽ nằm giữa terminal 
và Vim. Để cho tmux nhận được các màu sắc cụ thể từ vim, đặc biệt là true 
colors, bạn cần phải đặt những thứ sau vào file cấu hình tmux `.tmux.conf` 
của bạn:

```
set-option -g  default-terminal 'tmux-256color'
set-option -ga terminal-overrides ',xterm-256color:Tc'
```

Vì vậy, đây là danh sách những việc cần làm để sử dụng true colors:

- Đọc `:h 'termguicolors'`.
- Đặt `set termguicolors` vào file cấu hình vimrc của bạn.
- Đảm bảo rằng bảng màu (colorscheme) mà bạn đang dùng hỗ trợ GUIs. (Nó phải 
chứa các dòng đại loại như `guifg` và `guibg`.)
- Đảm bảo terminal của bạn hỗ trợ true colors.
- Nếu bạn dùng tmux, cấu hình nó và thêm `Tc` vào file cấu hình.

Xem thêm:
https://gist.github.com/XVilka/8346728

# Các mẹo sử dụng

## Chuyển đến đầu hoặc cuối của văn bản đang được chọn

`o` và `O` trong chế độ visual sẽ nhảy con trỏ của bạn đến đầu và cuối văn bản 
đang được chọn. Hãy thử lựa chọn theo khối (blockwise selection) để thử sự khác 
biệt. Điều này hữu ích khi bạn muốn thay đổi kích thước của văn bản một cách 
nhanh chóng.

```
:h v_o
:h v_O
```

## Hành vi tốt hơn của n và N

Hướng của `n` và `N` phụ thuộc vào việc bạn sử dụng `/` hay `?` để tìm kiếm tới,
hoặc tìm kiếm lùi về trước đó. Điều này khá khó hiểu với tôi.

Nếu bạn muốn `n` luôn tìm kiếm tới phía trước và `N` luôn tìm kiếm ngược lại, 
hãy dùng:

```vim
nnoremap <expr> n  'Nn'[v:searchforward]
xnoremap <expr> n  'Nn'[v:searchforward]
onoremap <expr> n  'Nn'[v:searchforward]

nnoremap <expr> N  'nN'[v:searchforward]
xnoremap <expr> N  'nN'[v:searchforward]
onoremap <expr> N  'nN'[v:searchforward]
```

## Lịch sử các lệnh sử dụng tốt hơn

Nếu bạn giống như tôi, bạn đã quen với việc chuyển đến các mục tiếp theo, và 
trước đó thông qua các lệnh `<c-n>` và `<c-p>` tương ứng. Theo mặc định, điều 
này cũng hoạt động trong command-line và sẽ gọi lại các lệnh cũ hơn hoặc gần 
đây hơn từ lịch sử các lệnh đã được sử dụng.

Nhưng `<up>` và `<down>` thậm chí còn thông minh hơn! Chúng nhớ lại lệnh có 
phần đầu khớp với lệnh hiện tại. Ví dụ: `:echo <up>` có thể thay đổi thành 
`:echo "Vim rocks!"`.

Dĩ nhiên, tôi không muốn bạn phải rướn tay của mình tới các phím điều hướng, vì 
vậy hãy map chúng như sau:

```vim
cnoremap <c-n>  <down>
cnoremap <c-p>  <up>
```

Tôi sử dụng các lệnh này vài lần mỗi ngày.

## CTRL-L tốt hơn

Theo mặc dịnh, lệnh `<c-l>` sẽ xóa và vẽ lại màn hình (giống lệnh `:redraw!`). 
Mapping sau đây cũng làm điều tương tự, thêm nữa là chúng sẽ highlight các kết 
quả phù hợp tìm được thông qua `/`, `?`, highlight cú pháp (đôi khi Vim mất đi 
các highlight do các quy tắc highlight phức tạp.), cập nhật các highlight cú 
pháp trong chế độ diff:

```vim
nnoremap <leader>l :nohlsearch<cr>:diffupdate<cr>:syntax sync fromstart<cr><c-l>
```

## Tắt hình ảnh và âm thanh của chuông

```vim
set noerrorbells
set novisualbell
set t_vb=
```

Xem thêm [Vim Wiki: Disable beeping](http://vim.wikia.com/wiki/Disable_beeping).

## Di chuyển nhanh dòng hiện tại

Thỉnh thoảng tôi cần di chuyển nhanh một dòng lên trên hoặc xuống dưới:

```vim
nnoremap [e  :<c-u>execute 'move -1-'. v:count1<cr>
nnoremap ]e  :<c-u>execute 'move +'. v:count1<cr>
```

Các mapping này sẽ nhận vào một số đếm, ví dụ `2]e` sẽ di chuyển dòng hiện tại 
xuống 2 dòng.

## Thêm nhanh các dòng trống

```vim
nnoremap [<space>  :<c-u>put! =repeat(nr2char(10), v:count1)<cr>'[
nnoremap ]<space>  :<c-u>put =repeat(nr2char(10), v:count1)<cr>
```

Bây giờ `5[<space>` sẽ chèn 5 dòng trống lên trên dòng hiện tại.

## Chỉnh sửa nhanh macros của bạn

Đây thực sự là một viên quá quý! Mapping sẽ nhận vào một bộ ghi nhớ (register) 
(Hoặc `*` theo mặc định) và mở nó trên cửa sổ command line. Nhấn `<cr>` khi bạn 
đã chỉnh sửa xong văn bản để cài đặt cho bộ ghi nhớ.

Tôi thường sử dụng mapping này để chỉnh sửa lỗi chính tả mà tôi mắc phải khi 
tôi đang ghi lại một macro.

```vim
nnoremap <leader>m  :<c-u><c-r><c-r>='let @'. v:register .' = '. string(getreg(v:register))<cr><c-f><left>
```

Sử dụng như sau `<leader>m` hoặc `"q<leader>m`.

Lưu ý việc sử dụng `<c-r><c-r>` để đảm bảo `<c-r>` được chèn theo nghĩa đen. 
Xem `:h c_^R^R`.

## Nhảy nhanh đến file header hoặc file mã nguồn

Kĩ thuật này có thể được áp dụng cho nhiều loại file khác nhau. Nó sẽ đặt các 
_đánh dấu file_ (xem `:h marks`) khi bạn rời khỏi một file mã nguồn hoặc file 
header, vì vậy bạn có thể nhảy nhanh ngược lại bằng cách dùng `'C` hoặc `'H` 
(Xem thêm `:h 'A`).

```vim
autocmd BufLeave *.{c,cpp} mark C
autocmd BufLeave *.h       mark H
```

**LƯU Ý**: Thông tin được lưu trong file viminfo, vì vậy hãy đảm bảo rằng lệnh 
`:set viminfo?` đã được bạn đặt vào file cài đặt. Xem thêm `:h viminfo-'`.

## Thay đổi kích thước font trong giao diện

Tôi nghĩ rằng config này được lấy từ config của tpope:

```vim
command! Bigger  :let &guifont = substitute(&guifont, '\d\+$', '\=submatch(0)+1', '')
command! Smaller :let &guifont = substitute(&guifont, '\d\+$', '\=submatch(0)-1', '')
```

## Thay đổi kiểu con trỏ tùy thuộc vào chế độ

Tôi thích dùng con trỏ hình khối ở chế độ normal, con trỏ dạng i-beam ở chế độ 
insert, và con trỏ gạch dưới ở chế độ replace.

```vim
if empty($TMUX)
  let &t_SI = "\<Esc>]50;CursorShape=1\x7"
  let &t_EI = "\<Esc>]50;CursorShape=0\x7"
  let &t_SR = "\<Esc>]50;CursorShape=2\x7"
else
  let &t_SI = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=1\x7\<Esc>\\"
  let &t_EI = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=0\x7\<Esc>\\"
  let &t_SR = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=2\x7\<Esc>\\"
endif
```

Điều này chỉ đơn giản là yêu cầu Vim in một chuỗi kí tự nhất định 
([escape sequence](https://en.wikipedia.org/wiki/Escape_sequence)) khi bạn vào/
rời chế độ insert. Terminal, hoặc chương trình như 
[tmux](https://tmux.github.io) đứng giữa terminal và vim, sẽ xử lý và đánh giá 
nó. Các cấu hình trên có thể không hoạt động với bạn. Cài đặt của thạm thậm chí 
còn có thể không hỗ trợ nhiều kiểu con trỏ khác nhau. Hãy đọc tài liệu của 
chúng sẽ rõ.

Ví dụ trên hoạt động tốt với iTerm2.

## Không bị mất những lựa chọn (selection) khi di chuyển sang một bên

Nếu bạn chọn một hoặc nhiều dòng, bạn có thể dùng `<` hoặc `>` để chuyển chúng 
sang một bên. Thật không may bạn sẽ bị mất các lựa chọn sau khi dùng `<` và `>`.

Bạn có thể gùn `gv` để chọn lại lựa chọn mà bạn thực hiện lần gần nhất 
(xem `:h gv`), do đó, bạn có thể map lệnh lại như sau:

```vim
xnoremap <  <gv
xnoremap >  >gv
```

Bây giờ bạn có thể dùng `>>>>>` mà không có vấn đề gì.

**Lưu ý**:  Bạn có thể đạt được điều tương tự với lệnh `.`, lệnh lặp lại thay đổi 
cuối cùng.

## Tải lại file khi lưu

Sử dụng [lệnh tự động](#lệnh-tự-động) bạn có thể làm bất kì thứ gì khi bạn lưu 
một file. Ví dụ, source nó nếu nó làm một dotfile hoặc chạy linter cho file đó 
để kiểm tra lỗi cũ pháp của nội dung trong file.

```vim
autocmd BufWritePost $MYVIMRC source $MYVIMRC
autocmd BufWritePost ~/.Xdefaults call system('xrdb ~/.Xdefaults')
```

## Con trỏ thông minh hơn

Tôi thích con trỏ, nhưng tôi chỉ muốn dùng nó trong window hiện tại chứ không 
muốn ở chế độ chèn.

```vim
autocmd InsertLeave,WinEnter * set cursorline
autocmd InsertEnter,WinLeave * set nocursorline
```

## Hoàn thành từ khóa nhanh hơn

Hoàn thành từ khóa khi bạn sử dụng gợi ý code (`<c-n>`/`<c-p>`) sẽ cố gắng lựa 
chọn các lựa chọn trong `'complete'`. Theo mặc định, điều này cũng bao gồm các 
tag (có thể khá khó chịu) và quét tất cả các file được include (có thể sẽ rất 
chậm). Nếu bạn có thể sống mà không cần những thứ này, hãy tắt chúng đi:

```vim
set complete-=i   " disable scanning included files
set complete-=t   " disable searching tags
```

## Thay đổi màu sắc

Luôn sử dụng dòng trạng thái (statusline) màu tối, bất kể bảng màu nào đang 
được sử dụng:

```vim
autocmd ColorScheme * highlight StatusLine ctermbg=darkgray cterm=NONE guibg=darkgray gui=NONE
```

Lệnh trên sẽ được kích hoạt mỗi khi bạn sử dụng `:colorscheme ...`. Nếu bạn muốn 
nó chỉ kích hoạt cho một số bảng màu nhất định, hãy dùng.

```vim
autocmd ColorScheme desert highlight StatusLine ctermbg=darkgray cterm=NONE guibg=darkgray gui=NONE
```

Lệnh trên chỉ được thực thi cho bảng màu `:colorscheme desert`.

# Các lệnh

Các lệnh hữu ích mà bạn cần biết. Dùng `:h :<command name>`, để đọc thêm về 
chúng, ví dụ `:h :global`.

## :global và :vglobal

Thực hiện một lệnh trên tất cả các dòng phừ hợp. Ví dụ `:global /regexp/ print` 
sẽ gọi lệnh `:print` trên tất cả các dòng có chứa "regexp".

Thực tế thú vị: Có thể bạn biết rằng grep được viết bởi Ken Thompson hoạt động 
rất tốt. Nó làm gì? Nó sẽ in ra tất cả các dòng khớp với một biểu thức chính 
quy (regex) nhất định! Bây giờ hãy đoán dạng rút gọn của 
`:global /regexp/ print` xem? ĐÚng rồi! Đó là `:g/re/p`. Ken Thompson đã lấy 
cảm hứng từ lệnh `:global` trong vi (phiên bản cũ hơn của Vim) khi anh ấy lập 
trình ra grep.

Không như tên gọi của nó, `:global` chỉ hoạt động trên tất cả các dòng theo mặc 
định, nhưng nó cũng nhận vào một phạm vi (ranges). Giả sử bạn muốn dùng lệnh 
`:delete` trên tất cả các dòng từ dòng hiện tại đến dòng trống tiếp theo 
(khớp với regex `^$`) có chứa "foo":

```vim
:,/^$/g/foo/d
```

Để thực hiện các lệnh trên tất cả các dòng mà _không_ có một một mẫu (pattern) 
nhất định, sử dụng `:global!` hoặc bí danh của nó `:vglobal` (_inVerse_) để 
thay thế.

## :normal and :execute

Các lệnh này thường được dùng khi viết mã nguồn cho Vim với VimL.

Với lệnh `:normal` bạn có thể thực hiện mapping trong command-line. Ví dụ: 
`:normal! 4j` sẽ làm cho con trỏ đi xuống 4 dòng (mà không sử dụng bất kì 
mapping khác nào cho "j" bởi vì đã có dấu "!").

Lưu ý rằng: lệnh `:normal` cũng nhận vào một [phạm vi](#phạm-vi), vì vậy 
`:%norm! Iabc` sẽ thêm "abc" vào trước mỗi dòng.

Với `:execute` bạn có thể trộn các lệnh với các biểu thức (expressions). Giả sử 
bạn đang chỉnh sửa một file C và muốn đổi sang file header của nó, dùng:

```vim
:execute 'edit' fnamemodify(expand('%'), ':r') . '.h'
```

Cả hai lệnh thường được sử dụng cùng nhau. Giả sử bạn muốn đưa con trỏ xuống 
dòng "n" dòng:

```vim
:let n = 4
:execute 'normal!' n . 'j'
```

## :redir and execute()

Rất nhiều lệnh sẽ in ra thông báo, và `:redir` cho phép bạn chuyển hướng đầu ra 
của các thông báo đó. Bạn có thể chuyển hướng đến các file, 
[bộ ghi nhớ](#bộ-ghi-nhớ) hoặc các biến (variables).

```vim
:redir => var
:reg
:redir END
:echo var
:" For fun let's also put it onto the current buffer.
:put =var
```

Trong Vim 8 thậm chí còn có cách ngắn ngọn hơn:

```vim
:put =execute('reg')
```

Xem thêm:

```
:h :redir
:h execute()
```

# Gỡ lỗi

## Các mẹo chung

Nếu bạn gặp phải một lỗi lạ, hãy thử tái lập lại lỗi đó:

```
vim -u NONE -N
```

Lệnh trên sẽ khởi động Vim mà không có vimrc (nghĩa là Vim sẽ chạy các cài đặt 
mặc định). (Xem `:h --noplugin` để biết những gì cần thiết khi Vim khởi động).

Nếu bạn vẫn có thể tái lập lại lỗi đó, rất có thể đó làm một lỗi của Vim! Hãy 
báo có nó tại [vim_dev](https://groups.google.com/forum/#!forum/vim_dev). Hầu 
hết thời gian, vấn đề sẽ không được giải quyết ngay lập tức và bạn sẽ cần phải 
kiểm tra thêm để xác định.

Các plugin thường giới thiệu chức năng mới/các thay đổi/các lỗi nếu chúng xảy 
ra khi bạn lưu file, hãy kiểm tra `:verb au BufWritePost` để xem danh sách các 
nguyên nhân có thể gây ra lỗi.

Nếu bạn đang sử dụng một trình quản lý plugin, hãy thử comment chúng lại cho 
tới khi bạn tìm ra nguyên nhân.

Vấn đề vẫn chưa được giải quyết? Nếu đó không phải lỗi từ một plugin, đó có thể 
là một trong những cài đặt của bạn, vì vậy bạn nên kiểm tra lại các cài đặt, 
lệnh tự động (autocmd) của mình.

Đã đến lúc sử dụng tìm kiếm nhị phân (binary search). Hãy liên tục chia đôi 
không gian tìm kiếm của bạn cho đến khi bạn tìm ra nguyên nhân. (Ví dụ, thử 
comment một vài dòng để kiểm tra liệu chúng có phải nguyên nhân gây ra lỗi hay 
không). Vì đó là bản chất của tìm kiếm nhị phân, bạn sẽ không phải mất quá 
nhiều bước.

Trong thực tế, bạn có thể làm như sau: Đặt lệnh `:finish` vào giữa file cấu 
hình vimrc của bạn. Vim sẽ bỏ qua tất cả các lệnh phía sau nó. Nếu lỗi vẫn còn 
tồn tại, vậy vấn đề là ở phần cấu hình ở trên, nếu không có lỗi xảy ra, vậy có 
nghĩa là lỗi nằm ở phần dưới. Di chuyển lệnh `:finish` của bạn vào phần mà bạn 
đã xác định là gây ra lỗi, đặt nó vào giữa phần đó, và cứ thế lặp đi lặp lại,
 bạn sẽ nhanh chóng tìm ra nguyên nhân gây ra lỗi.

## Độ chi tiết

Một cách hữu ích khác để quan sát những gì Vim đang thực hiện là tăng độ chi 
tiết. Hiện tại Vim hỗ trợ 9 cấp độ khác nhau. Xem `:h 'verbose'` để biết danh 
sách đầy đủ.

```vim
:e /tmp/foo
:set verbose=2
:w
:set verbose=0
```

Lệnh trên sẽ hiển thị tất cả các file được thực thi, ví dụ, file undo hoặc các 
plugin khác nhau được thực hiện khi bạn lưu file.

Nếu bạn chỉ muốn tăng độ chi tiết cho một lệnh, thì cũng có lệnh `:verbose`, 
lệnh này được sử dụng bằng cách đặt trước các lệnh khác. Bạn có thể cấu hình 
mức độ chi tiết (mặc định là 1):

```vim
:verb set verbose
"  verbose=1
:10verb set verbose
"  verbose=10
```

Lệnh này thường được sử dụng với độ chi tiết là 1, để xem một cài đặt được 
thiết lập lần cuối ở đâu:

```vim
:verb set ai?
"      Last set from ~/.vim/vimrc
```

Đương nhiên, mức độ chi tiết càng cao thì kết quả trả ra sẽ càng nhiều. Nhưng 
đừng lo, bạn có thể chỉ cần chuyển hướng danh sách đó thành một file:

```vim
:set verbosefile=/tmp/foo | 15verbose echo "foo" | vsplit /tmp/foo
```

Bạn cũng có thể kích hoạt độ chi tiết khi Vim khởi động, với tùy chọn `-V`. Nó 
được mặt định ở mức 10. Bạn có thể đặt lại theo bạn muốn, ví dụ `vim -V5`.

## Lập hồ sơ thời gian khởi động

Vim của bạn khởi động chậm? Đã đến lúc xem qua vài thông số:

```
vim --startuptime /tmp/startup.log +q && vim /tmp/startup.log
```

Cột đầu tiên là cột quan trọng nhất vì nó hiển thị thời gian tuyệt đối đã trôi 
qua. Nếu có một sự thay đổi lớn về thời gian giữa hai dòng, dòng thứ 2 là một 
file rất lớn hoặt một file có code VimL bị lỗi đáng để điều tra.

## Lập hồ sơ thời gian trong quá trình sử dụng Vim

Cần có [tính năng](#bạn-đang-sử-dụng-phiên-bản-vim-nào): `+profile`

Vim tích hợp sẵn một tính năng để bạn có thể lập hồ sơ trong khi bạn đang sử 
dụng Vim, và đó là một cách tuyệt vời để bạn biết phần nào khiến Vim của bạn 
chạy chậm.

Lệnh `:profile` nhận một loạt các lệnh phụ để chỉ định những gì cần thiết để 
lập nên hồ sơ.

Nếu bạn muốn lập hồ sơ _cho tất cả mọi thứ_, hãy dùng:

    :profile start /tmp/profile.log
    :profile file *
    :profile func *
    <do something in Vim>
    :qa

Vim giữ thông tin hồ sơ trong bộ nhớ và chỉ ghi nó ra file log khi bạn thoát 
Vim. (Neovim đã sửa lỗi này bằng cách dùng lệnh `:profile dump`).

Hãy xem file log `/tmp/profile.log`. Tất cả các lệnh được thực thi trong quá 
trình lập hồ sơ sẽ được hiển thị. Mỗi dòng sẽ hiển thị tần suất thực thi, mất 
bao lâu để thực thi lệnh đó.

Hảy nhảy đến cuối file log. Ở đây có hai phần khác nhau 
`FUNCTIONS SORTED ON TOTAL TIME` và `FUNCTIONS SORTED ON SELF TIME` rất đáng 
giá. Chỉ cần nhìn sơ bạn cũng có thể biết hàm nào chạy chậm nhất.

Bạn có thể dùng `:profile` khi khởi động Vim:

    $ vim --cmd 'prof start prof.log | prof file * | prof func *' test.c
    :q
    $ tail -50 prof.log

## Gỡ lỗi các lệnh Vim

Nếu bạn đã từng sử dụng trình gỡ lỗi trên command line, `:debug` sẽ quen thuộc 
với bạn.

Chỉ cần thêm trước `:debug` vào bất kì lệnh nào và bạn sẽ được đưa vào chế độ 
gỡ lỗi. Tức là việc thực thi sẽ dừng lại ở dòng đầu tiên chuẩn bị được thực thi 
và dòng đó sẽ được hiển thị ra.

Xem `:h >cont` và nội dung bên dưới để biết 6 lệnh gỡ lỗi có sẵn trong Vim, và 
hãy lưu ý rằng, giống như trong gdb và các trình gỡ lỗi tương tự, bạn cũng có 
thể sử dụng các dạng rút gọn của chúng: `c`, `q`, `n`, `s`, `i`, and `f`.

Ngoài những điều đó, bạn có thể tự do sử dụng bất kì lệnh Vim nào, ví dụ 
`:echo myvar`, sẽ được thực thi ở vị trí hiện tại trong file code.

Về cơ bản, bạn sẽ nhận được một 
[REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) bằng 
cách rất đơn giản, đó là sử dụng `:debug 1`

Sẽ rất khó khăn nếu bạn phải đi qua từng dòng một, vì vậy, tất nhiên chúng ta 
cũng có thể xác định các điểm ngắt (breakpoints). (Các điểm ngắt được gọi là 
điểm ngắt vì quá trình thực thi các lệnh sẽ dừng lại khi chúng gặp điểm ngắt, 
do đó, bạn có thể đơn giản bỏ qua các lệnh mà bạn không quan tâm). Xem 
`:h :breakadd`, `:h :breakdel`, và `:h :breaklist` để biết thêm chi tiết.

Giả sử, bạn muốn biết lệnh nào được chạy mỗi khi bạn lưu file:

```vim
:au BufWritePost
" signify  BufWritePost
"     *         call sy#start()
:breakadd func *start
:w
" Breakpoint in "sy#start" line 1
" Entering Debug mode.  Type "cont" to continue.
" function sy#start
" line 1: if g:signify_locked
>s
" function sy#start
" line 3: endif
>
" function sy#start
" line 5: let sy_path = resolve(expand('%:p'))
>q
:breakdel *
```

Như bạn có thể thấy, việc sử dụng `<cr>` sẽ lặp lại lệnh gỡ lỗi trước đó, 
trong trường hợp này là `s`.

`:debug` có thể được sử dụng chung với [độ chi tiết](#độ-chi-tiết).

## Gỡ lỗi các file syntax

Các file syntax (cú pháp) thường là nguyên nhân gây ra sự chập chạp do các biểu 
thức chính quy (regex) sai và/hoặc phức tạp. Nếu 
[tính năng](#bạn-đang-sử-dụng-phiên-bản-vim-nào): `+profile` được biên dịch sẵn 
trong Vim, Vim sẽ cung cấp cho bạn một lệnh vô cùng hữu ích, đó là `:syntime`.

```vim
:syntime on
" nhấn <c-l> vài lần để vẽ lại window, điều này làm cho các cú pháp được vẽ lại
:syntime off
:syntime report
```

Đầu ra có chứa các số liệu quan trọng. Ví dụ: bạn có thể thấy regexp nào mất 
quá nhiều thời gian và cần được tối ưu, hoặc regexp nào được sử dụng mọi lúc 
mà không cần thiết.

Xem thêm `:h :syntime`.

# Linh tinh

## Tài liệu bổ sung

| Tài liệu | Mô tả |
|----------|-------------|
| [Seven habits of effective text editing](http://www.moolenaar.net/habits.html) | By Bram Moolenaar, the author of Vim. |
| [Seven habits of effective text editing 2.0 (PDF)](http://www.moolenaar.net/habits_2007.pdf) | See above. |
| [IBM DeveloperWorks: Scripting the Vim editor](http://www.ibm.com/developerworks/views/linux/libraryview.jsp?sort_order=asc&sort_by=Title&search_by=scripting+the+vim+editor) | Five-part series on Vim scripting. |
| [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com) | Develop a Vim plugin from scratch. |
| [Practical Vim (2nd Edition)](http://www.amazon.com/Practical-Vim-Edit-Speed-Thought/dp/1680501275/) | Hands down the best book about Vim. |
| [Why, oh WHY, do those #?@! nutheads use vi?](http://www.viemu.com/a-why-vi-vim.html) | Common misconceptions explained. |
| [Your problem with Vim is that you don't grok vi](http://stackoverflow.com/a/1220118) | Concise, informative and correct. A real gem. |

#### Screencasts

- [vimcasts.org](http://vimcasts.org/episodes/archive)
- [By wincent](https://www.youtube.com/channel/UCXPHFM88IlFn68OmLwtPmZA)
- [By Derek Wyatt](http://derekwyatt.org/vim/tutorials/index.html)

## Các bản phân phối Vim

Các bản phân phối của Vim là các gói cài đặt và plugin tùy chỉnh cho Vim được 
làm sẵn.

Những người dùng Vim nâng cao hơn sẽ biết cách định cấu hình của Vim theo ý 
thích của họ, do vậy, các bản phân phối của Vim thường chỉ nhắm đến những người 
mới bắt đầu. Nếu bạn nghĩ về điều đó, thì thật là nghịch lý: làm cho nó dễ dàng 
hơn bằng cách thêm nhiều thứ hơn để phải tìm hiểu?

Tôi biết rằng nhiều người không muốn dành hàng giờ đồng hồ để tùy chỉnh trình 
soạn thảo văn bản của mình (và thực sự là bạn không bao giờ có thể ngừng 
tùy chỉnh vimrc của mình khi bạn đã dính vào Vim), nhưng cuối cùng, hiệu quả mà 
bạn đạt được sẽ xứng đáng nếu bạn chịu khó dành thời gian để học Vim.

Nhắc lại theo tôi: "Một lập trình viên nên biết sử dụng các công cụ của họ"

Dù sao, nếu bạn biết mình đang làm gì, bạn có thể có được một số cảm hứng khi 
xem một vài bản phân phối như:

- [cream](http://cream.sourceforge.net)
- [janus](https://github.com/carlhuda/janus.git)
- [spacevim](https://github.com/SpaceVim/SpaceVim)
- [spf13](https://github.com/spf13/spf13-vim)

## Các plugin tiêu chuẩn

Nhiều người sẽ ngạc nhiên khi biết Vim đi kèm với một số plugin tiêu chuẩn. Một 
số được sử dụng mặc định (`:e $VIMRUNTIME/plugin`) và một số thì không 
(`:e $VIMRUNTIME/pack/dist/opt`). Đọc `:h pack-add` để biết cách sử dụng chúng 
sau này.

Tuy nhiên, hầu hết các plugin được chạy mặc định sẽ không bao giờ được bạn sử 
dụng. Hãy tắt chúng khi bạn thấy phù hợp. Chúng sẽ vẫn được hiển thị là đã 
chạy (sourced) (Xem `:scriptnames`), nhưng chỉ những dòng đầu tiên thực sự được 
đọc trước khi Vim ngừng hoạt động. Sẽ không có lệnh nào khác 
(mappings, các lệnh, logic) được xử lý.

| Plugin     | Tắt nó bằng cách..                  | Xem thêm |
|------------|-------------------------------------|------|
| 2html      | `let g:loaded_2html_plugin = 1`     | `:h 2html` |
| getscript  | `let g:loaded_getscriptPlugin = 1`  | `:h pi_getscript` |
| gzip       | `let g:loaded_gzip = 1`             | `:h pi_gzip` |
| logipat    | `let g:loaded_logipat = 1`          | `:h pi_logipat` |
| matchparen | `let g:loaded_matchparen = 1`       | `:h pi_paren` |
| netrw      | `let g:loaded_netrwPlugin = 1`      | `:h pi_netrw` |
| rrhelper   | `let g:loaded_rrhelper = 1`         | `:e $VIMRUNTIME/plugin/rrhelper.vim` |
| spellfile  | `let g:loaded_spellfile_plugin = 1` | `:h spellfile.vim` |
| tar        | `let g:loaded_tarPlugin = 1`        | `:h pi_tar` |
| vimball    | `let g:loaded_vimballPlugin = 1`    | `:h pi_vimball` |
| zip        | `let g:loaded_zipPlugin = 1`        | `:h pi_zip` |

## Map CapsLock sang Control

CapsLock là một trong những phím vô dụng nhất trên bàn phím của bạn, nhưng nó 
lại nằm ở một vị trí dễ với tới hơn so với phím Control, bởi vì nó nằm trên 
[home row](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-homerow.png)
của bạn. Vì vậy, mapping CapsLock thành Control là một cách tối để ngăn chặn, 
hay ít nhất là giảm 
[RSI](https://de.wikipedia.org/wiki/Repetitive-Strain-Injury-Syndrom) nếu bạn 
lập trình hoặc sử dụng bàn phím nhiều.

Chú ý: Khi đã quen rồi thì bạn sẽ không thể sống thiếu nó nữa.

**Với macOS**:

`System Preferences -> Keyboard -> Keyboard Tab -> Modifier Keys`.Đổi  
"CapsLock" thành "Control".

**Với Linux**:

Để thay đổi các phím trong X, thêm các dòng sau vào `~/.xmodmap`:

    remove Lock = Caps_Lock
    keysym Caps_Lock = Control_L
    add Control = Control_L

Sau đó hãy áp dụng nó `$ xmodmap ~/.xmodmap`.

Một giải pháp thay thế là sử dụng [caps2esc](https://github.com/oblitum/caps2esc) 
hoặc [xcape](https://github.com/alols/xcape).

**Với Windows**:

Xem [superuser.com: Map Caps-Lock to Control in Windows
8.1](http://superuser.com/questions/764782/map-caps-lock-to-control-in-windows-8-1).

## Tạo file HTML từ buffer

Tạo HTML từ buffer với lệnh `:TOhtml` từ [plugin 2html](#các-plugin-tiêu-chuẩn). 
Kết quả cho ra có thể được dùng để in hoặc chạy một trang web.

Lệnh trên sẽ tạo một buffer mới có cùng tên và được thêm `.html` vào sau đuôi. 
Các màu sắc cũng tương tự như khi bạn xem trên Vim. Chúng phụ thuộc vào 
[bảng màu](#bảng-màu) mà bạn đang sử dụng.

Plugin cũng cung cấp một số tùy chọn để tinh chỉnh đầu ra (output). Ví dụ: để 
cài đặt mã encode và font.

Xem thêm `:h :TOhtml`.

## Những điều thú vị

| Lệnh   | Tin nhắn |
|-----------|---------|
| `:Ni!` | `Do you demand a shrubbery?` |
| `:h 'sm'` | `NOTE: Use of the short form is rated PG.` |
| `:h 42` | `What is the meaning of life, the universe and everything? Douglas Adams, the only person who knew what this question really was about is now dead, unfortunately.  So now you might wonder what the meaning of death is...` |
| `:h UserGettingBored` | `When the user presses the same key 42 times. Just kidding! :-)` |
| `:h bar` | `Ceci n'est pas une pipe.` |
| `:h holy-grail` | `You found it, Arthur!` |
| `:h map-modes` | `:nunmap can also be used outside of a monastery.` |
| `:help!` | `E478: Don't panic!` (Glitch? When used in a help buffer (`buftype=help`) this works like `:h help.txt` instead.) |
| `:smile` | Tự thử nó đi. ;-) Được thêm vào vim từ phiên bản 7.4.1005. |

## Tại sao lại dùng hjkl để điều hướng?

Khi [Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy) tạo ra 
[vi](https://en.wikipedia.org/wiki/Vi), tiền thân của Vim, anh ấy sử dụng 
[ADM-3A](https://en.wikipedia.org/wiki/ADM-3A), thiết bị này không có các phím 
điều hướng để sử dụng, bạn có thể đoán ra rồi đó, anh ta sử dụng hjkl để thay 
thế.

Bố cục bàn phím: [click](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-adm-3a-layout.jpg)

Điều này cũng cho thấy lý do tại sao `~` được sử dụng để biểu thị cho thư mục 
chính trên hệ thống Linux.

# Các vấn đề thường gặp

## Chỉnh sửa file nhỏ bị chậm

Có hai điều có thể gây ảnh hưởng lớn đến hiệu năng của Vim:

1. Biểu thức chính quy (regex) **phức tạp**. Đặc biệt là file cú pháp của ngôn ngữ 
   Ruby đã từng khiến mọi người bị chậm trong quá khứ. (Bạn cũng nên xem 
   [gỡ lỗi các file syntax](#gỡ-lỗi-các-file-syntax).)
2. **Vẽ lại màn hình**. Một vài tính năng bắt buộc tất cả các dòng phải vẽ (render) 
   lại.

| Thủ phạm điển hình | Tại sao? | Giải pháp? |
|-----------------|------|-----------|
| `:set cursorline`        | Khiến tất cả các dòng phải vẽ lại. | `:set nocursorline` |
| `:set cursorcolumn`      | Khiến tất cả các dòng phải vẽ lại. | `:set nocursorcolumn` |
| `:set relativenumber`    | Khiến tất cả các dòng phải vẽ lại. | `:set norelativenumber` |
| `:set foldmethod=syntax` | Nếu file cú pháp đã chậm sẵn, lệnh này còn khiến nó tệ hơn. | `:set foldmethod=manual`, `:set foldmethod=marker` or [FastFold](https://github.com/Konfekt/FastFold) |
| `:set synmaxcol=3000`    | Nhìn chung là Vim có vấn đề với các file có nhiều dòng. | `:set synmaxcol=200` |
| matchparen.vim           | Được sử dụng mặc định. Sử dụng regex để tìm dấu ngoặc đơn đi kèm. | Vô hiệu hóa plugin: `:h matchparen` |

**Lưu ý**: Bạn chỉ làm điều này nếu bạn gặp phải những hạn chế về hiệu suất thực tế.
Trong hầu hết các trường hợp, việc bạn sử dụng các giải pháp được nêu trên đều 
hoàn toàn tốt.

## Chỉnh sửa file lớn bị chậm

Vấn đề lớn nhất với các file lớn là Vim đọc toàn bộ file cùng một lúc. Đều này 
được thực hiện do cách buffer được hiển thị bên trong.
([Thảo luận trên vim_dev@](https://groups.google.com/forum/#!topic/vim_dev/oY3i8rqYGD4/discussion))

Nếu bạn chỉ muốn đọc, `tail hugefile | vim -` là một giải pháp tốt.

Nếu bạn có thể sống mà không cần syntax, đây là lúc cài đặt và sử dụng các 
plugin:

```
$ vim -u NONE -N
```

Đều này sẽ làm cho việc điều hướng nhanh hơn rất nhiều, đặc biệt là vì không sử 
dụng các regex phức tạp để tô màu cho các cú pháp. Bạn cũng nên yêu cầu Vim 
không sử dụng file swap và file viminfo để tránh sự chậm trễ khi sử dụng Vim:

```
$ vim -n -u NONE -i NONE -N
```

Tóm lại, hãy cố gắng tránh sử dụng Vim khi có ý định viết các file thực sự lớn 
. :\

## Dán nội dung trong ngoặc (hoặc tại sao tôi phải đặt lệnh 'dán' mọi lúc?

Chế độ dán trong ngoặc (bracketed paste) cho phép terminal phân biệt giữ văn 
bản đã nhập và văn bản đã được dán.

Bạn đã bao giờ thử dán code của mình vào Vim và sau đó mọi thứ dường như rối 
tung lên?

Điều này chỉ xảy ra nếu bạn dán văn bản sử dụng `cmd+v`, `shift-insert`, 
`middle-click`, .v.v bởi vì khi bạn đang dán văn bản vào terminal. Vim không 
biết rằng bạn vừa dán văn bản đó, nó chỉ nghĩ rằng bạn đang gõ bàn phím cực kì 
nhanh. Do đó, Vim cố gắng thụt lề các dòng nhưng tất nhiên là không thành 
công.

Dĩ nhiên đây không phải là một vấn đề, nếu bạn dán văn bản sử dụng bộ ghi nhớ 
(register) trong Vim, bởi vì Vim biết rằng bạn đang thực sự dán văn bản đó.

Để giải quyết vấn đề này, bạn phải sử dụng `:set paste`. Xem thêm `:h 'paste'` 
và `:h 'pastetoggle'`.

Nếu bạn đã chán ngấy với việc chuyển đối các chế đọ `'dán'` (paste) mọi lúc, 
hãy xem plugin này:
[bracketed-paste](https://github.com/ConradIrwin/vim-bracketed-paste).

Đọc thêm bài viết từ tác giả của plugin: 
[tại đây](http://cirw.in/blog/bracketed-paste).

**Neovim**: Neovim cố gắng làm cho tất cả những điều này trở nên liền mạch hơn 
nhiều và tự động đặt chế độ dán nếu terminal của bạn hỗ trợ nó.

## Độ trễ khi sử dụng phím esc trong terminal

Nếu bạn sống với command-line, bạn có thể sử dụng thứ gọi là _trình giả lập 
terminal_ như xterm, gnome-terminal, iTerm2, v.v. (trái ngược với
[terminal](https://en.wikipedia.org/wiki/Computer_terminal)).

Cũng giống như tổ tiên của mình, các trình giả lập terminal sử dụng 
[escape sequences](https://en.wikipedia.org/wiki/Escape_sequence) 
(hoặc _control sequences_) để điều khiển những thứ như di chuyển con trỏ, thay 
đổi màu của văn bản.v.v Chúng chỉ đơn giả là các chuỗi ký tự ASCII bắt đầu bằng 
một ký tự (được hiển thị trong [kí hiệu dấu mũ](https://en.wikipedia.org/wiki/Caret_notation))
như là `^[`). Khi trình tự như vậy xuất hiện, trình giả lập terminal sẽ tra 
cứu hành động kèm theo trong csdl [terminfo](https://en.wikipedia.org/wiki/Terminfo).

Để làm rõ các vấn đề hơn, trước tiên tôi sẽ giải thích thời gian chờ của việc 
mapping. Chúng luôn xảy ra khi có sự không rõ ràng giữa các mapping:

```vim
:nnoremap ,a  :echo 'foo'<cr>
:nnoremap ,ab :echo 'bar'<cr>
```

Cả hai mapping đều hoạt động như mong đợi, nhưng khi nhập `,a`, sẽ có độ trễ 1 
giây, vì Vim sẽ chờ xem người dùng có nhập phím `b` hay không.

Các sự kiện liên tiếp đều phơi bày ra cùng một vấn đề:

- `<esc>` được sử dụng rất nhiều để quay lại chế độ bình thường hoặc thoát một hành động nào đó.
- Các phím điều hướng được mã hóa sử dụng chuỗi các phím escape.
- Vim hy vọng rằng phím <kbd>Alt</kbd> (còn được gọi là _Meta key_) sẽ gửi một 
  thông tin 8-bit đã được mã hóa thích hợp với với bộ bit cao hơn, nhưng rất 
  nhiều terminal giả lập không hỗ trợ nó (hoặc không bật nó) mà thay vào đó, 
  chúng gửi một chuỗi các nút escape.

Bạn có thể kiểm tra lại phần trên như sau: `vim -u NONE -N` và gõ 
`i<c-v><left>`, bạn sẽ thấy một chuỗi được chèn vào, bắt đầu bằng `^[`, biểu 
trưng cho nút escape.

Tóm lại, Vim gặp khó khăn trong việc phân biệt giữa ký tự `<esc>` và một chuỗi 
kí tự escape thật sự.

Theo mặc định, Vim sử dụng `:set timeout timeoutlen=1000`, do đó, nó sẽ trì 
hoãn sự không rõ ràng của các mapping _và_ các phím trong 1 giây. Đây là một cách 
giải quyết phổ biến nhất cho toàn bộ vấn đề này:

```vim
set timeout           " cho mappings
set timeoutlen=1000   " giá trị mặc định
set ttimeout          " cho các phím
set ttimeoutlen=10    " giá trị nhỏ không đáng lưu ý
```

Trong `:h ttimeout` bạn sẽ tìm thấy một bảng nhỏ hiển thị mối quan hệ giữa các 
tùy chọn này.

Nếu bạn đang sử dụng tmux giữa Vim và Terminal giả lập của mình, hãy thêm cài 
đặt sau vào `~/.tmux.conf`:

```tmux
set -sg escape-time 0
```

## Hoàn tác các hàm tìm kiếm

- Một tìm kiếm với lệnh (`/`, `:substitute`, ...) sẽ thay đổi "tìm kiếm được sử 
  dụng lần gần nhất". (Nó được lưu vào bộ ghi nhớ `/`; bạn có thể in danh sách đó 
  ra với lệnh `:echo @/`).
- Một thay đổi văn bản đơn giản có thể được hoàn tác với lệnh `.`. 
  (Nó được lưu vào bộ ghi nhớ `.`; bạn có thể in danh sách này ra với lệnh
  `:echo @.`)

Cả hai đều _không phải_ là vấn đề, nếu bạn thực hiện chúng từ một hàm. Do đó,  
bạn không thể dễ dàng highlight các từ từ một hàm hoặc thực hiện lại các thay 
đổi văn bản được thực hiện bởi nó.

Xem thêm: `:h function-search-undo`

# Các vấn đề kĩ thuật kì quặc

## Dòng mới được sử dụng cho NUL

Ký tự NUL (`\0`) trong một file, được lưu trữ dưới dạng một dòng mới (`\n`) 
trong bộ nhớ và hiển thị trong một buffer dưới dạng `^@`.

Xem `man 7 ascii` và `:h NL-used-for-Nul` để biết thêm chi tiết.

# Thuật ngữ

## Vim script? Vimscript? VimL?

`Vim script`, `Vimscript`, and `VimL` đều đề cập đến cùng một thứ: Ngôn ngữ lập 
trình dùng để viết kịch bản cho Vim (Ngôn ngữ lập trình Vim). Mặc dù phiên bản 
[8.0.360](https://github.com/vim/vim/commit/b544f3c81f1e6a50322855681ac266ffaa8e313c)
đã thay đổi các tham chiếu đến `VimL` thành `Vim script`, hiện nay có thể được 
coi là thuật ngữ chính thức, `Viml` vẫn còn phổ biến trên internet.

Bất kể bạn sử dụng thuật ngữ nào, mọi người cũng đều sẽ hiểu.
