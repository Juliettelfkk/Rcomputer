import React from 'react'


export default function ContactPage() {
  return (
    <div className="ContactPage bg-light" >
      <header id="contact" className='vh-100' style={{ paddingTop: "104px" }}>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center my-5">
            <h5 className="text-uppercase text-white mb-3">
              FOR YOU AND EVERYONE
            </h5>
            <h1 className="text-uppercase py-2 text-primary mb-4" style={{ fontSize: '54p'}}>
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
      <div className="container min-vh-100 " style={{ paddingTop: "50px" }}>
        <div className="row">
          <form className=' shadow p-5'>
            <h1 class="d-flex  justify-content-center">Ask a question</h1>
            <div className="form-group">
              <label for="exampleInputName"><strong>Name</strong></label>
              <input type="email" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1"><strong>Email</strong> </label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputSubject"><strong>Subject</strong></label>
              <input type="Subject" className="form-control" id="exampleInputSubject" placeholder="Enter your Subject" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><strong>Message</strong></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn p-3 btn-primary"  style={{backgroundColor: 'rgb(19, 7, 84)'}}>Submit</button>
          </form>
        </div>
      </div>
      </div>



  );
}
