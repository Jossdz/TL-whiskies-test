import React from "react"
import BigImageStyled from "../styles/BigImage.styled"
import { useStaticQuery, graphql } from "gatsby"

function BigImage() {
  const {
    allArticlesJson: { nodes },
  } = useStaticQuery(graphql`
    query Data {
      allArticlesJson {
        nodes {
          title
          teaser
        }
      }
    }
  `)

  return (
    <BigImageStyled>
      <div>
        <div>
          <h2>{nodes[0].title.toUpperCase()}</h2>
          <p>{nodes[0].teaser}</p>
        </div>
      </div>
    </BigImageStyled>
  )
}

export default BigImage
