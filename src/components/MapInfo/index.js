import React from 'react'
import SectionTitle from '../SectionTitle'
import Example from '../../../assets/images/example.jpg'
import './style.scss'

const MapInfo = () => (
  <div className="MapInfo">
    <div className="mapInfoWrapper">
      <SectionTitle text={'Infos do Mapa'} />
      <div className="infoWrapper">
        <div className="photo">
          <img src={Example} />
        </div>
        <div className="text-info">
          <div className="category">Categoria: Lorem Ipsum</div>
          <div className="location">Favela: Lorem Ipsum</div>
          <div className="frequency">Frequência: Lorem Ipsum</div>
          <div className="update">Última atualização: Lorem Ipsum</div>
        </div>
      </div>
    </div>
  </div>
)

export default MapInfo
