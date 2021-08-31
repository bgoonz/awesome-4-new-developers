---
id: 587d7b8b367417b2b2512b53
title: Usa sintaxis de clases para definir una función constructora
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave <dfn>class</dfn>.

Debemos notar que la sintaxis `class` es sólo sintaxis, y no una implementación completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

En ES5, normalmente definimos una función `constructor` y usamos la palabra clave `new` para instanciar un objeto.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

La sintaxis `class` simplemente reemplaza la creación de la función `constructor`:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Debe tenerse en cuenta que la palabra clave `class` declara una nueva función, a la cual se añade un constructor. Este constructor se invoca cuando `new` es llamado para crear un nuevo objeto.

**Nota:** UpperCamelCase debe ser utilizado por convención para nombres de clase en ES6, como `SpaceShuttle` fue usado arriba.

El método `constructor` es un método especial para crear e inicializar un objeto creado con una clase. Aprenderás más sobre ello en la sección de Programación Orientada a Objetos de la Certificación en Algoritmos de JavaScript y Estructuras de Datos.

# --instructions--

Usa la palabra clave `class` y escribe un `constructor` para crear la clase `Vegetable`.

La clase `Vegetable` te permite crear un objeto vegetal con una propiedad `name` que es pasada al `constructor`.

# --hints--

`Vegetable` debe ser una clase (`class`) con un método `constructor` definido.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

La palabra clave `class` debe ser utilizada.

```js
assert(code.match(/class/g));
```

`Vegetable` debe ser capaz de ser instanciada.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` debe devolver `carrot`.

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
