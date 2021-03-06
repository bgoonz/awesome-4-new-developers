<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [puppeteer](./puppeteer.md) &gt; [Page](./puppeteer.page.md) &gt; [setDefaultNavigationTimeout](./puppeteer.page.setdefaultnavigationtimeout.md)

## Page.setDefaultNavigationTimeout() method

This setting will change the default maximum navigation time for the following methods and related shortcuts:

- [page.goBack(options)](./puppeteer.page.goback.md)

- [page.goForward(options)](./puppeteer.page.goforward.md)

- [page.goto(url,options)](./puppeteer.page.goto.md)

- [page.reload(options)](./puppeteer.page.reload.md)

- [page.setContent(html,options)](./puppeteer.page.setcontent.md)

- [page.waitForNavigation(options)](./puppeteer.page.waitfornavigation.md)

<b>Signature:</b>

```typescript
setDefaultNavigationTimeout(timeout: number): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  timeout | number | Maximum navigation time in milliseconds. |

<b>Returns:</b>

void

