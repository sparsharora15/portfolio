import React from 'react';

/**
 * Modern Footer component with enhanced UI/UX, comprehensive links,
 * and improved visual hierarchy. Features social media integration,
 * quick links, and better responsive design.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sparsh-arora-8880b8241/",
      icon: "fab fa-linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/sparsharora15",
      icon: "fab fa-github"
    },
    {
      name: "Twitter",
      url: "#",
      icon: "fab fa-twitter"
    },
    {
      name: "Email",
      url: "mailto:arorasparsh28@gmail.com",
      icon: "fas fa-envelope"
    }
  ];

  const quickLinks = [
    { name: "Home", url: "#home", icon: "fas fa-home" },
    { name: "Projects", url: "#projects", icon: "fas fa-briefcase" },
    { name: "About", url: "#about", icon: "fas fa-user" },
    { name: "Skills", url: "#skills", icon: "fas fa-cogs" },
    { name: "Experience", url: "#experience", icon: "fas fa-briefcase" },
    { name: "Contact", url: "#contact", icon: "fas fa-envelope" }
  ];

  const services = [
    { name: "Full-Stack Development", icon: "fas fa-code" },
    { name: "SaaS Platform Architecture", icon: "fas fa-cloud" },
    { name: "IoT Solutions", icon: "fas fa-microchip" },
    { name: "Database Design", icon: "fas fa-database" },
    { name: "Cloud Infrastructure", icon: "fab fa-aws" },
    { name: "API Development", icon: "fas fa-cogs" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-info">
              <h3>
                <i className="fas fa-code"></i> Sparsh Arora
              </h3>
              <p className="tagline">
                <i className="fas fa-rocket"></i> Full-Stack Developer
              </p>
              <p className="description">
                <i className="fas fa-lightbulb"></i> Transforming ideas into exceptional digital experiences with modern technologies and innovative solutions.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4><i className="fas fa-link"></i> Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <i className={link.icon}></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4><i className="fas fa-cogs"></i> Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>
                    <i className={service.icon}></i> {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h4><i className="fas fa-address-card"></i> Contact Info</h4>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>arorasparsh28@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Saharanpur, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 8433014744</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4><i className="fas fa-share-alt"></i> Connect With Me</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              <i className="fas fa-copyright"></i> {currentYear} Sparsh Arora. All rights reserved.
            </p>
          </div>
          <div className="made-with">
            <p>
              <i className="fas fa-heart"></i> Made with passion and modern technologies
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: var(--space-3xl) 0 var(--space-xl) 0;
          margin-top: var(--space-3xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: var(--space-3xl);
          margin-bottom: var(--space-3xl);
        }

        .footer-brand h3 {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin: 0 0 var(--space-md) 0;
          color: var(--text-primary);
          font-size: 1.5rem;
        }

        .footer-brand h3 i {
          color: var(--primary);
        }

        .tagline {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin: 0 0 var(--space-md) 0;
          // color: var(--primary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .tagline i {
          color: var(--primary);
        }

        .description {
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .description i {
          color: var(--primary);
          margin-top: 4px;
          flex-shrink: 0;
        }

        .footer-section h4,
        .footer-contact h4 {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin: 0 0 var(--space-lg) 0;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .footer-section h4 i,
        .footer-contact h4 i {
          color: var(--primary);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: var(--space-sm);
        }

        .footer-links a,
        .footer-links span {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-normal);
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          color: var(--primary);
          transform: translateX(5px);
        }

        .footer-links i {
          color: var(--primary);
          font-size: 0.8rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .contact-item i {
          color: var(--primary);
          font-size: 0.9rem;
        }

        .footer-social {
          text-align: center;
          margin-bottom: var(--space-2xl);
          padding: var(--space-2xl) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-social h4 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
          margin: 0 0 var(--space-lg) 0;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .footer-social h4 i {
          color: var(--primary);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: var(--space-lg);
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-lg);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
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

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .copyright p,
        .made-with p {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .copyright i {
          color: var(--text-muted);
        }

        .made-with i {
          color: #ef4444;
          animation: pulse 2s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .social-links {
            gap: var(--space-md);
          }

          .social-link {
            padding: var(--space-xs) var(--space-md);
            font-size: 0.9rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: var(--space-2xl) 0 var(--space-lg) 0;
          }

          .footer-content {
            gap: var(--space-lg);
          }

          .social-links {
            flex-direction: column;
            align-items: center;
          }

          .social-link {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }

          .copyright p,
          .made-with p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}