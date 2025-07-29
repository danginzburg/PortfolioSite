import React from 'react';
import '../App.css';
import {
  C,
  CPlusPlus,
  Python,
  Java,
  TypeScript,
  React as ReactIcon,
  Angular,
  CSS3,
  Figma,
  Docker,
  Linux,
  PostgreSQL,
  PyTorch
} from 'developer-icons';

import './Skills.css';

const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <C /> },
      { name: 'C++', icon: <CPlusPlus /> },
      { name: 'Python', icon: <Python /> },
      { name: 'Java', icon: <Java /> },
      { name: 'TypeScript', icon: <TypeScript /> },
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', icon: <ReactIcon /> },
      { name: 'Angular', icon: <Angular /> },
      { name: 'CSS', icon: <CSS3 /> },
      { name: 'Figma', icon: <Figma /> }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Docker', icon: <Docker /> },
      { name: 'Unix', icon: <Linux /> },
      { name: 'PyTorch', icon: <PyTorch /> },
      { name: 'SQL', icon: <PostgreSQL /> }
    ]
  }
];


const Skills = () => (
  <section className="skills-section">
    <div className="skills-grid">
      {skillsData.map((category, idx) => (
        <div className="skills-category" key={idx}>
          <h3 className="skills-category-title">{category.title}</h3>
          <ul className="skills-list">
            {category.skills.map((skill, i) => (
              <li key={i} className="skill-item">
                <span className="skill-icon">
                  {skill.icon}
                </span>{skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
