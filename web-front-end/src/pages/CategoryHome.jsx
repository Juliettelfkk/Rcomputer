import React from 'react'
import CategoryImg from '../assets/accessoriesc.jpg';
export default function CategoryHome() {
  return (
    <div className='CategorHome'>

      <section className="container-fluid  bg-dark  py-5  ">

        <div className="title text-center text-light">
          <p>FOR YOU AND EVERYONE</p>
          <h2 className="position-relative d-inline-block">Our Products</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3 mt-1 ">
          <div className="col  ">
            <div className="card h-100 border-0  ">
              <img src={CategoryImg} className="card-img-top" alt="..."/>
                <div className="card-body  ">
                  <h2 className="card-title ">DESKTOP</h2>
                  <button className="btn btn-primary px-5 ">Buy</button>
                </div>

            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 ">
            <img src={CategoryImg} className="card-img-top" alt="..."/>                <div className="card-body">
                  <h2 className="card-title">DESKTOP</h2>
                  <button className="btn btn-primary px-5">Buy</button>
                </div>

            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 ">
            <img src={CategoryImg} className="card-img-top" alt="..."/>              <div className="card-body ">
                <h2 className="card-title">DESKTOP</h2>
                <button className="btn btn-primary px-5">Buy</button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
