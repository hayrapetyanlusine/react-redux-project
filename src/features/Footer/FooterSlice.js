import React from 'react';
import './Footer.scss';
import logoImg from'../Images/logo.jpg';
import { Link } from 'react-router-dom';
export {logoImg};

export function FooterReducer(state={}, action) {
  return state;
}

export const initialFooter = {
  info: {
    name: "Information",
    content: [
      {
        item: "About us",
        id: Math.random(),
        href: "/home"
      },
      {
        item: "History",
        id: Math.random(),
        href: "/history"
      },
      {
        item: "Blogs",
        id: Math.random(),
        href: "/blogs"
      },
      {
        item: "Contact",
        id: Math.random(),
        href: "/contact"
      }
    ]
  },
  logo:{
    src: logoImg,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero molestias hic sed et, adipisci eos praesentium, dolorem aut"
  },
  contact:{
    name: "Contact Us",
    address: "Head Office: 785 15h Street, De 81566",
    tel: "Tel: (+84)-01234 - 5678",
    mail:"Email: Demo@Demo.Com"
  }
}

export function FooterComp() {
  return (
    <>
        <section className='footer-container'>
          <div className='footer-item'>
              <h4>{initialFooter.info.name}</h4>
              {
                initialFooter.info.content.map(elem => {
                  return <li key={elem.id}>
                    <Link to={elem.href} onClick={() => {
                       window.scrollTo({top: 0})
                    }}>{elem.item}</Link>
                  </li>
                })
              }
          </div>
          <div className='footer-item'>
                <a href='#'>
                    <img src={initialFooter.logo.src} alt="logo"/>
                </a>
                <div><p>{initialFooter.logo.text}</p></div>
          </div>
          <div className='footer-item'>
              <h4>{initialFooter.contact.name}</h4>
              <p>{initialFooter.contact.address}</p>
              <p>{initialFooter.contact.tel}</p>
              <p>{initialFooter.contact.mail}</p>
          </div>
        </section>
        <section className='web-info'>
            <p> Copyright © 2022 Xocora. All Rights Reserved </p>
        </section>
        </>
  )
}
