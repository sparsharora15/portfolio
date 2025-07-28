import React, { useState } from 'react';

/**
 * Modern Contact component with enhanced UI/UX, interactive form,
 * and improved visual hierarchy. Features form validation, social links,
 * and better responsive design.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "sparsharora@gmail.com",
      icon: "fas fa-envelope"
    },
    {
      label: "Location",
      value: "Saharanpur, India",
      icon: "fas fa-map-marker-alt"
    },
    {
      label: "Phone",
      value: "+91 8433014744",
      icon: "fas fa-phone"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sparsharora",
      icon: "fab fa-linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/sparsharora",
      icon: "fab fa-github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sparsharora",
      icon: "fab fa-twitter"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-envelope"></i> Get In Touch</h2>
          <p>
            <i className="fas fa-handshake"></i> Ready to start a project or have a question? I'd love to hear from you. Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-header">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-title">
                  <h3>Get In Touch</h3>
                  <p>Let's discuss your next project and bring your ideas to life</p>
                </div>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-details">
                    <h4>Email</h4>
                    <a href="mailto:arorasparsh28@gmail.com">arorasparsh28@gmail.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-details">
                    <h4>Phone</h4>
                    <a href="tel:+918433014744">+91 8433014744</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-details">
                    <h4>Location</h4>
                    <span>Saharanpur, India</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Connect With Me</h4>
                <div className="social-grid">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-card">
              <h3>Send Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Summary */}
        <div className="contact-summary">
          <div className="summary-content">
            <div className="summary-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Quick Response</h3>
            <p>I typically respond within 24 hours during business days.</p>
          </div>
          <div className="response-time">
            <div className="time-item">
              <div className="time-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="time-content">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9 AM - 6 PM IST</p>
              </div>
            </div>
            <div className="time-item">
              <div className="time-icon">
                <i className="fas fa-reply"></i>
              </div>
              <div className="time-content">
                <h4>Response Time</h4>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--space-3xl);
          margin-bottom: var(--space-3xl);
        }

        .contact-info-card,
        .contact-form-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: var(--space-2xl);
          animation: fadeInUp 0.6s ease-out both;
        }

        .contact-info-card h3,
        .contact-form-card h3 {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin: 0 0 var(--space-xl) 0;
          color: var(--text-primary);
          font-size: 1.3rem;
        }

        .contact-info-card h3 i,
        .contact-form-card h3 i {
          color: var(--primary);
        }

        .contact-details {
          margin-bottom: var(--space-xl);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          padding: var(--space-lg);
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-md);
          transition: var(--transition-normal);
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          flex-shrink: 0;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }

        .contact-card,
        .form-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .contact-card::before,
        .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .contact-card:hover,
        .form-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .contact-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          flex-shrink: 0;
        }

        .contact-title h3 {
          color: var(--text-primary);
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .contact-title p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 1rem;
        }

        .contact-methods {
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(4px);
        }

        .method-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: white;
          flex-shrink: 0;
        }

        .method-details {
          flex: 1;
        }

        .method-details h4 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }

        .method-details a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .method-details a:hover {
          color: var(--primary);
        }

        .social-links {
          margin-top: 2rem;
        }

        .social-links h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-links h4 i {
          color: var(--primary);
        }

        .social-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-normal);
          font-weight: 500;
        }

        .social-link:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }

        .form-group {
          margin-bottom: var(--space-lg);
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-sm);
          color: var(--text-primary);
          font-weight: 600;
        }

        .form-group label i {
          color: var(--primary);
        }

        .form-control {
          width: 100%;
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          transition: var(--transition-normal);
        }

        .form-control:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .form-control::placeholder {
          color: var(--text-muted);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          width: 100%;
          padding: var(--space-lg);
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-normal);
          margin-top: var(--space-lg);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-top: var(--space-lg);
          padding: var(--space-md);
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: var(--radius-md);
          color: #22c55e;
          font-weight: 500;
        }

        .contact-summary {
          display: grid;
          margin-top: 30px;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-3xl);
          align-items: center;
          padding: var(--space-2xl);
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeInUp 0.6s ease-out both;
        }

        .summary-content {
          text-align: center;
        }

        .summary-icon {
          width: 80px;
          height: 80px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-lg) auto;
          font-size: 2rem;
          color: white;
        }

        .summary-content h3 {
          margin: 0 0 var(--space-md) 0;
          color: var(--text-primary);
        }

        .summary-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .response-time {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
        }

        .time-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }

        .time-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .time-icon {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
        }

        .time-content h4 {
          margin: 0 0 var(--space-xs) 0;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .time-content p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Responsive Design Fixes */
        @media (max-width: 1030px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .contact-title h3 {
            font-size: 1.5rem;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }

          .social-grid {
            justify-content: center;
          }

          .social-link {
            flex: 1;
            max-width: 150px;
            justify-content: center;
          }

          .contact-summary {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
            text-align: center;
          }

          .response-time {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }

          .time-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }
        }

        @media (max-width: 768px) {
          .contact-card,
          .form-card {
            padding: 1.5rem;
          }

          .contact-title h3 {
            font-size: 1.3rem;
          }

          .contact-title p {
            font-size: 0.9rem;
          }

          .method-details h4 {
            font-size: 0.9rem;
          }

          .method-details a {
            font-size: 0.85rem;
          }

          .social-links h4 {
            font-size: 1rem;
          }

          .social-link {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .form-group label {
            font-size: 0.9rem;
          }

          .form-control {
            padding: 0.75rem;
            font-size: 0.9rem;
          }

          .submit-btn {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .contact-summary {
            padding: var(--space-lg);
          }

          .summary-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .summary-content h3 {
            font-size: 1.2rem;
          }

          .summary-content p {
            font-size: 0.9rem;
          }

          .time-content h4 {
            font-size: 0.9rem;
          }

          .time-content p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .contact-card,
          .form-card {
            padding: 1rem;
          }

          .contact-header {
            gap: 0.75rem;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .contact-title h3 {
            font-size: 1.2rem;
          }

          .contact-title p {
            font-size: 0.85rem;
          }

          .contact-method {
            padding: 0.75rem;
          }

          .method-icon {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }

          .method-details h4 {
            font-size: 0.85rem;
          }

          .method-details a {
            font-size: 0.8rem;
          }

          .social-grid {
            flex-direction: column;
            align-items: center;
          }

          .social-link {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }

          .form-group {
            margin-bottom: var(--space-md);
          }

          .form-group label {
            font-size: 0.85rem;
          }

          .form-control {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
          }

          .submit-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
          }

          .contact-summary {
            padding: var(--space-md);
          }

          .summary-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .summary-content h3 {
            font-size: 1.1rem;
          }

          .summary-content p {
            font-size: 0.8rem;
          }

          .time-item {
            padding: var(--space-md);
          }

          .time-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .time-content h4 {
            font-size: 0.85rem;
          }

          .time-content p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}