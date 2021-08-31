# JQuery Conseils Tout le monde devrait savoir [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Une collection de conseils simples pour aider votre jeu jQuery.

> Pour les autres grandes listes vérifier <span class="citation" data-cites="sindresorhus">\[@sindresorhus\]</span>(https://github.com/sindresorhus/) de la liste curated des [listes impressionnantes](https://github.com/sindresorhus/awesome/).

## Table des matières

- [Conseils](#conseils)
- [Soutien](#soutien)
- [Lignes directrices des contributions](../../CONTRIBUTING.md)

## Conseils

1.  [Utilisez `noConflict()`](#use-noconflict)
2.  [Vérification Si jQuery Loaded](#checking-if-jquery-loaded)
3.  [Vérifier si un élément existe](#check-whether-an-element-exists)
4.  [Utilisez `.on()` Binding Au lieu de `.click()`](#use-on-binding-instead-of-click)
5.  [Haut de la page Bouton](#back-to-top-button)
6.  [Précharger Images](#preload-images)
7.  [Vérification Si les images sont chargées](#checking-if-images-are-loaded)
8.  [Fix Broken Images automatiquement](#fix-broken-images-automatically)
9.  [Poster un formulaire avec AJAX](#post-a-form-with-ajax)
10. [Basculer Classes sur Hover](#toggle-classes-on-hover)
11. [Entrée Désactivation champs](#disabling-input-fields)
12. [Arrêter le chargement des Liens](#stop-the-loading-of-links)
13. [Cache jQuery sélecteurs](#cache-jquery-selectors)
14. [Basculer Fade / Slide](#toggle-fadeslide)
15. [Accordéon Simple](#simple-accordion)
16. [Faire deux Divs la même hauteur](#make-two-divs-the-same-height)
17. [Ouvrir Liens externes dans un nouvel onglet / fenêtre](#open-external-links-in-new-tabwindow)
18. [Trouver Élément Par texte](#find-element-by-text)
19. [Déclenchement de la visibilité Change](#trigger-on-visibility-change)
20. [Gestion des erreurs Ajax Appel](#ajax-call-error-handling)
21. [Appels de Plugin Chain](#chain-plugin-calls)
22. [Trier Liste des articles par ordre alphabétique](#sort-list-items-alphabetically)
23. [Desactivar Botón Derecho del Ratón](#disable-right-click)

### Utilisez `noConflict()`

L’alias `$` utilisé par jQuery est également utilisé par d’autres bibliothèques JavaScript. Pour vous assurer que jQuery n’est pas en conflit avec l’objet `$` de différentes bibliothèques, utilisez la méthode `noConflict ()` au début du document:

    jQuery.noConflict();

Vous allez maintenant référencer l’objet jQuery en utilisant le nom de variable `jQuery` au lieu de `$` (par exemple, `jQuery('div p').hide()`). Si vous avez plusieurs versions de jQuery sur la même page, vous pouvez utiliser `noConflict ()` pour définir un alias pour une version spécifique:

    let $x = jQuery.noConflict();

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Vérification Si jQuery Loaded

Avant de pouvoir faire quoi que ce soit avec jQuery vous devez d’abord vous assurer qu’il a été chargé:

    if (typeof jQuery == 'undefined') {
      console.log('jQuery hasn\'t loaded');
    } else {
      console.log('jQuery has loaded');
    }

Maintenant, vous êtes hors …

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Vérifier si un élément existe

Avant d’utiliser un élément HTML, vous devez vous assurer qu’il fait partie de DOM.

    if ($("#selector").length) {
      //faire quelque chose avec élément
    }

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Utilisez `.on()` Binding Au lieu de `.click()`

Utiliser `.on()` vous donne plusieurs avantages par rapport `.click()`, comme la possibilité d’ajouter plusieurs événements…

    .on ('click tap hover')

…Une liaison s’applique à des éléments créés dynamiquement, ainsi (il n’y a pas besoin de se lier manuellement chaque élément dynamiquement ajouté à un élément DOM)…

…Et la possibilité de définir un espace de noms:

    .on ('click.menuOpening')

Namespaces vous donnent le pouvoir de délier un événement spécifique (par exemple, `.off('click.menuOpening')`).

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Haut de la page Bouton

En utilisant le `animate` et méthodes `scrollTop` dans jQuery vous ne pas besoin d’un plug-in pour créer une animation simple défilement-to-top:

    // Back to top
    $('.container').on('click', '.back-to-top', function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
    });

    <!-- Create an anchor tag -->
    <a class="top" href="#">Back to top</a>

Modification des valeur change `scrollTop` où vous veut le scrollbar à la terre. Tout ce que vous faites vraiment est d’animer le corps du document tout au long de 800 millisecondes jusqu’à ce qu’elle défile vers le haut du document.

**Remarque:** Surveillez certains [comportement bogué](https://github.com/jquery/api.jquery.com/issues/417) avec `scrollTop`.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Précharger Images

Si votre page Web utilise beaucoup d’images qui ne sont pas visibles initialement (par exemple, sur le vol stationnaire), il est logique de les précharger:

    $.preloadImages = function () {
      for (var i = 0; i < arguments.length; i++) {
        $('<img>').attr('src', arguments[i]);
      }
    };

    $.preloadImages('img/hover-on.png', 'img/hover-off.png');

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Vérification Si les images sont chargées

Parfois, vous pourriez avoir besoin de vérifier si vos images sont entièrement chargées, afin de continuer avec vos scripts:

    $('img').on('load', function () {
      console.log('image load successful');
    });

Vous pouvez également vérifier si une image particulière a été chargé par le remplacement du `<img>` tag avec un ID ou classe.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Fix Broken Images automatiquement

Si vous arrive de trouver des liens d’image cassés sur votre site pour les remplacer un par un peut être une douleur. Ce simple morceau de code permet d’économiser beaucoup de maux de tête:

    $('img').on('error', function () {
      if(!$(this).hasClass('broken-image')) {
        $(this).prop('src', 'img/broken.png').addClass('broken-image');
      }
    });

Alternativement, si vous souhaitez simplement masquer les images brisées cet extrait prendra soin de cela pour:

    $('img').on('error', function () {
      $(this).hide();
    });

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Poster un formulaire avec AJAX

Méthodes jQuery AJAX sont une voie commune pour demander le texte, HTML, XML ou JSON. Si vous voulez envoyer un formulaire via AJAX, vous pouvez collecter les entrées utilisateur via la méthode `val()`:

    $.post('sign_up.php', {
      user_name: $('input[name=user_name]').val(),
      email:     $('input[name=email]').val(),
      password:  $('input[name=password]').val(),
    });

Cependant, tous ces `val()` appels est coûteux. Une meilleure façon de recueillir les entrées de l’utilisateur utilise le `serialize()` de fonction qui recueille les entrées de l’utilisateur sous forme de chaîne:

    $.post('sign_up', $('#sign-up-form').serialize());

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Basculer Classes sur Hover

Disons que vous voulez changer le visuel d’un élément cliquable sur votre page quand un utilisateur survole. Vous pouvez ajouter une classe à votre élément lorsque l’utilisateur est en vol stationnaire; lorsque l’utilisateur arrête planant supprime la classe:

    $('.btn').on('hover', function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });

Vous avez juste besoin d’ajouter le CSS nécessaire. Si vous voulez une manière encore _simpler_ utiliser la méthode `toggleClass`:

    $('.btn').hover(function () {
      $(this).toggleClass('hover');
    });

**Remarque:** CSS peut être une solution plus rapide dans ce cas, mais il est toujours intéressant de savoir.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Désactivation de champs d’entrée

Parfois, vous voudrez peut-être le bouton d’envoi d’un formulaire ou une de ses entrées de texte est désactivé jusqu’à ce que l’utilisateur a effectué une certaine action (par exemple, la vérification du «Je l’ai lu les termes« case à cocher). Ajouter l’attribut `disabled` à votre entrée de sorte que vous pouvez l’activer quand vous voulez:

    $('input[type="submit"]').prop('disabled', true);

Tout ce que vous devez faire est de lancer la méthode `prop` à nouveau sur l’entrée, mais définissez la valeur de `disabled` à `false`:

    $('input[type="submit"]').prop('disabled', false);

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Arrêter le chargement des Liens

Parfois, vous ne voulez pas de liens pour aller à une certaine page Web, ni recharger la page; vous voudrez peut-être qu’ils fassent d’autre comme déclencheur d’un autre script quelque chose. Cela fera l’affaire d’empêcher l’action par défaut:

    $('a.no-link').on('click', function (e) {
      e.preventDefault();
    });

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Cache jQuery sélecteurs

Pensez à combien de fois vous écrivez le même sélecteur maintes et maintes fois dans tout projet. Chaque `$ ( '. Élément')` sélecteur doit rechercher l’ensemble DOM chaque fois, peu importe si ce sélecteur avait précédemment terme. Au lieu de cela, exécutez le sélecteur une fois et stocker les résultats dans une variable:

    var blocks = $('#blocks').find('li');

Maintenant, vous pouvez utiliser la variable `blocks` où vous voulez sans avoir à chercher les DOM à chaque fois:

    $('#hideBlocks').on('click', function () {
      blocks.fadeOut();
    });

    $('#showBlocks').on('click', function () {
      blocks.fadeIn();
    });

sélecteurs Caching jQuery sont un gain de performance facile.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Basculer Fade / Slide

Coulissantes et à la décoloration sont quelque chose que nous utilisons beaucoup dans nos animations avec jQuery. Vous voudrez peut-être juste pour montrer un élément lorsqu’un utilisateur clique sur quelque chose, ce qui rend les méthodes `slideDown` et `fadeIn` parfait. Mais si vous voulez que l’élément à apparaître sur le premier clic et puis disparaissent sur le second cela fonctionne très bien:

    // Fade
    $('.btn').on('click', function () {
      $('.element').fadeToggle('slow');
    });

    // Toggle
    $('.btn').on('click', function () {
      $('.element').slideToggle('slow');
    });

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Accordéon Simple

Ceci est une méthode simple pour un accordéon rapide:

    // Close all panels
    $('#accordion').find('.content').hide();

    // Accordion
    $('#accordion').find('.accordion-header').on('click', function () {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.content').not(next).slideUp('fast');
      return false;
    });

En ajoutant ce script tout ce que vous a vraiment besoin de le faire sur votre page Web est le HTML nécessaire aller chercher ce travail.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Faire deux Divs la même hauteur

Parfois, vous aurez envie deux divs d’avoir la même hauteur, peu importe le contenu qu’ils ont en eux:

    $('.div').css('min-height', $('.main-div').height());

Cet exemple définit la `min-height` ce qui signifie qu’il peut être plus grande que la div principale, mais jamais plus petit. Cependant, une méthode plus souple serait de boucler sur un ensemble d’éléments et de régler la hauteur à la hauteur de l’élément le plus haut:

    var $columns = $('.column');
    var height = 0;
    $columns.each(function () {
      if ($(this).height() > height) {
        height = $(this).height();
      }
    });
    $columns.height(height);

Si vous voulez _all_ colonnes ont la même hauteur:

    var $rows = $('.same-height-columns');
    $rows.each(function () {
      $(this).find('.column').height($(this).height());
    });

**Remarque:** Cela peut se faire de plusieurs façons [CSS](http://codepen.io/AllThingsSmitty/pen/KMPqoO), mais en fonction de vos besoins, de savoir comment faire cela dans jQuery est toujours valable.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Ouvrez Liens externes dans un nouvel onglet / fenêtre

Ouvrir des liens externes dans un nouvel onglet du navigateur ou la fenêtre et assurer des liens sur la même origine ouvert dans le même onglet ou une fenêtre:

    $('a[href^="http"]').attr('target', '_blank');
    $('a[href^="//"]').attr('target', '_blank');
    $('a[href^="' + window.location.origin + '"]').attr('target', '_self');

**Remarque:** `window.location.origin` ne fonctionne pas dans IE10. [Ce correctif](http://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/) prend soin de la question.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Trouver Élément Par texte

En utilisant le `contains()` sélecteur jQuery vous pouvez rechercher du texte dans le contenu d’un élément. Si le texte n’existe pas, cet élément sera caché:

    var search = $('#search').val();
    $('div:not(:contains("' + search + '"))').hide();

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Déclenchement de la visibilité Change

Trigger JavaScript lorsque l’utilisateur est plus axé sur un onglet, ou réoriente sur un onglet:

    $(document).on('visibilitychange', function (e) {
      if (e.target.visibilityState === 'visible') {
        console.log('Tab is now in view!');
      } else if (e.target.visibilityState === 'hidden') {
        console.log('Tab is now hidden!');
      }
    });

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Gestion des erreurs Ajax Appel

Lorsqu’un appel Ajax renvoie une erreur 404 ou 500 le gestionnaire d’erreur sera exécutée. Si le gestionnaire ne se définit pas, un autre code jQuery ne fonctionneront plus. Définir un gestionnaire global d’erreur Ajax:

    $(document).on('ajaxError', function (e, xhr, settings, error) {
      console.log(error);
    });

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### appels Plugin Chain

jQuery permet le “chaînage” du plug-in méthode appelle pour atténuer le processus d’interrogation à plusieurs reprises le DOM et la création de plusieurs objets jQuery. Disons que l’extrait suivant représente vos appels de méthode plugin:

    $('#elem').show();
    $('#elem').html('bla');
    $('#elem').otherStuff();

Cela pourrait être grandement améliorée en utilisant le chaînage:

    $('#elem')
      .show()
      .html('bla')
      .otherStuff();

Une alternative consiste à mettre en cache l’élément dans une variable (avec le préfixe `$`):

    var $elem = $('#elem');
    $elem.hide();
    $elem.html('bla');
    $elem.otherStuff();

Les deux chaînage et [cache](#jquery-sélecteurs%20cache-) méthodes jQuery sont les meilleures pratiques qui conduisent à un code plus court et plus rapide.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Trier Liste Articles alphabétiquement

Disons que vous vous retrouvez avec trop d’éléments dans une liste. Peut-être que le contenu est produit par un CMS et que vous souhaitez les commander par ordre alphabétique:

    var ul = $('#list'),
    lis = $('li', ul).get();

    lis.sort(function (a, b) {
      return ($(a).text().toUpperCase() < $(b).text().toUpperCase()) ? -1 : 1;
    });

    ul.append(lis);

Voilà!

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

### Desactivar Botón Derecho del Ratón

Si desea desactivar botón derecho del ratón, se puede hacer por una página entera…

    $(document).ready(function () {
      $(document).bind('contextmenu', function (e) {
        return false;
      })
    })

…pero se puede hacer aussi la même para un elemento específico:

    $(document).ready(function () {
      $('#submit').bind('contextmenu', function (e) {
        return false;
      })
    })

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>

## Soutien

Les versions actuelles de Chrome, Firefox, Safari, Opera, Edge, et IE11.

<sup>[retour\ à\ la\ table\ des\ matières](#table-of-contents)</sup>
