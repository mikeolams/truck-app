import React from 'react'
import video from '../media/file.mp4'


const bannerVideo = (props) => {
  
  return (
    <div>
         <video className="video" role="presentation" loop="true" autoplay="true" preload="auto" playsinline="true" crossorigin="anonymous" src={video}></video>
     </div>
  )
}


export default bannerVideo