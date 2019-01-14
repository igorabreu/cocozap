import React from 'react'
import SectionTitle from '../SectionTitle'
import './style.scss'

const convertDate = date => {
  let number = date.toString()
  let day = number.substring(6, 8)
  let month = number.substring(4, 6)
  let year = number.substring(0, 4)
  return `${day}/${month}/${year}`
}

const MapInfo = ({ picture, category, location, frequency, date }) => (
  <div className="MapInfo">
    <div className="mapInfoWrapper">
      <SectionTitle text={'Infos do Mapa'} />
      <div className="infoWrapper">
        <div className="photo">
          <img src={`http://cocozap.datalabe.org/images/${picture}.jpeg`} />
        </div>
        <div className="text-info">
          <div className="category">{`Categoria: ${category}`}</div>
          <div className="location">{`Favela: ${location}`}</div>
          <div className="frequency">{`Frequência: ${frequency}`}</div>
          <div className="update">{`Última atualização: ${convertDate(
            date
          )}`}</div>
        </div>
      </div>
    </div>
  </div>
)

export default MapInfo
