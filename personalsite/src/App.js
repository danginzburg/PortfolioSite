import './App.css';
import profilepic from './/assets/profile-pic.JPG';

function App() {
  return (
    <div>
      <nav className="navbar">
        <p className="navbar-title">Portfolio</p>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </nav>
      
      <div className="hero-container">
        <header className="hero" id="about">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight-hero">Daniel</span> Ginzburg
            </h1>
            <p className="hero-subtitle">
              Software and Web <span className="highlight-hero">Developer</span>
            </p>
            <p className="hero-information">Minneapolis, MN</p>
          </div>
          <div>
            <img src={profilepic} alt="Profile" className="hero-image"/>
          </div>
        </header>
      </div>
      
      <section id="skills">
        {/* Skills content goes here */}
      </section>
      <section id="projects">
        {/* Projects content goes here */}
      </section>
      <section id="contact">
        {/* Contact content goes here */}
      </section>
    </div>
  );
}

export default App;
