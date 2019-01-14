import React from 'react'
import SectionTitle from '../SectionTitle'
import './style.scss'

const AccessData = () => (
  <div className="AccessData" id={'accessData'}>
    <div className="access-wrapper">
      <SectionTitle text={'Acesse os dados'} />
      <div className="access-text">
        Formato de{' '}
        <a
          href="https://docs.google.com/spreadsheets/d/1uZN2hbCu94HBJ_-L7W58nUTOXTqkGEkv4Clv2gmPDnA/edit?usp=sharing"
          target="_blank"
        >
          tabela no Google Sheets
        </a>{' '}
        e{' '}
        <a
          href="http://cocozap.datalabe.org/api/cocozap-data.json"
          target="_blank"
        >
          API em Json
        </a>
        .
      </div>
    </div>
  </div>
)

export default AccessData
