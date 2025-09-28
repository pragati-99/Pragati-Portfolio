import react from 'react';

import './React.css';

const Hero=()=>{
    return( <>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">EduCourses</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a class="nav-link" href="#">Courses</a></li>
                    <li className="nav-item"><a class="nav-link" href="#">About Us</a></li>
                    <li className="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    <section className="hero-section">
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center">
            <div className="hero-content">
                <h1>Looking for Quality Courses?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn btn-custom">Learn more</button>
            </div>
            <img src="Images/hero1.png" alt="Education Illustration" className="hero-image"/>
        </div>
    </section>



   
    
    
    
    
    
    
    
    </>

    );
}
export default Hero;