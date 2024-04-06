import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navigation-container">
      <div className="logo-container">
        <div className="logo">
          <Link to={"/"}>LOGO</Link>
        </div>
      </div>
      <ul className="nav-items-container">
        <li className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#solutions">
            Solutions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#signup">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
