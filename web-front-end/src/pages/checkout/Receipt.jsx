import React from "react";
import { useLocation } from "react-router-dom";

function Receipt() {
  const location = useLocation();
  const { billingInfo, totalAmount, cartItems, products, orderNumber, orderDate } = location.state;

  // Filter products that are actually in the cart
  const cartProductIds = Object.keys(cartItems).filter(id => cartItems[id] > 0);

  return (
    <div className="receipt container-fluid min-vh-100" style={{ paddingTop: "110px" }}>
      <div className="row mt-5 recepitInfo">

        <div className="col-md-7 p-3 mt-0">
          <div className="order-summary">
            <h2>Order details</h2>
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
                  .filter(product => cartProductIds.includes(product.id.toString()))
                  .map(product => {
                    const price = parseFloat(product.attributes.price);
                    const discountedPrice = product.attributes.discount
                      ? price - (price * parseFloat(product.attributes.discount) / 100)
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
              <p>Sous-total <span>{totalAmount} DA</span></p>
              <p>Expédition <span>Livraison gratuite</span></p>
              <p>Total <span>{totalAmount} DA</span></p>
            </div>
          </div>
        </div>
        <div className="col-md-5 p-3 card shadow">
          <h2 className="uppercase text-success">Thank you for your order.</h2>
          <div className="order-details">
            <ul>
              <li><strong>Order Number:</strong> {orderNumber}</li>
              <li><strong>Order Date:</strong> {orderDate}</li>
              <li><strong>Name:</strong> {billingInfo.Name} {billingInfo.lastname}</li>
              <li><strong>Email:</strong> {billingInfo.email}</li>
              <li><strong>Phone:</strong> {billingInfo.phone}</li>
              <li><strong>Address:</strong> {billingInfo.address}</li>
              <li><strong>Wilaya:</strong> {billingInfo.wilaya}</li>
              <li>Total <span className="text-danger">{totalAmount} DA</span></li>
              

              <li>Moyen de paiement : Cash on delivery</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
