import React from 'react'
import './ACMcontact.css'
import location_logo from './../../../Athithya/src/Assets/Photos/location_logo.png'
import phnum_logo from './../../../Athithya/src/Assets/Photos/phnum_logo.png'
import gmail_logo from './../../../Athithya/src/Assets/Photos/gmail_logo.png'

function ACMcontact() {
  return (
    <div className='Total'>
    <div className='Title'>
      <h1>Contact Us</h1>
    </div>
    <div className='CollegeAddress'>
      <h2>Get in</h2><h2 className='Touch'>touch</h2>
      <h3>KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION</h3>
      <img src={location_logo} alt='Location'className='location_logo_image'/>
      <p className='kare_address'> Krishnankoil, Srivilliputhur, Tamil Nadu 626126</p>
      <img src={phnum_logo} alt='Phone NUmber'className='phnum_logo_image'/>
      <p className='kare_phnum'> 04563 289 042</p>
      <img src={gmail_logo} alt='Gmail'className='gmail_logo_image'/>
      <p className='kare_gmail'> acmkare@gmail.com</p>
      
    </div>

    <div className='Form'>
      <form className='form_inputs'>
        <input type='text' placeholder='Name' required ></input>
        <input type='gmail'placeholder='E-mail' required></input>
        <input type='tel'placeholder='Contact Number' required></input>
        
      </form>
      <form className='Quey_input'>
        <textarea placeholder='Let us know about your idea/query '></textarea>
      </form>
      <button className='Submitbutton'>Submit</button>

    </div>
    </div>
    
  )
}

export default ACMcontact;