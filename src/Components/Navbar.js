import React from "react";
import { Link } from "react-scroll";
/*Link will take the unique of that component ID*/
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="home" smooth={true} duration={500}>
        Introduction
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        Projects
      </Link>
      <Link to="skills" smooth={true} duration={500}>
        Skills
      </Link>
      <Link to="workexp" smooth={true} duration={500}>
        My Experience
      </Link>
      {/* <Link to="contact" smooth={true} duration={500}>Contact Me</Link> */}
    </div>
  );
}
