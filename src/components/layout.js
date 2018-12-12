import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import MenuBar from './MenuBar'

const Layout = ({ children }) => (
  <div>
    <Header />
    <MenuBar />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
