import React from 'react';

/**
 * Modern About component with enhanced UI/UX, interactive elements,
 * and improved visual hierarchy. Features statistics, highlights,
 * and better responsive design.
 */
export default function About() {
  const stats = [
    {
      number: "3+",
      label: "Years of Experience",
      icon: "fas fa-clock"
    },
    {
      number: "4",
      label: "Major Projects",
      icon: "fas fa-project-diagram"
    },
    {
      number: "2",
      label: "Professional Certifications",
      icon: "fas fa-certificate"
    }
  ];

  const highlights = [
    "Full-stack development with modern technologies",
    "SaaS platform architecture and deployment",
    "IoT integration and real-time systems",
    "Cloud infrastructure and DevOps practices"
  ];

  return (
    <section id="about" className="about-section1">
      <div className="container">
        <div className="about-content">
          <div className="about-card">
            <div className="about-header">
              <div className="about-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="about-title">
                <h2>About Me</h2>
                <p>Passionate Full-Stack Developer creating innovative solutions</p>
              </div>
            </div>

            <div className="about-description">
              <div className="highlighted-text">
                <span className="icon">💡</span>
                I'm a passionate Full-Stack Developer with expertise in creating innovative solutions that make a real impact on users and businesses.
              </div>
              <p>
                <span className="icon">🚀</span>
                My journey lies in creating innovative solutions that make a real impact on users and businesses. I specialize in building scalable applications using modern technologies and best practices.
              </p>
            </div>

            <div className="highlights-section">
              <h4>Achievements</h4>
              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <i className="fas fa-check"></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-section">
              <h4>Experience Overview</h4>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">
                      <i className={stat.icon}></i>
                    </div>
                    <div className="stat-details">
                      <h3>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn primary">
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
              <a href="#projects" className="btn secondary">
                <i className="fas fa-briefcase"></i> View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .about-content {
          max-width: 900px;
          margin: 50px auto;
        }
        .about-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .about-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .about-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .about-icon {
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

        .about-title h2 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .about-title p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 1rem;
        }

        .about-description {
          margin-bottom: 2rem;
        }

        .highlighted-text {
          background: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--primary);
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .about-description p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 1rem;
        }

        .highlights-section,
        .stats-section {
          margin-bottom: 2rem;
        }

        .highlights-section h4,
        .stats-section h4 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .highlights-section h4::before {
          content: '🏆';
          font-size: 1.3rem;
        }

        .stats-section h4::before {
          content: '📊';
          font-size: 1.3rem;
        }

        .highlights-grid {
          display: grid;
          gap: 0.75rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .highlight-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(4px);
        }

        .highlight-item i {
          color: var(--primary);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .highlight-item span {
          color: var(--text-secondary);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          flex-shrink: 0;
        }

        .stat-details h3 {
          color: var(--primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }

        .stat-details p {
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
        }

        .btn.secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .about-card {
            padding: 1.5rem;
          }

          .about-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-item {
            padding: 1rem;
          }

          .about-actions {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .about-card {
            padding: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .about-actions {
            flex-direction: column;
          }

          .btn {
            justify-content: center;
          }
        }
        .icon {
          font-size: 1.2rem;
          color: var(--accent);
          margin-right: 0.5rem;
        }
        .stat-icon .icon {
          font-size: 1.5rem;
          color: white;
        }
        .highlight-card .icon {
          color: var(--primary);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}