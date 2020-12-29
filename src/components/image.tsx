import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ name }: { name: string }) => {
  const data = useStaticQuery(graphql`
    fragment squareImage on File {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query Image {
      gatsbyastronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        ...squareImage
      }
      allWhiskiesJson {
        edges {
          node {
            image
            title
          }
        }
      }
    }
  `)

  console.log(data)

  if (!data?.[name]?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data[name].childImageSharp.fluid} />
}

export default Image
