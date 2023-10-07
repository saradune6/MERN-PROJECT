import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={logo1} alt="Logo" width="160" height="40"  />
        </a>
        
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/signup">
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
