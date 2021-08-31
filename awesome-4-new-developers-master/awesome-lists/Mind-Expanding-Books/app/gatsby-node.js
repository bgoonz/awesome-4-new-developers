const fs = require("fs")

const categories = JSON.parse(fs.readFileSync("src/data/categories.json"))
const slugify = require("slugify")

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  await Promise.all(
    categories.map(async (category) => {
      const data = await graphql(
        `
          query categoryBooksQuery($categoryName: String) {
            allBooksJson(
              filter: { category: { eq: $categoryName } }
              sort: { fields: [rating], order: DESC }
            ) {
              edges {
                node {
                  id
                  title
                  url
                  rating
                  author
                  year
                  category
                  image_url
                  description
                  amazon_url
                }
              }
            }
          }
        `,
        { categoryName: category.name }
      )
      console.log(category.name, data.data)
      createPage({
        path: slugify(category.name),
        component: require.resolve("./src/templates/categoryTemplate.js"),
        context: {
          categoryName: category.name,
          data: data.data,
          image: category.emoji,
          limit: null,
        },
      })
    })
  )
}
