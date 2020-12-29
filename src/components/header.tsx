import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import StyledHeader from "../styles/Header.styled"
import Category from "../components/Category"

const Header = () => {
  const [active, setActive] = useState(0)
  const { allWhiskiesJson } = useStaticQuery(graphql`
    query MyQuery {
      allWhiskiesJson {
        edges {
          node {
            region
          }
        }
        distinct(field: region)
      }
    }
  `)

  console.log(allWhiskiesJson.distinct)

  function changeActive(n: number) {
    console.log("change")

    setActive(n)
  }

  return (
    <StyledHeader>
      <h1>WHISKEY SELECTION</h1>
      <div>
        {["all", ...allWhiskiesJson.distinct].map(
          (category: string, i: number) => (
            <Category
              key={i}
              isActive={i === active}
              onClick={() => changeActive(i)}
            >
              {category}
            </Category>
          )
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
