# .htaccess Snippets

`.htaccess`の便利なスニペットのまとめ

**免責事項**: スニペットを`.htaccess`で利用した場合、たいていは十分機能するはずですが、一定の修正が必要になることもあります。ご自身の責任で使用してください。

**重要**: Apache2.4 ではいくつかの破壊的変更点があり、それはアクセスコントロールの設定において顕著です。より詳しい情報を知りたい場合は次のリンクをチェックしてください。 [upgrading document](https://httpd.apache.org/docs/2.4/upgrading.html)　こちらもどうぞ。 [this issue](https://github.com/phanan/htaccess/issues/2).

## クレジット

まとめている、便利なスニペットの大部分はインターネットを通じて収集されたものです。（例えば、かなりの部分は、[Apache Server Configs](https://github.com/h5bp/server-configs-apache)からのものです）。Source 等などを正確にクレジットしようと努めていますが、不足してることも考えられます。もしも、ご自分の制作物などがクレジットされるべきだという方がいれば私たちに知らせてください。

## 目次

- [URL 書き換え&リダイレクト](#rewrite-and-redirection)
  - [www ありに統一](#force-www)
  - [www ありに統一（包括的に）](#force-www-in-a-generic-way)
  - [www なしに統一](#force-non-www)
  - [www なしに統一（包括的に）](#force-non-www-in-a-generic-way)
  - [https に統一](#force-https)
  - [https に統一する（リバースプロキシー経由）](#force-https-behind-a-proxy)
  - [URL 末尾をスラッシュ（/）で統一する](#force-trailing-slash)
  - [末尾のスラッシュ（/）を取り除く](#remove-trailing-slash)
  - [決められたページにリダイレクトさせる](#redirect-a-single-page)
  - [ディレクトリエイリアス設定](#alias-a-single-directory)
  - [スクリプトへのエイリアスパス](#alias-paths-to-script)
  - [とにかくリダイレクトする](#redirect-an-entire-site)
  - [クリーン URL エイリアス](#alias-clean-urls)
- [セキュリティ](#security)
  - [全アクセス拒否](#deny-all-access)
  - [特定の IP を除いたアクセスの拒否](#deny-all-access-except-yours)
  - [特定の IP のみアクセスを拒否](#allow-all-access-except-spammers)
  - [隠しファイル、隠しディレクトリへのアクセス拒否](#deny-access-to-hidden-files-and-directories)
  - [バックアップファイルやソースファイルにアクセスするのを防ぐ](#deny-access-to-backup-and-source-files)
  - [ディレクトリ下のファイル一覧の表示禁止](#disable-directory-browsing)
  - [画像直リンクの禁止](#disable-image-hotlinking)
  - [特定のドメインからの画像直リンクの禁止](#disable-image-hotlinking-for-specific-domains)
  - [ディレクトリをパスワードで保護する](#password-protect-a-directory)
  - [一つか複数かのファイルをパスワードで保護する](#password-protect-a-file-or-several-files)
  - [特定の他所のサイトからアクセスをブロック](#block-visitors-by-referrer)
  - [フレーミングされるのを防ぐ](#prevent-framing-the-site)
- [パフォーマンス](#performance)
  - [テキストファイルの圧縮](#compress-text-files)
  - [Expires(有効期限)ヘッダを設定する](#set-expires-headers)
  - [Etag をオフにする](#turn-etags-off)
- [その他の項目](#miscellaneous)
  - [PHP の環境変数をセットする](#set-php-variables)
  - [カスタムのエラーページ](#custom-error-pages)
  - [強制ダウンロード](#force-downloading)
  - [ダウンロードを防ぐ](#prevent-downloading)
  - [WEB フォントに対する他のドメインからのアクセスを許可する](#allow-cross-domain-fonts)
  - [自動的に UTF8 エンコードにする](#auto-utf-8-encode)
  - [別の PHP のバージョンに切り替える](#switch-to-another-php-version)
  - [インターネットエクスプローラーの互換表示をさせない](#disable-internet-explorer-compatibility-view)
  - [WebP 画像の配信](#serve-webp-images)

## URL 書き換え&リダイレクト

注: `mod_rewrite`がインストールされていて有効になってることを前提とします。

### www ありに統一

    RewriteEngine on
    RewriteCond %{HTTP_HOST} ^example\.com [NC]
    RewriteRule ^(.*)$ http://www.example.com/$1 [L,R=301,NC]

### www ありに統一（包括的に）

    RewriteCond %{HTTP_HOST} !^$
    RewriteCond %{HTTP_HOST} !^www\. [NC]
    RewriteCond %{HTTPS}s ^on(s)|
    RewriteRule ^ http%1://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

上記の設定はどんなドメインでも動作します。 [Source](https://stackoverflow.com/questions/4916222/htaccess-how-to-force-www-in-a-generic-way)

### www なしに統一

参考 [still](http://www.sitepoint.com/domain-www-or-no-www/) [open](https://devcenter.heroku.com/articles/apex-domains) [for](http://yes-www.org/) [debate](http://no-www.org/) www のついたドメインかついてないドメインかは好きなほうにすればよいです。

    RewriteEngine on
    RewriteCond %{HTTP_HOST} ^www\.example\.com [NC]
    RewriteRule ^(.*)$ http://example.com/$1 [L,R=301]

### www なしに統一（包括的に）

    RewriteEngine on
    RewriteCond %{HTTP_HOST} ^www\.
    RewriteCond %{HTTPS}s ^on(s)|off
    RewriteCond http%1://%{HTTP_HOST} ^(https?://)(www\.)?(.+)$
    RewriteRule ^ %1%3%{REQUEST_URI} [R=301,L]

### https に統一

    RewriteEngine on
    RewriteCond %{HTTPS} !on
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

    # Note: It's also recommended to enable HTTP Strict Transport Security (HSTS)
    # on your HTTPS website to help prevent man-in-the-middle attacks.
    # See https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security
    <IfModule mod_headers.c>
        Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    </IfModule>

### https に統一する（リバースプロキシー経由）

リバースプロキシーを経由して https じゃなくなってるいる場合に便利です。

    RewriteCond %{HTTP:X-Forwarded-Proto} !https
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

### URL 末尾をスラッシュ（/）で統一する

    RewriteCond %{REQUEST_URI} /+[^\.]+$
    RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]

### 末尾のスラッシュ（/）を取り除く

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)/$ /$1 [R=301,L]

### 決められたページにリダイレクトさせる

    Redirect 301 /oldpage.html http://www.example.com/newpage.html
    Redirect 301 /oldpage2.html http://www.example.com/folder/

[Source](http://css-tricks.com/snippets/htaccess/301-redirects/)

### ディレクトリエイリアス設定

    RewriteEngine On
    RewriteRule ^source-directory/(.*) target-directory/$1

### スクリプトへのエイリアスパス

    FallbackResource /index.fcgi

存在しないディレクトリまたはファイルへのリクエストがあれば、スクリプト `index.fcgi` へ転送させるような時に使います。`baz.foo/css/style.css`のような実際にファイルがある時はそちらにアクセスさせておいて、`baz.foo/some/cool/path`のようなクールな URL 表現で、`baz.foo/index.fcgi` (`baz.foo`へのリクエストでも同じく扱える)へリクエストを転送させるさせるような時に便利です。あなたのスクリプト環境にさらされるように、PATH_INFO 環境変数から元のパスへのアクセスを取得します。

    RewriteEngine On
    RewriteRule ^$ index.fcgi/ [QSA,L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.fcgi/$1 [QSA,L]

上記の設定は FallbackResource より非効率ですが（mod_rewrite は`FallbackResource`を扱うより複雑なため）、より柔軟な設定が可能です。

### とにかくリダイレクトする

    Redirect 301 / http://newsite.com/

この方法はそっくりそのまま別のサイトにリダイレクトさせます。`www.oldsite.com/some/crazy/link.html`にアクセスした場合、`www.newsite.com/some/crazy/link.html`にリダイレクトさせます。新しいドメインに引っ越したときなど、非常に役に立ちます。 [Source](http://css-tricks.com/snippets/htaccess/301-redirects/)

### クリーン URL エイリアス

このスニペットは、クリーン URL 用です。拡張子が PHP で、`example.com/users.php`という URL をではなく`example.com/users`という URL としてあつかえます。

    RewriteEngine On
    RewriteCond %{SCRIPT_FILENAME} !-d
    RewriteRule ^([^.]+)$ $1.php [NC,L]

[Source](http://www.abeautifulsite.net/access-pages-without-the-php-extension-using-htaccess/)

## セキュリティ

### 全アクセス拒否

    ## Apache 2.2
    Deny from all

    ## Apache 2.4
    # Require all denied

あなたも同様にコンテンツをみれなくなるのでよく考えて利用してください。

### 特定の IP を除いたアクセスの拒否

    ## Apache 2.2
    Order deny,allow
    Deny from all
    Allow from xxx.xxx.xxx.xxx

    ## Apache 2.4
    # Require all denied
    # Require ip xxx.xxx.xxx.xxx

`xxx.xxx.xxx.xxx`はあなたの IP です。あなたが例えば 12 桁の IP のうち最後の 3 桁を 0/12 で交換する場合、同じネットワーク内の IP の範囲を指定することになり、別途許可 IP を全てリストアップしなければいけないような面倒を回避します。 [Source](http://speckyboy.com/2013/01/08/useful-htaccess-snippets-and-hacks/)

もちろん逆のバージョンもあります。

### 特定の IP のみアクセスを拒否

    ## Apache 2.2
    Order deny,allow
    Allow from all
    Deny from xxx.xxx.xxx.xxx
    Deny from xxx.xxx.xxx.xxy

    ## Apache 2.4
    # Require all granted
    # Require not ip xxx.xxx.xxx.xxx
    # Require not ip xxx.xxx.xxx.xxy

### 隠しファイル、隠しディレクトリへのアクセス拒否

ドット`.`ではじまる隠しファイルや隠しディレクトリはいかなる時も安全である（閲覧されないようにする）必要があります。例えば、`.htaccess`, `.htpasswd`, `.git`, `.hg`　等です。

    RewriteCond %{SCRIPT_FILENAME} -d [OR]
    RewriteCond %{SCRIPT_FILENAME} -f
    RewriteRule "(^|/)\." - [F]

攻撃者に手がかりを与える代わりに、404 エラーページを表示させることができます。

    RedirectMatch 404 /\..*$

### バックアップファイルやソースファイルにアクセスするのを防ぐ

これらのファイルは vi や vim によって置かれたり、公にさらされると、セキュリティ上の危険をもたらすファイルである可能性があります。

    <FilesMatch "(\.(bak|config|dist|fla|inc|ini|log|psd|sh|sql|swp)|~)$">
        ## Apache 2.2
        Order allow,deny
        Deny from all
        Satisfy All

        ## Apache 2.4
        # Require all denied
    </FilesMatch>

[Source](https://github.com/h5bp/server-configs-apache)

### ディレクトリ下のファイル一覧の表示禁止

    Options All -Indexes

### 画像直リンクの禁止

    RewriteEngine on
    # Remove the following line if you want to block blank referrer too
    RewriteCond %{HTTP_REFERER} !^$

    RewriteCond %{HTTP_REFERER} !^https?://(.+\.)?example.com [NC]
    RewriteRule \.(jpe?g|png|gif|bmp)$ - [NC,F,L]

    # もしも、直リンクされた画像の代わりにブロックしたことを示す画像を表示させたいのであれば
    # `RewriteRule`を次のようにしてください:
    # RewriteRule \.(jpe?g|png|gif|bmp) http://example.com/blocked.png [R,L]

### 特定のドメインからの画像直リンクの禁止

特定のサイトからの画像直リンクを無効にしたい場合です。

    RewriteEngine on
    RewriteCond %{HTTP_REFERER} ^https?://(.+\.)?badsite\.com [NC,OR]
    RewriteCond %{HTTP_REFERER} ^https?://(.+\.)?badsite2\.com [NC,OR]
    RewriteRule \.(jpe?g|png|gif|bmp)$ - [NC,F,L]

    # もしも、直リンクされた画像の代わりにブロック下ことを示す画像を表示させたいのであれば
    # `RewriteRule`を次のようにしてください:
    # RewriteRule \.(jpe?g|png|gif|bmp) http://example.com/blocked.png [R,L]

### ディレクトリをパスワードで保護する

最初に`.htpasswd`作成してシステムのどこかに配置しておく必要があります。

    htpasswd -c /home/fellowship/.htpasswd boromir

そして、作成した`.htpasswd`を認証のために使うことができます。

    AuthType Basic
    AuthName "One does not simply"
    AuthUserFile /home/fellowship/.htpasswd
    Require valid-user

### 一つか複数かのファイルをパスワードで保護する

    AuthName "One still does not simply"
    AuthType Basic
    AuthUserFile /home/fellowship/.htpasswd

    <Files "one-ring.o">
    Require valid-user
    </Files>

    <FilesMatch ^((one|two|three)-rings?\.o)$>
    Require valid-user
    </FilesMatch>

### 特定の他所のサイトからアクセスをブロック

この設定は特定のドメインからのアクセスをブロックします [Source](http://www.htaccess-guide.com/deny-visitors-by-referrer/)

    RewriteEngine on
    # Options +FollowSymlinks
    RewriteCond %{HTTP_REFERER} somedomain\.com [NC,OR]
    RewriteCond %{HTTP_REFERER} anotherdomain\.com
    RewriteRule .* - [F]

### フレーミングされるのを防ぐ

下記の設定はウェブサイトがフレーム内に表示(IE では`iframe`を使う)されるのを防止しています。同時に特定の URI の時には許可しています。

    SetEnvIf Request_URI "/starry-night" allow_framing=true
    Header set X-Frame-Options SAMEORIGIN env=!allow_framing

## パフォーマンス

### テキストファイルの圧縮

    <IfModule mod_deflate.c>

        # Force compression for mangled headers.
        # https://developer.yahoo.com/blogs/ydn/pushing-beyond-gzipping-25601.html
        <IfModule mod_setenvif.c>
            <IfModule mod_headers.c>
                SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
                RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
            </IfModule>
        </IfModule>

        # Compress all output labeled with one of the following MIME-types
        # (for Apache versions below 2.3.7, you don't need to enable `mod_filter`
        #  and can remove the `<IfModule mod_filter.c>` and `</IfModule>` lines
        #  as `AddOutputFilterByType` is still in the core directives).
        <IfModule mod_filter.c>
            AddOutputFilterByType DEFLATE application/atom+xml \
                                          application/javascript \
                                          application/json \
                                          application/rss+xml \
                                          application/vnd.ms-fontobject \
                                          application/x-font-ttf \
                                          application/x-web-app-manifest+json \
                                          application/xhtml+xml \
                                          application/xml \
                                          font/opentype \
                                          image/svg+xml \
                                          image/x-icon \
                                          text/css \
                                          text/html \
                                          text/plain \
                                          text/x-component \
                                          text/xml
        </IfModule>

    </IfModule>

[Source](https://github.com/h5bp/server-configs-apache)

### Expires(有効期限)ヘッダを設定する

ブラウザは expires （有効期限）ヘッダをみてコンテンツをサーバーから取得すべきか、キャッシュから取得するかを判断します。静的コンテンツの有効期限はいくらか遠い未来に設定したほうがよいといえます。

    <IfModule mod_expires.c>
        ExpiresActive on
        ExpiresDefault                                      "access plus 1 month"

      # CSS
        ExpiresByType text/css                              "access plus 1 year"

      # Data interchange
        ExpiresByType application/json                      "access plus 0 seconds"
        ExpiresByType application/xml                       "access plus 0 seconds"
        ExpiresByType text/xml                              "access plus 0 seconds"

      # Favicon (cannot be renamed!)
        ExpiresByType image/x-icon                          "access plus 1 week"

      # HTML components (HTCs)
        ExpiresByType text/x-component                      "access plus 1 month"

      # HTML
        ExpiresByType text/html                             "access plus 0 seconds"

      # JavaScript
        ExpiresByType application/javascript                "access plus 1 year"

      # Manifest files
        ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"
        ExpiresByType text/cache-manifest                   "access plus 0 seconds"

      # Media
        ExpiresByType audio/ogg                             "access plus 1 month"
        ExpiresByType image/gif                             "access plus 1 month"
        ExpiresByType image/jpeg                            "access plus 1 month"
        ExpiresByType image/png                             "access plus 1 month"
        ExpiresByType video/mp4                             "access plus 1 month"
        ExpiresByType video/ogg                             "access plus 1 month"
        ExpiresByType video/webm                            "access plus 1 month"

      # Web feeds
        ExpiresByType application/atom+xml                  "access plus 1 hour"
        ExpiresByType application/rss+xml                   "access plus 1 hour"

      # Web fonts
        ExpiresByType application/font-woff2                "access plus 1 month"
        ExpiresByType application/font-woff                 "access plus 1 month"
        ExpiresByType application/vnd.ms-fontobject         "access plus 1 month"
        ExpiresByType application/x-font-ttf                "access plus 1 month"
        ExpiresByType font/opentype                         "access plus 1 month"
        ExpiresByType image/svg+xml                         "access plus 1 month"
    </IfModule>

### Etag をオフにする

`ETag`ヘッダを取り除くことによって、ブラウザ側が持っているキャッシュファイルと、サーバー側にある実ファイルの内容、更新日などが同じかどうか等の検証作業を無効にして、`Cache-Control` と `Expires` ヘッダを利用するようにします。

    <IfModule mod_headers.c>
        Header unset ETag
    </IfModule>
    FileETag None

## その他の項目

### PHP の環境変数をセットする

    php_value <key> <val>

    # 例:
    php_value upload_max_filesize 50M
    php_value max_execution_time 240

### カスタムのエラーページ

    ErrorDocument 500 "Houston, we have a problem."
    ErrorDocument 401 http://error.example.com/mordor.html
    ErrorDocument 404 /errors/halflife3.html

### 強制ダウンロード

コンテンツをブラウザに表示させるのではなく、強制的にダウンロードさせたい場合は次のようにします。

    <Files *.md>
        ForceType application/octet-stream
        Header set Content-Disposition attachment
    </Files>

Now there is a yang to this yin:

### ダウンロードを防ぐ

コンテンツをダウンロードさせるのではなく内容をそのままブラウザに表示させたい時は次のようにします。

    <FilesMatch "\.(tex|log|aux)$">
        Header set Content-Type text/plain
    </FilesMatch>

### WEB フォントに対する他のドメインからのアクセスを許可する

IE, Firefox のだとクロスドメイン制約のため、WEB フォントが正常に機能しない可能性があります。[CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)　このスニペットはその問題を解決します。

    <IfModule mod_headers.c>
        <FilesMatch "\.(eot|otf|ttc|ttf|woff|woff2)$">
            Header set Access-Control-Allow-Origin "*"
        </FilesMatch>
    </IfModule>

[Source](https://github.com/h5bp/server-configs-apache/issues/32)

### 自動的に UTF8 エンコードにする

あなたのテキストコンテンツを常に UTF-8 エンコードする時は次の設定をご利用ください。

    # text/plain か text/htmlを配信する時はUTF-8を使用します。
    AddDefaultCharset utf-8

    # 特定のファイルフォーマットで強制的にUTF-8を使う
    AddCharset utf-8 .atom .css .js .json .rss .vtt .xml

[Source](https://github.com/h5bp/server-configs-apache)

### 別の PHP のバージョンに切り替える

もしも、あなたが共有のホストを利用している場合、おそらく複数のバージョンの PHP がインストールされている可能性があり、時には自分のウェブサイトで特定のバージョンの PHP を使いたくなるかもしれません。例えば、ララベルでは PHP5.4 以上である必要があります。次のスニペットを使えば自分のウェブサイト用の PHP バージョンに切り替える事ができます。

    AddHandler application/x-httpd-php55 .php

    # 代わりにAddTypeを使うこともできます。
    AddType application/x-httpd-php55 .php

### インターネットエクスプローラーの互換表示をさせない

IE の互換表示モードは IE におけるウェブサイトの表示に影響があたえることがあります。次のスニペットを使用することで、IE に最新のエンジンでページをレンダリングさせて、互換表示をさせなくすることができます。

    <IfModule mod_headers.c>
        BrowserMatch MSIE is-msie
        Header set X-UA-Compatible IE=edge env=is-msie
    </IfModule>

### WebP 画像の配信

もしも、[WebP images](https://developers.google.com/speed/webp/?csw=1) がサポートされていて、同じでディレクトリ下に、同じ名前のファイル名で、.webp と jpg/png の拡張子のファイルがあった場合、WebP 画像(.webp)が優先して配信されます。

    RewriteEngine On
    RewriteCond %{HTTP_ACCEPT} image/webp
    RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
    RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]

[Source](https://github.com/vincentorback/WebP-images-with-htaccess)
