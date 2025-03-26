import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import { BACKEND_URL } from "../Constant";
import axios from "axios";
import { toast } from "react-toastify";
function Navbar() {
  const [accountsetting, Setaccountsetting] = useState([]);

  useEffect(() => {
    fetchAccountsetting();
  }, []);

  const fetchAccountsetting = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/account-settings/get-setting`
      );
      if (response.status === 200) {
        Setaccountsetting(response.data.data);
        console.log("The Fetched Testimonial are:", response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching Account setting:",
        error.response?.data || error.message
      );
      toast.error(
        `Error fetching account setting: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  return (
    <>
      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="text-primary">
              <img src="img/dmat-logo.png" className="" alt />
            </h1>
          </a>
          {/* <a href="#" className="navbar-brand p-0">
            <h1 className="text-primary">
              <img
                src={
                  accountsetting?.[0]?.logo
                    ? `${BACKEND_URL}${accountsetting[0].logo}`
                    : "img/dmat-logo.png"
                }
                alt="Logo"
                className=""
              />
            </h1>
          </a> */}
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
              <NavLink to="/" className="nav-item nav-link active">
                Home
              </NavLink>
              <NavLink to="about" className="nav-item nav-link">
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
                  <span className="dropdown-toggle">Products</span>
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="feature.html" className="dropdown-item">
                    stock broking
                  </NavLink>
                  <NavLink to="team.html" className="dropdown-item">
                    Equity
                  </NavLink>
                  <NavLink to="testimonial.html" className="dropdown-item">
                    F&O
                  </NavLink>
                  <NavLink to="offer.html" className="dropdown-item">
                    IPOs
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
      </div>
    </>
  );
}

export default Navbar;
