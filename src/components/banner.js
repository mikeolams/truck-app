import React from 'react'
import video from '../media/file.mp4'
// import bannerVideo from './bannerVideo';
import BannerText from './bannerText';


const Banner = (props) => {
  
  return (
      <div className="banner-container">
        <div className="banner-video-container">
        <video className="video" role="presentation" loop="true" autoplay="true" preload="auto" playsinline="true" crossorigin="anonymous" src={video}></video>
        </div>        
        <div className="banner-overlay" ></div>
        <BannerText/>
      </div>
  )
}


export default Banner