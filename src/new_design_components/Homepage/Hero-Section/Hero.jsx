import React from 'react'
import kare_acm_sc_logo from './../../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png';


import './../Hero-Section/Hero.css'
import About from '../About-Section/About';

function Hero() {
    return (
        <div>
            <div className="hero-container">
                <div className="blur-effect">
                    {/* Div for creating blur-effect around KARE_ACM logo  */}
                </div>
                 
                <img src={kare_acm_sc_logo} className='kare_acm_sc_logo' alt="kare-acm-sc-logo"  />

                {/* MINI ICONS AROUND KARE-ACM LOGO , TOTAL 15 ICONS*/}
                <div className="mini-circles icon1 flx-justify-align">
                    <i className="fa-solid fa-code "></i>
                </div>
                <div className="mini-circles icon2 flx-justify-align">
                    <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="mini-circles icon3 flx-justify-align">
                    <i className="fa-solid fa-unlock"></i>
                </div>
                <div className="mini-circles icon4 flx-justify-align">
                    <i className="fa-solid fa-hashtag"></i>
                </div>
                <div className="mini-circles icon5 flx-justify-align">
                    <i className="fa-solid fa-link"></i>
                </div>
                <div className="mini-circles icon6 flx-justify-align">
                    <i className="fa-solid fa-hashtag"></i>
                </div>
                <div className="mini-circles icon7 flx-justify-align">
                    <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="mini-circles icon8 flx-justify-align">
                    <i className="fa-solid fa-code"></i>
                </div>
                <div className="mini-circles icon9 flx-justify-align">
                    <i className="fa-solid fa-unlock"></i>
                </div>
                <div className="mini-circles icon10 flx-justify-align">
                    <i className="fa-solid fa-link"></i>
                </div>
                <div className="mini-circles icon11 flx-justify-align">
                    <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="mini-circles icon12 flx-justify-align">
                    <i className="fa-solid fa-unlock"></i>
                </div>
                <div className="mini-circles icon13 flx-justify-align">
                    <i className="fa-solid fa-code"></i>
                </div>
                <div className="mini-circles icon14 flx-justify-align">
                    <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="mini-circles icon15 flx-justify-align">
                    <i className="fa-solid fa-link"></i>
                </div>
            </div>

            <div>
                <About/>
            </div>

        </div>
    )
}

export default Hero;