# Consejos jQuery cada uno debe saber [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Una colección de consejos simples para ayudar a su juego jQuery.

> Para otros grandes listas echa un vistazo a <span class="citation" data-cites="sindresorhus">\[@sindresorhus\]</span>(https://github.com/sindresorhus/)’s lista curada de [listas impresionantes](https://github.com/sindresorhus/awesome/).

## Tabla de contenido

- [Tips](#consejos)
- [Apoyo](#apoyo)
- [Pautas de contribución](../../CONTRIBUTING.md)

## Consejos

1.  [Utilizar `noConflict()`](#utilizar-noconflict)
2.  [Verificando jQuery Cargado](#verificando-jquery-cargado)
3.  [Compruebe si existe un elemento](#compruebe-si-existe-un-elemento)
4.  [Utilice `.on ()` En lugar de unión `.click ()`](#utilice-on--en-lugar-de-unión-click-)
5.  [Volver al botón de inicio](#volver-al-botón-de-inicio)
6.  [Carga previa de imágenes](#carga-previa-de-imágenes)
7.  [Comprobando si las imágenes se cargan](#comprobación-si-las-imágenes-se-cargan)
8.  [Corregir imágenes automáticamente rotas](#corregir-imágenes-automáticamente-rotas)
9.  [Publicar un formulario con AJAX](#publicar-un-formulario-con-ajax)
10. [Alternar clases en la libración](##alternar-clases-en-la-libración)
11. [Desactivar la acción de campos](#desactivación-de-campos-de-entrada)
12. [Detener la carga de Enlaces](#detener-la-carga-de-enlaces)
13. [De caché de jQuery selectores](#de-caché-de-jquery-selectores)
14. [De palanca de fundido / Slide](#de-palanca-de-fundido--slide)
15. [Acordeón simple](#acordeón-simple)
16. [Haga dos Divs la misma altura](#haga-dos-divs-la-misma-altura)
17. [Abrir enlaces externos en una nueva pestaña / ventana](#abrir-enlaces-externos-en-una-nueva-pestaña--ventana)
18. [Buscar elemento Por Texto](#buscar-elemento-por-texto)
19. [Visibilidad gatillo de Cambio](#visibilidad-gatillo-de-cambio)
20. [Control de errores de llamada Ajax](#control-de-errores-de-llamada-ajax)
21. [Llamadas Plugin Cadena](#llamadas-plugin-cadena)
22. [Ordenar la lista de elementos alfabéticamente](#ordenar-la-lista-de-elementos-alfabéticamente)
23. [Deshabilitar clic derecho](#deshabilitar-clic-derecho)

### Utilizar `noConflict()`

El alias `$` usado por jQuery también lo usan otras bibliotecas de JavaScript. Para garantizar que jQuery no entre en conflicto con el objeto `$` de diferentes bibliotecas, utilice el método `noConflict()` al comienzo del documento:

    jQuery.noConflict();

Ahora hará referencia al objeto jQuery utilizando el nombre de la variable `jQuery` en lugar de `$` (por ejemplo, `jQuery('div p').hide()`). Si tiene varias versiones de jQuery en la misma página, puede usar `noConflict ()` para establecer un alias para una versión específica:

    let $x = jQuery.noConflict();

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Verificando jQuery Cargado

Antes de que pueda hacer cualquier cosa con jQuery primero tiene que asegurarse de que se ha cargado:

    if (typeof jQuery == 'undefined') {
      console.log('jQuery hasn\'t loaded');
    } else {
      console.log('jQuery has loaded');
    }

Ahora que estás fuera…

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Compruebe si existe un elemento

Antes de usar un elemento HTML, debe asegurarse de que sea parte de DOM.

    if ($("#selector").length) {
      //hacer algo con elemento
    }

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Utilice `.on ()` En lugar de unión `.click ()`

.en El uso de `()` le da varias ventajas sobre el uso de `.click ()`, tales como la capacidad de agregar varios eventos…

    .on ('click tap hover')

…Una unión se aplica a los elementos creados de forma dinámica, así (no hay necesidad de obligar manualmente cada elemento añadido dinámicamente a un elemento DOM) …

…Y la posibilidad de configurar un espacio de nombres:

    .on('click.menuOpening')

Los espacios de nombres te dan el poder para desenlazar un evento específico (por ejemplo,`.off('click.menuOpening')`).

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Volver al botón de inicio

Mediante el uso de la `animate` y métodos `scrollTop` en jQuery que no es necesario un plugin para crear una animación simple-scroll-a arriba:

    // Back to top
    $('.container').on('click', '.back-to-top', function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
    });

    <!-- Create an anchor tag -->
    <a class="top" href="#">Back to top</a>

El cambio de los cambios de valor `scrollTop` donde se quiere que la barra de desplazamiento a la tierra. Todo lo que realmente está haciendo es animar el cuerpo del documento a lo largo de 800 milisegundos hasta que se desplaza a la parte superior del documento.

**Nota:** ve por alguna [comportamiento incorrecto](https://github.com/jquery/api.jquery.com/issues/417) con `scrollTop`.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Carga previa de imágenes

Si su página web utiliza una gran cantidad de imágenes que no son visibles inicialmente (por ejemplo, en vuelo estacionario) que tiene sentido para precargar ellos:

    $.preloadImages = function () {
      for (var i = 0; i < arguments.length; i++) {
        $('<img>').attr('src', arguments[i]);
      }
    };

    $.preloadImages('img/hover-on.png', 'img/hover-off.png');

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Comprobación Si las imágenes se cargan

A veces puede que tenga que comprobar si las imágenes han cargado completamente con el fin de continuar con las secuencias de comandos:

    $('img').on('load', function () {
      console.log('image load successful');
    });

También puede comprobar si una imagen en particular se ha cargado mediante la sustitución de la etiqueta `<img>` con un ID o clase.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Corregir imágenes automáticamente rotas

Si por casualidad usted encuentra enlaces de imagen rotos en su sitio de la sustitución de uno por uno puede ser un dolor. Esta sencilla pieza de código puede ahorrar muchos dolores de cabeza:

    $('img').on('error', function () {
      if(!$(this).hasClass('broken-image')) {
        $(this).prop('src', 'img/broken.png').addClass('broken-image');
      }
    });

Alternativamente, si desea ocultar simplemente imágenes rotas este fragmento se encargará de que para:

    $('img').on('error', function () {
      $(this).hide();
    });

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Publicar un formulario con AJAX

Métodos jQuery AJAX son una forma común para solicitar texto, HTML, XML, JSON o. Si desea enviar un formulario a través de AJAX se podía recoger las entradas del usuario a través del método `val()`:

    $.post('sign_up.php', {
      user_name: $('input[name=user_name]').val(),
      email:     $('input[name=email]').val(),
      password:  $('input[name=password]').val(),
    });

Sin embargo, todos esos `val()` llamadas es caro. Una mejor manera de recoger las entradas del usuario está utilizando el `serialize()` función que recoge las entradas del usuario como una cadena:

    $.post('sign_up', $('#sign-up-form').serialize());

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Alternar clases en la libración

Digamos que usted quiere cambiar la visual de un elemento se puede hacer clic en la página cuando un usuario se desplaza sobre él. Usted puede agregar una clase a su elemento cuando el usuario está flotando; cuando el usuario deja flotando elimina la clase:

    $('.btn').on('hover', function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });

Sólo tiene que añadir el CSS necesario. Si desea una manera aún _simpler_ utilizar el método `toggleClass`:

    $('.btn').hover(function () {
      $(this).toggleClass('hover');
    });

**Nota:** CSS puede ser una solución más rápida en este caso, pero es todavía vale la pena saber esto.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Desactivación de campos de entrada

A veces es posible que desee el botón de envío de un formulario o una de sus entradas de texto debe ser inhabilitado hasta que el usuario ha realizado una acción determinada (por ejemplo, control de la “He leído los términos” casilla de verificación). Añadir el atributo `disabled` a la entrada para que pueda activarlo cuando se quiere:

    $('input[type="submit"]').prop('disabled', true);

Todo lo que necesita hacer es ejecutar el método `prop` otra vez en la entrada, pero establecer el valor de `disabled` a `false`:

    $('input[type="submit"]').prop('disabled', false);

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Detener la carga de Enlaces

A veces no desea vínculos para ir a una determinada página web, ni volver a cargar la página; es posible que desee que hagan otra cosa, como disparador de otro guión. Esto va a hacer el truco de la prevención de la acción por defecto:

    $('a.no-link').on('click', function (e) {
      e.preventDefault();
    });

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### De caché de jQuery selectores

Piense en cuántas veces se escribe el mismo selector una y otra vez en cualquier proyecto. Cada `$('.element')` selector tiene que buscar en todo el DOM cada vez, independientemente de si dicho selector había ejecutado anteriormente. En lugar de ello, ejecute el selector de una vez y almacenar los resultados en una variable:

    var blocks = $('#blocks').find('li');

Ahora se puede utilizar la variable `blocks` donde quieras sin tener que buscar el DOM en cada ocasión:

    $('#hideBlocks').on('click', function () {
      blocks.fadeOut();
    });

    $('#showBlocks').on('click', function () {
      blocks.fadeIn();
    });

El almacenamiento en caché selectores de jQuery son una ganancia de rendimiento fácil.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### De palanca de fundido / Slide

Deslizante y la decoloración son algo que usamos un montón en nuestras animaciones con jQuery. Es posible que sólo quieren mostrar un elemento cuando un usuario hace clic en algo, lo que hace que los `fadeIn` y métodos de `slideDown` perfecta. Pero si desea que el elemento que aparezca en la primera posición y luego desaparecen en el segundo esto va a funcionar muy bien:

    // Fade
    $('.btn').on('click', function () {
      $('.element').fadeToggle('slow');
    });

    // Toggle
    $('.btn').on('click', function () {
      $('.element').slideToggle('slow');
    });

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Acordeón simple

Este es un método simple para un acordeón rápida:

    // Close all panels
    $('#accordion').find('.content').hide();

    // Accordion
    $('#accordion').find('.accordion-header').on('click', function () {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.content').not(next).slideUp('fast');
      return false;
    });

Mediante la adición de este script lo único que tiene que hacer en su página web es el HTML necesario ir a buscar este trabajo.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Haga dos Divs la misma altura

A veces, usted querrá dos divs tener la misma altura no importa qué contenido tienen en ellos:

    $('.div').css('min-height', $('.main-div').height());

Este ejemplo establece el `min-height` característica que significa que puede ser más grande que el div principal pero nunca más pequeña. Sin embargo, un método más flexible sería la de bucle sobre un conjunto de elementos y ajustar la altura a la altura del elemento más alto:

    var $columns = $('.column');
    var height = 0;
    $columns.each(function () {
      if ($(this).height() > height) {
        height = $(this).height();
      }
    });
    $columns.height(height);

Si desea _todas_ columnas tengan la misma altura:

    var $rows = $('.same-height-columns');
    $rows.each(function () {
      $(this).find('.column').height($(this).height());
    });

**Nota:** Esto se puede hacer de varias maneras [en CSS](http://codepen.io/AllThingsSmitty/pen/KMPqoO) pero dependiendo de cuáles son sus necesidades, saber cómo hacer esto en jQuery es todavía vale la pena.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Abrir enlaces externos en una nueva pestaña / ventana

Abrir enlaces externos en una nueva pestaña o ventana del navegador y garantizar enlaces en el mismo origen abierta en la misma pestaña o ventana:

    $('a[href^="http"]').attr('target', '_blank');
    $('a[href^="//"]').attr('target', '_blank');
    $('a[href^="' + window.location.origin + '"]').attr('target', '_self');

**Nota:** `window.location.origin` no funciona en IE10. [Esta corrección](http://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/) se ocupa de la cuestión.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Buscar elemento Por Texto

Mediante el uso de la selector `contains()` en jQuery se puede encontrar texto en el contenido de un elemento. Si no existe texto, ese elemento se ocultará:

    var search = $('#search').val();
    $('div:not(:contains("' + search + '"))').hide();

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Visibilidad gatillo de Cambio

Gatillo JavaScript cuando el usuario ya no se centra en una pestaña, o vuelve a centrar en una pestaña:

    $(document).on('visibilitychange', function (e) {
      if (e.target.visibilityState === 'visible') {
        console.log('Tab is now in view!');
      } else if (e.target.visibilityState === 'hidden') {
        console.log('Tab is now hidden!');
      }
    });

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Control de errores de llamada Ajax

Cuando una llamada Ajax devuelve un error 404 o 500 se ejecutará el gestor de errores. Si no se define el controlador, otro código jQuery podría no funcionar. Definir un controlador global de error de Ajax:

    $(document).on('ajaxError', function (e, xhr, settings, error) {
      console.log(error);
    });

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Llamadas Plugin Cadena

jQuery permite el “encadenamiento” plug-in de llamadas a métodos para mitigar el proceso de consulta en repetidas ocasiones el DOM y la creación de varios objetos jQuery. Digamos que el siguiente fragmento representa sus llamadas a métodos plugin:

    $('#elem').show();
    $('#elem').html('bla');
    $('#elem').otherStuff();

Esto podría mejorarse enormemente mediante el uso de encadenamiento:

    $('#elem')
      .show()
      .html('bla')
      .otherStuff();

Una alternativa es almacenar en caché el elemento en una variable (con el prefijo `$`):

    var $elem = $('#elem');
    $elem.hide();
    $elem.html('bla');
    $elem.otherStuff();

Ambos métodos [almacenamiento en caché](#cache-jquery-selectors) en el encadenamiento y son las mejores prácticas que conducen al código corto y más rápido.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Ordenar la lista de elementos alfabéticamente

Digamos que usted termina con demasiados elementos en una lista. Tal vez el contenido es producido por un CMS y desea ordenar por orden alfabético:

    var ul = $('#list'),
    lis = $('li', ul).get();

    lis.sort(function (a, b) {
      return ($(a).text().toUpperCase() < $(b).text().toUpperCase()) ? -1 : 1;
    });

    ul.append(lis);

Hay que ir!

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

### Deshabilitar clic derecho

Si desea desactivar el botón derecho del ratón, puede hacerlo para una página entera…

    $(document).ready(function () {
      $(document).bind('contextmenu', function (e) {
        return false;
      })
    })

…pero también puede hacer lo mismo para un elemento específico:

    $(document).ready(function () {
      $('#submit').bind('contextmenu', function (e) {
        return false;
      })
    })

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>

## Apoyo

Las versiones actuales de Chrome, Firefox, Safari, Opera, Edge y EI11.

<sup>[volver\ al\ índice\ de\ contenidos](#table-of-contents)</sup>
