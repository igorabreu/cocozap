import React from 'react'
import SocialMediaBar from '../SocialMediaBar'
import MainLogo from '../MainLogo'
import './style.scss'

const Header = () => (
  <div className="Header">
    <div className="socialMediaWrapper">
      <SocialMediaBar />
    </div>
    <MainLogo />
  </div>
)

export default Header
