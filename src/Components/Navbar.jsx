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
        // console.log("The Fetched Accounting setting are:", response.data);
      }
    } catch (error) {
      // console.error(
      //   "Error fetching Account setting:",
      //   error.response?.data || error.message
      // );
      toast.error(
        `Error fetching account setting: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  // for display Active service in the services option
  const [service, Setservice] = useState([]);

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/service/get-active-service`
      );
      if (response.status === 200) {
        Setservice(response.data.data);
        // console.log("The Fetched Service are:", response.data);
      }
    } catch (error) {
      // console.error(
      //   "Error fetching service:",
      //   error.response?.data || error.message
      // );
      toast.error(
        `Error fetching service: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <>
      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-md-4 px-lg-5 py-md-3 sm py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="text-primary">
              <img
                src={accountsetting[0]?.logo}
                className=""
                alt="Website Logo"
              />
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
              <NavLink to="/" className="nav-item nav-link active">
                Home
              </NavLink>
              <NavLink to="about" className="nav-item nav-link">
                About
              </NavLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu m-0">
                  {service.length > 0 ? (
                    service.map((service, index) => (
                      <NavLink
                        key={service.id}
                        // to={`/sub-service/${service.service_id}`}
                        to={`/service/${service.slug}`}
                        className="dropdown-item"
                      >
                        {service.title}
                      </NavLink>
                    ))
                  ) : (
                    <span className="dropdown-item text-muted">
                      No services available
                    </span>
                  )}
                </div>
              </div>
              <NavLink to="/blogs" className="nav-item nav-link">
                Blogs
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact Us
              </NavLink>
            </div>
            <Link
              to="https://a.aonelink.in/ANGOne/e7AiGTL"
              className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0 openbutton"
            >
              Open Dmat Account
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
