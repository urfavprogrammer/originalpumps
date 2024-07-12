// src/ContactUs.js
import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us using the form below.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact-button">Submit</button>
        </form>
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p>Email: info@originalpumps.com  </p>
          <p>Phone: +34-902 455890</p>
          <p>Fax. +34-902 455891</p>
          <p>Address: Paseo De La Castellellana 51
            P.º del Prado, 39. | Centro, 28014 Madrid, Spain</p>
        </div>
      </div>
    </section>
  );
};

