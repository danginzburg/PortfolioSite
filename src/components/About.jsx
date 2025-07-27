import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-professional">
          <h3>Professional</h3>
          <p>
            I grew up surrounded by software engineers, so tech has always been part of my life. In high school, I took AP Computer Science and realized how much I enjoyed building things from scratch. Since then, I’ve taught myself web development and spent a lot of time learning by creating projects. I also had a machine learning internship where I worked on an information retrieval system, which got me even more excited about AI/ML and how it connects with modern web design and development.
          </p>
        </div>
        <div className="about-personal">
          <h3>Personal</h3>
          <p>
            When I’m not coding, I’m usually at the gym, watching anime, gaming competitively, or searching for good food spots. I love designing and creating as a way to relax and express ideas, and music is always playing in the background. Those hobbies help me stay inspired and bring fresh energy to the projects I work on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
