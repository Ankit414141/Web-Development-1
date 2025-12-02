import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div className="resume-container">
  {/* Header Section */}
  <header className="resume-header">
    <h1>Dabhi Ankit Tulsibhai</h1>
    <p className="profession">Web Development</p>
    <div className="contact-info">
      <span>📞 8141417452</span> |
      <span> ✉️ dabhiankit38@gmail.com</span> |
      <span> 📍 Bhavnagar, 364002</span>
    </div>
  </header>

  {/* Summary Section */}
  <section className="resume-section">
    <h2>Summary</h2>
    <p>
      To make contribution in the organization with best of my ability and also to
      Develop new skills during the interaction to achieve new heights.
    </p>
  </section>

  {/* About Me Section */}
  <section className="resume-section">
    <h2>About Me</h2>
    <p>
      Bhavnagar, Gujarat. Experienced computer operator with 8 years of expertise in
      hardware maintenance and IT support. Skilled in web development technologies
      including HTML5, CSS, JavaScript, and Bootstrap. Dedicated to contributing
      effectively to organizational goals while continuously developing new skills.
      Known for strong work ethic, reliability, and ability to work well in team environments.
    </p>
  </section>

  {/* Skills Section */}
  <section className="resume-section">
    <h2>Skills</h2>
    <ul className="skills-list">
      <li>Computer Operator</li>
      <li>Basic Hardware Knowledge</li>
      <li>Web Development</li>
      <li>HTML5</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Bootstrap 5</li>
    </ul>
  </section>

  {/* Experience Section */}
  <section className="resume-section">
    <h2>Experience</h2>
    <div className="experience-item">
      <h3>Computer Operator</h3>
      <p className="duration">8 Years</p>
    </div>
  </section>

  {/* Education Section */}
  <section className="resume-section">
    <h2>Education</h2>
    <div className="education-item">
      <h3>11th Commerce</h3>
      <p className="year">2016</p>
    </div>
  </section>

  {/* Languages Section */}
  <section className="resume-section">
    <h2>Languages</h2>
    <ul className="languages-list">
      <li>Gujarati</li>
      <li>Hindi</li>
      <li>English</li>
    </ul>
  </section>

  {/* Hobbies Section */}
  <section className="resume-section">
    <h2>Hobbies</h2>
    <ul className="hobbies-list">
      <li>Learning about new computer technologies</li>
      <li>Internet browsing and online research</li>
      <li>Gaining knowledge about new technologies</li>
    </ul>
  </section>
</div>

);


reportWebVitals();
