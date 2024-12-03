import React, { useState } from 'react';
import './../Navbar/Navbar.css';
import kare_acm_logo_navbar from './../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav>
                <div className="header" id="header">
                    <img
                        src={kare_acm_logo_navbar}
                        className="kare_acm_logo_navbar"
                        alt="kare_acm_logo"
                    />
                    <div className="acm_kare">ACM KARE</div>
                    <div className="hamburger" onClick={toggleMenu}>
                        ☰ {/* Hamburger icon */}
                    </div>
                </div>
                <div className={`navbar ${menuOpen ? 'show' : ''}`}>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <div className="home">Home</div>
                    </NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                        <div className="about">About</div>
                    </NavLink>
                    <NavLink to="/teams" onClick={() => setMenuOpen(false)}>
                        <div className="teams">Teams</div>
                    </NavLink>
                    <NavLink to="/events" onClick={() => setMenuOpen(false)}>
                        <div className="events">Events</div>
                    </NavLink>
                    <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>
                        <div className="blogs">Blogs</div>
                    </NavLink>
                    <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                        <div className="gallery">Gallery</div>
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                        <div className="contact">Contact</div>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
