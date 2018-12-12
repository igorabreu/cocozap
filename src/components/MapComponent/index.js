import React, { Component } from 'react'
import './style.scss'

class MapComponent extends Component {
  componentDidMount() {
    setTimeout(function() {
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.8594715, lng: -43.2593473 },
        zoom: 13,
      })
    }, 1000)
  }
  render() {
    return <div id="map" className="MapComponent" />
  }
}

export default MapComponent
