import React from 'react'
import './../Navbar/Navbar.css'
import kare_acm_logo_navbar from './../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav>
                <div className="header" id='header'>
                    <img src={kare_acm_logo_navbar} className='kare_acm_logo_navbar' alt="kare_acm_logo" />
                    <div className='acm_kare'>ACM KARE</div>
                    <div>
                        {/* Empty div */}
                    </div>
                    <div className="navbar">
                        <NavLink to='/' activeClassName="">
                            <div className="home flx ">Home</div>
                        </NavLink>
                        <NavLink to='/about' activeClassName="">
                            <div className="about flx">About</div>
                        </NavLink>
                        <NavLink to='/teams' activeClassName="">
                        <div className="teams flx">Teams</div>
                        </NavLink>
                        <NavLink to='/events' activeClassName="">
                        <div className="events flx">Events</div>
                        </NavLink>
                        <NavLink to='/blogs' activeClassName=''>
                        <div className="blogs flx">Blogs</div>
                        </NavLink>
                        <NavLink to='/gallery' activeClassName=''>
                        <div className="gallery flx">Gallery</div>
                        </NavLink>
                        <NavLink to='/contact' activeClassName=''>
                        <div className="contact flx">Contact</div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar