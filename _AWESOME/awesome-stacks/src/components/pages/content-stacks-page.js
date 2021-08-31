import React from "react"
import { MDXTag, MDXProvider } from "@mdx-js/tag"
import Layout from "../layout"
import SEO from "../seo"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Tools from "../mdx/tools"
// import StackCard from "../stacks/stack-card"
import GitHub from "../mdx/github"
import StackShare from "../mdx/stackshare"
import ContentStackHero from "../stacks/content-stack-hero"

const MyH1 = (props) => <h1>{props.children}</h1>
const components = {
  h1: MyH1,
}

function ContentStacksPage({ data }) {
  const { mdx } = data
  // const StackCards = data.allMdx.edges.map(edge =>
  //   id === edge.node.id ? `` : <div key={edge.node.id} className="container">
  //     <StackCard node={edge.node} />
  //     <div className="has-margin-bottom-40"></div>
  //     <div className="has-margin-bottom-40 has-dotted-line"></div>
  //   </div>
  // );
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <ContentStackHero {...mdx} />
      <div
        className="section has-padding-top-20"
        style={{ position: "absolute", left: 0, right: 0, paddingBottom: 0 }}
      >
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="has-text-right">
                <a
                  className="button is-grey"
                  href={`${data.site.siteMetadata.repository}/blob/master/content/stacks/${mdx.parent.name}.mdx`}
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                  <span>&nbsp;&nbsp;Edit this page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <div className="content">
                <MDXProvider components={components}>
                  <MDXRenderer
                    scope={{ React, MDXTag, Tools, GitHub, StackShare }}
                  >
                    {mdx.code.body}
                  </MDXRenderer>
                </MDXProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="has-margin-bottom-100"></div> */}
      {/* <div className="has-background-grey has-padding-top-10 has-padding-bottom-10 has-margin-bottom-20">
        <div className="has-text-centered">
          <h3 className="is-size-4 has-text-white">——— More Stacks ———</h3>
        </div>
      </div> */}
      {/* <div className="section">
        {StackCards}
        <div className="has-margin-top-40"></div>
      </div> */}
    </Layout>
  )
}

// this will query our new node type which contains all the GitHub and StackShare references
export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        repository
      }
    }
    mdx(id: { eq: $id }) {
      ...MdxFields
    }
    allMdx(
      sort: { order: DESC, fields: [frontmatter___createdAt] }
      filter: { fields: { sourceName: { eq: "content-stacks" } } }
    ) {
      edges {
        node {
          ...MdxFields
        }
      }
    }
  }
`
export default ContentStacksPage
