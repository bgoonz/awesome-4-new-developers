---
id: bd7188d8c242eddfaeb5bd13
title: Visualizar dados com um mapa de calor
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**Objetivo:** criar uma aplicação no [CodePen.io](https://codepen.io) que tenha função semelhante a esta: <https://codepen.io/freeCodeCamp/full/JEXgeY>.

Atenda às [especificações de usuário abaixo](https://en.wikipedia.org/wiki/User_story) e obtenha aprovação em todos os testes. Dê a ele o seu próprio estilo pessoal.

Você pode usar HTML, JavaScript, CSS e a biblioteca de visualização D3, baseada em svg. Os elementos DOM necessários (não virtuais) são consultados no momento de cada teste. Se você usar um framework de front-end (como o Vue por exemplo), os resultados dos testes podem ser imprecisos para conteúdo dinâmico. Esperamos dar suporte a eles um dia, mas atualmente esses frameworks não são suportados para os projetos de D3.

**Especificação de usuário nº 1: ** meu mapa de calor deve ter um título com um `id="title"` correspondente.

**Especificação de usuário nº 2: ** meu mapa de calor deve ter uma descrição com uma `id="description"` correspondente.

**Especificação de usuário nº 3:** meu mapa de calor deve ter eixo x com um `id="x-axis"` correspondente.

**Especificação de usuário nº 4:** meu mapa de calor deve ter eixo y com um `id="y-axis"` correspondente.

**Especificação de usuário nº 5: ** meu mapa de calor deve ter elementos `rect` com uma `class="cell"` correspondente que representa os dados.

**Especificação de usuário nº 6:** deve haver pelo menos 4 cores diferentes de preenchimento usadas para as células.

**Especificação de usuário nº 7:** cada célula deve ter as propriedades `data-month`, `data-year`, `data-temp` contendo os valores de `month`, `year` e `temperature` correspondentes.

**Especificação de usuário nº 8:** os valores `data-month` e `data-year` de cada célula devem estar dentro do intervalo dos dados.

**Especificação de usuário nº 9:** meu mapa de calor deve ter células que estejam alinhadas com o mês correspondente no eixo y.

**Especificação de usuário nº 10:** meu mapa de calor deve ter células que estejam alinhadas com o ano correspondente no eixo x.

**Especificação de usuário nº 11:** meu mapa de calor deve ter diversas etiquetas de confirmação no eixo y com o nome do mês por extenso.

**Especificação de usuário nº 12:** meu mapa de calor deve ter diversas etiquetas de confirmação no eixo x com os anos entre 1754 e 2015.

**Especificação de usuário nº 13:** meu mapa de calor deve ter uma legenda com o `id="legend"` correspondente.

**Especificação de usuário nº 14:** minha legenda deve conter elementos `rect`.

**Especificação de usuário nº 15:** os elementos `rect` na legenda devem usar pelo menos 4 cores diferentes de preenchimento.

**Especificação de usuário nº 16:** eu posso passar com o mouse sobre uma área e ver uma dica com o `id="tooltip"` correspondente, que exibe mais informações sobre a área.

**Especificação de usuário nº 17:** minha dica deve ter uma propriedade `data-year` que corresponde ao `data-year` da área ativa.

Aqui está o conjunto de dados de que você vai precisar para completar esse projeto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Como alternativa, use este link da nossa CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
