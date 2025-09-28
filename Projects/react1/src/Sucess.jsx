import react from "react";

import "./Style.css";

const Sucess = () => {

    return (

        <>
             <div class="container py-5">
        <div class="row align-items-center">
            <div class="col-md-6 illustration">
                <img src="Images/Untitled-3.png" alt="Success Story Illustration"/>
            </div>
            <div class="col-md-6">
                <h2 class="text-center">Success Story</h2>
                <div id="testimonialCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img src="Images/tes1.jpg" alt="User" class="rounded-circle" width="50"/>
                            <p class="testimonial-author">Trisnowati</p>
                            <p class="testimonial-role">Manager</p>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <p class="testimonial-text">Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <img src="Images/tes2.jpg" alt="User" class="rounded-circle" width="50"/>
                            <p class="testimonial-author">John Doe</p>
                            <p class="testimonial-role">CEO</p>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <p class="testimonial-text">Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <img src="Images/tes2.jpg" alt="User" class="rounded-circle" width="50"/>
                            <p class="testimonial-author">John Doe</p>
                            <p class="testimonial-role">CEO</p>
                        </div>
                    </div>
                    <button class="carousel-control-prev d-block" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next d-block" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
            


        </>
    )
}
export default Sucess;