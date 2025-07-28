import React from 'react';
import './Projects.css';
import arctic from '../assets/arctichomepage.png';
import mlposter from '../assets/CSCI4521_Project_36x24.pptx-1-1.png';
import aipaper from '../assets/Final_Writing-1-01.png';

const projectsData = [
  {
    title: 'ArcticMC',
    description:
      'Designed and developed a website for ArcticMC, a Minecraft server, using Angular and SCSS. The site features a modern design, user-friendly navigation, and integrates with the server’s API for real-time updates.',
    image: arctic,
    skills: ['Figma', 'Angular', 'SCSS', 'Java', 'TypeScript']
  },
  {
    title: 'Student Depression Classification',
    description:
      'Developed a machine learning model to classify student depression levels based on survey data. The project involved data preprocessing, feature engineering, and model evaluation using PyTorch and Scikit-Learn.',
    image: mlposter,
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pytorch']
  },
  {
    title: 'Comparing AI Algorithms on Reversi',
    description:
      'Implemented and compared various AI algorithms for playing Reversi, focusing on performance and strategy.',
    image: aipaper,
    skills: ['Python', 'AI', 'Academic Research', 'LaTeX']
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
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
