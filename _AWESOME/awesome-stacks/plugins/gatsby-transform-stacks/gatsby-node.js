const path = require("path")
const cheerio = require("cheerio")
const slugify = require("@sindresorhus/slugify")
const remark = require("remark")
const html = require("remark-html")

const stackshare = require("../../src/utils/stackshare")
const github = require("../../src/utils/github")

const customReplacements = [[".", ""]]

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `MarkdownRemark`) {
    return
  }

  const parent = getNode(node.parent)
  if (parent.internal.type === "File") {
    createNodeField({
      name: `sourceName`,
      node,
      value: parent.sourceInstanceName,
    })
  }

  if (parent.sourceInstanceName !== `readme-stacks`) {
    return
  }

  // add a field for the list of tools used in the mdx
  const nodeContent = await loadNodeContent(node)
  const nodeContentHtml = await remark().use(html).process(nodeContent)

  const $ = cheerio.load(nodeContentHtml.contents)

  const h3s = $(`h3`)

  var toolCount = 0
  var stackCount = $(`h3`.length)

  console.log(`Processing ${stackCount} stacks in the README`)

  const stacks = h3s
    .map((index, h3) => {
      stackCount++
      const name = $(h3).text().replace(/↗/, "").trim()
      const path = slugify(name, { customReplacements })
      return {
        name,
        path,
        index,
        url: $(h3).find("a").attr("href"),
        description: $(h3).next("p").text(),
        tools: $(h3)
          .nextUntil(`h3, h5`, `ul`)
          .find(`li`)
          .map((_, li) => {
            toolCount++
            const toolObj = {}
            $(li)
              .find("a")
              .each((_, link) => {
                if (
                  $(link)
                    .attr("href")
                    .match(/https:\/\/stackshare.io\//)
                ) {
                  toolObj.stackShareUrl = $(link).attr("href")
                } else if (
                  $(link)
                    .attr("href")
                    .match(/https:\/\/github.com\//)
                ) {
                  toolObj.gitHubUrl = $(link).attr("href")
                } else if (
                  $(link)
                    .text()
                    .match(/[\w\d_ -]/)
                ) {
                  toolObj.name = $(link).text()
                  toolObj.url = $(link).attr("href")
                }
              })
            toolObj.description = $(li)
              .clone()
              .children()
              .remove()
              .end()
              .contents()
              .text()
            return toolObj
          })
          .get(),
        resources: $(h3)
          .nextUntil(`h3`, `h5`)
          .nextUntil(`h3`, `ul`)
          .find(`li > a`)
          .map((_, a) => {
            return {
              text: $(a).text(),
              href: $(a).attr(`href`),
            }
          })
          .get(),
      }
    })
    .get()

  console.log(`Fetching data for ${toolCount} tools in ${stackCount} stacks`)

  // get the stacks then get the tools

  await Promise.all(
    stacks.map((stack) => {
      return Promise.all(
        stack.tools.map(async (tool) => {
          if (tool.gitHubUrl) {
            const [owner, name] = tool.gitHubUrl
              .replace(/http[s]+:\/\/github\.com\//, "")
              .split(`/`)
            try {
              console.log(`Fetching GitHub: ${tool.gitHubUrl}`)
              tool.gitHubData = await github.getGitHubTool({ owner, name })
            } catch (e) {
              console.warn(e)
            }
          }
          if (tool.stackShareUrl) {
            const url = tool.stackShareUrl
            const name = url.replace(/http[s]+:\/\/stackshare\.io\//, "")
            try {
              console.log(`Fetching StackShare: ${tool.stackShareUrl}`)
              tool.stackShareData = await stackshare.getStackShareTool({ name })
            } catch (e) {
              console.warn(e)
            }
          }
        })
      )
    })
  )

  console.log(`\n*** Fetching complete — updating node fields ***\n`)

  createNodeField({
    name: "stacks",
    node,
    value: stacks,
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { fields: { sourceName: { eq: "readme-stacks" } } }
            ) {
              edges {
                node {
                  id
                  fields {
                    stacks {
                      name
                      path
                    }
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
          return
        }
        // there will just be one edge for the readme
        var pageCount = 0
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          node.fields.stacks.forEach((stack, index) => {
            createPage({
              path: stack.path,
              component: path.resolve(
                `./src/components/pages/readme-stacks-page.js`
              ),
              context: { id: node.id, stackName: stack.name },
            })
            pageCount++
          })
        })
        console.log(
          `Built ${pageCount} pages from the gatsby-transform-stacks plugin`
        )
      })
    )
  })
}
