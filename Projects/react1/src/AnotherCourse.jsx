import react from "react";

import "./Style.css";

const AnotherCourse=()=>{

    return(

        <>

<div class="container course-container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2>Discover Our <br/> Popular Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                
                <div class="course-grid">
                    <div class="course-box">
                        <img src="Images/logo-popular-courses.png" alt="imge" />
                        <h5>Digital Painting</h5>
                    </div>
                    <div class="course-box">
                        <img src="Images/logo-popular-courses2.png" alt="imge" />
                        <h5>Code Learning</h5>
                    </div>
                    <div class="course-box">
                       <img src="Images/logo-popular-courses3.png" alt="imge" />
                        <h5>Language Learning</h5>
                    </div>
                    <div class="course-box">
                       <img src="Images/logo-popular-courses4.png" alt="imge" />
                        <h5>Web Design</h5>
                    </div>
                </div>
                
                <button class="btn-courses mt-4">More Courses</button>
            </div>
            <div class="col-md-6 text-center image-container">
                <img src="Images/bg-discover-front.png" alt="Teacher Illustration" class="img-fluid"/>
            </div>
        </div>
    </div>
        </>
    )

}
export default AnotherCourse;

