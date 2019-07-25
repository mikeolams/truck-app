import React from 'react'
// import { Link } from 'react-router-dom'
// import Menu from './menu'
// import image from "./img/hoc1.jpg"
// import Background from "./background"
import Services from './services';
import About from './aboutUs';
import Contacts from './contacts';
import Clients from './clients';
// import Top from './topBackground';
import Banner from './banner';
// import BannerText from './bannerText';

const Main = (props) => {
  
  return (
    <div className="main-container-wrapper">
      <Banner/>
      <About/>
      <Services/>
      <Clients/>
      <Contacts/>
    </div>
  )
}


export default Main