import React, { useState } from "react"
import StyledHeader from "../styles/Header.styled"
import Category from "../components/Category"

export interface Whiskey {
  node: {
    region: string
    cost: number
    id: string
    image: string
    title: string
    uri: string
    tasting_notes: string[]
  }
}

const Header = ({
  allWhiskiesJson,
}: {
  allWhiskiesJson: {
    distinct: [string]
    edges: Whiskey[]
  }
}) => {
  const [active, setActive] = useState(0)

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
