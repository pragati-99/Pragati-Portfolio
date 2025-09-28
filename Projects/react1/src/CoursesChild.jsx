import React from 'react';
import CourseCard from './CourseCard ';
import './React.css';

const courses = [
    {
        image: "/Images/drawing.png",
        title: "Hand Lettering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        students: "1,350",
        rating: 5
    },
    {
        image: "/Images/animation.png",
        title: "Digital Animation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        students: "790",
        rating: 5
    },
    {
        image: "/Images/web-design.png",
        title: "UI/UX Fundamental",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        students: "4,390",
        rating: 5
    },
    {
        image: "/Images/digital-marketing.png",
        title: "Digital Marketing ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        students: "2,350",
        rating: 5
    },
    {
        image: "/Images/graphicdesign.png",
        title: "Graphics Design ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        students: "5,790",
        rating: 5
    },
    {
        image: "/Images/cinema.png",
        title: " Cinomatography",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        students: "2,390",
        rating: 5
    }
];

const CourseChild = () => {
    return (
        <div className="container py-5 m-5">
            <div className="row g-4">
                {courses.map((course, index) => (
                    <CourseCard 
                        key={index} 
                        image={course.image} 
                        title={course.title} 
                        description={course.description} 
                        students={course.students} 
                        rating={course.rating} 
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseChild;
