import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContext } from "../../context/ShopContextProvider";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
function Cart(){
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="text-uppercase">Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="text-center">
        <h1 className=" empty-text">Your Shopping Cart is Empty</h1>
        <button onClick={() => navigate("/shop")} className="return-button">Return to Shop</button>
      </div>
      )}
    </div>
  );
};
export default Cart ;