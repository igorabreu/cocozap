import React, { Component } from 'react'
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

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapInfo: {
        date: 20181019,
        picture: '20181019_1115_966175624',
        description: 'Problemas de alagamentos sempre que chove',
        category: 'Alagamento',
        frequency: 'Ocasionalmente',
        address: 'Rua Santa Rita,',
        location: 'Nova Holanda',
        lat: -22.853554,
        long: -43.244659,
        triedToSolve: 'nao menciona',
        externalHelp: 'nao se aplica',
      },
    }
  }

  handleMapInfo(info) {
    this.setState({
      mapInfo: info,
    })
  }

  render() {
    const { mapInfo } = this.state
    return (
      <div>
        <Header />
        <MenuBar />
        <MapComponent setInfoMap={info => this.handleMapInfo(info)} />
        <MapInfo {...mapInfo} />
        <Participate />
        <AccessData />
        <About />
        <CallToAction />
        <div className="socialMediaBottom">
          <SocialMediaBar />
        </div>
      </div>
    )
  }
}

export default Layout
