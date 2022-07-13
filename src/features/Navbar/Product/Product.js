import React from 'react'
import './Product.scss'
import background from '../../Images/chock-header.jpg'
import { ScrollUp } from '../../ScrollUp/ScrollUp';

export const initialProduct = [{
    name: "Ferrero Rocher Balls",
    img: require('../../Images/chock1.jpg'),
    type: "dark",
    price: `$${19.12}`,
    id: 1
  },
  {
    name: "Giant Milk Chocolate",
    img: require('../../Images/chock2.jpg'),
    type: "milk",
    price: `$${29.05}`,
    id: 2
  },
  {
    name: "Premium Milk Chocolate",
    img: require('../../Images/chock3.jpg'),
    type: "milk",
    price: `$${29.10}`,
    id: 3
  },
  {
    name: "9 Chocolate Penguins",
    img: require('../../Images/chock4.jpg'),
    type: "no-sugar",
    price: `$${11.90}`,
    id: 4
  },
  {
    name: "Gourmet Milk Chocolate",
    img: require('../../Images/chock5.jpg'),
    type: "milk",
    price: `$${18.90}`,
    id: 5
  },
  {
    name: "Dark Chocolate With Toffee",
    img: require('../../Images/chock6.jpg'),
    type: "dark",
    price: `$${28.72}`,
    id: 6
  },
  {
    name: "Dark Chocolate Peanut",
    img: require('../../Images/chock7.jpg'),
    type: "dark",
    price: `$${29.00}`,
    id: 7
  },
  {
    name: "Ultimate Collection",
    img: require('../../Images/chock8.jpg'),
    type: "no-sugar",
    price: `$${11.90}`,
    id: 8
  },
  {
    name: "Milk Chocolate",
    img: require('../../Images/chock9.jpg'),
    type: "milk",
    price: `$${18.90}`,
    id: 9
  },
  {
    name: "Gourmet Chocolate",
    img: require('../../Images/chock10.jpg'),
    type: "no-sugar",
    price: `$${12.04}`,
    id: 10
  },
  {
    name: "Caramel Latte",
    img: require('../../Images/chock11.jpg'),
    type: "no-sugar",
    price: `$${13.60}`,
    id: 11
  }
]

export function productReducer(state=[], action) {
  const initialState = initialProduct;

  switch(action.type) {
    case "all" :
      return initialState;
    case "dark" :
      return initialState.filter((product) => product.type === action.payload.dark);
    case "milk" :
      return initialState.filter((product) => product.type === action.payload.milk);
    case "no-sugar" :
      return initialState.filter((product) => product.type === action.payload.noSugar);
    default:
      return state;
  }
}

export function Product({products, all, allDark, allMilk, allNoSugar}) {
  return (
    <div id='product-container'>
      <ScrollUp/>
      <div className='product-backg' style={{ backgroundImage: `url(${background})` }}>
        <h3>Chocolates</h3>
      </div>

      <h2 className='title'>Our Chocolates</h2>

      <div id='choose-products'>
        <div className='choose-product' onClick={(e) => { 
          e.preventDefault();
          all();
        }}>All Chocolates</div>

        <div className='choose-product' onClick={(e) => {
          e.preventDefault();
          allDark(products);
        }}>Dark Chocolates</div>

        <div className='choose-product' onClick={(e) => {
          e.preventDefault();
          allMilk();
        }}>Milk Chocolates</div>

        <div className='choose-product' onClick={(e) => {
          e.preventDefault();
          allNoSugar();
        }}>No sugar Chocolates</div>
      </div>

      <div id='products'>
        {
          products.map(product => {
            return(
              <div className='product' key={product.id}>
                <img src={product.img} alt="product"></img>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button>Buy</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export function stateProducts(state) {
  return state.product;
}

export function allChock() {
  return{
    type: "all"
  }
}

export function darkChock() {
  return{
    type: "dark",
    payload: ({
      dark: "dark"
    })
  }
}

export function milkChock() {
  return{
    type: "milk",
    payload: ({
      milk: "milk"
    })
  }
}

export function allNoSugar() {
  return{
    type: "no-sugar",
    payload: ({
      noSugar: "no-sugar"
    })
  }
}