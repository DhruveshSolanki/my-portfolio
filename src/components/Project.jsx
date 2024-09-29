import Container from "react-bootstrap/esm/Container";
import folio1 from "../assets/images/passport.png"
import folio2 from "../assets/images/ductbox.jpeg"
import folio3 from "../assets/images/mealmaster.png"

/*
=========================================================
* Student Name: Dhruvesh Solanki (301452856)
* Student ID: 301452856
* This Page Describes Project Details  
=========================================================
*/
export default function Project(){
    return (<>
    <section className="section" id="portfolio">
        <Container className="text-center pt-5">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Projects</h6>
            <div className="row">
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img src={folio1} className="portfolio-card-img"
                            alt="" />
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Digital Passport</h4>
                                    <p className="font-weight-normal">Category: Web App</p>
                                    <p className="font-weight-normal">Tech Stack:<br/> Java, Spring Boot, Hibenate</p>
                                    <p className="font-weight-normal">Role: <br/>Backend Developer</p>
                            </span>
                        </span>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src={folio2}
                            alt="" />
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Ducting Boxes</h4>
                                    <p className="font-weight-normal">Category: Web App</p>
                                    <p className="font-weight-normal">Tech Stack:<br/> Java, Spring Boot, Hibenate</p>
                                    <p className="font-weight-normal">Role: <br/>Backend Developer</p>
                            </span>
                        </span>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src={folio3}
                            alt="" />
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Meal Master</h4>
                                    <p className="font-weight-normal">Category: Web App</p>
                                    <p className="font-weight-normal">Tech Stack: <br/>Java, Spring Boot, Angular,<br/> Oracle Database</p>
                                    <p className="font-weight-normal">Role: <br/>Full Stack Developer</p>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </Container>
    </section>
    </>)
}