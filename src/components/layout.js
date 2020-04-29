import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
    </Content>
    <Footer>
      con ♥︎ por
      <a href="/">Website</a>
    </Footer>
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
