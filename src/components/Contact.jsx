import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    const mail = "anjmis2023@gmail.com";
    const subject = `Contact from ${name}`;

    // Use actual line breaks in body
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Encode entire body and subject
    const mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">CONTACT_</h2>
      <div className="contact-form-container" data-aos="fade-up">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" required placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" name="email" required placeholder="Your Email" />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" required placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="neon-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
