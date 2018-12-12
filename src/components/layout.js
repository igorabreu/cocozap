import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import MenuBar from './MenuBar'
import MapComponent from './MapComponent'
import MapInfo from './MapInfo'
import Participate from './Participate'
import AccessData from './AccessData'
import About from './About'
import CallToAction from './CallToAction'
import SocialMediaBar from './SocialMediaBar'
import './layout.scss'

const Layout = ({ children }) => (
  <div>
    <Header />
    <MenuBar />
    <MapComponent />
    <MapInfo />
    <Participate />
    <AccessData />
    <About />
    <CallToAction />
    <div className="socialMediaBottom">
      <SocialMediaBar />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
