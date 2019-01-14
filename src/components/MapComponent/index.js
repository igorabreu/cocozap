import React, { Component } from 'react'
import dataMarkers from '../../data/markers.js'
import './style.scss'

class MapComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -22.8547769, lng: -43.2432046 },
        zoom: 15,
      })
      dataMarkers.map((marker, index) => {
        this.newMarker = new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.long },
          map: this.map,
          title: marker.location,
          index,
        })
        this.newMarker.addListener('click', e => {
          this.handleMarkerClick(index)
          this.infowindow = new window.google.maps.InfoWindow({
            content: `${marker.category} (${marker.location})`,
          })
          this.infowindow.setPosition(e.latLng)
          this.infowindow.open(this.map)
        })
      })
    }, 1000)
  }

  handleMarkerClick = index => {
    this.props.setInfoMap(dataMarkers[index])
  }

  render() {
    return <div id="map" className="MapComponent" />
  }
}

export default MapComponent
