import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import MenuBar from './MenuBar'
import MapComponent from './MapComponent'

const Layout = ({ children }) => (
  <div>
    <Header />
    <MenuBar />
    <MapComponent />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
