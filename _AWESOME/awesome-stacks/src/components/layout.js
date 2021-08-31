import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faCommentAlt,
  faStar,
  faCodeBranch,
  faLayerGroup,
  faExternalLinkAlt,
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import Navbar from "./navbar"
import Footer from "./footer"

library.add(
  fab,
  faCommentAlt,
  faStar,
  faCodeBranch,
  faLayerGroup,
  faExternalLinkAlt,
  faArrowCircleRight,
  faArrowCircleLeft
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className="layout">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
