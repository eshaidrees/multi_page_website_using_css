import React from "react";
import "../../styles/contact.css"

export default function Contact(){
  return (
    <div className="contact-content">
        <title className="title">Contact</title>
        <h1>Contact Me</h1>
        <p>Feel free to reach out using the contact details below</p>
      
      <section id="contact">
        <p>
          <b>Email:</b> <a href="mailto:eshaidrees190@gmail.com">eshaidrees190@gmail.com</a>
        </p>
        <p>
          <b>LinkedIn:</b>
          <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </section>
    </div>
  );
};
