import React from "react"
import ItemCardStyled from "../../styles/ItemCard.styled"
import { Whiskey } from "../header"

interface Props extends React.HTMLAttributes<HTMLElement> {
  item: Whiskey
}

function ItemCard({
  item: {
    node: { title, uri, tasting_notes, region, image, id, cost },
  },
}: Props) {
  return (
    <ItemCardStyled region={region}>
      <div>
        <h3>{title}</h3>
        <small>{region} Region</small>
        <h3>${cost}</h3>
        <ul>
          {tasting_notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>

      <div>
        <img src={`/images/${image}`} alt={`${title} image`} />
      </div>
    </ItemCardStyled>
  )
}

export default ItemCard
