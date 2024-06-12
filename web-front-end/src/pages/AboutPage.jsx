import React from 'react'
import "../styles/About.css"
import teamImage from "../assets/2.png"
import highQ from "../assets/high.jpg"
import g from "../assets/g.avif"
import service from "../assets/service.jpg"



export default function AboutPage() {
  return (
    <div className='aboutUs'>
      <header className="about-header">
        <div className="overlay">
          <h1 className="text-center text-light">About Us</h1>
        </div>
      </header>
      <section className="about-section">
        <div className="container">
          <div className="d-flex flex-row ">
            <div className="col-7 ">
              <img src={teamImage} width="304" height="236" />
            </div>
            <div className="col ">
              <h1  >Who we are ?
              </h1>
              <h2 className="text-muted">Rcomputer</h2>

              <p >was founded by Abderahman, a passionate computer science student. Fueled by his love for technology and innovation, Abderahman started this store to make the latest tech products accessible to everyone.  </p>
            </div>
          </div>
          <div className="d-flex flex-row ">
          <div className="col-7 ">
              <h1  >What we offer ?
              </h1>
              <p > Rcomputer store is a specialized tech store dedicated to bringing you the latest and most innovative technology products with just one click. We offer a wide range of PCs, desktops, laptops, and accessories to meet all your tech needs.  </p>
            </div>

            <div className="col ">
           <img src={highQ} width="304" height="236" />

            </div>
           
          </div>
          <div className="row">
            
          <div className="col ">
           <img src={g} width="304" height="236" />

            </div>
            <div className='col'>
              <h1>Quarantee</h1>
              <p>We offer a satisfaction guarantee on all purchases, ensuring that you are completely satisfied with your shopping experience. If you encounter any issues with your purchase, our dedicated customer support team is here to assist you every step of the way.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Client Service
              </h1>
              <p> Our knowledgeable and friendly team is here to assist you with any questions or concerns you may have before, during, and after your purchase. Whether you need product recommendations, technical support, or assistance with your order, we are dedicated to ensuring that you have a seamless and enjoyable shopping experience with us.</p>

            </div>
            <div className="col">
            <img src={service} width="304" height="236" />

            </div>
          </div>

        
        </div>
      
      </section>



    </div>
  )
}
