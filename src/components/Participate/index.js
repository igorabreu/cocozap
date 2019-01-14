import React from 'react'
import SectionTitle from '../SectionTitle'
import './style.scss'

const Participate = () => (
  <div className="Participate" id="participate">
    <div className="participate-wrapper">
      <SectionTitle text={'Participe'} />
      <div className="participate-text">
        Acesse o formulário{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdIzJi0pMYm1yEoNNbCScu1YVzAxTPslEPEkdQMaVw9wPH6YA/viewform?fbzx=6840870675821074000"
          target="_blank"
        >
          neste link
        </a>
        , adicione seu ponto e participe do mapa.
      </div>
    </div>
  </div>
)

export default Participate
