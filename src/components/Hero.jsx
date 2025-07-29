import React from "react";
import profilepic from '../assets/profile-pic.JPG';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-hero">Daniel</span> Ginzburg
          </h1>
          <p className="hero-subtitle">
            Software and Web <span className="highlight-hero">Developer</span>
          </p>
          <div className="hero-buttons">
            <a href="https://www.linkedin.com/in/daniel-ginzburg/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hero-icon"/>
              <span className='hero-button-text'>LinkedIn</span>
            </a>
            <a href="https://github.com/danginzburg" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hero-icon"/>
              <span className='hero-button-text'>GitHub</span>
            </a>
            <a href="mailto:daniel.ginzburg28@gmail.com">
              <FaEnvelope className="hero-icon"/>
              <span className='hero-button-text'>Email</span>
            </a>
            <a href="/danielg_resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt className="hero-icon hero-icon-resume" />
              <span className='hero-button-text'>Resume</span>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={profilepic} alt="Profile" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
