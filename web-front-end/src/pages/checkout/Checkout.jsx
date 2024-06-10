// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";
import "./Checkout.css";
import MyForm from "./MyForm";

function Checkout() {
  const { cartItems, products, orderCount, checkout } = useContext(ShopContext);
  const navigate = useNavigate();

  const [billingInfo, setBillingInfo] = useState({
    Name: "",
    lastName: "",
    email: "",
    phone: "",
    buildingInfo: "",
    wilaya: "Alger",
    address: "",
  });

  const cartProductIds = Object.keys(cartItems).filter(
    (id) => cartItems[id] > 0
  );
  const isEmptyCart = cartProductIds.length === 0;

  const calculateTotalAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = products.find((product) => product.id === itemId);
      if (item) {
        const price = parseFloat(item.attributes.price);
        const discountedPrice = item.attributes.discount
          ? price - (price * parseFloat(item.attributes.discount)) / 100
          : price;
        total += discountedPrice * cartItems[itemId];
      }
    }
    return total.toFixed(2);
  };

  const totalAmount = calculateTotalAmount();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleConfirmOrder = () => {
    const orderNumber = orderCount + 1; // Use the order count as order number
    const orderDate = new Date().toLocaleDateString();

    checkout(); // Call checkout to clear cart and increment order count
    // Navigate to receipt page with billing info and total amount
    navigate("/receipt", {
      state: {
        billingInfo,
        totalAmount,
        cartItems,
        products,
        orderNumber,
        orderDate,
      },
    });
  };

  return (
    <div
      className="checkout container-fluid min-vh-100"
      style={{ paddingTop: "110px" }}
    >
      <div className="row checkoutInfo">
        <div className="col-md-7 p-3">
          <div className="customer_details">
            <h2>ORDER INFORMATION</h2>
            <MyForm
              billingInfo={billingInfo}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-5 p-3 mt-0">
          {isEmptyCart ? (
            <div className="text-center">
              <h2>Your Shopping Cart is Empty</h2>
              <button
                onClick={() => navigate("/shop")}
                className="btn btn-primary"
              >
                Return to Shop
              </button>
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
                  {products
                    .filter((product) => cartProductIds.includes(product.id))
                    .map((product) => {
                      const price = parseFloat(product.attributes.price);
                      const discountedPrice = product.attributes.discount
                        ? price -
                          (price * parseFloat(product.attributes.discount)) /
                            100
                        : price;

                      return (
                        <tr key={product.id}>
                          <td>{product.attributes.name}</td>
                          <td>{cartItems[product.id]}</td>
                          <td>{discountedPrice.toFixed(2)} DA</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="order-total">
                <p>
                  Sous-total{" "}
                  <span className="text-success" style={{ fontWeight: "bold" }}>
                    {totalAmount} DA
                  </span>
                </p>
                <p>
                  Expédition <span>Livraison gratuite</span>
                </p>
                <p>
                  Total <span>{totalAmount} DA</span>
                </p>
              </div>
              <div className="payment-method">
                <p>Cash on delivery</p>
                <p>Pay with cash upon delivery.</p>
              </div>
              <button
                className="place-order-button"
                onClick={handleConfirmOrder}
              >
                COMMANDER
              </button>
              <p className="privacy-policy">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
