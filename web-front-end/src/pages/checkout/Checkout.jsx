import React, {  useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../cart/CartItem"; 
import { PRODUCTS } from "../../products"; 

function Checkout() {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the cart is empty
    const isEmptyCart = Object.values(cartItems).every((quantity) => quantity === 0);

    // Redirect to cart page if the cart is empty
    if (isEmptyCart) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  // Check if the cart is empty
  const isEmptyCart = Object.values(cartItems).every((quantity) => quantity === 0);

  return (
    <div className="checkout container-fluid min-vh-100" style={{ paddingTop: "110px" }}>
      <div className="row checkoutInfo">
        <div className="col-md-7 p-3">
          <div className="customer_details">
            {/* Render your form component here */}
          </div>
        </div>
        <div className="col-md-5 p-3 mt-0">
          {isEmptyCart ? (
            <div className="text-center">
              <h2>Your Shopping Cart is Empty</h2>
              <button onClick={() => navigate("/shop")} className="btn btn-primary">Return to Shop</button>
            </div>
          ) : (
            <div className="order-summary shadow">
              <h2 className="uppercase">Your order</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render each cart item using the CartItem component */}
                  {Object.keys(cartItems).map((itemId) => {
                    const product = PRODUCTS.find((prod) => prod.id === parseInt(itemId));
                    return (
                      <CartItem
                        key={product.id} // Ensure each CartItem has a unique key
                        data={product}
                        quantity={cartItems[itemId]}
                      />
                    );
                  })}
                </tbody>
              </table>
              {/* Other checkout information */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
