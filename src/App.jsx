import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './new_design_components/Homepage/Hero-Section/Hero.jsx';
import Navbar from './new_design_components/Navbar/Navbar.jsx';
import About from './new_design_components/Homepage/About-Section/About.jsx';

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <br />
      <About/>
      
    </div>
    
    
      
    </>
  )
}

export default App
