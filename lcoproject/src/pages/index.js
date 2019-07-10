import React from "react"

import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
 
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
  </Layout>
)

export const query = graphql`
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export default IndexPage
