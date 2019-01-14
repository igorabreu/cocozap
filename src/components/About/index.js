import React from 'react'
import SectionTitle from '../SectionTitle'
import './style.scss'

const About = () => (
  <div className="About" id="about">
    <div className="about-wrapper">
      <SectionTitle text={'Sobre'} />
      <div className="about-text">
        As equipes do data_labe e da{' '}
        <a href="http://casafluminense.org.br/" target="_blank">
          Casa Fluminense
        </a>{' '}
        estão trabalhando desde 2017 em parceria para construir um canal de
        notificação, debate e proposição sobre saneamento básico, a partir de
        mapeamentos participativos ágeis, sobre a coleta de lixo e o esgotamento
        sanitário em favelas e periferias do Rio de Janeiro Metropolitano.
        <br />
        <br /> A proposta passa pelo engajamento e pela capacidade de incidência
        dos moradores nas políticas locais. Através do aplicativo Whatsapp,
        fotos, vídeos e narrativas serão recebidos de modo a localizar e
        ilustrar os desafios de um cotidiano de desigualdades em termos de
        acesso a serviços públicos de saneamento. De forma colaborativa serão
        construídos diagnósticos mais fidedignos do que os indicadores
        utilizados como oficiais. As soluções também serão mais legítimas,
        baseadas em evidências fornecidas por quem vive os dados mais extremos.
        <br />
        <br />
        Este primeiro piloto foi desenvolvido com o apoio do{' '}
        <a href="https://www.casa.org.br/en/" target="_blank">
          Fundo Socioambiental Casa
        </a>{' '}
        e parceria com a{' '}
        <a href="http://redesdamare.org.br/" target="_blank">
          Redes da Maré
        </a>
        . Nós selecionamos quatro jovens moradores da Maré. Duas mobilizadoras
        locais que fizeram uma campanha de difusão do número do cocôzap por três
        favelas do Complexo da Maré: Nova Holanda, Rubens Vaz e Parque União. A
        campanha durou oito semanas (entre outubro e novembro de 2018) e foi o
        experimento para descobertas e diagnósticos do projeto. Dois
        pesquisadores colaboraram com a escrita de uma reportagem que narra o
        cenário do saneamento básico na favela da Maré a partir da luta por
        direitos, dados e memórias dos moradores.
        <br />
        <br /> Questões ligadas a cultura do lixo, os debates metodológicos e os
        relatos sobre essa primeira experiência na Maré você encontra na{' '}
        <a href="https://medium.com/cocozap" target="_blank">
          revista do cocôzap no medium
        </a>
        . A intenção é que o projeto seja desenvolvido em etapas a partir das
        articulações que forem sendo feitas. É programa em progresso, processo
        contínuo e experimentativo. As atualizações vão sendo feitas com
        frequência no mapa e no Medium e acompanham as articulações das equipes.
        O cocôzap é um projeto independente, sem fins lucrativos e sem
        financiamento direto. Se você conhece alguém que pode se interessar pelo
        projeto, envie nossos contatos.
      </div>
    </div>
  </div>
)

export default About
