import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from '../../context/ShopContextProvider';

export default function ProductsShop(props) {
  const { id, attributes } = props.data || {}; // Ensure props.data is defined
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
      <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-lg">
      <img src={attributes.image} className="card-img-top" alt={attributes.name} />
      <div className="card-body">
        <h5 className="card-title">{attributes.name}</h5>
        <p className="card-text">{attributes.price}DA</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
    </div>
  </div>
  )
}