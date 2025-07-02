import './App.css';
import profilepic from './assets/profile-pic.JPG';
import locpin from './assets/location-pin.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import email from './assets/mail.png';

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
            {/* <div className="hero-location">
              <img src={locpin} alt="Location Icon" className="hero-icon"/>
              <p className="hero-information">Minneapolis, MN</p>
            </div> */}
            <div className="hero-buttons">
              <a href="https://www.linkedin.com/in/daniel-ginzburg/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn Profile" width="32" height="32" />
                <span className='hero-button-text'>LinkedIn</span>
              </a>
              <a href="https://github.com/danginzburg" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Profile" width="32" height="32" />
                <span className='hero-button-text'>GitHub</span>
              </a>
              <a href="mailto:daniel.ginzburg28@gmail.com">
                <img src={email} alt="Email" width="32" height="32" />
                <span className='hero-button-text'>Email</span>
              </a>
            </div>
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
