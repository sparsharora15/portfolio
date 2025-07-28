import React from 'react';

/**
 * Modern Experience component with enhanced UI/UX, timeline layout,
 * and improved visual hierarchy. Features interactive elements,
 * technology tags, and better responsive design.
 */
export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "LucidGrowth LLC",
      location: "Remote",
      duration: "2023 - Present",
      project: "InboxDoctor.ai - Email Deliverability Platform",
      description: "Leading development of a human-powered email deliverability platform that improves inbox placement and monitors sender reputation.",
      achievements: [
        "Built scalable email automation systems with deliverability monitoring",
        "Implemented AI-driven warm-ups and analytics for email performance",
        "Developed real-time monitoring dashboards for sender reputation",
        "Optimized email delivery rates and improved client ROI"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "SMTP/IMAP"],
      type: "Full-time",
      current: true
    },
    {
      title: "Full Stack Developer",
      company: "LucidGrowth LLC",
      location: "Remote",
      duration: "2022 - 2023",
      project: "ZenInbox - SaaS Email Productivity Platform",
      description: "Developed a comprehensive SaaS platform for email productivity with workflow automation and real-time notifications.",
      achievements: [
        "Architected and deployed scalable cloud infrastructure",
        "Implemented real-time notification systems using WebSockets",
        "Built secure authentication and user management systems",
        "Created responsive dashboards for email workflow management"
      ],
      technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL", "WebSockets"],
      type: "Full-time",
      current: false
    },
    {
      title: "IoT Developer",
      company: "E Software Solution",
      location: "Remote",
      duration: "2021 - 2022",
      project: "Smart Energy Monitoring System",
      description: "Developed an IoT-based solution for monitoring energy consumption with backend APIs and smart device integration.",
      achievements: [
        "Integrated IoT sensors with backend APIs for real-time data collection",
        "Built intuitive dashboards for energy consumption visualization",
        "Implemented smart device communication protocols",
        "Developed predictive analytics for energy optimization"
      ],
      technologies: ["Next.js", "Express.js", "WebSockets", "MongoDB", "IoT"],
      type: "Full-time",
      current: false
    },
    {
      title: "Full Stack Developer",
      company: "Blockcod Technologies",
      location: "Remote",
      duration: "2021 - 2022",
      project: "Cricket Addictor - Sports Analytics Platform",
      description: "Enhanced UI/UX and integrated APIs for a sports analytics platform, providing seamless administration and real-time cricket insights.",
      achievements: [
        "Developed comprehensive sports analytics dashboard with real-time data",
        "Integrated multiple cricket APIs for live match statistics and insights",
        "Built responsive admin panel for content management and user administration",
        "Implemented advanced filtering and search functionality for cricket data",
        "Optimized performance for handling large datasets and real-time updates"
      ],
      technologies: ["Next.js", "Express.js", "MySQL", "API Integration", "TailwindCSS"],
      type: "Full-time",
      current: false
    }
  ];

  const summaryStats = [
    { label: "Years Experience", value: "3+", icon: "fas fa-clock" },
    { label: "Projects Completed", value: "4", icon: "fas fa-project-diagram" },
    { label: "Technologies Used", value: "20+", icon: "fas fa-code" },
    { label: "Client Satisfaction", value: "100%", icon: "fas fa-heart" }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-briefcase"></i> Professional Experience</h2>
          <p>
            <i className="fas fa-timeline"></i> My journey through various roles and projects, showcasing my growth as a developer and my ability to deliver impactful solutions.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <div className="card-header">
                <div className="role-info">
                  <div className="role-title">
                    <h3>{experience.title}</h3>
                    {experience.current && (
                      <span className="current-indicator">
                        <i className="fas fa-star"></i>
                        Current
                      </span>
                    )}
                  </div>
                  <div className="company-details">
                    <span className="company">
                      <i className="fas fa-building"></i>
                      {experience.company}
                    </span>
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {experience.location}
                    </span>
                    <span className="duration">
                      <i className="fas fa-calendar"></i>
                      {experience.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-section">
                <h4 className="project-title">{experience.project}</h4>
                <p className="project-description">{experience.description}</p>
              </div>

              <div className="achievements-section">
                <h5>Achievements</h5>
                <div className="achievements-grid">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="achievement-item">
                      <i className="fas fa-check"></i>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="technologies-section">
                <h5>Technologies</h5>
                <div className="tech-stack">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="experience-summary">
          <div className="summary-content">
            <div className="summary-header">
              <div className="summary-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="summary-text">
                <h3>Experience Overview</h3>
                <p>Track record of delivering high-quality solutions across diverse domains and technologies.</p>
              </div>
            </div>
          </div>
          
          <div className="stats-grid">
            {summaryStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-details">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-timeline {
          display: grid;
          gap: var(--space-2xl);
          margin-bottom: var(--space-3xl);
        }

        .experience-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .role-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .role-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .role-title h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .current-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .company-details {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .company,
        .location,
        .duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .company i,
        .location i,
        .duration i {
          color: var(--primary);
          font-size: 0.8rem;
        }

        .project-section {
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border-left: 3px solid var(--primary);
        }

        .project-title {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        .achievements-section,
        .technologies-section {
          margin-bottom: 1.5rem;
        }

        .achievements-section h5,
        .technologies-section h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .achievements-section h5::before {
          content: '🏆';
          font-size: 1.1rem;
        }

        .technologies-section h5::before {
          content: '⚡';
          font-size: 1.1rem;
        }

        .achievements-grid {
          display: grid;
          gap: 0.75rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .achievement-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(4px);
        }

        .achievement-item i {
          color: var(--primary);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .achievement-item span {
          color: var(--text-secondary);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(79, 70, 229, 0.2);
          transition: all 0.2s ease;
        }

        .tech-pill:hover {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%);
          color: var(--primary);
          transform: translateY(-1px);
        }

        .experience-summary {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .experience-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .summary-content {
          margin-bottom: 2rem;
        }

        .summary-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .summary-icon {
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

        .summary-text h3 {
          color: var(--text-primary);
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .summary-text p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 1rem;
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

        .stat-details h4 {
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

        @media (max-width: 768px) {
          .experience-card {
            padding: 1.5rem;
          }

          .role-info {
            flex-direction: column;
            align-items: flex-start;
          }

          .company-details {
            gap: 1rem;
          }

          .summary-header {
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
        }

        @media (max-width: 480px) {
          .experience-card {
            padding: 1rem;
          }

          .company-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .tech-stack {
            gap: 0.25rem;
          }

          .tech-pill {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}