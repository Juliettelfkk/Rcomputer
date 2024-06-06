import React from 'react'
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="ContactPage">

      <header id="contact" className='vh-100' style={{ paddingTop: "104px" }}>
      <div className="container h-100 d-flex align-items-center justify-content-center">
  <div className="text-center my-5">
    <h5 className="text-uppercase text-white mb-3">
      FOR YOU AND EVERYONE
    </h5>
    <h1 className="text-uppercase py-2 text-primary mb-4 " style={{ fontSize: '54px' }}>
      Contact us!
    </h1>
    <a href="tel:+1234567890" className="btn btn-primary py-2  px-4 mt-3 mx-2 text-uppercase">
      <i className="fas fa-phone ml-2"></i>
      CALL NOW
    </a>
    <a href="mailto:example@example.com" className="btn btn-primary py-2 px-4 mt-3 text-uppercase ms-2">
      <i className="fas fa-envelope ml-2"></i>
      EMAIL US
    </a>
  </div>
</div>


      </header>



      <div className="">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>



  );
}
