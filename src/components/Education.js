import React from 'react';

/**
 * Modern Education component with enhanced UI/UX, card-based layout,
 * and improved visual hierarchy. Features status badges, achievements,
 * and better responsive design.
 */
export default function Education() {
  const educationItems = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "Guru Gobind Singh Indraprastha University",
      date: "2021 - 2024",
      type: "Degree",
      status: "completed",
      description: "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.",
      achievements: [
        "Specialized in software development and web technologies",
        "Completed projects in full-stack development",
        "Participated in coding competitions and hackathons",
        "Maintained strong academic performance"
      ],
      icon: "fas fa-graduation-cap"
    },
    {
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      date: "2023",
      type: "Certification",
      status: "completed",
      description: "Professional certification demonstrating expertise in AWS cloud services and development practices.",
      achievements: [
        "Mastered AWS core services and best practices",
        "Developed scalable cloud applications",
        "Implemented CI/CD pipelines and DevOps practices",
        "Achieved high score in certification exam"
      ],
      icon: "fab fa-aws"
    },
    {
      title: "MongoDB Database Administrator",
      institution: "MongoDB University",
      date: "2022",
      type: "Certification",
      status: "completed",
      description: "Specialized certification in MongoDB database administration and NoSQL database management.",
      achievements: [
        "Expertise in MongoDB deployment and management",
        "Optimized database performance and queries",
        "Implemented security and backup strategies",
        "Designed scalable database architectures"
      ],
      icon: "fas fa-database"
    }
  ];

  const learningStats = [
    { label: "YEARS OF STUDY", value: "4+", icon: "fas fa-calendar-alt" },
    { label: "CERTIFICATIONS", value: "2", icon: "fas fa-certificate" },
    { label: "PROJECTS COMPLETED", value: "10+", icon: "fas fa-project-diagram" },
    { label: "TECHNOLOGIES LEARNED", value: "15+", icon: "fas fa-code" }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-graduation-cap"></i> Education & Certifications</h2>
          <p>
            <i className="fas fa-book-open"></i> My academic journey and professional certifications that have shaped my expertise in software development and cloud technologies.
          </p>
        </div>

        <div className="education-grid">
          {educationItems.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="education-info">
                  <h3>{item.title}</h3>
                  <div className="education-meta">
                    <span className="institution">
                      <i className="fas fa-building"></i>
                      {item.institution}
                    </span>
                    <span className="duration">
                      <i className="fas fa-calendar"></i>
                      {item.date}
                    </span>
                    {item.status && (
                      <span className={`status-badge ${item.status}`}>
                        <i className={`fas fa-${item.status === 'ongoing' ? 'clock' : 'check-circle'}`}></i>
                        {item.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="education-description">
                <p>{item.description}</p>
              </div>

              <div className="education-achievements">
                <h5>Achievements</h5>
                <div className="achievements-grid">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="achievement-item">
                      <i className="fas fa-check"></i>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="education-footer">
                <span className="education-type">
                  <i className="fas fa-gem"></i>
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey Summary */}
        <div className="learning-journey">
          <div className="journey-header">
            <div className="journey-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="journey-text">
              <h3>Learning Journey</h3>
              <p>Continuous learning and skill development through formal education and professional certifications.</p>
            </div>
          </div>
          
          <div className="journey-stats">
            {learningStats.map((stat, index) => (
              <div key={index} className="journey-stat-card">
                <div className="stat-icon-wrapper">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .education-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .education-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .education-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .education-icon {
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

        .education-info {
          flex: 1;
        }

        .education-info h3 {
          color: var(--text-primary);
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .education-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .institution,
        .duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .institution i,
        .duration i {
          color: var(--primary);
          font-size: 0.8rem;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.ongoing {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: white;
        }

        .status-badge.completed {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
        }

        .education-description {
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border-left: 3px solid var(--primary);
        }

        .education-description p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        .education-achievements {
          margin-bottom: 1.5rem;
        }

        .education-achievements h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .education-achievements h5::before {
          content: '🏆';
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

        .education-footer {
          display: flex;
          justify-content: center;
        }

        .education-type {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .education-type i {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .education-card {
            padding: 1.5rem;
          }

          .education-meta {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .education-card {
            padding: 1rem;
          }

          .education-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .education-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        .learning-journey {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          margin-top: 3rem;
        }

        .learning-journey::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .journey-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          text-align: left;
        }

        .journey-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .journey-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .journey-text h3 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .journey-text p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 1.1rem;
          max-width: 600px;
        }

        .journey-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .journey-stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .journey-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .journey-stat-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(79, 70, 229, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .journey-stat-card:hover::before {
          opacity: 1;
        }

        .stat-icon-wrapper {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: white;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .stat-icon-wrapper::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        .stat-content {
          flex: 1;
        }

        .stat-content h4 {
          color: var(--primary);
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 0 0.25rem 0;
          letter-spacing: -0.5px;
        }

        .stat-content p {
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .learning-journey {
            padding: 2rem;
          }

          .journey-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .journey-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .journey-text h3 {
            font-size: 1.6rem;
          }

          .journey-text p {
            font-size: 1rem;
          }

          .journey-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .journey-stat-card {
            padding: 1rem;
          }

          .stat-icon-wrapper {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }

          .stat-content h4 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .learning-journey {
            padding: 1.5rem;
          }

          .journey-stats {
            grid-template-columns: 1fr;
          }

          .journey-stat-card {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }

          .stat-content h4 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}