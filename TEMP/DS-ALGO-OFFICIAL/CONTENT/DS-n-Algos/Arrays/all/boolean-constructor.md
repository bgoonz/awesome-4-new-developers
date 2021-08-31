# Boolean() constructor

> The Boolean() constructor is used to create Boolean objects.

The **`Boolean()`** constructor is used to create [ `Boolean` ](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) objects.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## Syntax

new Boolean(\[value\])

### Parameters

`value` Optional

The initial value of the `Boolean` object.

## Examples

### Creating `Boolean` objects with an initial value of `false`

    var bNoParam = new Boolean();
    var bZero = new Boolean(0);
    var bNull = new Boolean(null);
    var bEmptyString = new Boolean('');
    var bfalse = new Boolean(false);

### Creating `Boolean` objects with an initial value of `true`

    var btrue = new Boolean(true);
    var btrueString = new Boolean('true');
    var bfalseString = new Boolean('false');
    var bSuLin = new Boolean('Su Lin');
    var bArrayProto = new Boolean([]);
    var bObjProto = new Boolean({});

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'Boolean constructor' in that specification.](https://tc39.es/ecma262/#sec-boolean-constructor) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|                         | Desktop               | Mobile               | Server                 |
| ----------------------- | --------------------- | -------------------- | ---------------------- | ----------------- | -------------------- | --------------------- | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | --------------------------- |
|                         | Chrome                | Edge                 | Firefox                | Internet Explorer | Opera                | Safari                | Android webview                | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                     |
| ---                     | ---                   | ---                  | ---                    | ---               | ---                  | ---                   | ---                            | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                         |
| `Boolean()` constructor | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 3 | Opera Full support 4 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support 0.1.100 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1, 000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error: Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

## See also

- [Boolean](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Glossary/Boolean)

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)
