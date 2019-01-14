import React from 'react'
import faceIcon from '../../../assets/images/facebook-icon.svg'
import instaIcon from '../../../assets/images/instagram-icon.svg'
import twitterIcon from '../../../assets/images/twitter-icon.svg'
import mediumIcon from '../../../assets/images/medium-icon.svg'
import './style.scss'

const SocialMediaBar = () => (
  <div className="SocialMediaBar">
    <div className="icons">
      <a href="https://www.facebook.com/datalabe" target="_blank">
        <img className="faceIcon" src={faceIcon} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/data_labe/" target="_blank">
        <img className="instaIcon" src={instaIcon} alt="instagram" />
      </a>
      <a href="https://twitter.com/data_labe" target="_blank">
        <img className="twitterIcon" src={twitterIcon} alt="twitter" />
      </a>
      <a href="https://medium.com/cocozap" target="_blank">
        <img className="mediumIcon" src={mediumIcon} alt="medium" />
      </a>
    </div>
  </div>
)

export default SocialMediaBar
