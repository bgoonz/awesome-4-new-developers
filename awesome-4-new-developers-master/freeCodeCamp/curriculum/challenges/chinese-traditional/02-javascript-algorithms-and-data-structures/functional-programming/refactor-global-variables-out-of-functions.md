---
id: 587d7b8f367417b2b2512b60
title: 在函數中重構全局變量
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

目前爲止，我們已經看到了函數式編程的兩個原則：

1) 不要更改變量或對象 - 創建新變量和對象，並在需要時從函數返回它們。 提示：使用類似 `var newArr = arrVar` 時 `arrVar` 是一個數組，代碼只是創建一個對現有變量的引用，而不是副本。 所以更改 `newArr` 中的值會同時更改 `arrVar` 中的值。

2) 聲明函數參數 - 函數內的任何計算僅取決於參數，而不取決於任何全局對象或變量。

給數字增加 1 不夠刺激，我們可以在處理數組或更復雜的對象時應用這些原則。

# --instructions--

重構代碼，使全局數組 `bookList` 在函數內部不會被改變。 `add` 函數可以將指定的 `bookName` 增加到數組末尾並返回一個新的數組（列表）。 `remove` 函數可以從數組中移除指定 `bookName`。

**注意：** 兩個函數都應該返回一個數組，任何新參數都應該在 `bookName` 參數之前添加。

# --hints--

`bookList` 應等於 `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`newBookList` 應等於 `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(newBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`newerBookList` 應等於 `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(newerBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`newestBookList` 應等於 `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(newestBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --seed--

## --seed-contents--

```js
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;

  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```

# --solutions--

```js
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookList, bookName) {
  return [...bookList, bookName];
}

function remove (bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
```
