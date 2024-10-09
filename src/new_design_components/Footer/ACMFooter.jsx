import React from 'react'
import './../Footer/ACMFooter.css'
import kare_acm_logo_footer from './../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png'

function ACMFooter() {
  return (
    <div >
      <hr className='hr-line' />
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <img src={kare_acm_logo_footer} alt="" srcset="" className='acm-logo-footer' />
          </div>
          <div className="footer-kare-acm">
            <div className="footer-content">Association for <div>Computing Machinery</div><div>KARE ACM Student Chapter</div></div>
          </div>
        </div>
        <div className="footer-useful-links-container ">
          <div className="footer-useful-links">
            <div className="footer-useful-links-heading">
              USEFUL LINKS
              <hr className='hr-line2' />
            </div>

            <div className="footer-home-link basic-font-styles">
              HOME
            </div>
            <div className="footer-acm-xrds-link basic-font-styles">
              ACM XRDS
            </div>
            <div className="footer-acm-india-link basic-font-styles">
              ACM INDIA
            </div>
            <div className="footer-acm-digital-library-link basic-font-styles">
              ACM DIGITAL LIBRARY
            </div>
            <div className="footer-madurai-acm-link basic-font-styles">
              MADURAI ACM
            </div>
            <hr className='hr-line3' />
            <div className="footer-kare-acm-sc basic-font-styles">
              KARE ACM Student Chapter
              <div>Designed and Developed by Web Dev Team, KARE ACM</div>
            </div>
          </div>

        </div>
        <div className="footer-contact-container">
          <div className="footer-contact-heading">
            CONTACT
            <hr className='hr-line4' />
          </div>
          <div className="footer-contact-container2">
            <div className="footer-email-container">
              <div className="footer-email">
                <i class="fa-solid fa-envelope footer-email-icon"></i>
              </div>
              <div className="footer-email-address basic-font-styles">
                kareacm@klu.ac.in
              </div>
            </div>
            <br />
            <br />
            <div className="footer-location-container">
              <div className="footer-location">
                <i class="fa-solid fa-location-dot footer-location-icon"></i>
              </div>
              <div className="footer-location-address basic-font-styles">
                Kalasalingam Academy of Research and Education,
                <div>
                  Krishnankoil, Srivilliputhur,
                </div>
                <div>Tamil Nadu 626126</div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ACMFooter