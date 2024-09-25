import React from 'react';
import '../App.css';
import heroImage from '../assets/hero-image.jpeg';
import serviceImage from '../assets/concrete-repair.png';
import remedialImage from '../assets/concrete-repair2.png';
import cleaningImage from '../assets/concrete-repair3.png';
import schoolImage from '../assets/school.png';
import industryImage from '../assets/industry.png';
import healthcareImage from '../assets/healthcare.png';
import hospitalityImage from '../assets/hospitality.png';
import commercialImage from '../assets/commercial.png';
import retiredLivingImage from '../assets/retired-living.png';
import paintingImage from '../assets/strata.png';
import remedial1Image from '../assets/high-rise.png';
import cleaning1Image from '../assets/commercialpainting.png';
import about1Image from '../assets/nemat.jpg';
import { FaBuilding, FaUniversity, FaHome, FaVihara, FaHospitalAlt  } from 'react-icons/fa'; // Import icons

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1><span>DO YOU </span> WANT TO RENOVATE YOUR BUILDING?</h1>
                    <p>We breathe new life into high-rise infrastructure
                    and buildings Australia-wide.</p>
                    <a href="/contact" className="cta-button">Contact Us</a>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Hero" />
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <button>What We Do</button>
                <h2>Elevate. Renew. Transform.</h2>

                {/* Info Containers in About Section */}
                <div className="info-containers">
                    <div className="info-container">
                        <FaBuilding className="info-icon" />
                        <h3>Remedial & Repair</h3>
                        <p>Using Scaffold-Free access systems, we can tackle repairs from any height to the highest of standards</p>
                    </div>
                    <div className="info-container">
                        <FaUniversity className="info-icon" />
                        <h3>Repainting</h3>
                        <p>we specialise in reviving multi-storey properties in need of a full facade uplift through our innovative technologies</p>
                    </div>
                    <div className="info-container">
                        <FaHospitalAlt className="info-icon" />
                        <h3>Inspection & Consultation</h3>
                        <p>We have the tools and expertise to daignose building defects from up close and provide a clear assessment of its current state</p>
                    </div>
                    <div className="info-container">
                        <FaHome className="info-icon" />
                        <h3>Exterior Cleaning</h3>
                        <p>We make facade maintainance and cleaning affordable and regular, with minimum fuss and inconvenience.</p>
                    </div>
                    <div className="info-container">
                        <FaVihara className="info-icon" />
                        <h3>Lifetime Aftercare</h3>
                        <p>You can count on us to extend the lifetime of your facade upgrade through a tailored maintainance plan</p>
                    </div>
                    <div className="info-container">
                    <FaBuilding className="info-icon" />
                        <h3>Inspection & Consultation</h3>
                        <p>We have the tools and expertise to daignose building defects from up close and provide a clear assessment of its current state</p>
                    </div>
                </div>
            </section>

            {/* Painting Section */}
        <section className="painting-section">
            <h2>Our Services</h2>
            <h1>Remedial Services at APZ</h1>
            <div className="services-images">
            <a href="/paintingservices" className="service-link">
            <img src={serviceImage} alt="Service" className="service-image" />
            <div className="service-text">Concrete Repairs & Protection</div>
            </a>
            <a href="/remedialservices" className="service-link">
            <img src={remedialImage} alt="Remedial Services" className="service-image" />
            <div className="service-text">Building Repairs & Facade Restorations</div>
            </a>
            <a href="/cleaningservices" className="service-link">
            <img src={cleaningImage} alt="Cleaning Services" className="service-image" />
            <div className="service-text">Structural Repairs</div>
            </a>
            </div>
        </section>

