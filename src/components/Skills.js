import React, { useState } from 'react';

/**
 * Modern Skills component with enhanced UI/UX, interactive skill filtering,
 * and improved visual hierarchy. Features progress indicators, category
 * filtering, and better responsive design.
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "fas fa-desktop",
      skills: [
        { name: "ReactJS", level: 90, icon: "fab fa-react" },
        { name: "VueJS", level: 85, icon: "fab fa-vuejs" },
        { name: "HTML5", level: 95, icon: "fab fa-html5" },
        { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: 92, icon: "fab fa-js" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "NodeJS", level: 88, icon: "fab fa-node-js" },
        { name: "ExpressJS", level: 85, icon: "fas fa-code" },
        { name: "NestJS", level: 80, icon: "fas fa-layer-group" },
        { name: "Flask", level: 75, icon: "fab fa-python" }
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", level: 85, icon: "fas fa-leaf" },
        { name: "PostgreSQL", level: 88, icon: "fas fa-database" },
        { name: "MySQL", level: 80, icon: "fas fa-database" },
        { name: "Redis", level: 85, icon: "fas fa-memory" },
        { name: "AWS", level: 82, icon: "fab fa-aws" }
      ]
    }
  };

  const allSkills = Object.values(skillCategories).flatMap(category => category.skills);
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : skillCategories[activeCategory]?.skills || [];

  const getCategoryName = (skillName) => {
    for (const category in skillCategories) {
      if (skillCategories[category].skills.some(skill => skill.name === skillName)) {
        return skillCategories[category].title;
      }
    }
    return 'Uncategorized';
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-cogs"></i> Technical Skills</h2>
          <p>
            <i className="fas fa-chart-line"></i> A comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="skill-categories">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <i className="fas fa-th-large"></i> All Skills
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button 
              key={key}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <i className={category.icon}></i> {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <div className="skill-meta">
                    <span className="skill-level">{skill.level}%</span>
                    <span className="skill-category">{getCategoryName(skill.name)}</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-progress">
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="progress-labels">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-header">
            <h3>Skill Categories</h3>
            <p>Comprehensive expertise across multiple technology domains</p>
          </div>
          
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>Frontend Development</h4>
              <p>Modern web applications with React, Vue.js, and responsive design principles</p>
              <div className="summary-stats">
                <span>5 Technologies</span>
                <span>90% Avg Proficiency</span>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-server"></i>
              </div>
              <h4>Backend Development</h4>
              <p>Scalable server-side solutions with Node.js, Express, and microservices architecture</p>
              <div className="summary-stats">
                <span>4 Technologies</span>
                <span>85% Avg Proficiency</span>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">
                <i className="fas fa-database"></i>
              </div>
              <h4>Database & Cloud</h4>
              <p>Data management and cloud infrastructure with AWS, MongoDB, and PostgreSQL</p>
              <div className="summary-stats">
                <span>3 Technologies</span>
                <span>88% Avg Proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-categories {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 25px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover,
        .category-btn.active {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .skill-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out both;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
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
          position: relative;
          overflow: hidden;
        }

        .skill-icon::before {
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

        .skill-info {
          flex: 1;
        }

        .skill-info h4 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .skill-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .skill-level {
          color: var(--primary);
          font-size: 1rem;
          font-weight: 700;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          border: 1px solid rgba(79, 70, 229, 0.2);
        }

        .skill-category {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .skill-progress {
          margin-top: 1rem;
        }

        .progress-container {
          width: 100%;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          border-radius: 5px;
          transition: width 1.5s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: progressShimmer 2s infinite;
        }

        @keyframes progressShimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .skills-summary {
          margin-top: 4rem;
        }

        .summary-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .summary-header h3 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .summary-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin: 0;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .summary-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .summary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .summary-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .summary-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          margin: 0 auto 1.5rem auto;
          position: relative;
          overflow: hidden;
        }

        .summary-icon::before {
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

        .summary-card h4 {
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .summary-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          font-size: 0.95rem;
        }

        .summary-stats {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .summary-stats span {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .skill-card {
            padding: 1rem;
          }

          .skill-categories {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .summary-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .summary-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .skill-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .skill-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .skill-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .summary-stats {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}