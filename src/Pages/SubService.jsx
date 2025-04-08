import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../Styles/Service.css";
import { BACKEND_URL } from "../Constant";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function SubService() {
  const { slug } = useParams();
  const [subservices, setSubservices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubServices();
  }, [slug]);

  const fetchSubServices = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/subservice/subservices/${slug}`
      );
      if (response.status === 200) {
        setSubservices(response.data.data);
        console.log("The fetched subservices are", response.data);
      }
    } catch (error) {
      console.error("Error fetching subservices:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <Header pageTitle="Services" breadcrumb1="Sub Services" />
      <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Subservices</h5>
          </div>
          <div className="row g-5">
            {subservices.length > 0 ? (
              subservices.map((subservice, index) => (
                <div
                  className="col-lg-3 col-md-6 wow zoomIn"
                  data-wow-delay={`${0.3 + index * 0.3}s`}
                  key={subservice.subservice_id}
                >
                  <NavLink
                    // to={`/service-detail/${subservice.slug}`}
                    // to={`/service/${slug}/${subservice.slug}`}
                    to={`/${slug}/${subservice.slug}`}
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="service-icon">
                        <i className={`fa ${subservice.icon} text-white`} />
                      </div>
                      <h4 className="mb-3">{subservice.title}</h4>
                      <p className="m-0">{subservice.description}</p>
                    </div>
                  </NavLink>
                </div>
              ))
            ) : (
              <p className="text-center">No subservices available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SubService;
