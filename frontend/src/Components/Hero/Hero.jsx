import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import homePage from '../Assets/1231.mp4';  // Your MP4 video

function Hero() {
    return (
        <div className="hero">
            {/* Video background */}
            <video className="hero-video" autoPlay loop muted>
                <source src={homePage} type="video/mp4" />
            </video>

            <div className="hero-left">
                <div className="ruby-red-text">
                    <p>Ruby & Red</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow icon" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
