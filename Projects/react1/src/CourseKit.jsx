import react from 'react';
import './React.css';

const CourseKit = () => {
    return (
        <>
            <div class="container-fluid py-5  CourseKit">

                <h2 class="section-title">Why Learn with Coursekit?</h2>
                <div class="text-center mb-4">
                    <button class="btn btn-custom">View all courses</button>
                </div>
                <div class="card-container">
                    <div class="card-custom card-1">
                        <i class="bi bi-globe icon"></i>
                        <h4>Learn Everywhere</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    </div>
                    <div class="card-custom card-2">
                        <i class="bi bi-trophy icon"></i>
                        <h4>Learn From The Best</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    </div>
                    <div class="card-custom card-3">
                        <i class="bi bi-briefcase icon"></i>
                        <h4>Lifetime Access</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    </div>
                </div>
            </div>
    
       </>
    )
}

export default CourseKit;