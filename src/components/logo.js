import React from 'react'
import image from "../img/hoc1.jpg"


const Logo = () => {
  return (
    <div className="Logo-container">
      <img src={image} className="App-logo" alt="logo" />
      <h4 className="App-link">Shipping Platform</h4>
    </div>
  )
}

export default Logo