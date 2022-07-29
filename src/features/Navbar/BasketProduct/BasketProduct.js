import './BasketProduct.scss'

export function BasketProduct({productRef}) {
  return (
    <dialog ref={productRef} className="basket-product-dialog" onClick={() => {
      productRef.current.close();
    }}>
      <div className='basket-product-container'>
        <button className='close-btn' onClick={() => {
          productRef.current.close();
        }}>X</button>
        <div>
          <h2 className='title'> Products </h2>
          {/* {
            productRef.chooseProducts.map(product => {
              return(
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                  <button>Clear</button>
                </div>
              )
            })
          } */}
        </div>
      </div>
    </dialog>
  )
}