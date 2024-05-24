import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './HomeProducts';
import HomeProductsOnSaleProducts from './HomeProductsOnSaleProducts';

function HomeProductsOnSale() {
  return (
    <div className='HomeOnSalesProducts'>
      <section className="p-5">
        <div className="container">
          <div className="row">
            <h1 className=" text-center " style={{ color: '#555555' }}>PRODUCTS ON SALE</h1>
          </div>
          <div className="row g-4  mt-0  mx-auto ">
            <Carousel responsive={responsive}>
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
              <HomeProductsOnSaleProducts />
            </Carousel>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomeProductsOnSale