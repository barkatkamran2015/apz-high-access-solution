import React, { useState } from 'react';
import '../About.css'; // Import your CSS file for styling
import buildingImage from '../assets/aboutpage.png';
import { FaDoorOpen, FaPaintBrush, FaPaintRoller, FaCheck } from 'react-icons/fa';


const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Close if already open
    } else {
      setActiveSection(section); // Open clicked section
    }
  };

  return (
    <div className="about-container">
    <div className="top-section">
      <div className="left-section">
        <h2>APZ FACADE UPGRADE SPECIALISTS</h2>
        <p>Are you stressed and worried about the costs of having to install non–combustible cladding or to remediate or repaint the façade on your building?</p>

        {/* Collapsible Sections */}
        <div className="collapsible">
          <div className="collapsible-item">
            <button onClick={() => toggleSection('aim')}>Our Aim</button>
            {activeSection === 'aim' && (
              <div className="content">
                <p>To serve our customers better by utilising innovation & technology to deliver the highest quality outcomes at the lowest costs. Let our team of experienced engineers and builders restore, beautify and
                maximise your property value.</p>
              </div>
            )}
          </div>

          <div className="collapsible-item">
            <button onClick={() => toggleSection('standards')}>Setting New Standards</button>
            {activeSection === 'standards' && (
              <div className="content">
                <p>Our revolutionary process saves tens of thousands of dollars in costs. Better still, our patent pending systems are completely Carbon Neutral Scaffold-Free &amp; Hassle-Free.</p>
              </div>
            )}
          </div>

          <div className="collapsible-item">
            <button onClick={() => toggleSection('benefits')}>The Benefits</button>
            {activeSection === 'benefits' && (
              <div className="content">
                <p>That means no noise as our process is whisper quiet, no security issues as we remove the risk of strangers utilising scaffolding to access your home or building, quicker turnarounds (by up to 40%) to complete works and overall, less stress and interruption to owners or business.</p>
              </div>
            )}
          </div>

          <div className="collapsible-item">
            <button onClick={() => toggleSection('why-choose-us')}>Why Choose Us</button>
            {activeSection === 'why-choose-us' && (
              <div className="content">
                <p>To avoid more headaches and to see how much we can save your owners, get in touch with our friendly team at the Façade Upgrade Specialists today.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="right-section">
        <img src={buildingImage} alt="Building Image" />
      </div>
    </div>
    <div id="contact">
  <h2 class="contact-title">Our <span class="highlight">Services</span></h2>

  <div class="about-width">
    <div class="about-1">
    <FaPaintRoller className="info-icon" />
      <h3>Re-Painting</h3>
    </div>

    <div class="about-1">
    <FaDoorOpen className="info-icon" />
      <h3>Remedial</h3>
    </div>

    <div class="about-1">
    <FaCheck className="info-icon" />
      <h3>Inspection Services</h3>
    </div>
    <div class="about-1">
    <FaPaintBrush className="info-icon" />
      <h3>Color Consultation</h3>
    </div>
  </div>
</div>

  </div>

  );
};

export default About;
