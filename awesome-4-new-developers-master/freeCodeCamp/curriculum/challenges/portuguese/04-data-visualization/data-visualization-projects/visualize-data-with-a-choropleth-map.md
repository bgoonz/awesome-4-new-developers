---
id: 587d7fa6367417b2b2512bbf
title: Visualizar dados com um mapa coroplético
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**Objetivo:** criar uma aplicação no [CodePen.io](https://codepen.io) que tenha função semelhante a esta: <https://codepen.io/freeCodeCamp/full/EZKqza>.

Atenda às [especificações de usuário](https://en.wikipedia.org/wiki/User_story) abaixo para passar em todos os testes. Dê à página o seu próprio estilo pessoal.

Você pode usar HTML, JavaScript, CSS e a biblioteca de visualização D3, baseada em svg. Os elementos DOM obrigatórios (não virtuais) são consultados no momento de cada teste. Se você usar um framework de front-end (como o Vue por exemplo), os resultados dos testes podem ser imprecisos para conteúdo dinâmico. Esperamos dar suporte a eles um dia, mas atualmente esses frameworks não são suportados para os projetos de D3.

**Especificação de usuário nº 1: ** meu coropleto deve ter um título com um `id="title"` correspondente.

**Especificação de usuário nº 2: ** meu coropleto deve ter um elemento de descrição com uma `id="description"` correspondente.

**Especificação de usuário nº 3: ** meu coropleto deve ter condados com um `class="county"` correspondente que representa os dados.

**Especificação de usuário nº 4: ** deve haver pelo menos 4 cores de preenchimento diferentes usadas para os condados.

**Especificação de usuário nº 5:** cada um dos meus condados devem ter propriedades `data-fips` e `data-education` contendo seus correspondentes valores de `fips` e `education`.

** Especificação de usuário nº 6: ** meu coropleto deve ter um condado para cada dado fornecido.

**Especificação de usuário nº 7:** os condados devem ter os valores `data-fips` e `data-education` que correspondam aos dados da amostra.

**Especificação de usuário nº 8:** meu cloropleto deve ter uma legenda com um `id="legend"` correspondente.

**Especificação de usuário nº 9:** deve haver pelo menos 4 cores diferentes de preenchimento usadas para a legenda.

**Especificação de usuário nº 10:** eu posso passar com o mouse sobre uma área e ver uma dica com o `id="tooltip"` correspondente, que exibe mais informações sobre a área.

**Especificação de usuário nº 11:** minha dica deve ter uma propriedade `data-education` que corresponde ao `data-education` da área ativa.

Aqui estão os conjuntos de dados de que você precisará para completar esse projeto:

-   **Dados educacionais dos EUA:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **Dados dos condados dos EUA:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Como alternativa, use este link da nossa CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
