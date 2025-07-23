import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=royabin963@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailURL, '_blank');
  };

  return (
    <section id="contact" className="contact"data-aos="zoom-in">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <p className="contact-text">
          Interested in collaborating? Reach out to discuss your next project.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="form-button">Send Message via Gmail</button>
        </form>

        {/* <p className="contact-email">
          Or email me at{' '}
          <a href="mailto:royabin963@gmail.com" className="email-link">
            royabin963@gmail.com
          </a>
        </p> */}
      </div>
    </section>
  );
};

export default Contact;
