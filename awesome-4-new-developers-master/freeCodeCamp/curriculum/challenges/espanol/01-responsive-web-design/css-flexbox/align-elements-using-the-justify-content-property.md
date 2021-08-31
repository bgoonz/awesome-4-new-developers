---
id: 587d78ac367417b2b2512af6
title: Alinea elementos mediante la propiedad justify-content
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

Algunas veces los elementos flexibles dentro de un contenedor flexible no llenan todo el espacio del contenedor. Es común querer indicarle al CSS cómo alinear y espaciar los elementos flexibles de una determinada manera. Afortunadamente, la propiedad `justify-content` tiene varias opciones para hacer esto. Pero primero, hay que entender alguna terminología importante antes de revisar dichas opciones.

[Aquí hay una imagen útil que muestra una fila para ilustrar los conceptos siguientes.](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

Recuerda que establecer un contenedor flexible como fila coloca los elementos flexibles uno al lado del otro de izquierda a derecha. Un contenedor flexible establecido como columna coloca los elementos flexibles apilados verticalmente de arriba a abajo. Para cada uno, la dirección en la que están dispuestos los elementos flexibles se llama el **eje principal**. Para una fila, esta es una línea horizontal que recorta cada elemento. Y para una columna, el eje principal es una línea vertical a través de los elementos.

Hay varias opciones para espaciar los elementos flexibles a lo largo de la línea que representa el eje principal. Uno de los más utilizados es `justify-content: center;`, el cual alinea hacia el centro todos los elementos flexibles dentro del contenedor flexible. Otras opciones incluyen:

<ul><li><code>flex-start</code>: alinea los elementos con el inicio del contenedor flex. Para una fila, esto empuja los elementos a la izquierda del contenedor. Para una columna, esto empuja los elementos a la parte superior del contenedor. Esta es la alineación predeterminada si no se especifica ningún tipo de <code>justify-content</code>.</li><li><code>flex-end</code>: alinea los elementos con el final del contenedor flex. Para una fila, esto empuja los elementos a la derecha del contenedor. Para una columna, esto empuja los elementos a la parte inferior del contenedor.</li><li><code>space-between</code>: alinea los elementos en el centro del eje principal, con un espacio extra entre los elementos. Los primeros y últimos elementos son empujados hasta el borde del contenedor flexible. Por ejemplo, en una fila el primer elemento está en el lado izquierdo del contenedor, el último elemento está en el lado derecho del contenedor, luego el espacio restante se distribuye uniformemente entre los demás elementos.</li><li><code>space-around</code>: similar a <code>space-between</code> pero los primeros y últimos elementos no están fijados en los bordes del contenedor, el espacio se distribuye alrededor de todos los elementos con la mitad de un espacio en ambos extremos del contenedor flexible.</li><li><code>space-evenly</code>: Distribuye el espacio de manera uniforme entre los elementos flexibles con un espacio completo en ambos extremos del contenedor flexible</li></ul>

# --instructions--

Un ejemplo ayuda a mostrar esta propiedad en acción. Agrega la propiedad CSS `justify-content` al elemento `#box-container` y asígnale un valor de `center`.

**Extra**  
Prueba las otras opciones de la propiedad `justify-content` en el editor de código para ver sus diferencias. Pero ten en cuenta que un valor de `center` es el único que superará este desafío.

# --hints--

El elemento `#box-container` debe tener una propiedad `justify-content` establecida en un valor de `center`.

```js
assert($('#box-container').css('justify-content') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
