import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'


const IndexPage = ({ data }) => (
  <Layout>
    <h1>Welcome the HKU Robomaster Operation group!</h1>
    <p>
      The Operation group of HKU Robomaster team Herackles, mainly take care of 
    <p> 
      -Team Operation
    </p> 
    <p>
      -Fund Rasing and Management
    </p>
    <p>
      -Equipment Management
    </p>
    <p>
      -External Relations
    </p>
    <p>-Promotion</p>  
    <p>-Team Website </p>  
    <p>-Emergency Handling</p>
      
    </p>
    <p>Group members are as follows:</p>
    <Lightbox images={data.allImageSharp.edges} />

  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
