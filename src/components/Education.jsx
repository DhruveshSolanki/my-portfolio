import Container from "react-bootstrap/esm/Container";
import avatar1 from "../assets/images/centennial.jpeg"
import avatar2 from "../assets/images/charusat.jpeg"
import avatar3 from "../assets/images/parul.jpeg"

/*
=========================================================
* Student Name: Dhruvesh Solanki (301452856)
* Student ID: 301452856
* This Page Describes My Education Details 
=========================================================
*/
export default function Education(){
    return (<>
    <section className="section" id="testmonial">
        <Container className="text-center pt-3">
            <p className="section-subtitle">What I Studied ?</p>
            <h6 className="section-title mb-6">Education</h6>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={avatar1} className="testimonial-card-img"
                                alt="" />
                        </div>
                        <div className="testimonial-card-body">
                        <p className="testimonial-card-subtitle">May 2024 - Present</p>
                        <p className="testimonial-card-subtitle">Centennial College, Canada</p>
                            <h6 className="testimonial-card-title">Advance Diploma in Software Engineering Technology - Fast Track</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={avatar2} className="testimonial-card-img"
                                alt="" />
                        </div>
                        <div className="testimonial-card-body">
                        <p className="testimonial-card-subtitle">Sept 2019 - May 2022</p>
                        <p className="testimonial-card-subtitle">Charotar University of Science and Technology, India</p>
                            <h6 className="testimonial-card-title">Bachelor of Computer Science and Engineering </h6>
                        </div>
                    </div>
                </div>
                <div className="offset-md-3 col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={avatar3} className="testimonial-card-img"
                                alt="" />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Aug 2016 - May 2019</p>
                            <p className="testimonial-card-subtitle">Parul Institute of Engineering and Technology - Diploma Studies , India</p>
                            <h6 className="testimonial-card-title">Diploma in Computer Engineering </h6>
                        </div>
                    </div>
                </div>
            </div>
        </Container> 
    </section>
    </>)
}