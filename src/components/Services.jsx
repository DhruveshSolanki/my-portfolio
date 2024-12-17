import Container from "react-bootstrap/esm/Container"
import responsive from "../assets/images/responsive.svg"
import toolbox from "../assets/images/toolbox.svg"

/*
=========================================================
* Student Name: Dhruvesh Solanki (301452856)
* Student ID: 301452856
* This Page Describes Services 
=========================================================
*/

export default function Services() {
    return (<>
        <section className="section" id="service">
            <Container className="text-center pt-5">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Services</h6>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={toolbox}
                                    alt=""
                                    className="icon" />
                                <h6 className="title">Enterprise Java Solutions</h6>
                                <p className="subtitle">Build scalable, efficient, and secure applications using Java for backend,
                                    desktop, and enterprise systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={responsive}
                                    alt=""
                                    className="icon" />
                                <h6 className="title">Modern JavaScript Frameworks</h6>
                                <p className="subtitle">Develop dynamic, interactive web applications with
                                    Angular and React using modern JavaScript and TypeScript.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={toolbox}
                                    alt=""
                                    className="icon" />
                                <h6 className="title">Cross-Platform Mobile App Development</h6>
                                <p className="subtitle">Create responsive, user-friendly mobile apps for Android using
                                    modern development tools and technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={responsive}
                                    alt=""
                                    className="icon" />
                                <h6 className="title">Advanced Database Architecture</h6>
                                <p className="subtitle">Design and implement robust, high-performance databases using
                                    SQL, Oracle, MySQL, and NoSQL technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>)
}