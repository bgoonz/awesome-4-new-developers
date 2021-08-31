---
id: 587d7b8b367417b2b2512b53
title: 使用 class 語法定義構造函數
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 提供了一個新的創建對象的語法，使用關鍵字 <dfn>class</dfn>。

值得注意的是，`class` 只是一個語法糖，它並不像 Java、Python 或者 Ruby 這一類的語言一樣，嚴格履行了面向對象的開發規範。

在 ES5 裏面，我們通常會定義一個構造函數 `constructor`，然後使用 `new` 關鍵字來實例化一個對象：

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

`class` 語法只是簡單地替換了構造函數 `constructor` 的寫法：

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

應該注意 `class` 關鍵字聲明瞭一個新的函數，裏面添加了一個構造函數。 當用 `new` 創建一個新的對象時，構造函數會被調用。

**注意：**首字母大寫駝峯命名法 UpperCamelCase 是 ES6 class 命名的慣例，就像上面的 `SpaceShuttle`。

`constructor` 方法是一個特殊方法，用於創建和初始化 class 創建的對象。 在 JavaScript 算法和數據結構認證的面向對象編程章節裏會更深入介紹它。

# --instructions--

使用 `class` 關鍵詞，寫一個 `constructor` 來創建 `Vegetable` class。

`Vegetable` 這個 class 可以創建 vegetable 對象，這個對象擁有一個在 `constructor` 中賦值的 `name` 屬性。

# --hints--

`Vegetable` 應該是一個 `class`，並在其中定義了 `constructor`。

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

應使用 `class` 關鍵字。

```js
assert(code.match(/class/g));
```

`Vegetable` 可以被實例化。

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` 應該返回 `carrot`。

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
