import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Machine Learning Retrieval System',
    description:
      'Built an information retrieval system during my ML internship to efficiently search and rank documents. Focused on algorithm optimization and accuracy improvements.',
    image: '/images/ml-retrieval.png',
    skills: ['Python', 'Machine Learning', 'SQL']
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React and modern CSS to showcase my projects and skills. Features a responsive layout and clean design principles.',
    image: '/images/portfolio.png',
    skills: ['React', 'CSS', 'Figma']
  },
  {
    title: 'Web Design Project',
    description:
      'Created a sleek and user-friendly web design for a local business, emphasizing accessibility and mobile responsiveness.',
    image: '/images/web-design.png',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'AI-Powered Chatbot',
    description:
      'Developed a chatbot using NLP techniques to answer user queries in real time, integrated with a web interface for seamless use.',
    image: '/images/chatbot.png',
    skills: ['Python', 'Flask', 'NLP']
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
