import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function HomeProductsProduct({ product }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[product.id] || 0;



  const originalPrice = parseFloat(product.price); // Convert price to number cuz price is string bcz of json

  let discountedPrice = null;
  if (product.discount > 0) {
    const discountPercentage = parseFloat(product.discount);
    const discountAmount = originalPrice * (discountPercentage / 100);
    discountedPrice = originalPrice - discountAmount;
  }

  const handleAddToCart = () => {
    addToCart(product.id);
  };


  return (
    <div className="col-md-4 mb-4 product-item mx-auto">
      <span className="badge rounded-pill" style={{ backgroundColor: 'rgb(19, 7, 84)', padding: '10px' }}>New</span>
      <div className="product-img">
        <img src={product.image} alt={product.name} className="img-fluid d-block mx-auto" />

        <div className="row btns w-100 mx-auto text-center">
          <button type="button" className="col-6 py-2" onClick={handleAddToCart}>
            <i className="fa fa-cart-plus"></i>
            Add to cart  {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
          <button type="button" className="col-6 py-2">
            <i className="fa fa-binoculars"></i>
            View
          </button>
        </div>
      </div>
      <div className="product-info p-3">
        <span className="product-type">Laptops</span>
        <a href="#" className="d-block text-dark text-decoration-none py-2 product-name">{product.name}</a>
        {discountedPrice ? (
          <>
            <span className="product-price"><del>{originalPrice}Da</del></span>

            <span className="discounted-price" style={{ color: 'red' , fontWeight:'bold'}}>{discountedPrice.toFixed(2)}Da</span>
          </>
        ) : (
          <span className="product-price">{originalPrice}Da</span>
        )}
        <div className="rating d-flex mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              <i className="fa fa-star"></i>
            </span>
          ))}
          <span>(25 reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default HomeProductsProduct;
