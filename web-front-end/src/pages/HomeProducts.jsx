import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeProductsProduct from './HomeProductsProduct';
//new product in home page , using HomeProductsProduct
//a responsive object for making our carsouel responsive
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
  return (
    <div className='HomeProducts'>
      <section className=" py-5" >
        <div className="container">
          <div className="row  ">
            <h1 className=" text-center " style={{ color: '#555555' }}>NEW PRODUCTS</h1>
          </div>
          <div className="row g-4  mt-0  mx-auto ">
          <Carousel responsive={responsive}>
            
            <HomeProductsProduct/>
            <HomeProductsProduct/>
            <HomeProductsProduct/>
            <HomeProductsProduct/>
            <HomeProductsProduct/>
            <HomeProductsProduct/>
            <HomeProductsProduct/>


            
          </Carousel>
          </div>

    

          {/* c */}
        </div>

      </section>
    </div>
  );
}

export default HomeProducts