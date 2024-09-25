import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        'full-name': '',
        'mobile-number': '',
        email: '',
        'project-address': '',
        city: '',
        state: '',
        description: ''
    });

    // Handle form input change
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
    
            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    'full-name': '',
                    'mobile-number': '',
                    email: '',
                    'project-address': '',
                    city: '',
                    state: '',
                    description: ''
                });
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form');
        }
    };
    

    return (
        <div>
            {/* Header Section */}
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-form-wrapper">
                        <h2><span>Get</span> In Touch</h2>
                        <p>Ready to start a project? Contact us today!</p>

                        {/* Contact Form */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="full-name">Full Name</label>
                                <input
                                    type="text"
                                    id="full-name"
                                    name="full-name"
                                    value={formData['full-name']}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile-number">Mobile Number</label>
                                <input
                                    type="tel"
                                    id="mobile-number"
                                    name="mobile-number"
                                    value={formData['mobile-number']}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="project-address">Project Address</label>
                                <input
                                    type="text"
                                    id="project-address"
                                    name="project-address"
                                    value={formData['project-address']}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="state">State/Region</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="description">Description of Service</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                    <div className="contact-info-wrapper">
                        <h2>Feel free to reach out with any inquiries, feedback, or simply to connect—we're here and eager to listen.</h2>
                        <ul>
                            <li>We serve Strata, Commercial, Industrial, Government & all Infrastructure.</li>
                            <li>We do service private residential works.</li>
                            <li>We do service buildings above three stories.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
