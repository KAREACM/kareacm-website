import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './new_design_components/Homepage/Hero-Section/Hero.jsx';
import Navbar from './new_design_components/Navbar/Navbar.jsx';
import About from './new_design_components/Homepage/About-Section/About.jsx';
import { Route, Routes } from 'react-router-dom';
import AboutACM from './new_design_components/Aboutpage/AboutACM.jsx';
import ACMTeams from './new_design_components/Teamspage/ACMTeams.jsx';
import ACMevents from './pages/Events/ACMevents.jsx';
import ACMblogs from './new_design_components/Blogspage/ACMblogs.jsx';
import ACMcontact from './new_design_components/Contactpage/ACMcontact.jsx';
import ACMFooter from './new_design_components/Footer/ACMFooter.jsx';
import ACMGallery from './new_design_components/Gallerypage/ACMGallery.jsx';
import Summerschool from './new_design_components/Summerschool/Summerschool.jsx';
// import { HourOfCode } from './new_design_components/Hourofcode/HourOfCode.jsx';

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
            <Route path='/contact' element={<ACMcontact/>}/>
            <Route path='/gallery' element={<ACMGallery/>}/>
            <Route path='/summer-school' element={<Summerschool/>}/>
            {/* <Route path="/hour-of-code" element={<HourOfCode />} /> */}

        </Routes>
        <ACMFooter/>

      </div>



    </>
  )
}

export default App