import React from "react";
import profilepic from '../assets/profile-pic.JPG';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/mail.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        {/* TEXT SECTION (left on desktop, below on mobile) */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-hero">Daniel</span> Ginzburg
          </h1>
          <p className="hero-subtitle">
            Software and Web <span className="highlight-hero">Developer</span>
          </p>
          <div className="hero-buttons">
            <a href="https://www.linkedin.com/in/daniel-ginzburg/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Profile" />
              <span className='hero-button-text'>LinkedIn</span>
            </a>
            <a href="https://github.com/danginzburg" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Profile" />
              <span className='hero-button-text'>GitHub</span>
            </a>
            <a href="mailto:daniel.ginzburg28@gmail.com">
              <img src={email} alt="Email" />
              <span className='hero-button-text'>Email</span>
            </a>
          </div>
        </div>

        {/* IMAGE SECTION (right on desktop, top on mobile) */}
        <div className="hero-image-wrapper">
          <img src={profilepic} alt="Profile" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
