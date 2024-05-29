import React from 'react'
import "./shop.css";
export default function ProductsShop(props) {
  const { id, productName, price, productImage } = props.data || {}; // Ensure props.data is defined
  return (
      <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-lg">
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{price}DA</p>
        <button type="button" className="addToCartBttn">Add to cart</button>
      </div>
    </div>
  </div>
  )
}

