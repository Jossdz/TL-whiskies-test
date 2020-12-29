import React from "react"
import MainSection from "../../styles/MainSection.styled"
import { Whiskey } from "../header"
import ItemCard from "./ItemCard"

interface Props extends React.HTMLAttributes<HTMLElement> {
  items: [Whiskey]
}

function WhiskeisSection({ items }: Props) {
  return (
    <MainSection>
      {items?.map(item => (
        <ItemCard key={item.node.id} item={item} />
      ))}
    </MainSection>
  )
}

export default WhiskeisSection
