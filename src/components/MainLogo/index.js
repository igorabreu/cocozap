import React from 'react'
import Logo from '../../../assets/images/logo.png'
import './style.scss'

const MainLogo = () => (
  <div className="MainLogo">
    <img className="logo" src={Logo} />
    <h1 className="subtitle">
      Mobilização, mapeamento e incidência para saneamento básico em favelas
    </h1>
  </div>
)

export default MainLogo
