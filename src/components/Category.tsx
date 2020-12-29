import React from "react"
import CategoryStyled from "../styles/Category.styled"

interface Props extends React.HTMLAttributes<HTMLElement> {
  isActive: boolean
}

function Category({ children, isActive, onClick }: Props) {
  return (
    <CategoryStyled active={isActive} onClick={onClick}>
      {children}
    </CategoryStyled>
  )
}

export default Category
