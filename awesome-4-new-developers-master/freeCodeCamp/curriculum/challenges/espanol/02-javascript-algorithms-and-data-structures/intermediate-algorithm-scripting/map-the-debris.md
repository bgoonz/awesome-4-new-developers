---
id: af4afb223120f7348cdfc9fd
title: Mapea el Debris
challengeType: 5
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

El arreglo contendrá objetos en el formato `{name: 'name', avgAlt: avgAlt}`.

Puedes leer sobre los períodos orbitales [en Wikipedia](https://es.wikipedia.org/wiki/Per%C3%Adodo_orbital).

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de 6367.4447 kilómetros y el valor GM de la tierra es de 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` debe devolver `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` debe devolver `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

```js
assert.deepEqual(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ]),
  [
    { name: 'iss', orbitalPeriod: 5557 },
    { name: 'hubble', orbitalPeriod: 5734 },
    { name: 'moon', orbitalPeriod: 2377399 }
  ]
);
```

# --seed--

## --seed-contents--

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

# --solutions--

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
```
