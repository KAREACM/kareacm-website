import React from 'react'
import './../Footer/ACMFooter.css'
import kare_acm_logo_footer from './../../../Athithya/src/Assets/Photos/kare-acm-sc logo.png'

function ACMFooter() {
  return (
    <div >
      <hr className='hr-line' />
      <div className="footer-container">
        <div className="footer-logo-container border">
          <div className="footer-logo">
            <img src={kare_acm_logo_footer} alt="" srcset="" className='acm-logo-footer' />
          </div>
          <div className="footer-kare-acm">
            <div className="footer-content">Association for <div>Computing Machinery</div><div>KARE ACM Student Chapter</div></div>
          </div>
        </div>
        <div className="footer-useful-links-container border">
          <div className="footer-useful-links">
            <div className="footer-useful-links-heading">
              USEFUL LINKS
            </div>
            <hr className='hr-line2'/>
            <div className="footer-home-link">
              HOME
            </div>
            <div className="footer-acm-xrds-link">
              ACM XRDS
            </div>
            <div className="footer-acm-india-link">
              ACM INDIA
            </div>
            <div className="footer-acm-digital-library-link">
              ACM DIGITAL LIBRARY
            </div>
            <div className="footer-madurai-acm-link">
              MADURAI ACM
            </div>
            <hr className='hr-line3'/>
            <div className="footer-kare-acm-sc">
              KARE ACM Student Chapter
              <div>Designed and Developed by Web Dev Team KARE ACM</div>
            </div>
          </div>
          
        </div>
        <div className="footer-contact-container border"></div>
      </div>


    </div>
  )
}

export default ACMFooter