import React from 'react'
import './ACMcontact.css';

function ACMcontact() {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-heading-container">
          Contact Us
        </div>
        <div className="contact-page-content-container">
          <div className="contact-page-address-container">
            <div className="contact-address-heading d-inline">
              Get in <div className='d-inline gradient-font-color-style'>touch</div>
            </div>
            <div className="contact-acmkare">
              KALASALINGAM ACADEMY <div>OF RESEARCH AND</div> <div>EDUCATION</div>
            </div>
            <div className="contact-acmkare-location gradient-font-color-style">
              <div className="contact-acmkare-location-icon">
                <i className="fa-solid fa-location-dot "></i>
              </div>
              <div className="contact-acmkare-address">
                Krishnankoil, Srivilliputhur, Tamil Nadu
                <div> 626126</div>
              </div>

            </div>
            <div className="contact-acmkare-phone">
              <div className="contact-acmkare-phone-icon">
                  <i class="fa-solid fa-phone"></i>
              </div>
              <div className="contact-acmkare-phone-number gradient-font-color-style">
                04563 289 042
              </div>
            </div>
            <div className="contact-acmkare-mail">
              <div className="contact-acmkare-mail-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-acmkare-mail-id gradient-font-color-style">
                acmkare@gmail.com
              </div>
            </div>
          </div>
          <div className="contact-page-form-container">
            <div className="contact-page-form">
              <form action="">
                <input type="text" placeholder='Name' />
                <hr />
                <input type="email" placeholder='E-mail' />
                <hr />
                <input type="number" placeholder='Contact Phone' />
                <hr />
                <textarea name="" id="" className='contact-page-text-area' placeholder="Let's talk about your idea/query"></textarea>
                <br />
                <br />
                <button className='contact-page-button'>SUBMIT</button>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ACMcontact