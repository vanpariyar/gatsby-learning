/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Reuseble/Footer"
import NavBar from './Reuseble/NavBar'

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
  <NavBar />
  {children}
  <Footer/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
