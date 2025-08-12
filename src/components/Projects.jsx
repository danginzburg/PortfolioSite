import React from 'react';
import './Projects.css';
import arctic from '../assets/arctichomepage.png';
import mlposter from '../assets/ml_depression_classification.png';
import aipaper from '../assets/ai_reversi_comparison.png';
import srs from '../assets/sdd_and_srs.png';

const projectsData = [
  {
    title: 'ArcticMC',
    description:
      'Designed and developed a website for ArcticMC, a Minecraft server, using Angular and SCSS. The site features a modern design, user-friendly navigation, and integrates with the server’s API for real-time updates.',
    image: arctic,
    link: 'https://arcticmc.com',
    skills: ['Figma', 'Angular', 'SCSS', 'Java', 'TypeScript']
  },
  {
    title: 'Student Depression Classification',
    description:
      'Developed a machine learning model to classify student depression levels based on survey data. The project involved data preprocessing, feature engineering, and model evaluation using PyTorch and Scikit-Learn.',
    image: mlposter,
    link: '/ml_depression_classification.pptx.pdf',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'PyTorch']
  },
  {
    title: 'Comparing AI Algorithms on Reversi',
    description:
      'Authored an academic paper analyzing and comparing AI algorithms for playing Reversi, implementing multiple approaches and evaluating their performance and strategies. Conducted simulations against random agents and competing algorithms, demonstrating that Alpha-Beta pruning achieved a 96% win rate with the lowest runtime.',
    image: aipaper,
    link: '/ai_reversi_comparison.pdf',
    skills: ['Python', 'AI', 'Academic Research', 'LaTeX']
  },
  {
    title: 'Software Engineering: Election System',
    description:
      'As a group, we created a Software Design Document (SDD) and a Software Requirements Specification (SRS) to guide the development of our Election System. We then implemented the system and wrote unit tests to ensure all system requirements were met.',
    image: srs,
    link: '/sdd_and_srs.pdf',
    skills: ['Waterfall', 'Agile', 'Unit Testing', 'Software Design', 'Requirements Analysis']
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </a>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-skills">
              {project.skills.map((skill, i) => (
                <li key={i} className="project-skill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
