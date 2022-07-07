import React from 'react'
import './Blogs.scss'
import background from '../../Images/bc-blogs.jpg' 
import img from '../../Images/blogs-1.png'
import choc1 from '../../Images/blogs-div.png'
import choc2 from '../../Images/blogs-div2.png'

export function Blogs() {
  return (
    <div className='blog-container'>
      <div className='history-backg' style={{ backgroundImage: `url(${background})` }} >
        <div className='history-inner'>
          <p>GET IN TOUCH</p>
          <h1>OUR BLOGS</h1>
        </div>
      </div>

      <h1 className='title'>Quality & Passion With Our Chocolate !</h1>

      <div className='img' >
        <img src={img} alt="picture"></img>
      </div>

      <h1 className='title'>Chocolate Is Always The Perfect</h1>

      <div className='chocolates'>
        <div className='chocolate'>
          <div className='choc-img'>
            <img src={choc1} alt="picture"></img>
          </div>
          <p>We are not just a bakery, we are not just bakers. In fact, we are just like you, a bunch of food lovers fascinated with sweet indulgence, who dreamt of creating an appetizing fairy land of divine delicacies that relishes the utmost desires</p>
        </div>
        <div className='chocolate'>
          <div className='choc-img'>
            <img src={choc2} alt="picture"></img>
          </div>
          <p>We are not just a bakery, we are not just bakers. In fact, we are just like you, a bunch of food lovers fascinated with sweet indulgence, who dreamt of creating an appetizing fairy land of divine delicacies that relishes the utmost desires</p>
        </div>
      </div>
    </div>
  )
}
