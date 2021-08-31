---
id: bd7178d8c242eddfaeb5bd13
title: Visualizar dados com um gráfico de dispersão
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**Objetivo:** criar uma aplicação no [CodePen.io](https://codepen.io) que tenha função semelhante a esta: <https://codepen.io/freeCodeCamp/full/bgpXyK>.

Atenda às [especificações de usuário abaixo](https://en.wikipedia.org/wiki/User_story) e obtenha aprovação em todos os testes. Dê a ele o seu próprio estilo pessoal.

Você pode usar HTML, JavaScript, CSS e a biblioteca de visualização D3, baseada em svg. Os testes requerem que os eixos sejam gerados usando a propriedade de eixos do D3, que geram automaticamente marcações ao longo do eixo. Essas marcações são exigidas para passar nos testes do D3 porque suas posições são usadas para determinar o alinhamento dos elementos do gráfico. Você vai encontrar informações sobre a geração de eixos em <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Os elementos DOM necessários (não virtuais) são consultados no momento de cada teste. Se você usar um framework de front-end (como o Vue por exemplo), os resultados dos testes podem ser imprecisos para conteúdo dinâmico. Esperamos dar suporte a eles um dia, mas atualmente esses frameworks não são suportados para os projetos de D3.

**Especificação de usuário nº 1:** eu posso ver um elemento de título que tem um `id="title"` correspondente.

**Especificação de usuário nº 2:** eu posso ver um eixo x com um `id="x-axis"` correspondente.

**Especificação de usuário nº 3:** eu posso ver um eixo y com um `id="y-axis"` correspondente.

**Especificação de usuário nº 4:** eu posso ver pontos e cada um deles tem uma classe `dot`, que representa os dados a serem plotados.

**Especificação de usuário nº 5:** cada ponto deve ter as propriedades `data-xvalue` e `data-yvalue` contendo seus valores correspondentes de `x` e de `y`.

**Especificação de usuário nº 6:** os valores `data-xvalue` e `data-yvalue` de cada ponto devem estar dentro do intervalo factual de dados e no formato de dados correto. Para `data-xvalue`, objetos de inteiros (anos completos) ou `Date` são aceitáveis para a avaliação dos testes. Para `data-yvalue` (minutos), use objetos `Date`.

**Especificação de usuário nº 7:** o `data-xvalue` e seu ponto correspondente devem estar alinhados com o ponto/valor correspondente no eixo x.

**Especificação de usuário nº 8:** o `data-yvalue` e seu ponto correspondente devem estar alinhados com o ponto/valor correspondente no eixo y.

**Especificação de usuário nº 9:** eu posso ver diversas etiquetas de confirmação no eixo y com o formato de tempo `%M:%S`.

**Especificação de usuário nº 10:** eu posso ver diversas etiquetas de confirmação no eixo x que mostram o ano.

**Especificação de usuário nº 11:** eu posso ver que o intervalo de etiquetas com o eixo x está dentro do intervalo factual de dados do eixo x.

**Especificação de usuário nº 12:** eu posso ver que o intervalo de etiquetas com o eixo y está dentro do intervalo factual de dados do eixo y.

**Especificação de usuário nº 13:** eu posso ver uma legenda que tem `id="legend"` e contém texto descritivo.

**Especificação de usuário nº 14:** eu posso passar com o mouse sobre uma área e ver uma dica com o `id="tooltip"` correspondente, que exibe mais informações sobre a área.

**Especificação de usuário nº 15:** minha dica deve ter uma propriedade `data-year` que corresponde ao `data-xvalue` da área ativa.

Aqui está o conjunto de dados de que você vai precisar para completar esse projeto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este modelo da CodePen</a> e, logo após, clicar em `Save` para criar seu próprio projeto. Como alternativa, use este link da nossa CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
