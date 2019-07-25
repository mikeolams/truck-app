import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/navbar";
import Logo from './components/logo';
import Main from './components/main';
// import image from "./img/hoc1.jpg"
// import Background from "./components/background"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
      </header>
      <Main/>
    </div>
  );
}

export default App;
