import React from 'react';
import '../App.css';
import './Skills.css';

// Icons from react-icons (simple-icons + fa) for broad compatibility
import { FaDatabase, FaServer, FaCoffee, FaCloud } from 'react-icons/fa';
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiD3Dotjs,
  SiExpress,
  SiPug,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiDocker,
  SiLinux,
  SiVercel,
  SiFigma,
  SiGit,
  SiGithub,
  SiJira,
  SiPrettier
} from 'react-icons/si';

// Some logos/tools don't have a widely-used official icon in simple-icons;
// for those we provide short textual fallbacks styled via CSS classes

const skillsData = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaCoffee /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'SvelteKit', icon: <SiSvelte /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Drizzle ORM', icon: <span className="icon-fallback">Drizzle</span> },
      { name: 'D3.js', icon: <SiD3Dotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Google Test', icon: <span className="icon-fallback">gtest</span> },
      { name: 'ExpressJS', icon: <SiExpress /> },
      { name: 'Pug', icon: <SiPug /> }
    ]
  },
  {
    title: 'Databases & Backend',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'SQLite', icon: <SiSqlite /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'REST APIs', icon: <FaServer /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Agile', icon: <span className="icon-fallback">Agile</span> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'AWS', icon: <FaCloud /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'UML', icon: <span className="icon-fallback">UML</span> },
      { name: 'Prettier', icon: <SiPrettier /> },
      { name: 'Vitest', icon: <span className="icon-fallback">Vitest</span> },
      { name: 'Figma', icon: <SiFigma /> }
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
                </span>
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
