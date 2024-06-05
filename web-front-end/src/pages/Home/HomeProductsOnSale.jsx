import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './HomeProducts';
import HomeProductsOnSaleProducts from './HomeProductsOnSaleProducts';

function HomeProductsOnSale() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/discount') 
      .then(response => response.json())
      .then(data => {
        setProducts(data.data); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='HomeOnSalesProducts'>
      <section className="p-5">
        <div className="container">
          <div className="row">
            <h1 className=" text-center " style={{ color: '#555555' }}>PRODUCTS ON SALE</h1>
          </div>
          <div className="row g-4 mt-0 mx-auto">
            <Carousel responsive={responsive}>
              {products.map(product => (
                <HomeProductsOnSaleProducts key={product.id} product={product.attributes} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeProductsOnSale;
