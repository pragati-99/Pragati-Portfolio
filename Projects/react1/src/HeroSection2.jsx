import React from 'react';
import './Style.css';


const HeroSection2 = () => {
    return (


        <div className="hero-container">

            <div className="hero-image">
                <img src={'Images/home-sec-21.png'} alt="E-learning" />
            </div>
            <div className="hero-content">
                <h1>E-Courses Platform <br /> with Complete Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

                <div className="progress-bar">
                    <span>Lifetime Access</span>
                    <div className="progress">
                        <div className="progress-fill" style={{ width: '97%' }}>97%</div>
                    </div>
                </div>

                <div className="progress-bar">
                    <span>Cloud Storage</span>
                    <div className="progress">
                        <div className="progress-fill" style={{ width: '89%' }}>89%</div>
                    </div>
                </div>

                <div className="progress-bar">
                    <span>Private Q&A</span>
                    <div className="progress">
                        <div className="progress-fill" style={{ width: '94%' }}>94%</div>
                    </div>
                </div>

                <button className="hero-btn">Get Started</button>
            </div>


        </div>
    );
};

export default HeroSection2;
