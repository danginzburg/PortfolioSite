import React from 'react';
import '../App.css';
import { FaPython, FaJava, FaReact, FaGitAlt, FaDocker, FaLinux, FaDatabase, FaProjectDiagram } from 'react-icons/fa';
import { SiC, SiCplusplus, SiTypescript, SiOcaml, SiPostgresql, SiScikitlearn, SiPytorch, SiLatex, SiDoxygen, SiFigma, SiAngular } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import './Skills.css';

const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Typescript', icon: <SiTypescript /> },
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'CSS/SCSS', icon: <BsFileEarmarkCodeFill /> },
      { name: 'Typescript', icon: <SiTypescript /> },
      { name: 'Figma', icon: <SiFigma /> }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Doxygen', icon: <SiDoxygen /> },
      { name: 'Unix', icon: <FaLinux /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn /> }
    ]
  },
  {
    title: 'Databases & Methodologies',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'SQL', icon: <TbSql /> },
      { name: 'Agile', icon: <FaProjectDiagram /> }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3 className="skills-category-title">{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
