import React, { useState } from "react";
import "./Resume.css";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const renderContent = () => {
    switch (activeTab) {
      case "education":
  return (
    <div className="resume-panel futuristic-text">
  <div className="edu-timeline">
    <div className="edu-card neon-border" data-aos="fade-up">
      <h3 className="neon-title">Vellore Institute of Technology</h3>
      <p className="edu-date">2021–2025</p>
      <p className="edu-degree">B.Tech in Computer Science and Engineering</p>
      <p className="edu-score">CGPA: 7.68</p>
      <ul className="edu-details">
        <li>📘 <strong>Key Courses:</strong> Data Structures, Web Development, OS, DBMS</li>
        <li>🚀 <strong>Project:</strong> Brain Tumor Detection, Weather Forecating</li>
        <li>🎓 <strong>Activities:</strong> Cultural Event, Hackathon</li>
      </ul>
    </div>

    <div className="edu-card neon-border" data-aos="fade-up" data-aos-delay="100">
      <h3 className="neon-title">Delhi Public School, Nagpur</h3>
      <p className="edu-date">2020–2021</p>
      <p className="edu-degree">Class XII (CBSE)</p>
      <p className="edu-score">89%</p>
      <ul className="edu-details">
        <li>🔬 <strong>Stream:</strong> PCM with Computer Science</li>
        <li>📚 <strong>Activities:</strong> Science Exhibition, Sports</li>
      </ul>
    </div>
  </div>
</div>

  );

      case "skills":
        return (
          <div className="resume-panel futuristic-text">
            <div className="skills-category">
              <h4 className="skill-section-title">Programming</h4>
              <div className="skills-matrix">
                <div className="glow-chip">Python</div>
                <div className="glow-chip">JavaScript</div>
                <div className="glow-chip">React</div>
                <div className="glow-chip">HTML</div>
                <div className="glow-chip">CSS</div>
                <div className="glow-chip">Bootstrap</div>
              </div>
            </div>

            <div className="skills-category">
              <h4 className="skill-section-title">Data Tools</h4>
              <div className="skills-matrix">
                <div className="glow-chip">Power BI</div>
                <div className="glow-chip">Tableau</div>
                <div className="glow-chip">SQL</div>
                <div className="glow-chip">Excel</div>
              </div>
            </div>

            <div className="skills-category">
              <h4 className="skill-section-title">Design</h4>
              <div className="skills-matrix">
                <div className="glow-chip">Figma</div>
                <div className="glow-chip">Photoshop</div>
                <div className="glow-chip">WordPress</div>
              </div>
            </div>

            <div className="skills-category">
              <h4 className="skill-section-title">Concepts</h4>
              <div className="skills-matrix">
                <div className="glow-chip">Machine Learning</div>
                <div className="glow-chip">Data Visualization</div>
                <div className="glow-chip">Predictive Analytics</div>
                <div className="glow-chip">Data Cleaning</div>
              </div>
            </div>
            <div className="skills-category">
        <h4 className="skill-section-title">Soft Skills</h4>
        <div className="skills-matrix">
          <div className="glow-chip">Teamwork</div>
          <div className="glow-chip">Communication</div>
          <div className="glow-chip">Critical Thinking</div>
          <div className="glow-chip">Time Management</div>
          <div className="glow-chip">Problem Solving</div>
          <div className="glow-chip">Multitasking</div>
          <div className="glow-chip">Work Ethic</div>
          <div className="glow-chip">Emotional Intelligence</div>
          <div className="glow-chip">Pressure Management</div>
          <div className="glow-chip">Deadline-driven</div>
        </div>
      </div>
          </div>
        );
      case "experience":
  return (
    <div className="resume-panel futuristic-text">
      <div className="exp-timeline">
        <div className="exp-card neon-border" data-aos="fade-left">
          <h3 className="neon-title">National Informatics Center</h3>
          <p className="exp-role">Web Dev Intern</p>
          <p className="exp-date">Sept 2023 – Oct 2023</p>
          <ul className="exp-details">
            <li>Automated merchant onboarding workflows</li>
            <li>Resolved high-priority merchant issues</li>
            <li>Analyzed transactional data for patterns and insights</li>
          </ul>
        </div>
        <div className="exp-card neon-border" data-aos="fade-right">
          <h3 className="neon-title">Sparrow Software Pvt. Ltd.</h3>
          <p className="exp-role">Front End Developer</p>
          <p className="exp-date">May 2025 – Present</p>
          <ul className="exp-details">
            <li>Developed futuristic UIs in React + Bootstrap</li>
            <li>Enhanced user experience with animations & scroll logic</li>
            <li>Integrated APIs for real-time dashboard updates</li>
          </ul>
        </div>
      </div>
    </div>
  );

      default:
        return null;
    }
  };
  return (
    <section id="resume" className="resume-section large-resume-section">
      <div className="glitch-bg"></div>
      <h2 className="resume-heading">RESUME_</h2>
      <div className="resume-tabs futuristic-text">
        {['education', 'skills', 'experience'].map(tab => (
          <div
            key={tab}
            className={`resume-tab ${activeTab === tab ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="tab-underline"></div>
      {renderContent()}
    </section>
  );
};

export default ResumeSection;
