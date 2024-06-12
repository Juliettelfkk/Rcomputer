// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

export const CartItem = (props) => {
  const { id, attributes } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const price = parseFloat(attributes.price);
  const discount = parseFloat(attributes.discount);
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  const handleAddToCart = () => {
    if (cartItems[id] < attributes.quantity) {
      addToCart(id);
    }
  };

  const handleRemoveFromCart = () => {
    if (cartItems[id] > 0) {
      removeFromCart(id);
    }
  };

  const handleUpdateCartItemCount = (newValue) => {
    if (newValue >= 0 && newValue <= attributes.quantity) {
      updateCartItemCount(newValue, id);
    }
  };

  return (
    <div className="cartItem">
      <img src={attributes.image} alt={attributes.name} />
      <div className="description">
        <p>
          <b>{attributes.name}</b>
        </p>
        <p>
          {discount ? (
            <>
              <span
                className="discounted-price"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {discountedPrice}Da
              </span>
              <span className="product-price">
                <del>{price}Da</del>
              </span>
            </>
          ) : (
            <span className="product-price" style={{ fontWeight: "bold" }}>
              {price}Da
            </span>
          )}
        </p>
        <div className="countHandler">
          <button onClick={handleRemoveFromCart}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => handleUpdateCartItemCount(Number(e.target.value))}
          />
          <button onClick={handleAddToCart}> + </button>
        </div>
      </div>
    </div>
  );
};
