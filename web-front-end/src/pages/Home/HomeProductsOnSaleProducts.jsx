import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

export default function HomeProductsOnSaleProducts({ product }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[product.id] || 0;

  const originalPrice = parseFloat(product.price);
  const discountPercentage = parseFloat(product.discount);
  const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  const handleAddToCart = () => {
    addToCart(product.id);
  };
  return (
    <div className="row g-4 mt-0 my-5 mx-2">
      <div className="col shadow product-item mx-auto">
        <div className="Badge-item">
          {discountPercentage > 0 && <span className="notify-badge">SALE</span>}
        </div>
        <div className="product-img">
          <img src={product.image} alt={product.name} className="img-fluid d-block mx-auto" />
         
          <div className="row btns w-100 mx-auto text-center">
            <button type="button" className="col-6 py-2" onClick={handleAddToCart}>
              <i className="fa fa-cart-plus"></i>
              Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
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
          <div className="product-pricing">
            <span className="product-price" style={{ textDecoration: discountPercentage > 0 ? 'line-through' : 'none' }}>
              {originalPrice} Da
            </span>
            {discountPercentage > 0 && (
              <span className="discounted-price" style={{ color: 'red', fontWeight: 'bold' }}>
                {discountedPrice.toFixed(2)} Da
              </span>
            )}
          </div>
          <div className="rating d-flex mt-1">
            <span>
              <i className="fa fa-star"></i>
            </span>
            <span>
              <i className="fa fa-star"></i>
            </span>
            <span>
              <i className="fa fa-star"></i>
            </span>
            <span>
              <i className="fa fa-star"></i>
            </span>
            <span>
              <i className="fa fa-star"></i>
            </span>
            <span>(25 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
