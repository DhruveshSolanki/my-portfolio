import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home  from "./components/Home"
import  About  from "./components/About"
import  Education  from "./components/Education"
import  Project  from "./components/Project"
import  Contact  from "./components/Contact"
import  Services  from "./components/Services"

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/services" element={<Services />} />
            </Routes>
        </div>
    )
}
export default MainRouter