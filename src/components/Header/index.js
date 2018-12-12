import React from 'react'
import Logo from '../../../assets/images/logo.png'
import SocialMediaBar from '../SocialMediaBar'
import MainLogo from '../MainLogo'
import './style.scss'

const Header = () => (
  <div className="Header">
    <SocialMediaBar />
    <MainLogo />
  </div>
)

export default Header
