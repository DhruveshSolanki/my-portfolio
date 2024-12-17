import { Link } from 'react-router-dom';
import Container from "react-bootstrap/esm/Container"

/*
=========================================================
* Student Name: Dhruvesh Solanki (301452856)
* Student ID: 301452856
* This Page Describes Services 
=========================================================
*/

export default function Footer() {
    return (<>
        <Container>
            <footer className="footer">
                <div className="social-links text-center m-auto ml-sm-auto">
                    <Link to="https://www.linkedin.com/in/dhruvesh-solanki-1a9552137/" target='_blank' className="link"><i className="ti-linkedin"></i></Link>
                    <Link to="https://www.instagram.com/s_.dhruv._/profilecard/?igsh=MThweWc1YnRybXU0cA==" target='_blank' className="link"><i className="ti-instagram"></i></Link>
                    <Link to="https://www.facebook.com/share/1EGXnDuAoM/?mibextid=wwXIfr" target='_blank' className="link"><i className="ti-facebook"></i></Link>
                </div>
            </footer>
        </Container>
    </>)
}