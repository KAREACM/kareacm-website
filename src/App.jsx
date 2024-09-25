import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './new_design_components/Homepage/Hero-Section/Hero.jsx';
import Navbar from './new_design_components/Navbar/Navbar.jsx';
import About from './new_design_components/Homepage/About-Section/About.jsx';
import { Route, Routes } from 'react-router-dom';
import AboutACM from './new_design_components/Aboutpage/AboutACM.jsx';
import ACMTeams from './new_design_components/Teamspage/ACMteams.jsx';
import ACMevents from './new_design_components/Eventspage/ACMevents.jsx';
import ACMblogs from './new_design_components/Blogspage/ACMblogs.jsx';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<AboutACM />} />
            <Route path='/teams' element={<ACMTeams/>} />
            <Route path='/events' element={<ACMevents/>}/>
            <Route path='/blogs' element={<ACMblogs/>}/>

        </Routes>

      </div>



    </>
  )
}

export default App
