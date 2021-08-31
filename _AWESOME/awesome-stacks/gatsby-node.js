const path = require("path")
const cheerio = require("cheerio")
const { createFilePath } = require("gatsby-source-filesystem")

const stackshare = require("./src/utils/stackshare")
const github = require("./src/utils/github")

// to support relative paths in sass files
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `Mdx`) {
    return
  }

  // create a queryable sourceName field
  const parent = getNode(node.parent)
  if (parent.internal.type === "File") {
    createNodeField({
      name: `sourceName`,
      node,
      value: parent.sourceInstanceName,
    })
  }

  // set the slug b/c outside /src/pages
  // https://gatsby-mdx.netlify.com/guides/programmatically-creating-pages
  const slugValue = createFilePath({ node, getNode })
  createNodeField({
    name: "slug",
    node,
    value: `${
      parent.sourceInstanceName === `content-docs` ? `/docs` : ``
    }${slugValue}`,
  })

  // only process front matter for stacks
  if (parent.sourceInstanceName !== `content-stacks`) {
    return
  }

  const contributors = node.frontmatter.contributors
  if (contributors) {
    const contributorsLoaded = await Promise.all(
      contributors.map(github.getGitHubUser)
    ).then((users) => users.filter((user) => user))
    createNodeField({
      name: "contributors",
      node,
      value: contributorsLoaded,
    })
  }

  // add a field for the list of tools used in the mdx
  const nodeContent = await loadNodeContent(node)
  const githubs = (nodeContent.match(/<GitHub [^>]+>/g) || []).map(
    (toolTag) => {
      const nameWithOwner = cheerio.load(toolTag)("GitHub").attr("name")
      const [owner, name] = nameWithOwner.split("/")
      return { owner, name }
    }
  )
  const githubsLoaded = await Promise.all(
    githubs.map(github.getGitHubTool)
  ).then((tools) => tools.filter((tool) => tool))
  createNodeField({
    name: "gitHubTools",
    node,
    value: githubsLoaded,
  })

  const stackshares = (nodeContent.match(/<StackShare [^>]+>/g) || []).map(
    (toolTag) => {
      const name = cheerio.load(toolTag)("StackShare").attr("name")
      const url = `https://stackshare.io/${name}`
      return { name, url }
    }
  )

  // fetch the data from stackshare for each tool
  // filter out any tools that aren't found
  const stacksharesLoaded = await Promise.all(
    stackshares.map(stackshare.getStackShareTool)
  ).then((tools) => tools.filter((tool) => tool && tool.name))
  createNodeField({
    name: "stackShareTools",
    node,
    value: stacksharesLoaded,
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(
              filter: {
                fields: {
                  sourceName: {
                    in: ["content", "content-docs", "content-stacks"]
                  }
                }
              }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    sourceName
                  }
                }
              }
            }
          }
        `
      )
        .then((result) => {
          if (result.errors) {
            console.error(result.errors)
            reject(result.errors)
          }
          result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: path.resolve(
                `./src/components/pages/${node.fields.sourceName}-page.js`
              ),
              context: { id: node.id },
            })
          })
        })
        .catch((err) => {
          console.error("Building pages failed")
          console.error(err)
        })
    )
  })
}
