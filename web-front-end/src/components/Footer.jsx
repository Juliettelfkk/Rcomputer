import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer mt-5 mb-0' >
      <footer className="text-white text-center text-lg-start " style={{ backgroundColor: 'black' }}>

        <div className="container p-4 pb-0">
          <section className="">
            <div className="row   ">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-center ">Opening time</h6>
                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Sun - Thu</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td> Friday </td>
                      <td className='text-danger font-weight-bold'>CLOSED</td>
                    </tr>
                    <tr>
                      <td> Saturday </td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a className="text-white">Bootstrap Angular</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Pages</h6>
                <p>
                  <Link to="/home" className="text-white">Home page </Link>
                </p>
                <p>
                  <Link to="/shop" className="text-white" >Shop Page</Link>
                </p>
                <p>
                  <Link to="/#" className="text-white">Your Account</Link>

                </p>
                <p>
                  <Link to="/contact" className="text-white">Help </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Alger, AL 10012, DZ</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </section>


          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start p-3">
                © {(new Date().getFullYear())} Copyright: <strong>Rcomputer</strong>

              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link to="/#"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                ><i className="fab fa-facebook-f"></i>
                </Link>

                <Link to="/#"
                  
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  ><i className="fab fa-twitter"></i>
                  
                </Link>


                <Link to="/#"

                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  ><i className="fab fa-google"></i>
                  
                </Link>


                <Link to="/#"
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  ><i className="fab fa-instagram"></i>
           
                </Link>


              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>


  );
}
