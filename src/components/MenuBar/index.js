import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.scss'

const MenuBar = () => (
  <div className="MenuBar">
    <ul className="menuWrapper">
      <li className="dataLabe">
        <a href="http://datalabe.org/" target="_blank">
          Um projeto DataLabe{' '}
        </a>
      </li>
      <li className="about">
        <AnchorLink href="#about">Sobre</AnchorLink>
      </li>
      <li className="data">
        <AnchorLink href="#accessData">Acesse os dados</AnchorLink>
      </li>
      <li className="participate">
        <AnchorLink href="#participate">Participe</AnchorLink>
      </li>
      <li className="method">
        <a href="https://medium.com/cocozap" target="_blank">
          Método
        </a>
      </li>
    </ul>
  </div>
)

export default MenuBar
