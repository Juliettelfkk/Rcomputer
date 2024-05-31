import React from "react";
import MyForm from "./MyForm";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkout container-fluid  min-vh-100" style={{ paddingTop: "110px" }}>
      <div className="row checkoutInfo">
        <div className="col-md-7  p-3 ">
          <div className="customer_details">
            <MyForm />

          </div>
        </div>
        <div className="col-md-5 p-3 mt-0">
          <div className="order-summary">
            <h2 className="uppercase">Your order</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Sous-Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Macbook Air M2 2022 16/512</td>
                  <td>د.ج 220.000,00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Sous-total</td>
                  <td>د.ج 220.000,00</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Livraison gratuite</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>د.ج 220.000,00</td>
                </tr>
              </tfoot>
            </table>
            <div className="payment-method">
              <h4>Cash on delivery</h4>
              <p>Pay with cash upon delivery.</p>
            </div>
            <button className="btn btn-primary confirm-button">COMMANDER</button>
            <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our politique de confidentialité.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Checkout;