import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Constant";
import { NavLink, useParams } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

function ServiceDetails() {
  const { subservice_slug } = useParams();
  const [servicedetail, Setservicedetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicedetail();
  }, [subservice_slug]);

  const fetchServicedetail = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/service-detail/subservice-detail/${subservice_slug}`
      );
      if (response.status === 200) {
        Setservicedetail(response.data.data);
        // console.log("The fetched service detail is", response.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {servicedetail && (
        <Helmet>
          <title>{servicedetail[0].meta_title}</title>
          <meta
            name="description"
            content={servicedetail[0].meta_description}
          />
          <meta name="keywords" content={servicedetail[0].meta_keywords} />
        </Helmet>
      )}
      <TopBar />
      <Header pageTitle="Service Detail" breadcrumb1="Service detail" />
      <div className="container py-5">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : servicedetail.length > 0 ? (
          servicedetail.map((service) => (
            <div
              key={service.id}
              className="row g-5 align-items-center bg-white shadow rounded p-4 mb-5"
            >
              <div className="col-md-6 text-center">
                <img
                  src={service.image}
                  alt="Service"
                  className="img-fluid rounded shadow-sm"
                  style={{
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>

              <div className="col-md-6">
                <h2 className="text-primary fw-bold mb-3">Service Overview</h2>
                <p className="lead text-muted">{service.sort_description}</p>
                {/* Contact Us Button */}
                <div className="text-center mt-4">
                  <NavLink to="/contact" className="btn btn-primary py-2 px-4">
                    Contact Us
                  </NavLink>
                </div>
              </div>

              <div className="col-12 mt-4">
                <div className="bg-light p-4 rounded shadow-sm">
                  <div
                    className="mb-0"
                    style={{ lineHeight: "1.8" }}
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  ></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No services available</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ServiceDetails;
