import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import WhiskeisSection from "../components/main/WhiskeisSection"

import BigImage from "../components/BigImage"

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
    if (region === "all") return setWhiskeis(initialState)
    setWhiskeis(
      [...initialState].filter(whiskey => whiskey.node.region === region)
    )
  }

  return (
    <Layout>
      <SEO
        title="Home"
        description="We've reviewed some of the most popular whiskies and break them down by their tasting notes."
      />
      <Header {...data} filterWhiskeis={filterWiskeis} />
      <WhiskeisSection items={whiskeis} />
      <BigImage />
    </Layout>
  )
}

export default IndexPage
