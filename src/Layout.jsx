
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

export default function Layout() {

    const [isActive, setIsActive] = useState(false);

    const [isSticky, setIsSticky] = useState(false);


    // Function to handle nav-bar toggle event
    const handleToggle = () => {
        setIsActive(!isActive); // Toggle the state
    };

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 20) { // 20 is the offset equivalent to `data-offset-top="20"`
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    //Function to handle affix class
    const location = useLocation();
    const isActiveURL = (path) => {
        return location.pathname === path;
    }

    // Adding scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        {/* <nav className={`custom-navbar ${isSticky ? 'affix' : 'affix-top'}`} > */}
        <nav className={`custom-navbar ${isActiveURL('/') ? 'affix-top' : 'affix'}`} >
            <Container>
                <Link className="logo" to="/">DS Portfolio</Link>
                <ul className={`nav ${isActive ? 'show' : ''}`}>
                    <li className="item">
                        <Link className="link" to="/"> Home</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/education"> Education</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/project"> Projects</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/services"> Services</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/about"> About Me</Link>
                    </li>
                    <li className="item ml-md-3">
                        <Link className="btn btn-primary" to="/contact"> Contact</Link>
                    </li>
                </ul>
                <a href="javascript:void(0)" id="nav-toggle" onClick={handleToggle} className={`hamburger hamburger--elastic ${isActive ? 'is-active' : ''}`}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </a>
            </Container>
        </nav>
    </>
    )
}
