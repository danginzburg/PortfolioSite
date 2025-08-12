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
      'Currently developing a multi-purpose community website for ArcticMC with Figma, Angular, SCSS, and TypeScript, integrating server APIs for real-time player data. Previously created gameplay enhancements used by hundreds of thousands of players worldwide.',
    image: arctic,
    link: 'https://arcticmc.com',
    skills: ['Figma', 'Angular', 'SCSS', 'Java', 'TypeScript']
  },
  {
    title: 'Student Depression Classification',
    description:
      'Developed three ML models to classify student depression, achieving 82% accuracy on a 5,000-sample dataset. Preprocessed and balanced the data for statistical robustness, and performed gender-based segmentation to assess variations in feature importance and model performance.',
    image: mlposter,
    link: '/ml_depression_classification.pptx.pdf',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'PyTorch']
  },
  {
    title: 'Comparing AI Algorithms on Reversi',
    description:
      'Authored an academic paper evaluating AI algorithms for playing Reversi by implementing and comparing multiple approaches. Conducted simulations against random agents and competing algorithms, demonstrating that Alpha-Beta pruning achieved a 96% win rate while maintaining the lowest runtime.',
    image: aipaper,
    link: '/ai_reversi_comparison.pdf',
    skills: ['Python', 'AI', 'Academic Research', 'LaTeX']
  },
  {
    title: 'Software Engineering: Election System',
    description:
      'Created comprehensive SRS and SDD documentation to define system architecture and guide development. Translated stakeholder requirements into prioritized product and sprint backlogs over two Agile sprints, and implemented unit tests to ensure compliance with acceptance criteria and project requirements.',
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
