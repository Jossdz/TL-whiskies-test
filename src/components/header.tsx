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
  filterWhiskeis
}: {
  allWhiskiesJson: {
    distinct: [string]
    edges: Whiskey[]
  },
  filterWhiskeis: (region: string) => void
}) => {
  const [active, setActive] = useState(0)

  function changeActive(n: string, i: number) {
    console.log(filterWhiskeis)
    setActive(i)
    filterWhiskeis(n)
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
              onClick={() => changeActive(category, i)}
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
