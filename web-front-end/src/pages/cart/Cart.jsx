import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContext } from "../../context/ShopContextProvider";
import { CartItem } from "./CartItem";

function Cart() {
  const { cartItems,checkout, products } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0;
      for (const itemId in cartItems) {
        const item = products.find(product => product.id === itemId);
        if (item) {
          const price = parseFloat(item.attributes.price);
          const discountedPrice = item.attributes.discount
            ? parseFloat(item.attributes.price) - (parseFloat(item.attributes.price) * parseFloat(item.attributes.discount) / 100)
            : price;
          total += discountedPrice * cartItems[itemId];
        }
      }
      setTotalAmount(total.toFixed(2)); // Set total amount with two decimal places
    };
  
    calculateTotalAmount(); // Initial calculation
  }, [cartItems, products]);
  

  const handleCheckout = () => {
    checkout(); // This calls the checkout function from ShopContext
    navigate("/checkout"); // Redirect to the checkout page
  };

  const cartProductIds = Object.keys(cartItems).filter(id => cartItems[id] > 0);

  return (
    <div className="cart min-vh-100">
      <div className="cartTitle">
        <h1 className="text-uppercase">Your Cart Items</h1>
      </div>
      <div className="cart-i">
        {products
          .filter(product => cartProductIds.includes(product.id))
          .map(product => (
            <CartItem key={product.id} data={product} />
          ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="text-success" style={{fontWeight:'bold'}}>Subtotal: {totalAmount}DA</p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="empty-text">Your Shopping Cart is Empty</h1>
          <button onClick={() => navigate("/shop")} className="return-button">
            Return to Shop
          </button>
        </div>
      )}
     
    </div>
  );
}

export default Cart;
