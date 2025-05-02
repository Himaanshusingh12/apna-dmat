import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Constant";
import { NavLink, useParams } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
import Prefooter from "../Components/Prefooter";

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
      {servicedetail?.[0] && (
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
      {/* <Header pageTitle="Service Detail" breadcrumb1="Service detail" /> */}
      <Header pageTitle={servicedetail?.[0]?.title || "Service Detail"} />

      <div className="container py-5">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : servicedetail.length > 0 ? (
          servicedetail.map((service) => (
            <div
              key={service.id}
              className="row align-items-center bg-white rounded p-4"
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

                <div className="mt-4 text-start chat-button">
                  <a
                    href="https://chat.whatsapp.com/LcuZGSxH3Tj5WQefAWkqTy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary py-2 px-4"
                  >
                    Let's Chat
                  </a>
                </div>
              </div>

              <div className="col-12 mt-4">
                <div className="p-4">
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
      <Prefooter />
      <Footer />
    </>
  );
}

export default ServiceDetails;
