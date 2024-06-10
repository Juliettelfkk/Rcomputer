// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function ContactPage() {
  const url = "http://127.0.0.1:8000/api/message";

  const [data, setData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  function submit(e) {
    e.preventDefault();
    async function sendMessage() {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
        
      });

      const result = await res.json();
      console.log(result);
      
      setData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    sendMessage();
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div className="ContactPage bg-light">
      <header id="contact" className="vh-100" style={{ paddingTop: "104px" }}>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center my-5">
            <h5 className="text-uppercase text-white mb-3">
              FOR YOU AND EVERYONE
            </h5>
            <h1
              className="text-uppercase py-2 text-primary mb-4"
              style={{ fontSize: "54p" }}
            >
              Contact us!
            </h1>
            <a
              href="tel:+1234567890"
              className="btn btn-primary py-2  px-4 mt-3 mx-2 text-uppercase"
            >
              <i className="fas fa-phone ml-2"></i>
              CALL NOW
            </a>
            <a
              href="mailto:example@example.com"
              className="btn btn-primary py-2 px-4 mt-3 text-uppercase ms-2"
            >
              <i className="fas fa-envelope ml-2"></i>
              EMAIL US
            </a>
          </div>
        </div>
      </header>
      <div className="container min-vh-100 " style={{ paddingTop: "50px" }}>
        <div className="row">
          <form className=" shadow p-5" onSubmit={(e) => submit(e)}>
            <h1 className="d-flex  justify-content-center">Ask a question</h1>

            <div className="form-group">
              <label htmlFor="fullName">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                aria-describedby="nameHelp"
                placeholder="Enter your name"
                onChange={(e) => handle(e)}
                value={data.fullName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <strong>Email</strong>{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => handle(e)}
                value={data.email}
              />
              <small id="emailHelp" className="form-text text-muted">
                we will never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <strong>Subject</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter your Subject"
                onChange={(e) => handle(e)}
                value={data.subject}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <strong>Message</strong>
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                onChange={(e) => handle(e)}
                value={data.message}
              />
            </div>

            <button
              type="submit"
              className="btn p-3 btn-primary"
              style={{ backgroundColor: "rgb(19, 7, 84)" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
