---
title: detectLanguage
tags: browser,intermediate
firstSeen: 2020-10-05T18:03:26+03:00
lastUpdated: 2020-10-06T18:47:16+03:00
---

Detects the preferred language of the current user.

- Use `NavigationLanguage.language` or the first `NavigationLanguage.languages` if available, otherwise return `defaultLang`.
- Omit the second argument, `defaultLang`, to use `'en-US'` as the default language code.

```js
const detectLanguage = (defaultLang = "en-US") =>
  navigator.language ||
  (Array.isArray(navigator.languages) && navigator.languages[0]) ||
  defaultLang;
```

```js
detectLanguage(); // 'nl-NL'
```
