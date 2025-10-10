import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link
        to="start"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
        activeClass="active"
        className="nav-btn"
      >
        START
      </Link>

      <Link
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
        activeClass="active"
        className="nav-btn"
      >
        ABOUT ME
      </Link>

      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
        activeClass="active"
        className="nav-btn"
      >
        PROJECTS
      </Link>

      <Link
        to="finish"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
        activeClass="active"
        className="nav-btn"
      >
        FINISH
      </Link>
    </nav>
  );
}

export default NavBar;
