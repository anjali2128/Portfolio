import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    const whatsappMessage = `Hello! I'm ${name} (${email}).%0A%0A${message}`;

    const whatsappNumber = "917420891767"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
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
