import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

function Header({ pageTitle, breadcrumb1 }) {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="text-primary">
              <i className="fas fa-search-dollar me-3" />
              Stocker
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/services" className="nav-item nav-link">
                Services
              </NavLink>
              <NavLink to="blog.html" className="nav-item nav-link">
                Blogs
              </NavLink>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">Pages</span>
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="feature.html" className="dropdown-item">
                    Our Features
                  </NavLink>
                  <NavLink to="team.html" className="dropdown-item">
                    Our team
                  </NavLink>
                  <NavLink to="testimonial.html" className="dropdown-item">
                    Testimonial
                  </NavLink>
                  <NavLink to="offer.html" className="dropdown-item">
                    Our offer
                  </NavLink>
                  <NavLink to="FAQ.html" className="dropdown-item">
                    FAQs
                  </NavLink>
                  <NavLink to="404.html" className="dropdown-item">
                    404 Page
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact Us
              </NavLink>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
            >
              Get Appointment
            </a>
          </div>
        </nav>
        {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              {pageTitle}
            </h4>
            <ol
              className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">
                {breadcrumb1}
              </li>
            </ol>
          </div>
        </div>
        {/* Header End */}
      </div>

      {/* Header End */}
    </>
  );
}

export default Header;
