import React from "react";
import { NavLink, Link } from "react-router-dom";
import Episodes from "../../Pages/Episodes";
import Location from "../../Pages/Location";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fa-sharp fa-solid fa-bars open text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link">
              Charecters
            </NavLink>
            <NavLink to="episodes" className="nav-link">
              Episodes
            </NavLink>
            <NavLink to="location" className="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
