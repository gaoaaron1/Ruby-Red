import React, { useEffect, useState } from 'react';
import Sidebar from '../UI/Sidebar/Sidebar';
import './CSS/About.css'; // Import CSS for styles
import AboutVideo from '../Components/Assets/1231.mp4';
import AboutImage from '../Components/Assets/About-bg.jpg';

const About = () => {
    // Scroll to the top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Empty dependency array to ensure it runs only once on mount

    return (
        <div className="about-wrapper">

            {/* Video background */}
                <video className="about-video" autoPlay loop muted>
                <source src={AboutVideo} type="video/mp4" />
            </video>
            {/* Sidebar */}
            <Sidebar />

            {/* Company Information Container */}
            <div className="about-content">
                <div className="company-info">
                    <h1>About Our Company</h1>
                    <p>We are committed to delivering high-quality products that bring joy and style to our customers. Our mission is to...</p>
                    <img src={AboutImage} alt="Company Logo" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default About;
