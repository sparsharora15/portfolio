import React, { useState } from "react";

/**
 * Modern Projects component with enhanced UI/UX, interactive project cards,
 * and improved visual hierarchy. Features hover effects, animations, and
 * better responsive design.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "InboxDoctor.ai",
      description:
        "A human‑powered email deliverability platform that improves inbox placement, monitors sender reputation and optimizes email performance with AI‑driven warm‑ups and analytics.",
      image: "/assets/inboxdoctor.png",
      technologies: ["React", "Node.js", "Nest.js", "GO", "MongoDB", "AWS", "Stripe", "Redis", "TailwindCSS" , "Tanstack Query"],
      category: "saas",
      link: "https://inboxdoctor.ai",
      status: "live",
    },
    {
      id: 2,
      title: "ZenInbox",
      description:
        "A SaaS email productivity platform enabling workflow automation, real‑time notifications and secure cloud infrastructure.",
      image: "/assets/zeninbox.png",
      technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL", "WebSockets", "Stripe", "Redis", "TailwindCSS", "Tanstack Query"],
      category: "saas",
      link: "https://zeninbox.ai",
      status: "live",
    },
    {
      id: 3,
      title: "Energy Management System",
      description:
        "An IoT‑based solution for monitoring energy consumption, integrating backend APIs with smart devices and delivering intuitive dashboards.",
      image: "/assets/energy.png",
      technologies: ["Next.js", "Express.js", "WebSockets", "MongoDB", "TailwindCSS"],
      category: "iot",
      link: "#",
      status: "completed",
    },
    {
      id: 4,
      title: "Cricket Addictor",
      description:
        "Enhanced UI/UX and integrated APIs for a sports analytics platform, providing seamless administration and real‑time cricket insights.",
      image: "/assets/cricket.png",
      technologies: ["Next.js", "Express.js", "MySQL", "API Integration", "TailwindCSS" ],
      category: "sports",
      link: "https://cricketaddictor.com",
      status: "completed",
    },
   
  ];

  const services = [
    {
      title: "Email Deliverability Solutions",
      description:
        "Advanced email automation systems with deliverability monitoring and reputation management.",
      icon: "💌",
      color: "#3B82F6",
    },
    {
      title: "E‑commerce Platform Architecture",
      description:
        "Scalable real‑time shopping applications with product management and user authentication.",
      icon: "🛒",
      color: "#10B981",
    },
    {
      title: "Data‑Driven Analytics",
      description:
        "Custom dashboards and real‑time analytics pipelines to visualise critical metrics and gain actionable insights.",
      icon: "📊",
      color: "#8B5CF6",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>
            Explore my latest work showcasing innovative solutions and modern
            technologies. Each project demonstrates my expertise in full-stack
            development and problem-solving.
          </p>
        </div>

        {/* Project Filter */}
        <div className="project-filters">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            <i className="fas fa-th-large"></i> All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === "saas" ? "active" : ""}`}
            onClick={() => setActiveFilter("saas")}
          >
            <i className="fas fa-cloud"></i> SaaS Platforms
          </button>
          <button
            className={`filter-btn ${activeFilter === "iot" ? "active" : ""}`}
            onClick={() => setActiveFilter("iot")}
          >
            <i className="fas fa-microchip"></i> IoT Solutions
          </button>
          <button
            className={`filter-btn ${activeFilter === "sports" ? "active" : ""}`}
            onClick={() => setActiveFilter("sports")}
          >
            <i className="fas fa-trophy"></i> Sports Analytics
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-status">
                    <span className={`status-badge ${project.status}`}>
                      <i className={`fas fa-${project.status === 'live' ? 'globe' : 'check-circle'}`}></i>
                      {project.status === 'live' ? 'Live' : 'Completed'}
                    </span>
                  </div>
                  <div className="project-actions">
                    <a href={project.link} className="btn-view" target="_blank">
                      <i className="fas fa-external-link-alt"></i> View Project
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <h5>Technologies</h5>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="section-header">
            <h2>Services I Offer</h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <span style={{ color: service.color }}>{service.icon}</span>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
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

        .filter-btn:hover,
        .filter-btn.active {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-status {
          display: flex;
          justify-content: flex-end;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.live {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
        }

        .status-badge.completed {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: white;
        }

        .project-actions {
          display: flex;
          justify-content: center;
        }

        .btn-view {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          text-decoration: none;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-view:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          font-size: 0.95rem;
        }

        .project-technologies h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-technologies h5::before {
          content: '⚡';
          font-size: 1.1rem;
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

        .services-section {
          margin-top: 4rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .service-content h3 {
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .service-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            margin-bottom: 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-filters {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: 1rem;
          }

          .service-card {
            padding: 1.5rem;
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
