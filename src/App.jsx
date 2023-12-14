import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// pages
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Service from "./Pages/Service/Service.jsx"
import Project from "./Pages/Project/Project.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Details from "./Pages/Details/Details.jsx"
import NotFound from "./Pages/NotFound/NotFound.jsx"
// routes
import { Route, Routes } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App