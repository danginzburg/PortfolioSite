import React from 'react';
import './Projects.css';
import arctic from '../assets/arctichomepage.png';
import mlposter from '../assets/ml_depression_classification.png';
import aipaper from '../assets/ai_reversi_comparison.png';
import srs from '../assets/sdd_and_srs.png';
import retrieval from '../assets/planck_ai_logo.jpg';
import discord from '../assets/image.png';
import rivals from '../assets/rivals_logo.png';

const projectsData = [
  {
    title: 'ArcticMC (coming soon)',
    description:
      'Built Angular front-end using Spring Boot APIs for a Minecraft server network with 100k+ unique players. Designed scalable Java combat & mining systems, tested under peak loads of thousands of concurrent sessions. Launched beta program with a feedback loop to improve retention and UX.',
    image: arctic,
    // link: 'http://37.59.118.86/',
    link: 'https://arcticmc.net/',
    skills: ['Angular', 'Java', 'TypeScript', 'Spring Boot', 'REST APIs', 'Postman', 'MySQL']
  },
  // {
  //   title: 'Student Mental Health Classification',
  //   description:
  //     'Developed three ML models to classify student mental health, achieving 82% accuracy on a 5,000-sample dataset. Preprocessed and balanced the data for statistical robustness, and performed data segmentation to assess variations in feature importance and model performance.',
  //   image: mlposter,
  //   link: '/ml_depression_classification.pptx.pdf',
  //   skills: ['Python', 'PyTorch', 'Sci-kit learn', 'Pandas', 'NumPy', 'Matplotlib']
  // },
  // {
  //   title: 'Comparing AI Algorithms on Reversi',
  //   description:
  //     'Authored an academic paper evaluating AI algorithms for playing Reversi by implementing and comparing multiple approaches. Conducted simulations against random agents and competing algorithms, demonstrating that Alpha-Beta pruning achieved a 96% win rate while maintaining the lowest runtime.',
  //   image: aipaper,
  //   link: '/ai_reversi_comparison.pdf',
  //   skills: ['Python', 'AI', 'Academic Research', 'LaTeX']
  // },
  {
    title: 'Software Engineering: Election System',
    description:
      'Created comprehensive SRS and SDD documentation to define system architecture and guide development. Translated stakeholder requirements into prioritized product and sprint backlogs over two Agile sprints, and implemented unit tests to ensure compliance with acceptance criteria and project requirements.',
    image: srs,
    link: '/sdd_and_srs.pdf',
    skills: ['Waterfall', 'Agile', 'Unit Testing', 'Software Design', 'Requirements Analysis', 'C++', 'Test Driven Development']
  },
  {
    title: 'Hybrid Information Retrieval (Internship)',
    description:
      'Designed and benchmarked single-vector dense retrievers and ColBERTv2 late-interaction models on financial/legal corpora. Built a hybrid BM25–ColBERT system with a query classifier for adaptive backend selection, and implemented evaluation pipelines alongside token-level relevance visualizations to analyze model behavior.',
    image: retrieval,
    link: 'https://planckai.io/',
    skills: ['Information Retrieval', 'ColBERTv2', 'BM25', 'Hybrid Models', 'Query Classification', 'Evaluation Metrics', 'Data Visualization']
  },
  {
    title: 'Valorant Stat Visualizer',
    description:
      'Building a full-stack SvelteKit + Supabase platform for ingesting, aggregating, and visualizing competitive Valorant stats. Implemented a structured Postgres schema with Drizzle ORM, custom SQL views, and Google Sheets ingestion. Developed interactive leaderboards, player comparisons, and clean Tailwind-based UI components to deliver fast, insightful esports analytics.',
    image: rivals,
    link: 'https://valorant-stat-visualizer.vercel.app/',
    skills: ['SvelteKit', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Data Visualization', 'Google Sheets API']
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
