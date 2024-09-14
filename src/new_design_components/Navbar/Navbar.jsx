import React from 'react'
import './../Navbar/Navbar.css'
import kare_acm_logo_navbar from './../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png'
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
                        <div className="home flx">Home</div>
                        <div className="about flx">About</div>
                        <div className="teams flx">Teams</div>
                        <div className="events flx">Events</div>
                        <div className="blogs flx">Blogs</div>
                        <div className="gallery flx">Gallery</div>
                        <div className="contact flx">Contact</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar