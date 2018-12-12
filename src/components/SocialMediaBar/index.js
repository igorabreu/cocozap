import React from 'react'
import faceIcon from '../../../assets/images/facebook-icon.svg'
import instaIcon from '../../../assets/images/instagram-icon.svg'
import twitterIcon from '../../../assets/images/twitter-icon.svg'
import mediumIcon from '../../../assets/images/medium-icon.svg'
import './style.scss'

const SocialMediaBar = () => (
  <div className="SocialMediaBar">
    <div className="icons">
      <img className="faceIcon" src={faceIcon} />
      <img className="instaIcon" src={instaIcon} />
      <img className="twitterIcon" src={twitterIcon} />
      <img className="mediumIcon" src={mediumIcon} />
    </div>
  </div>
)

export default SocialMediaBar