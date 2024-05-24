import React from 'react'
import { Link } from 'react-router-dom'
import CategoryHome from './CategoryHome'
import HomeProducts from './HomeProducts'
import HomeProductsOnSale from './HomeProductsOnSale'

export default function Home() {
  return (
    <div className='home'>
      <header id="header" className="vh-100 carousel slide" data-bs-ride="carousel" style={{ paddingTop: "104px" }}>
        <div className="container h-100 d-flex align-items-center carousel-inner">
          <div className="text-center carousel-item active">
            <h2 className="text-capitalize text-white">best collection</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">new arrivals</h1>
            <Link to="/shop" className="shop btn mt-3 text-uppercase">
              Shop now
            </Link>
          </div>
          <div className="text-center carousel-item">
            <h2 className="text-capitalize text-white">best price & offer</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">new season</h1>
            <Link to="/shop" className="shop btn mt-3 text-uppercase">
              Buy now
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </header>
      <section>
        <div className="container-fluid d-flex flex-row bg-white p-5 justify-content-between">
          <div className="text-center border-end border-dark-subtle   border-2 pe-5">
            <i className="fa-solid fa-truck-fast  "></i>
            <h4>Livraison gratuite</h4>
            <p>Livraison gratuite 58 wilaya en moins de 48h</p>
          </div>
          <div className="text-center ">
            <i className="fa-solid  fa-bag-shopping "></i>
            <h4>Cartable gratuit</h4>
            <p>Obtenez un cartable gratuit pour votre nouveau PC</p>
          </div>
          <div className="text-center  border-start  border-dark-subtle   border-2 ps-5 ">
            <i className="fa-solid fa-laptop "></i>
            <h4>Adapté aux besoins</h4>
            <p>Adapté à vos besoins pour plus d’efficacité</p>
          </div>
        </div>
      </section>
    <CategoryHome/>
    <HomeProducts/>  
  <HomeProductsOnSale/>
    {/* new produtcs */}
    </div>
  )
}
