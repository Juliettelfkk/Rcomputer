import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeProductsProduct from './HomeProductsProduct';
//fetch the latest products there were added
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function HomeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products/seven');
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
    <div className='HomeProducts'>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center" style={{ color: '#555555' }}>NEW PRODUCTS</h1>
          </div>
          <div className="row g-4 mt-0 mx-auto">
            <Carousel responsive={responsive}>
              {products.map((product ) => (
                <HomeProductsProduct key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeProducts;
