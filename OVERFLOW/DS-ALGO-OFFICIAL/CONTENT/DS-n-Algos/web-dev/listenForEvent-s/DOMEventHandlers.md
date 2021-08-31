# DOM onevent handlers

> The Web platform provides several ways to be notified of DOM events. Two common approaches are addEventListener() and the specific onevent handlers.

The Web platform provides several ways to be notified of [DOM events](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/Events). Two common approaches are [`addEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/addEventListener) and the specific `on_event_` handlers. This page focuses on how the latter work.

## Registering onevent handlers

The **`on_event_`** handlers are properties on certain DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and so forth) or non-interactive (such as the base `<body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




` element). Events are actions like:

- Being clicked
- Detecting pressed keys
- Getting focus

The `on_event_` handler is usually named with the event it reacts to, like `on_click_`, `on_keypress_`, `on_focus_`, etc.

You can specify an `on_<…>_` event handler for a particular event (such as `[click](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/Events/click "/en-US/docs/Web/Events/click")`) for a given object in different ways:

- Adding an HTML [attribute](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/attribute) named `on_<eventtype>_`:  
  `<button **onclick="handleClick()"**>`,
- Or by setting the corresponding [property](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/property/JavaScript) from JavaScript:  
  `document.querySelector("button")**.onclick = function(event) { … }**`.

An `on_event_` event handler property serves as a placeholder of sorts, to which a single event handler can be assigned. In order to allow multiple handlers to be installed for the same event on a given object, you can call its [`addEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/addEventListener) method, which manages a list of handlers for the given event on the object. A handler can then be removed from the object by calling its [`removeEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/removeEventListener) function.

When an event occurs that applies to an element, each of its event handlers is called to allow them to handle the event, one after another. You don't need to call them yourself, although you can do so in many cases to easily simulate an event taking place. For example, given a button object `myButton`, you can do `myButton.onclick(myEventObject)` to call the event handler directly. If the event handler doesn't access any data from the event object, you can leave out the event when calling `onclick()`.

This continues until every handler has been called, unless one of the event handlers explicitly halts the processing of the event by calling [`stopPropagation()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Event/stopPropagation) on the event object itself.

### Non-element objects

Event handlers can also be set with properties on non-element objects that generate events, like [`window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window), [`document`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Document), [`XMLHttpRequest`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/XMLHttpRequest), and others. For example, for the `progress` event on instances of `XMLHttpRequest`:

    const xhr = new XMLHttpRequest();
    xhr.onprogress = function() { … };

## HTML onevent attributes

HTML elements have attributes named `on_event_` which can be used to register a handler for an event directly within the HTML code. When the element is built from the HTML, the value of its `on_event_` attributes are copied to the DOM object that represents the element, so that accessing the attributes' values using JavaScript will get the value set in the HTML.

Further changes to the HTML attribute value can be done via the [`setAttribute`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Element/setAttribute) method; Making changes to the JavaScript property will have no effect.

### HTML

Given this HTML document:

    <p>Demonstrating quirks of <code>on<em>event</em></code> HTML attributes on
       <a onclick="log('Click!')">these three words</a>.
    </p>

    <div></div>

### JavaScript

Then this JavaScript demonstrates that the value of the HTML attribute is unaffected by changes to the JavaScript object's property.

    let logElement = document.querySelector('div');
    let el = document.querySelector("a");

    function log(msg) { logElement.innerHTML += `${msg}<br>` };
    function anchorOnClick(event) { log("Changed onclick handler") };


    log(`Element's onclick as a JavaScript property: <code> ${el.onclick.toString()} </code>`);


    log('<br>Changing onclick handler using <strong> onclick property </strong> ');

    el.onclick = anchorOnClick;

    log(`Changed the property to: <code> ${el.onclick.toString()} </code>`);
    log(`But the HTML attribute is unchanged: <code> ${el.getAttribute("onclick")} </code><br>`);


    log('<hr/><br> Changing onclick handler using <strong> setAttribute method </strong> ');
    el.setAttribute("onclick", 'anchorOnClick(event)');

    log(`Changed the property to: <code> ${el.onclick.toString()} </code>`);
    log(`Now even the HTML attribute has changed: <code> ${el.getAttribute("onclick")} </code><br>`);

### Result

For historical reasons, some attributes/properties on the [`<body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/body "The HTML <body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




Element represents the content of an HTML document. There can be only one <body>

                                <a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="github-corner"
                                aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
                                    style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
                                    aria-hidden="true">
                                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                    <path
                                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
                                    </path>
                                    <path
                                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                        fill="currentColor" class="octo-body"></path>
                                </svg></a>




element in a document.") and [`<frameset>`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/HTML/Element/frameset "The HTML <frameset> element is used to contain <frame> elements.") elements instead set event handlers on their parent [`Window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) object. (The HTML specification names these: [`onblur`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onblur), [`onerror`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onerror), [`onfocus`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onfocus), [`onload`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onload), and [`onscroll`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onscroll).)

### Event handler's parameters, this binding, and the return value

When the event handler is specified as **an HTML attribute**, the specified code is wrapped into a function with **the following parameters**:

- `event` — for all event handlers except [`onerror`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onerror).
- `event`, `source`, `lineno`, `colno`, and `error` for the [`onerror`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/GlobalEventHandlers/onerror) event handler. Note that the `event` parameter actually contains the error message as a string.

When the event handler is invoked, the `this` keyword inside the handler is set to the DOM element on which the handler is registered. For more details, see [the `this` keyword documentation](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/this#In_an_inline_event_handler).

The return value from the handler determines if the event is canceled. The specific handling of the return value depends on the kind of event; for details, see ["The event handler processing algorithm" in the HTML specification](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm).

### When the event handler is invoked

TBD (non-capturing listener)

### Terminology

The term **event handler** may refer to:

- Any function or object that is registered to be notified of events
- Or more specifically, to the mechanism of registering event listeners via `on…` attributes in HTML or properties in Web APIs, such as `<button onclick="alert(this)">` or `window.onload = function() { … }`.

When discussing the various methods of listening to events:

- **Event listener** refers to a function or object registered via [`EventTarget.addEventListener()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/EventTarget/addEventListener)
- **Event handler** refers to a function registered via `on…` attributes or properties

## Specifications

| Specification | Status | Comment |
| ------------- | ------ | ------- |

| [HTML Living Standard  
The definition of 'event handlers' in that specification.](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-attributes) | Living Standard | |
| [HTML5  
The definition of 'event handlers' in that specification.](https://www.w3.org/TR/html52/webappapis.html#event-handler-attributes) | Recommendation | |

## Browser compatibility

#### Detecting the presence of event handler properties

You can detect the presence of an event handler property with the JavaScript [`in`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Operators/in) operator. For example:

    if ("onsomenewfeature" in window) {

    }

#### Event handlers and prototypes

You can't set or access the values of any IDL-defined attributes on DOM prototype objects. That means you can't, for example, change `Window.prototype.onload`. In the past, event handlers (`onload`, etc.) weren't implemented as IDL attributes in Gecko, so you were able to do this for those. Now you can't. This improves compatibility.

[Source](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)
