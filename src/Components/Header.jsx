import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";

function Header({ pageTitle, breadcrumb1 }) {
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

  //section for fetch active service
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

  // Breadcrumb logic
  const pathnames = location.pathname.split("/").filter((x) => x);
  const formattedPath = pathnames.length
    ? pathnames[pathnames.length - 1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    : "Home";

  return (
    <>
      {/* Header Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary">
              <img src={accountsetting[0]?.logo} className="" alt />
            </h1>
          </Link>
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

              {/* blog section */}
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
        {/* Header Start */}
        {/* <div className="container-fluid bg-breadcrumb">
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
              <li className="breadcrumb-item active text-primary">
                {breadcrumb1}
              </li>
            </ol>
          </div>
        </div> */}
        {/* from here */}
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              {pageTitle || formattedPath}
            </h4>
            <ol
              className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              {breadcrumb1 ? (
                <li className="breadcrumb-item active text-primary">
                  {breadcrumb1}
                </li>
              ) : (
                pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  const formatted = value
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <li
                      key={index}
                      className={`breadcrumb-item ${
                        isLast ? "active text-primary" : ""
                      }`}
                    >
                      {formatted}
                    </li>
                  );
                })
              )}
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
