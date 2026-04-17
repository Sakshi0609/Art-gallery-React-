import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(formData);

    // reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">

      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row">

        {/* Contact Info */}
        <div className="col-md-5 mb-4">
          <h4>Get in Touch</h4>
          <p>Email: artgallery@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Pune, India</p>
        </div>

        {/* Form */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="contact-form p-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control mb-3"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="form-control mb-3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="btn btn-dark w-100">
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;