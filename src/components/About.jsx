import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-professional">
          <h3>Professional</h3>
          <p>
            I grew up surrounded by software engineers, so technology has always been part of my life. In high school, AP Computer Science sparked my interest in building systems from the ground up, and since then I’ve continued teaching myself web development and learning through hands-on projects. I will earn my B.S. in Computer Science from the University of Minnesota this December and am currently seeking entry-level software engineering roles. I’m excited to apply my skills to real-world challenges and continue growing as a developer.          
          </p>
        </div>
        <div className="about-personal">
          <h3>Personal</h3>
          <p>
            Outside of coding, you can usually find me at the gym, gaming, watching shows, or exploring new food spots. I enjoy designing and creating as a way to relax and stay inspired, and there’s always music playing in the background. This year I served as Captain of the GopherEsports Valorant team, competing in several tournaments and even bringing home a trophy. After graduation, I’m hoping to spend more time backpacking and hiking. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
