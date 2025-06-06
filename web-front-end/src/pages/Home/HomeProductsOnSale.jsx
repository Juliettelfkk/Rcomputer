import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './HomeProducts';
import HomeProductsOnSaleProducts from './HomeProductsOnSaleProducts';

function HomeProductsOnSale() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products/discount');
        const data = await response.json();
        const products = data.data.map(item => ({
          id: item.id,
          ...item.attributes
        }));
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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
              {products.map((product) => (
                <HomeProductsOnSaleProducts key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeProductsOnSale;
