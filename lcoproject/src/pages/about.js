import React from "react"
import { graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseble/HeroSection'
import Infoblock from '../components/Reuseble/Infoblock'
import DualInfoblock from '../components/Reuseble/DualInfoblock'
import Teamphotosection from '../components/About/Teamphotosection'
 

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img ={data.img.childImageSharp.fluid}
      title= "About LearnCode Online"
      subtitle=""
      heroClass="about-background"
    />
    <DualInfoblock heading="Message From CEO" src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /> 
    <Infoblock heading="About Vision"/>
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG

      }
    }
  }
} 
`

export default AboutPage
