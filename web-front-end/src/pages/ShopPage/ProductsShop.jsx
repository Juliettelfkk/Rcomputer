import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from '../../context/ShopContextProvider';

export default function ProductsShop(props) {
  const { id, attributes } = props.data || {}; 
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const originalPrice = parseFloat(attributes.price);

  let discountedPrice = null;
  if (attributes.discount > 0) {
    const discountPercentage = parseFloat(attributes.discount);
    const discountAmount = originalPrice * (discountPercentage / 100);
    discountedPrice = originalPrice - discountAmount;
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-lg">
        <img src={attributes.image} className="card-img-top" alt={attributes.name} />
        <div className="card-body">
          <h5 className="card-title">{attributes.name}</h5>
          <p className="card-text">
            {discountedPrice ? (
              <>
                <span className="discounted-price" style={{ color: 'red', fontWeight: 'bold' }}>{discountedPrice.toFixed(2)}DA</span>
                <span className="product-price"style={{  fontWeight: 'bold' }}><del>{parseFloat(attributes.price)}</del>DA</span> 
              </>
            ) : (
              <span className="product-price" style={{  fontWeight: 'bold' }}>{parseFloat(attributes.price)}DA</span>
            )}
          </p>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
}
