import react from "react";
import "./Style.css";

const Footer = () => {

    return (
        <>


            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h5><i class="fas fa-graduation-cap"></i> COURSEKIT</h5>
                            <p><i class="fas fa-phone-alt"></i> 236-7070-77</p>
                            <p><i class="fas fa-envelope"></i> info@coursekit.com</p>
                            <p><i class="fas fa-map-marker-alt"></i> Denpasar - Bali</p>
                        </div>
                        <div class="col-md-2">
                            <h5>Quick Link</h5>
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="#">Term of Service</a></p>
                            <p><a href="#">Disclaimer</a></p>
                            <p><a href="#">Credits</a></p>
                            <p><a href="#">FAQ</a></p>
                        </div>
                        <div class="col-md-2">
                            <h5>Company</h5>
                            <p><a href="#">Pricing</a></p>
                            <p><a href="#">Education</a></p>
                            <p><a href="#">Collaborate</a></p>
                            <p><a href="#">Updates</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                        </div>
                        <div class="col-md-2">
                            <h5>Get Started</h5>
                            <p><a href="#">Tutorials</a></p>
                            <p><a href="#">Resources</a></p>
                            <p><a href="#">Guides</a></p>
                            <p><a href="#">Example</a></p>
                            <p><a href="#">Docs</a></p>
                        </div>
                        <div class="col-md-3">
                            <h5>Weekly Newsletter</h5>
                            <input type="text" class="form-control mb-2" placeholder="Name" />
                            <input type="email" class="form-control mb-2" placeholder="Your Email" />
                            <button class="subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;