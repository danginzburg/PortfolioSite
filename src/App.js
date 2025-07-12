import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className='about-container' id="about">
        <About />
      </section>

      <section className='skills-container' id="skills">
        <Skills />
      </section>

      <section className='projects-container' id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
