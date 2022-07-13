import React from 'react'
import './Contact.scss'
import { Location, Phone, Time } from '../../Svg'
import background from "../../Images/bc-contact.jpg";
import { ScrollUp } from '../../ScrollUp/ScrollUp';

export function Contact() {
  return (
    <div className='contact-container'>
      <ScrollUp/>
      <div className='contact-backg' style={{ backgroundImage: `url(${background})` }} >
        <div className='contact-inner'>
          <p>GET IN TOUCH</p>
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className='info'>
        <div className='info-inner'>
          <p>CONTACT ME</p>
          <h1>GET IN TOUCH</h1>
          <p>We are exactly what you are looking for. Yes, we are an FSSAI certified online cake and Bakery Company that specializes in delivering absolutely lip-smacking delicacies. </p>
        </div>
      </div>

      <div className='info-container'>
        <div className='info-item'>
          <Location/>
          <h2> ADDRESS</h2>
          <p>Head Office: 785 15h Street, Office 47 Berlin, De 81566</p>
        </div>
        <div className='info-item'>
          <h2> <Phone/> CONTACT</h2>
          <p>Mobile: +(084) 1200-567-890</p>
          <p>Mail: demo@demo.com</p>
        </div>
        <div className='info-item'>
          <h2> <Time/> HOUR OF OPERATION</h2>
          <p>Monday-Saturday: 9:00 Am - 8:00 Pm Cst</p>
        </div>
      </div>
    </div>
  )
}