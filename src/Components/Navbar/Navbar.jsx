import { Link, NavLink } from 'react-router-dom'
import { LuGithub } from "react-icons/lu";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 container-fluid">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand">Port<span>folio</span></NavLink>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/home"} className="nav-link" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link" >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/service"} className="nav-link" >Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/project"} className="nav-link" >Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link" >Contact</NavLink>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href='#' className="nav-link d-flex align-items-center git__icon" >Git<LuGithub />Hub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar