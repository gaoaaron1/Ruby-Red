import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_btn.png';
import hero_image from '../Assets/hero_image.png';
import homePage from '../Assets/1231.mp4';  // Your MP4 video
import logo from '../Assets/logo.png';  // Import logo image

function Hero() {
    return (
        <div className="hero">
            {/* Video background */}
            <video className="hero-video" autoPlay loop muted>
                <source src={homePage} type="video/mp4" />
            </video>

            <div className="hero-left">
                {/* Logo in the Hero section */}
                <div className="hero-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>

                <div className="ruby-red-text">
                    <p>Ruby & Red</p>
                </div>

                <div className="hero-explore">
                    <p>Explore the features</p>
                    <img src={arrow_icon} alt="" />
                </div>

                <div className="hero-dot-play">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hero;
