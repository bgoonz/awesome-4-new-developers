---
id: 587d7fa6367417b2b2512bc0
title: Visualizar dados com um diagrama Treemap
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Objetivo:** criar uma aplicação no [CodePen.io](https://codepen.io) que tenha função semelhante a esta: <https://codepen.io/freeCodeCamp/full/KaNGNR>.

Atenda às [especificações de usuário abaixo](https://en.wikipedia.org/wiki/User_story) e obtenha aprovação em todos os testes. Dê a ele o seu próprio estilo pessoal.

Você pode usar HTML, JavaScript, CSS e a biblioteca de visualização D3, baseada em svg. Os testes requerem que os eixos sejam gerados usando a propriedade de eixos do D3, que geram automaticamente marcações ao longo do eixo. Essas marcações são exigidas para passar nos testes do D3 porque suas posições são usadas para determinar o alinhamento dos elementos do gráfico. Você vai encontrar informações sobre a geração de eixos em <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Os elementos DOM necessários (não virtuais) são consultados no momento de cada teste. Se você usar um framework de front-end (como o Vue por exemplo), os resultados dos testes podem ser imprecisos para conteúdo dinâmico. Esperamos dar suporte a eles um dia, mas atualmente esses frameworks não são suportados para os projetos de D3.

**Especificação de usuário nº 1: ** meu treemap deve ter um título com um `id="title"` correspondente.

**Especificação de usuário nº 2: ** meu treemap deve ter uma descrição com uma `id="description"` correspondente.

**Especificação de usuário nº 3: ** meu treemap deve ter elementos `rect` com uma `class="tile"` que representa os dados.

**Especificação de usuário nº 4:** deve haver pelo menos 4 cores diferentes de preenchimento usadas para os blocos.

**Especificação de usuário nº 5:** cada bloco deve ter as propriedades `data-name`, `data-category` e `data-value` contendo os valores de `name`, `category` e `value` correspondentes.

**Especificação de usuário nº 6:** a área de cada bloco deve corresponder à quantidade de `data-value`: blocos com um `data-value` maior devem ter uma área maior.

**Especificação de usuário nº 7:** meu treemap deve ter uma legenda com o `id="legend"` correspondente.

**Especificação de usuário nº 8:** minha legenda deve ter elementos `rect` com um `class="legend-item"` correspondente.

**Especificação de usuário nº 9:** os elementos `rect` na legenda devem usar pelo menos 2 cores diferentes de preenchimento.

**Especificação de usuário nº 10:** eu posso passar com o mouse sobre uma área e ver uma dica com o `id="tooltip"` correspondente, que exibe mais informações sobre a área.

**Especificação de usuário nº 11:** minha dica deve ter uma propriedade `data-value` que corresponda à `data-value` da área ativa.

Para este projeto, você pode usar qualquer um dos seguintes conjuntos de dados:

-   **Contribuições do Kickstarter:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Venda de filmes:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Venda de videogames:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Como alternativa, use este link da nossa CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
