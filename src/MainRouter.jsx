import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";

const MainRouter = () => {
    // Create refs for each component
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const servicesRef = useRef(null);

    // Map paths to refs
    const sectionRefs = {
        "/": homeRef,
        "/about": aboutRef,
        "/education": educationRef,
        "/project": projectRef,
        "/contact": contactRef,
        "/services": servicesRef,
    };

    // Scroll to the component based on the route
    const location = useLocation();
    useEffect(() => {
        const ref = sectionRefs[location.pathname];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div>
            <Layout />
            {/* Components with refs */}
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={educationRef}>
                <Education />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div ref={servicesRef}>
                <Services />
            </div>
            <div>
                <HireMe />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainRouter;
