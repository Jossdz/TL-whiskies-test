import styled from "styled-components"
import { Whiskey } from "../components/header"

export default styled.article<{ region: string }>`
  font-family: Cabin;
  position: relative;
  background-color: var(--bg-color);
  background-color: linear-gradient(
      45deg,
      rgba(34, 32, 0, 1) 0%,
      rgba(51, 51, 51, 1) 51%,
      rgba(34, 32, 0, 1) 100%
    ),
    url("/card-bg.svg");
  height: 544px;
  background-image: url("/card-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  border-radius: 8px;
  display: flex;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 36px 36px;
    h3 {
      font-size: 36px;
      color: white;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 8px;
    }
    h3:nth-child(3) {
      margin: 25px 0;
      font-weight: 500;
    }
    small {
      font-size: 18px;
      color: #828282;
      text-transform: capitalize;
    }
    ul {
      margin: 0;
      max-width: 290px;
      height: 60px;
      border-radius: 5px;
      background: linear-gradient(
        90deg,
        var(--${props => props.region}-light) 0%,
        var(--${props => props.region}-dark) 100%
      );
      transform: skew(-15deg);
      padding: 0 30px;
      position: relative;
      left: -60px;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      li {
        margin: 0 15px;
        color: white;
        font-weight: 400;
      }
    }
  }

  img {
    width: 160px;
    height: auto;
    position: absolute;
    bottom: -72px;
    right: -36px;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 6rem;
    img {
      left: 36px;
      bottom: -100px;
      width: 205px;
      position: relative;
    }
  }
  @media only screen and (max-width: 700px) {
    div:nth-child(2) {
      padding: 0;
    }
    margin-bottom: 6rem;
    img {
      width: 160px;
      height: auto;
      position: relative;
      bottom: -72px;
      right: 0px;
    }
  }

  &::after {
    position: absolute;
    right: -8px;
    top: 36px;
    content: "";
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--${props => props.region}-light) 0%,
      var(--${props => props.region}-dark) 100%
    );
  }
`
