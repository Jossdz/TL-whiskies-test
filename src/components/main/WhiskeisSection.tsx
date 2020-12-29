import React from "react"
import MainSection from "../../styles/MainSection.styled"
import { Whiskey } from "../header"
import ItemCard from "./ItemCard"
import { Link } from "gatsby"
import styled from "styled-components"

interface Props extends React.HTMLAttributes<HTMLElement> {
  items: [Whiskey]
}

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`

function WhiskeisSection({ items }: Props) {
  return (
    <MainSection>
      {items?.map(item => (
        <StyledLink
          to={`/${item.node.title.toLowerCase()}`}
          className="noDecoration"
          key={item.node.id}
        >
          <ItemCard item={item} />
        </StyledLink>
      ))}
    </MainSection>
  )
}

export default WhiskeisSection
