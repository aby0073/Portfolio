import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
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
    <section id="contact" className="contact-section">
      <div className="contact-bg-glow"></div>
      
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's build something amazing together</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Info Side */}
          <div className="contact-info" data-aos="fade-right">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-desc">Fill out the form and I'll get back to you within 24 hours.</p>
              
              <div className="info-links">
                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-text">
                    <span>Email</span>
                    <a href="mailto:royabin963@gmail.com">royabin963@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><FaLinkedin /></div>
                  <div className="info-text">
                    <span>LinkedIn</span>
                    <a href="https://linkedin.com/in/abin-roy-s" target="_blank" rel="noreferrer">Abin Roy S</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaGithub /></div>
                  <div className="info-text">
                    <span>GitHub</span>
                    <a href="https://github.com/aby0073" target="_blank" rel="noreferrer">aby0073</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-text">
                    <span>Location</span>
                    <p>Kerala, India</p>
                  </div>
                </div>
              </div>

              <div className="social-circles">
                <a href="https://github.com/aby0073" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/abin-roy-s" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="mailto:royabin963@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-container" data-aos="fade-left">
            <form className="professional-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-premium">
                <span>Send Message</span>
                <FaPaperPlane className="plane-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
