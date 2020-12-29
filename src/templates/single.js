import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CardStyled = styled.article`
  font-family: Cabin;
  position: relative;
  background-color: var(--bg-color);
  height: 544px;
  background-image: url("/images/card-bg.svg");
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

  background-color: #222;
`

const Button = styled.button`
  margin-top: 2rem;
  font-family: Cabin;
  font-size: 22px;
  font-weight: 200;
  padding: 6px 18px;
  border-radius: 30px;
  border: 0.5px solid #c2c2c2;
  background-color: "white";
  color: "black";
  &:focus {
    outline: none;
  }
`

function single({
  pageContext: {
    node: { title, region, cost, tasting_notes, image },
  },
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "500px" }}>
        <CardStyled region={region}>
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
        </CardStyled>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default single
