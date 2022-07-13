import React from 'react'
import './History.scss';
import background from "../../Images/bc-history.jpg";
import { ScrollUp } from '../../ScrollUp/ScrollUp';

const history = [{
  id: 1,
  subtitle: "PIONEERS IN CHOCOLATE",
  title: "The Beginning",
  text: "It All Began With The Opening Of Small Confectionery. The Business Grew Quickly Thanks To Xocora Entrepreneurial Spirit And Passion. Soon Xocora Was A Name Of Renown In The Chocolate Industry.",
  img: require('../../Images/history-1.png'),
  year: 1960
},{
  id: 2,
  subtitle: "THE PROGRESS",
  title: "Irst Chocolate Factory",
  text: "Xocora Grew Rapidly, Opening The Xocora Factory In Horgen In 1970. You Could Actually Smell Chocolate In The Air When Production Began.",
  img: require('../../Images/history-2.png'),
  year: 1970
},{
  id: 3,
  subtitle: "FURTHER GROWTH",
  title: "A World-Wide Favourite",
  text: "Finally, In 1980, Xocora Released The First Red Foil Wrapped Milk Chocolate Truffles As Part Of A Christmas Promotion. They Became An Immediate Success And Customers Were Sad To See Them Go Once The Festive Season Was Over...",
  img: require('../../Images/history-3.png'),
  year: 1980
},{
  id: 4,
  subtitle: "THE PROGRESS",
  title: "At The Forefront Of Chocolate Innovation",
  text: "In 1990, Xocora Developed A Ground-Breaking New Technology In Their Chocolate Production: The Xocora Chocolate Process (LSCP). Next To The Conching Technique, This New Development Is The Most Significant In The History Of Xocora Chocolate Production.",
  img: require('../../Images/history-4.png'),
  year: 1990
},{
  id: 5,
  subtitle: "THE FUTURE OF XOCORA",
  title: "Farming Program",
  text: "Sustainability Is An Integral Part Of Xocora Corporate Philosophy And Is Firmly Anchored In Its Strategy, From The Sourcing Of The Cocoa Beans To The Chocolate Product. Since 2008, The Xocora Farming Program Is An Expression Of This Commitment To Sustainability.",
  img: require('../../Images/history-5.png'),
  year: 2010
}, {
  id: 6,
  subtitle: "THE FUTURE OF XOCORA",
  title: "Farming Program",
  text: "ustainability Is An Integral Part Of Xocora Corporate Philosophy And Is Firmly Anchored In Its Strategy, From The Sourcing Of The Cocoa Beans To The Chocolate Product. Since 2008, The Xocora Farming Program Is An Expression Of This Commitment To Sustainability.",
  img: require('../../Images/history-6.png'),
  year: 2022
}];

export function History() {
  return (
    <div className='history-container'>
      <ScrollUp/>
      <div className='history-backg' style={{ backgroundImage: `url(${background})` }} >
        <div className='history-inner'>
          <p>FAMILY TRADITION</p>
          <h1>OUR HISTORY</h1>
        </div>
      </div>

      <div className='tradition-container'>
        <h1 className='trad-title'>TRADITION</h1>
          <div className='tradition'>
            <div className='img-div'>
              <img className='trad-img' src={require('../../Images/chock-1.png')} alt='chock'></img>
            </div>
            <p>We Are Here To Redefine The All-Time Classics To Create Some Heavenly And Unforgettable Experiences. And With All This And More, We Wish To Fill The Empty Spaces In Every Conversation With A Smile.</p>
            <p className='name'>Frederic</p>
            <p className='prof'>CHEF COOK - FOUNDER</p>
          </div>
      </div>

      <h1 className='title'>Over Five Decades Of History</h1>

      <div id='histories'>
        {
          history.map((history, i )=> {
            return(
              <div className={i % 2 === 0 ? "history" : "history1"} key={history.id}>
                <div className='description'>
                  <p>{history.subtitle}</p>
                  <h1 className='his-title'>{history.title}</h1>
                  <p className='his-text'>{history.text}</p>
                </div>
                <div className='picture'>
                  <img src={history.img} alt="picture"></img>
                  <h2>{history.year}</h2>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
