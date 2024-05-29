import React from "react";
import Logo from "../assets/logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    //navBar
    <nav
      className="navbar navbar-expand-lg navbar-light  fixed-top py-4  shadow-lg"
      style={{ backgroundColor: "black" }}
    >
      <div className="container ">
        <Link
          className="navbar-brand d-flex justify-content-between align-items-center order-lg-0 "
          to="/"
        >
          <img src={Logo} alt="Logo" width="50" />
          <span className="text-uppercase text-light  fx-lighter ml-0">
            computer
          </span>
        </Link>
        <div className="order-lg-2 ">
          <button type="button" className="btn position-relative">
            <i className="fa fa-search text-light"></i>
          </button>
          <button type="button" className="btn position-relative  ">
            <i className="fa fa-shopping-cart text-light"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
              2
            </span>
          </button>
          <button type="button" className="btn position-relative  ">
            <i className="fa fas fa-user-alt	 text-light "></i>
          </button>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-lg-1 " id="navMenu">
          <ul className="navbar-nav mx-auto text-center  ">
            <li className="nav-item px-2 py-2  ">
              <Link className="nav-link text-light text-uppercase" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-2 py-2 ">
              <Link className="nav-link text-light text-uppercase" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item px-2 py-2 ">
              <Link className="nav-link text-light text-uppercase" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item px-2 py-2 border-0 ">
              <Link
                className="nav-link text-light text-uppercase"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
