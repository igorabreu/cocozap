import React from 'react'
import './style.scss'

const MenuBar = () => (
  <div className="MenuBar">
    <ul className="menuWrapper">
      <li className="dataLabe">
        <a>Um projeto DataLabe </a>
      </li>
      <li className="about">
        <a>Sobre</a>
      </li>
      <li className="data">
        <a>Acesse os dados</a>
      </li>
      <li className="participate">
        <a>Participe</a>
      </li>
      <li className="method">
        <a>Método</a>
      </li>
    </ul>
  </div>
)

export default MenuBar
