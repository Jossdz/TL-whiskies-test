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
        fluid(maxWidth: 1200, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query Image {
      whiskey: file(relativePath: { eq: "whiskey-glass.jpg" }) {
        ...squareImage
      }
    }
  `)

  console.log(data)

  if (!data?.whiskey?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.whiskey.childImageSharp.fluid} />
}

export default Image
