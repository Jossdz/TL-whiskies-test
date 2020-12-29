import styled from "styled-components"

export default styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 1em;
    color: black;
    font-style: italic;
    letter-spacing: -5px;
    font-size: 3.8em;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
      margin-right: 6px;
    }
  }
`
