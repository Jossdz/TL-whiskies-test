import styled from "styled-components"

export default styled.div`
  padding: 6rem 12%;
  width: 100%;
  height: 1000px;
  & > div {
    width: 100%;
    height: 100%;
    background-image: url("/images/whiskey-glass.jpg");
    background-size: cover;
    position: relative;
    border-radius: 8px;
  }
  div > div {
    position: absolute;
    left: 4rem;
    bottom: 4rem;
    z-index: 2;
    color: white;
    font-family: Cabin;
    h2 {
      font-size: 3rem;
      font-style: italic;
      letter-spacing: -4px;
      width: 550px;
    }
    p {
      width: 620px;
    }
  }
  & > div::after {
    content: "";
    border-radius: 8px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 20, 0.8);
  }
`
