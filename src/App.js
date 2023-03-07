import React, { useEffect } from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
  )
}

export default App