<section className="remedial-section">
  <h2>Sectors We Serve</h2>
  <div className="icons-container">
    <div className="icons-wrapper">
      <div className="icon-item">
        <img src={schoolImage} alt="Educational Institutions" className="icon-image" />
        <p className="icon-text">Educational Institutions</p>
      </div>
      <div className="icon-item">
        <img src={industryImage} alt="Industrial Facilities" className="icon-image" />
        <p className="icon-text">Industrial Facilities</p>
      </div>
      <div className="icon-item">
        <img src={healthcareImage} alt="Health Care Facilities" className="icon-image" />
        <p className="icon-text">Health Care Facilities</p>
      </div>
      <div className="icon-item">
        <img src={hospitalityImage} alt="Hospitality & Leisure" className="icon-image" />
        <p className="icon-text">Hospitality & Leisure</p>
      </div>
      <div className="icon-item">
        <img src={commercialImage} alt="Commercial Properties" className="icon-image" />
        <p className="icon-text">Commercial Properties</p>
      </div>
      <div className="icon-item">
        <img src={retiredLivingImage} alt="Retired Living" className="icon-image" />
        <p className="icon-text">Retired Living</p>
      </div>
    </div>
  </div>
</section>


<section className="painting-section">
            <h2>Our Services</h2>
            <h1>Types of Repainting Services at APZ</h1>
            <div className="services-images">
            <a href="/paintingservices" className="service-link">
            <img src={paintingImage} alt="Service" className="service-image" />
            <div className="service-text">Strata Painting</div>
            </a>
            <a href="/remedialservices" className="service-link">
            <img src={remedial1Image} alt="Remedial Services" className="service-image" />
            <div className="service-text">High-Rise Painting</div>
            </a>
            <a href="/cleaningservices" className="service-link">
            <img src={cleaning1Image} alt="Cleaning Services" className="service-image" />
            <div className="service-text">Commercial Painting</div>
            </a>
            </div>
</section>

<section className="other-section">
  <div className="content">
    <h2>About APZ</h2>
    <p>With steadfast leadership, the APZ team has been committed to the building industry since 2020. We have consistently garnered acclaim from our clients and multiple industry 
        awards, reflecting our dedication to excellence. Our goal is to enhance the visual appeal and value of your property while minimizing the complexities and 
        costs involved in a major facade upgrade.</p>
  </div>
  <div className="about-image">
    <img src={about1Image} alt="About APZ" />
  </div>
</section>


<section className="project-section">
  <h1>Recent Projects</h1>
  <div className="project-images">
    <div className="project-image-wrapper">
      <img src={paintingImage} alt="Service" />
      <div className="project-text">Remedial</div>
    </div>
    
    <div className="project-image-wrapper">
      <img src={remedial1Image} alt="Remedial Services" />
      <div className="project-text">Cleaning</div>
    </div>

    <div className="project-image-wrapper">
      <img src={cleaning1Image} alt="Cleaning Services" />
      <div className="project-text">Facade</div>
    </div>
  </div>
</section>


            {/* Contact Section */}
            <section className="contact-section">
    <div className="contact-container">
        <div className="contact-form-wrapper">
            <h2><span>Get</span> In Touch</h2>
            <p>Ready to start a project? Contact us today!</p>

            {/* Contact Form */}
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="mobile-number">Mobile Number</label>
                    <input type="tel" id="mobile-number" name="mobile-number" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="project-address">Project Address</label>
                    <input type="text" id="project-address" name="project-address" required />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required />
                </div>

                <div className="form-group">
                    <label htmlFor="state">State/Region</label>
                    <input type="text" id="state" name="state" required />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="description">Description of Service</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
        <div className="contact-info-wrapper">
            <h2>Feel free to reach out with any inquiries, feedback, or simply to connect—we're here and eager to listen.</h2>
            <li>We serve Strata , Commercial, Industrial, Government & all Infrastructure.</li>
            <li>We do service private residential works.</li>
            <li>We do service buildings above three stories.</li>
        </div>
    </div>
</section>

<section>
    <div className='review-container'>
        <h1>Check for our top Customer reviews here</h1>
        <a href="https://g.page/YOUR-GOOGLE-BUSINESS-LINK/review" target="_blank" rel="noopener noreferrer">
    Leave a Review on Google
</a>
    </div>
</section>
        </div>
    );
};

export default HomePage;
