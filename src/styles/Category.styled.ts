import styled from "styled-components"

export default styled.button<{ active: boolean }>`
  font-family: "Cabin";
  font-size: 16px;
  font-weight: 200;
  padding: 6px 18px;
  border-radius: 30px;
  border: 0.5px solid ${props => (props.active ? "#C2C2C2" : "#D6D6D6")};
  background-color: ${props => (props.active ? "#F3F3F3" : "white")};
  color: ${props => (props.active ? "black" : "gray")};
  font-weight: ${props => (props.active ? "bold" : "normal")};
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
`
