import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BACKEND_URL } from "../Constant";

function Footer() {
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
      {/* Footer Start */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div
          className="container py-5 border-start-0 border-end-0"
          style={{
            border: "1px solid",
            borderColor: "rgb(255, 255, 255, 0.08)",
          }}
        >
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <h4 className="text-white mb-4">Apna Dmat</h4>
                <p className="mb-4 text-white">
                  <span className="font-weight-bold">
                    Taking care of 3500+ clients
                  </span>{" "}
                  <br />
                  Authorized partner of{" "}
                  <span className="text-primary font-weight-bold">
                    Angel One
                  </span>{" "}
                  for the last 7 years <br />
                  <span className="font-weight-bold">
                    9 years of immense experience
                  </span>{" "}
                  with Angel One as both an employee & partner <br />
                  Elite partnership with{" "}
                  <span className="text-primary font-weight-bold">
                    Angel One
                  </span>{" "}
                  and AMFI certified MF distributor
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item text-white">
                <h4 className="text-white mb-4">Quick Links</h4>
                <NavLink to="/about">
                  <i className="fas fa-angle-right me-2" /> About Us
                </NavLink>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Feature
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Attractions
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Tickets
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Blog
                </a>
                <NavLink to="/contact">
                  <i className="fas fa-angle-right me-2" /> Contact us
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item text-white">
                <h4 className="text-white mb-4">Support</h4>
                <NavLink to="privacy-policy">
                  <i className="fas fa-angle-right me-2" /> Privacy Policy
                </NavLink>
                <NavLink to="/terms-condition">
                  <i className="fas fa-angle-right me-2" /> Terms &amp;
                  Conditions
                </NavLink>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Disclaimer
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Support
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> FAQ
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Help
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Contact Info</h4>
                <div className="d-flex align-items-center">
                  <p className="text-white small mb-0">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {accountsetting?.[0]?.address || "No address available"}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <a
                    href={`mailto:${accountsetting?.[0]?.email_one}`}
                    className="text-white small me-0"
                  >
                    <i className="fas fa-envelope text-primary me-2" />
                    {accountsetting?.[0]?.email_one || "No email available"}
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <p className="text-white small mb-0">
                    <i className="fa fa-phone-alt text-primary me-3" />
                    {accountsetting?.[0]?.mobile_number ||
                      "No mobile number available"}
                  </p>
                </div>
                <div className="d-flex mt-4">
                  <a
                    href={accountsetting?.[0]?.facebook || "#"}
                    className="btn btn-primary btn-sm-square rounded-circle me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    href={accountsetting?.[0]?.twitter || "#"}
                    className="btn btn-primary btn-sm-square rounded-circle me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    href={accountsetting?.[0]?.instagram || "#"}
                    className="btn btn-primary btn-sm-square rounded-circle me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a
                    href={accountsetting?.[0]?.linkedin || "#"}
                    className="btn btn-primary btn-sm-square rounded-circle me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a
                    href={accountsetting?.[0]?.youtube || "#"}
                    className="btn btn-primary btn-sm-square rounded-circle me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2" />
                  Apna Dmat
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              Designed By&nbsp;
              <a
                className="border-bottom text-white"
                href="https://codeinweb.com/"
              >
                Codeinweb
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up" />
      </a>
    </>
  );
}

export default Footer;
