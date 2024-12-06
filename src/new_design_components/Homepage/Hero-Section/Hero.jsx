import React from 'react';
import { Row, Col } from 'react-bootstrap';
import kare_acm_sc_logo from './../../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png';

import './../Hero-Section/Hero.css';
const About = React.lazy(() => import('../About-Section/About'));

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="blur-effect" />
        <img
          src={kare_acm_sc_logo}
          className="kare_acm_sc_logo"
          alt="ACM Student Chapter Logo at KARE"
        />
        <Row>
          <Col md={7} className="home-header">
            <h1 className="hero-heading">
              Hi There!{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              <span className="white-text">This is</span>{' '}
              <strong className="main-name gradient-text">
                THE ACM - KARE Website
              </strong>
            </h1>
            <h2 className="heading-name">
              <span className="white-text">Become the part of</span>{' '}
              <strong className="main-name gradient-text">ACT</strong>
            </h2>

            <div className="text-reveal-container">
              <span className="reveal-text text-one">Dynamic Community</span>
              <span className="reveal-text text-two">Student Chapter</span>
              <span className="reveal-text text-three">Tech Enthusiasts</span>
            </div>

            <div className="member-buttons-container">
              <div className="member-button">
                <a
                  href="https://www.acm.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Student Membership</span>
                </a>
              </div>
              <div className="member-button">
                <a
                  href="https://www.acm.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Professional Membership</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
      </React.Suspense>
    </div>
  );
}

export default Hero;
