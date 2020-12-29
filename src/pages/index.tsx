import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import WhiskeisSection from "../components/main/WhiskeisSection"
import Image from '../components/image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWhiskiesJson {
        edges {
          node {
            region
            cost
            id
            image
            title
            uri
            tasting_notes
          }
        }
        distinct(field: region)
      }
    }
  `)

  const initialState = data.allWhiskiesJson.edges

  const [whiskeis, setWhiskeis] = useState(initialState)

  function filterWiskeis(region: string) {
    console.log(whiskeis, region);
    debugger
    if (region == 'all') {

      return setWhiskeis(initialState)
    }
    setWhiskeis([...initialState].filter(whiskey => whiskey.node.region === region))
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Header {...data} filterWhiskeis={filterWiskeis} />
      <WhiskeisSection items={whiskeis} />
      <Image />
    </Layout>
  )
}

export default IndexPage
