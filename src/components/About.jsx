import Container from "react-bootstrap/esm/Container";
import man_img from "../assets/images/dhruvesh.jpg"

/*
=========================================================
* Student Name: Dhruvesh Solanki (301452856)
* Student ID: 301452856
* This Page Describes About Me  
=========================================================
*/

export default function About() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '../assets/file/DhruveshSolanki-Resume(Canada).pdf';
        link.download = 'DhruveshSolanki-Resume(Canada).pdf';
        link.click();
    };

    return (<>
        <section className="section" id="about">
            <Container className="text-center pt-5">
                <div className="about">
                    <div className="about-img-holder">
                        <img src={man_img} className="about-img"
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            Currently I am student of Software Engineering Technology (Fast-Track) Advanced Diploma.
                            I have 1.8+ years of experience in designing and developing various software applications and enterprise information system.
                            I am proficient in Java, J2EE, Oracle Database Management, HTML, CSS, JavaScript and Angular.
                            Additionally, I am skilled with version control tools including Git, GitHub, and Bitbucket.
                            <br />
                            <br />
                            <q className="section-subtitle">Self-motivated and well-disciplined when it comes to work</q>
                        </p>
                        <button className="btn-rounded btn btn-outline-primary mt-4" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </Container>
        </section>
    </>)
}