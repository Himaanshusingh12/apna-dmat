import axios from "axios";
import React, { useEffect } from "react";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";
import { useState } from "react";

function TopBar() {
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
        // console.log("The Fetched Testimonial are:", response.data);
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
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar bg-success px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-flex flex-wrap">
              <a
                href={`tel:${accountsetting?.[0]?.mobile_number}`}
                className="text-white small me-4"
              >
                <i className="fas fa-phone-alt text-white me-2"></i>
                {accountsetting?.[0]?.mobile_number || "No number available"}
              </a>
              <a
                href={`mailto:${accountsetting?.[0]?.email_one}`}
                className="text-white small me-0"
              >
                <i className="fas fa-envelope text-white me-2" />
                {accountsetting?.[0]?.email_one || "No email available"}
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center icon-height">
              <a
                href={accountsetting?.[0]?.facebook || "#"}
                className="me-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href={accountsetting?.[0]?.twitter || "#"}
                className="me-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href={accountsetting?.[0]?.instagram || "#"}
                className="me-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href={accountsetting?.[0]?.linkedin || "#"}
                className="me-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href={accountsetting?.[0]?.youtube || "#"}
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Topbar End */}
    </>
  );
}

export default TopBar;
