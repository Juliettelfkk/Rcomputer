import React from 'react'
import "../styles/Contact.css";

export default function ContactPage() {
  return (
    <div className="rightSide mt-5 ">
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

  );
}
