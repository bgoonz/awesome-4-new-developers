# Git Cheat Sheet Arabic [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

<div dir = rtl>

### الفهرس

- [الإنشاء](#الإنشاء)
- [التعديلات المحلية](#التعديلات-المحلية)
- [المؤشر](#المؤشر)
- [للتراجع](#للتراجع)
- [للحذف](#للحذف)
- [لنقل الملفات](#لنقل-الملفات)
- [التفاصيل التاريخية](#التفاصيل-التاريخية)
- [مستودع الشفيرة](#مستودع-الشفيرة)
- [للإختصارات والأسماء مسـتعارة](#للإختصارات-والأسماء-مسـتعارة)
- [للتنظيف](#للتنظيف)

## الإنشاء

##### لإنشـاء مسـتودع فـارغ:

<div dir = ltr>

```
$ git init
```

</div>

## التعديلات المحلية

##### لإضافة ملف:

<div dir = ltr>

```
$ git add <file_name>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git add home.php
$ git add contact.php
$ git add admin.php
```

</div>

##### لإضافة العديد من الملفات:

<div dir = ltr>

```
$ git add .
```

</div>

##### للتخزيـن الفعـلي للتعديـلات و حفظها:

<div dir = ltr>

```
$ git commit -m 'reason here..'
```

</div>

##### للتراجـع عـن العمليـات و التعديـلات التـي تقـوم بهـا:

<div dir = ltr>

```
$ git commit --amend
```

</div>

**مثال يوضح كيفية إضافة ملف بعد عمل commit:**

<div dir = ltr>

```
$ git commit -m 'initial commit'
$ git add file.cpp
$ git commit --amend
```

</div>

##### لعرض تفاصيل عن حالة الملفات:

<div dir = ltr>

```
$ git status
```

</div>

##### للحصول على تقرير مختصر عن حالة الملفات:

<div dir = ltr>

```
$ git status --short
```

</div>

##### للحصول على تقرير مختصر حول حالة المشروع والتعديلات الحالية:

<div dir = ltr>

```
$ git status -s
```

</div>

##### إلغاء كل التعديلات والعودة للنسخة التي كنت عليها قبل البدء في التعديل:

<div dir = ltr>

```
$ git checkout -- <file_name>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git checkout -- file.java
```

</div>

##### لحفظ حالة التفرع على ما هي عليه حتى تعود إليها مرة أخرى وتكمل العمل دون أن تحفظ أي Commit:

<div dir = ltr>

```
$ git stash
```

</div>

##### لمعرفـة قائمة الحـالات التـي قمـت بتخزينهـا لكي تسـاعدك في الرجـوع للحالـة التي تريدها:

<div dir = ltr>

```
$ git stash list
```

</div>

##### لعرض قائمة بالحالات التي قمت بتخزينها من قبل وبإمكانك الرجوع لأي منها، أي عمل Reapply:

<div dir = ltr>

```
$ git stash apply
```

</div>

##### للعـودة لأحـد الحـالات المخزنـة مسـبقاً، فبإمكانـك اسـتخدام الاسـم الـذي يظهـر مـع تلـك الحالـة عنـد القيـام بتنفيـذ الأمـر:

<div dir = ltr>

```
$ git stash apply stash@{2}
```

</div>

## المؤشر

##### لعرض قائمة Tags:

<div dir = ltr>

```
$ git tag
```

</div>

##### للبحث عن Tags:

<div dir = ltr>

```
$ git tag -l <صيغة معينة>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git tag -l "v1.7*"
```

</div>

##### لإنشاء Annotated Tag:

<div dir = ltr>

```
$ git tag -a v1.8.0 -m 'version 1.8'
# 💡للتوضيح Tag name is: v1.8.0, After -m you just write a message that will be saved with the tag.
```

</div>

##### لإنشاء Lightweight Tag:

<div dir = ltr>

```
$ git tag v1.8.0
```

</div>

##### لرؤية تفاصيل أكثر عن Tag:

<div dir = ltr>

```
$ git show v1.8.0
```

</div>

## للتراجع

##### للتراجع ولجعل الملف بحالة Unstage:

<div dir = ltr>

```
$ git reset HEAD <file_name>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git reset HEAD myCode.c
```

</div>

## للحذف

##### لحذف ملف وإلغاء متابعته:

<div dir = ltr>

```
$ git rm <file_name>
$ git commit -m 'reason here..'
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git rm myFile.py
$ git commit -m 'Delete myFile.py 🐍'
```

</div>

**مثال يوضح كيفية حذف جميع ملفات txt in settings folder:**

<div dir = ltr>

```
$ git rm settings/\*.txt
$ git commit -m 'Delete all .txt files in settings folder'
```

</div>

##### لحذف المتابعة مع بقاء الملف نفسه:

<div dir = ltr>

```
$ git rm --cached <file_name>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git rm --cached myFile.py
```

</div>

## لنقل الملفات

##### لنقل الملف من مجلد إلى مجلد:

<div dir = ltr>

```
$ git mv <source> <destination>
```

</div>

**مثال يوضح نقل base.rb ➡️ lib folder:**

<div dir = ltr>

```
$ git mv base.rb lib/base.rb
```

</div>

##### ويمكنك إستخدام الأمر لإعادة تسميه ملف:

<div dir = ltr>

```
$ git mv <old_file_name> <new_file_name>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git mv core.java base.java
```

</div>

## التفاصيل التاريخية

##### لرؤية التفاصيل السابقة للمستودع الذي تعمل عليه:

<div dir = ltr>

```
$ git log
```

</div>

##### لرؤية التفاصيل السابقة للمستودع الذي تعمل عليه ولتحديد عدد commits:

<div dir = ltr>

```
$ git log -n    # 💡للتوضيح: n هو مجرد عدد
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git log -2
```

</div>

##### لمعرفة تفاصيل أكثر عن commits:

<div dir = ltr>

```
$ git log -p
```

</div>

##### لرؤية عدد من الإحصائيات بشكل مختصر:

<div dir = ltr>

```
$ git log -stat
```

</div>

##### لعرض المعلومات بطريقة مبسطة وبسطر واحد:

<div dir = ltr>

```
$ git log --pretty=oneline
```

</div>

##### لتحديـد طريقـة العـرض التـي تريدهـا و المعلومـات التـي تريـد وضعهـا:

<div dir = ltr>

```
$ git log --pretty=format:<طريقة العرض التي تريدها>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git log --pretty=format:"%h - %an, %ar"
```

</div>

**شرح لبعض أهم الرموز المتاحة:**

| الرمز |                           معناه                           |
| :---: | :-------------------------------------------------------: |
|  %H   |        هو الرقم الذي يأتي مع commit hash 🔖 commit        |
|  %h   | نفس السابق ولكن يعرض بطريقة مختصرة أي عدد محدد من الأرقام |
|  %an  |           من قام بعمل التعديلات Author Name 🙋🏻            |
|  %ae  |          بريد من قام بالتعديلات Author Email 📧           |
|  %ar  |           تاريخ إضافة التعديلات Author Date 📆            |
|  %s   |          الرسالة أو النص الذي يوضح سبب التعديلات          |

##### لتحديـد المخرجـات زمنيـًا:

<div dir = ltr>

```
$ git log --since=<المدة الزمنية التي تريدها>
```

</div>

**مثال يوضح المدة الزمنية قبل أسبوعين:**

<div dir = ltr>

```
$ git log --since=2.weeks
```

</div>

##### الـ commits التي في تعديلاتها نص معين:

<div dir = ltr>

```
$ git log -S <النص الذي تريده>
```

</div>

**مثال يوضح البحث عن myFunction:**

<div dir = ltr>

```
$ git log -S myFunction
```

</div>

**أهـم (وليـس كل) الخيـارات التـي تسـاعدك عـلى تحديـد المخرجـات وفـق المعايـر التـي تريدهـا:**

|       الرمز       |             معناه              |
| :---------------: | :----------------------------: |
|        -n         |    عرض عدد محدد من المخرجات    |
| --since, --after  |    التعديلات بعد تاريخ معين    |
| --until, --before |    التعديلات قبل تاريخ معين    |
|     --author      | جلب المخرجات التي تطابق المؤلف |

## مستودع الشفيرة

##### لإضافة Remote Repository:

<div dir = ltr>

```
$ git remote add [remote_name] [remote_URL]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git remote add calc https://github.com/algorithmers/calc
```

</div>

##### لمعرفـة المسـتودعات التـي نتعامـل معهـا عن بعد:

<div dir = ltr>

```
$ git remote -v
```

</div>

##### للحصـول عـلى قائمة بالأسماء المسـتعارة أو المـؤشرات التـي تشير لتلـك المسـتودعات بـدون التفاصيـل الأخـرى التـي ترافقهـا:

<div dir = ltr>

```
$ git remote
```

</div>

##### لنسـخ مسـتودع شـيفرة وجلبـه إلى Working Directory:

<div dir = ltr>

```
$ git clone [repository_URL]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git clone https://github.com/algorithmers/my.git
```

</div>

##### تحديـد اسـم خـاص بالمجلـد إذا لم تكـن تريـد الإسم الإفـتراضي:

<div dir = ltr>

```
$ git clone [repository_URL] [new-name]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git clone https://github.com/algorithmers/my.git proj
```

</div>

##### لجلـب البيانـات الموجـودة في Remote Repository:

<div dir = ltr>

```
$ git fetch [remote-name]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git fetch origin
```

</div>

##### رفـع البيانـات أو التعديـلات الجديـدة التـي قـام بهـا المطـور إلى مسـتودع الشـيفرة الموجـود عـلى السيرفر:

<div dir = ltr>

```
$ git push [remote-name] [branch-name]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git push origin master
```

</div>

##### لمعرفـة تفاصيـل أكثر حـول Remote Repository:

<div dir = ltr>

```
$ git remote show [remote-name]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git remote show origin
```

</div>

##### لإعادة تسمية الإسم المختـصر الـذي قمـت بإضافتـه لمسـتودع شـيفرة موجـود عـلى Server:

<div dir = ltr>

```
$ git remote rename [old-remote-name] [new-remote-name]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git remote rename dev devrepo
```

</div>

##### لحذف المستودع:

<div dir = ltr>

```
$ git remote rm [remote-name]
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git remote rm devrepo
```

</div>

## للإختصارات والأسماء مسـتعارة

##### لوضـع أسماء مسـتعارة أو مختـصرة لأوامـر كاملـة أو إختصـار لجـزء معين من الأمر:

<div dir = ltr>

```
$ git config --global alias.<الأمر الذي تود إختصاره> <الإختصار الذي تريده>
```

</div>

**مثال على ذلك:**

<div dir = ltr>

```
$ git config --global alias.st status
```

</div>

## للتنظيف

##### لتنظيـف و إزالـة الملفـات أو المجلـدات الزائـدة أو التـي لا تحتـاج إليهـا:

<div dir = ltr>

```
$ git clean -f -d
```

</div>

##### لتنظيـف و إزالـة الملفـات أو المجلـدات الزائـدة مع تزويدك بصـورة عـن مـا سـيتم حذفـه فعليـاً قبـل حذفـه بشـكل فعـلي:

<div dir = ltr>

```
$ git clean -n -d
```

</div>

##### لحـذف الملفـات والمجلـدات الموجـودة أيضـاً في .gitigonre:

<div dir = ltr>

```
$ git clean -f -d -x
```

</div>

##### للتحقق مما سيتم حذفه قبل حذفه بشكل فعلي:

<div dir = ltr>

```
$ git clean -n -d -x
```

</div>

##### للتنظيف والحذف من خلال الأسلوب التفاعلي:

<div dir = ltr>

```
$ git clean -x -i
```

</div>

</div>
