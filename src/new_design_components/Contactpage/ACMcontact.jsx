import React from 'react'
import './ACMcontact.css';
import { useRef } from 'react';


function ACMcontact() {
const scriptURL = 'https://script.google.com/macros/s/AKfycbxwBZ2lEHD2XHKOe0snn70MhIJ_2j6ugzhLUrqxINZFfWpOLYQ4sG6lSSW3X5cjH9X7/exec'


// const form = document.forms['contact-form'];
const form = useRef(null);



const handleSubmit = (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
    .then(response => {
      alert("Thank you! Your form has been submitted successfully.");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
};


 

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
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-acmkare-mail-id gradient-font-color-style">
                acmkare@gmail.com
              </div>
            </div>
          </div>
          <div className="contact-page-form-container">
            <div className="contact-page-form">
              <form action="" method='post' name='contact-form' ref={form} onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name='Name' />
                <hr />
                <input type="email" placeholder='E-mail' name='Email' />
                <hr />
                <input type="number" placeholder='Contact Phone' name='Contact number' />
                <hr />
                <textarea name="Message" id="" className='contact-page-text-area' placeholder="Let's talk about your idea/query"></textarea>
                <br />
                <br />
                <button type='submit'  className='contact-page-button'>SUBMIT</button>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ACMcontact