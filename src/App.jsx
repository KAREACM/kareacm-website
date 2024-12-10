import { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './new_design_components/Navbar/Navbar.jsx';
import ACMFooter from './new_design_components/Footer/ACMFooter.jsx';

const Hero = lazy(() => import('./new_design_components/Homepage/Hero-Section/Hero.jsx'));
const AboutACM = lazy(() => import('./new_design_components/Aboutpage/AboutACM.jsx'));
const ACMTeams = lazy(() => import('./new_design_components/Teamspage/ACMTeams.jsx'));
const ACMevents = lazy(() => import('./pages/Events/ACMevents.jsx'));
const ACMblogs = lazy(() => import('./new_design_components/Blogspage/ACMblogs.jsx'));
const ACMcontact = lazy(() => import('./new_design_components/Contactpage/ACMcontact.jsx'));
const ACMGallery = lazy(() => import('./new_design_components/Gallerypage/ACMGallery.jsx'));

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<AboutACM />} />
            <Route path='/teams' element={<ACMTeams />} />
            <Route path='/events' element={<ACMevents />} />
            <Route path='/blogs' element={<ACMblogs />} />
            <Route path='/contact' element={<ACMcontact />} />
            <Route path='/gallery' element={<ACMGallery />} />
          </Routes>
        </Suspense>
        <ACMFooter />
      </div>
    </>
  );
}

export default App;
