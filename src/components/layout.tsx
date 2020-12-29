import React from "react"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({
  children,
}: {
  children?: React.ReactChild | React.ReactChild[]
}) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
)

export default Layout
