import { Container, Row } from "react-bootstrap";

export default function HireMe() {
    return (<>
        <section className="section-sm bg-primary">
            <Container className="text-center text-sm-left">
                <Row className="align-items-center">
                    <div className="col-sm offset-md-1 mb-4 mb-md-0">
                        <h6 className="title text-light">Want to work with me?</h6>
                        <p className="m-0 text-light">Always feel free to Contact & Hire me</p>
                    </div>
                    <div className="col-sm offset-sm-2 offset-md-3">
                        <a
                            href={`mailto:dvsolanki21dev@gmail.com?subject=Let's%20Work%20Together&body=Hi%20[Your%20Name],%0A%0AI%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20potential%20collaboration.%20Please%20let%20me%20know%20a%20good%20time%20to%20connect.%0A%0ABest%20regards,%0A[Your%20Name]%0A[Your%20Contact%20Information]`}
                            className="btn btn-lg my-font btn-light rounded" >
                            Hire Me
                        </a>
                    </div>
                </Row>
            </Container>
        </section>
    </>)
}