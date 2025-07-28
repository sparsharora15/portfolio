import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Hero component renders the navigation bar and hero splash. It uses
 * the same semantics as the static portfolio: a fixed header with
 * internal anchors and a full‑height section with a dark overlay,
 * tagline, heading and call to action.
 */
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">Sparsh</div>
          
          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Resume Button - Desktop */}
          <a 
            href="https://drive.google.com/file/d/1tf2ay1gwmWUxdoCVNFECCFGdRL_qZs-t/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn resume desktop-resume"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
              <li><a href="#education" onClick={closeMenu}>Education</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <a 
              href="https://drive.google.com/file/d/1tf2ay1gwmWUxdoCVNFECCFGdRL_qZs-t/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn resume mobile-resume" 
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </div>
      </header>
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="tagline">Full‑Stack Developer</span>
          <h1>
            Building Software to solve{' '}
            <span className="highlight">real‑world problems</span>
          </h1>
          <p>Transforming ideas into exceptional digital experiences.</p>
          <a href="#projects" className="btn primary">View My Work</a>
        </div>
      </section>
    </>
  );
}