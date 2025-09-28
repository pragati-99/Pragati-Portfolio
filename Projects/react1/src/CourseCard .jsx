import React from 'react';
import './React.css';

const CourseCard = ({ image, title, description, students, rating }) => {
    return (
        <div className="col-md-4">
            <div className="card course-card">
                <div className="course-image">
                    <img src={image} className="img-fluid" alt={title} />
                    <div className="play-btn">
                        <i className="fas fa-play-circle"></i>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h5 className="course-title">{title}</h5>
                    <p className="course-desc">{description}</p>
                    <div className="course-info">
                        <span><i className="fas fa-user-graduate"></i> {students}</span>
                        <span className="stars">{'★'.repeat(rating)}</span>
                    </div>
                    <a href="#" className="btn learn-btn">Learn more</a>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
