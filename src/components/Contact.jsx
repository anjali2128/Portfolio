import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(email)) newErrors.email = "Email is not valid.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    // Mailto link
    const mail = "anjmis2023@gmail.com";
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section id="contact" className="contact-section">
      
      
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        theme="dark"
        style={{ zIndex: 9999 }}
      />
      
      <h2 className="contact-heading">CONTACT_</h2>
      
      <div className="contact-form-container">
        <div className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className={errors.name ? "error-input" : ""}
              aria-label="Your Name"
              aria-invalid={!!errors.name}
              disabled={isSubmitting}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className={errors.email ? "error-input" : ""}
              aria-label="Your Email"
              aria-invalid={!!errors.email}
              disabled={isSubmitting}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error-input" : ""}
              aria-label="Your Message"
              aria-invalid={!!errors.message}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className="error-text">{errors.message}</span>
            )}
          </div>

          <button 
            onClick={handleSubmit}
            className="neon-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;