import React from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import './Project.css';
import Weather from '../assets/weather.jpg';
import todo from'../assets/todo.jpg';
import ecom from '../assets/ecom.jpg';
import brain from '../assets/brain.jpg';
import code from '../assets/code.jpg';

import { FaReact, FaBootstrap, FaMapMarkerAlt } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiRedux, SiTypescript, SiPython, SiTensorflow, SiCodemirror} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
const projects = [
  {
    title: "Weather App",
    image: Weather,
    description: "A sleek weather forecast app using OpenWeatherMap API, React hooks, and geolocation.",
    skills: ["Python", "MachineLearning","API", "Geolocation"],
    codeLink: "https://github.com/anjali2128/weather-forecasting/tree/main/code",
    liveLink: "https://weather-app-demo.netlify.app",
  },
  {
    title: "Todo List",
    image: todo,
    description: "A task management app with deadline tracking, priority filter.",
    skills: ["React", "Bootstrap"],
    codeLink: "https://github.com/anjali2128/To-do-list",
    liveLink: "https://scintillating-beignet-2ce890.netlify.app/",
  },
  {
    title: "E-Commerce",
    image: ecom,
    description: "A responsive e-commerce site for browsing and buying books online.",
    skills: ["HTML", "CSS","Javascript"],
    codeLink: "https://github.com/anjali2128/To-do-list",
    liveLink: "https://mellow-douhua-cd4a93.netlify.app/",
  },
  {
    title: "Code Editor",
    image: code,
    description: "A web-based code editor with live preview and syntax highlighting.",
    skills: ["React", "Bootstrap","CodeMirror"],
    codeLink: "https://github.com/anjali2128/To-do-list",
    liveLink: "https://jovial-parfait-a5b3dc.netlify.app/",
  },
  {
    title: "Brain Tumor Detection",
    image: brain,
    description: "A task management app with deadline tracking, priority filter, and dark mode toggle.",
    skills: ["Python", "DeepLearning"],
    codeLink: "https://github.com/anjali2128/To-do-list",
    liveLink: "https://scintillating-beignet-2ce890.netlify.app/",
  },
  {
    title: "E-Commerce",
    image: ecom,
    description: "A task management app with deadline tracking, priority filter, and dark mode toggle.",
    skills: ["React", "Bootstrap"],
    codeLink: "https://github.com/anjali2128/To-do-list",
    liveLink: "https://scintillating-beignet-2ce890.netlify.app/",
  },
];
const skillIcons = {
  React: <FaReact title="React" color="#61DBFB" size={22} />,
  Bootstrap: <FaBootstrap title="Bootstrap" color="#7952b3" size={22} />,
  API: <SiJavascript title="API" color="#f7df1e" size={22} />,
  Geolocation: <FaMapMarkerAlt title="Geolocation" color="#00e6e6" size={22} />,
  Hooks: <SiJavascript title="Hooks" color="#f7df1e" size={22} />,
  LocalStorage: <SiJavascript title="LocalStorage" color="#f7df1e" size={22} />,
  HTML: <SiHtml5 title="HTML" color="#e34c26" size={22} />,
  CSS: <SiCss3 title="CSS" color="#2965f1" size={22} />,
  Redux: <SiRedux title="Redux" color="#764abc" size={22} />,
  TypeScript: <SiTypescript title="TypeScript" color="#3178c6" size={22} />,
  Python: <SiPython title="Python" color="#3776AB" size={22} />,
  MachineLearning: <SiTensorflow title="Machine Learning" color="#FF6F00" size={22} />,
  DeepLearning: <GiArtificialIntelligence title="Deep Learning" color="#6e44ff" size={22} />,
  CodeMirror: <SiCodemirror title="CodeMirror" color="#91a7ff" size={22} />,
  Javascript: <SiJavascript title="JavaScript" color="#f7df1e" size={22} />, // ✅ newly added
};



const Projects = () => {
  return (
    <section id="projects" className="project-section py-5">
      <Container>
        <h2 className="text-center mb-5 project-title">🚀 Projects</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {projects.map((project, idx) => (
            <Card key={idx} className="project-card shadow border-0">
              <Card.Img variant="top" src={project.image} alt={project.title} className="project-img-top" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="neon-project-title">{project.title}</Card.Title>
                  <Card.Text className="text-light">{project.description}</Card.Text>

                  <div className="project-skills mb-3">
                    <div className="project-icons d-flex flex-wrap gap-2">
  {project.skills.map((skill, i) => (
    <span key={i} className="icon-skill">
      {skillIcons[skill] || skill}
    </span>
  ))}
</div>

                  </div>
                </div>

                <div className="project-buttons mt-3">
                  <Button variant="outline-info" href={project.codeLink} target="_blank" className="me-2">
                    🔗 Code
                  </Button>
                  <Button variant="outline-info" href={project.liveLink} target="_blank">
                    🚀 Live
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
