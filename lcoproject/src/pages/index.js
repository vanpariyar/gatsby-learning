import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseble/HeroSection'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img ={data.img.childImageSharp.fluid}
      title= "I Write Code"
      subtitle="Learn Code Online"
      heroClass="hero-background"
    />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG

      }
    }
  }
} 
`

export default IndexPage
