import React from 'react';
import './Main.scss';

const mainImg = {
    product: [{
        id: 1,
        src: require("../Images/p-1.png"),
        name: "Chocolate Bars"
    }, {
        id: 2,
        src: require("../Images/p-2.png"),
        name: "Fruits & Nuts"
    },{
        id: 3,
        src: require("../Images/p-3.png"),
        name: "Halloween"
    },{
        id: 4,
        src: require("../Images/p-4.png"),
        name: "Chirstmas"
    }],
    info: {
        inf: require("../Images/h14.png"),
        inf2: require("../Images/h15.png")
    },
    blog: [{
        id: Math.random(),
        src: require("../Images/blog-1.jpg"),
        title: "How To Eat Chocolate Mindfully"
    }, {
        id: Math.random(),
        src: require("../Images/blog-2.jpg"),
        title: "Can Chocolate Make Us Feel GOOD?"
    }, {
        id: Math.random(),
        src: require("../Images/blog-3.jpg"),
        title: "Parsnip, Apple And Chocolate Cake Recipe"
    }]
};

export function Main() {
  return (
    <section className='main-container'>
        <div className='btn-up'></div>
        <h1>EXPLORE OUR CHOCOLATE <br/> PRODUCTS</h1>
        <div className='div-product'>
            {
                mainImg.product.map(el => {
                    return(
                        <div key={el.id} className='product-item'>
                            <img src={el.src} alt="prod"></img>
                            <p>{el.name}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className='main-info'>
            <div className='img-div'>
                <img src={mainImg.info.inf} alt="prod"></img>
                <div className='description'>
                    <h3>Perfect Pairings</h3>
                    <p>For Added Depth And A More Complex Flavour,<br/> Savour Our Dark Chocolate</p>
                </div>
            </div>
            <div className='img-div'>
                <img src={mainImg.info.inf2} alt="prod"></img>
                <div className='description'>
                    <h3>Bake With Us</h3>
                    <p>Make Some Of Our Most Beloved Recipes.</p>
                </div>
            </div>
        </div>
        <h1>FROM OUR BLOG</h1>
        <div className='blog'>
            {
                mainImg.blog.map(el => {
                    return(
                        <div className='blog-item' key={el.id}>
                            <img src={el.src} alt="prod"></img>
                            <h3>{el.title}</h3>
                        </div>
                    )
                })
            }
        </div>
        <div className='people-saying' >
            <div className='saying-inner'>
                <p>WHAT PEOPLE ARE SAYING</p>
                <h2>“My order arrived the other day in perfect shape, and perfectly wrapped… You are a great company, and your chocolate is wonderful!”</h2>
                <p>— Angela., OMAHA, NE</p>
            </div>
        </div>
    </section>
  )
}