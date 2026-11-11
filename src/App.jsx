
import './legacy.css';

const projects = [
  {
    title: 'Calculator',
    description: 'A responsive calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations.',
    link: 'https://github.com/sourav696m/CALCULATOR.git'
  },
  {
    title: 'Todo App',
    description: 'A responsive To-Do App built with HTML, CSS, and JavaScript to practice DOM manipulation.',
    link: 'https://github.com/sourav696m/TO-DO-APP.git'
  },
  {
    title: 'Student Registration Form',
    description: 'A clean student registration form built with HTML and CSS.',
    link: 'https://github.com/sourav696m/Student-Registration-Form.git'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'An interactive Tic Tac Toe game featuring turn-based gameplay.',
    link: 'https://github.com/sourav696m/TIC-TAK-TOE' 
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my skills and projects.',
    link: 'https://github.com/sourav696m/Portfolio.git'
  }
];

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Sourav's Portfolio</div>

          <div className="right">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstSection" id="home">
          <div className="leftSection">
            Hi, My name is <span className="purple">Sourav</span>
            <div>and I am a passionate</div>
            <span id="element">Web Developer</span>
          </div>

          <div className="rightSection">
           <img src={`${import.meta.env.BASE_URL}public\\58185047-fa79-48d8-9489-feba43250d50.jpg`} alt="Developer" />
          </div>
        </section>

        <hr />

        <section className="secondSection" id="projects">
          <span className="Text-grey">
            What I have done so far
          </span>

          <h1>My Projects</h1>


            
<div className="box">
  {projects.map((project, index) => (
    <div className="vertical" key={index}>
      <div className="vertical-title">
        {project.title}
      </div>

      <div className="vertical-desc">
        <p className="description">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  ))}
</div>

        </section>

        <section id="about">
          <h1>About Me</h1>
          <p>
            I am Sourav, an aspiring Web Developer
            passionate about building websites.
          </p>
          <a href={`${import.meta.env.BASE_URL}sourav_updated_resume.pdf`} download>
  Download My Resume
</a>
        </section>

        <section id="contact">
          <h1>Contact Me</h1>
          <p>Gmail: souravkum78yfr@gmail.com</p>
          <p>WhatsApp: +91 8882731226</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-first">
          <h3>Sourav's Developer Portfolio</h3>
        </div>

        <div className="footer-fourth">
          <p>Follow me on social media</p>
        </div>
      </footer>
    </>
  );
}

export default App;
