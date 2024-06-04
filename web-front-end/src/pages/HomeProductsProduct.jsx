import React from 'react'
import productImg1 from '../assets/product1.png'


function HomeProductsProduct() {
  // new products 
  return (

<div className="col-md-4 mb-4 product-item  mx-auto">
  <span className="badge  rounded-pill  " style={{backgroundColor:'rgb(19, 7, 84)' , padding: '10px'}}>New</span>
  <div className="product-img ">
    <img src={productImg1} alt="" className="img-fluid d-block mx-auto  "/>
    <span className="heart-icon">
      <i className="fa-regular fa-heart"></i>
    </span>
    <div className="row btns w-100 mx-auto text-center ">
      <button type="button" className="col-6 py-2">
        <i className="fa fa-cart-plus"></i>
        Add to cart
      </button>
      <button type="button" className="col-6 py-2">
        <i className="fa fa-binoculars"></i>
        View
      </button>
    </div>
  </div>
  <div className="product-info p-3">
    <span className="product-type">Laptops</span>
    <a href="#" className="d-block text-dark text-decoration-none py-2 product-name">Hp - Hp1</a>
    <span className="product-price">2OOODa</span>
    <div className="rating d-flex mt-1 ">
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
      <span>(25reviews)</span>
    </div>
  </div>
</div>


  )
}

export default HomeProductsProduct