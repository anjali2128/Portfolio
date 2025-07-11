import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import me from "./assets/me.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si"; // Twitter X icon
import resume from "./assets/Anjali_Mishra.pdf";
import ResumeSection from "./components/Resume"; 
import Projects from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
 const [activeTab, setActiveTab] = useState("education");
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const [showMore, setShowMore] = useState(false); 


  useEffect(() => {
  const trailContainer = document.createElement("div");
  trailContainer.style.position = "fixed";
  trailContainer.style.top = 0;
  trailContainer.style.left = 0;
  trailContainer.style.width = "100%";
  trailContainer.style.height = "100%";
  trailContainer.style.pointerEvents = "none";
  trailContainer.style.zIndex = "9999";
  document.body.appendChild(trailContainer);

  const createTrail = (x, y) => {
    const dot = document.createElement("div");
    dot.className = "cursor-trail";
    dot.style.top = `${y}px`;
    dot.style.left = `${x}px`;
    trailContainer.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 400); // how long each dot lives
  };

  const handleMove = (e) => {
    createTrail(e.clientX, e.clientY);
  };

  document.addEventListener("mousemove", handleMove);

  return () => {
    document.removeEventListener("mousemove", handleMove);
    trailContainer.remove();
  };
}, []);


  return (
    <div className="app ">
      <nav
        className={`navbar fixed-top navbar-expand-lg ${scrolled ? "bg-dark shadow-sm" : "bg-transparent"} navbar-dark transition-nav`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-white" href="#">
            Anjali.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" data-aos="fade-down" data-aos-delay="300">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down" data-aos-delay="100">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down" data-aos-delay="200">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              
              <li className="nav-item" data-aos="fade-down" data-aos-delay="400">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home"  className="hero-section d-flex align-items-center" data-aos="fade-in">
        <div className="overlay"></div>
        <div className="container text-white position-relative z-1">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1" data-aos="fade-right">
              <h1 className="display-3 fw-bold gradient-text typing-header">
                Hi, I'm Anjali Mishra
              </h1>
              <div className="typewriter-stack mt-4">
                <span className="outlined-text">Frontend Developer</span>
                <span className="typing-text">Frontend Developer</span>
              </div>
              <p className="lead fs-5 mt-3 typing-paragraph">
                Web Developer & Data Analyst passionate about crafting unique
                digital experiences and transforming data into insights.
              </p>
              <a
                href={resume}
                download="Anjali_Mishra_Resume.pdf"
                className="btn btn-outline-info mt-3 px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>

              <div className="social-icons mt-4" data-aos="fade-up">
                <a
                  href="https://www.linkedin.com/in/anjali-mishra-41418824b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/anjali2128"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/anjalliii_.4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/anjalim4002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiX />
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center order-1 order-md-2" data-aos="fade-left"> 
              <div className="image-wrapper-large mx-auto">
                <img
                  src={me}
                  alt="Anjali Mishra"
                  className="img-fluid glowing-border-outer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>


{/*About Me*/}
     <section id="about" className="about-section-unique" data-aos="fade-up">
  <div className="container about-flex">
    {/* Left Side – Avatar */}
    <div className="about-image-container" data-aos="zoom-in">
      <div className="cyber-avatar">
        <img src={me} alt="Anjali Mishra" />
        <div className="cyber-ring"></div>
      </div>
    </div>

    {/* Right Side – Text */}
    <div className="about-text-container" data-aos="fade-left">
      <h2 className="about-title">About Me</h2>

      {/* Always visible first para */}
      <p>
        I'm <span className="highlight">Anjali Mishra</span>, a passionate and detail-oriented Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, and Bootstrap. I recently graduated with a B.Tech in Computer Science and Engineering from <span className="highlight">Vellore Institute of Technology</span>, where I explored the power of technology through impactful projects in web development, machine learning, and data visualization.
      </p>

      {/* Extra content visible only when showMore is true */}
      {showMore && (
        <div className="about-extra-content">
          <p>
            During my internship at the <span className="highlight">National Informatics Center</span>, I contributed to streamlining onboarding processes and resolving real-time merchant issues, which honed my problem-solving and client communication skills.
          </p>
          <p>
            I thrive on creating visually appealing, responsive, and user-focused web interfaces. My work blends creative design with clean code, driven by a belief that great user experience starts with intuitive front-end design.
          </p>
          <p>
            In addition to coding, I’m passionate about data analytics, design tools like Figma, and continuously learning to expand my development toolkit. Outside of tech, you'll find me immersed in music, painting, and exploring new places.
          </p>
          <p className="quote">
            “Let’s build something amazing together!”
          </p>
        </div>
      )}

      {/* Button always below the paragraph(s) */}
      <div className="read-more-button-wrap">
  <button
    className={`fancy-toggle-btn ${showMore ? "open" : ""}`}
    onClick={() => setShowMore(!showMore)}
  >
    {showMore ? "View Less" : "View More"}
  </button>
</div>
</div>
    </div>
</section>


      <ResumeSection />
 <Projects />
<Contact />

    </div>
  );
};

export default App;



