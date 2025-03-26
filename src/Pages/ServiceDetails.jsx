import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Constant";
import { useParams } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ServiceDetails() {
  const { subservice_id } = useParams();
  const [servicedetail, Setservicedetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicedetail();
  }, [subservice_id]);

  const fetchServicedetail = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/service-detail/subservice-detail/${subservice_id}`
      );
      if (response.status === 200) {
        Setservicedetail(response.data.data);
        console.log("The fetched services details", response.data);
      }
    } catch (error) {
      console.error("Error fetching service details:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Service Detail" breadcrumb1="Service detail" />
      <div className="container py-5">
        {servicedetail.length > 0 ? (
          servicedetail.map((service) => (
            <div key={service.id} className="row g-5">
              {/* Image and Short Description Section */}
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img
                  src={service.image}
                  alt="Service"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h3 className="text-primary fw-bold">Service Overview</h3>
                  <p className="lead">{service.sort_description}</p>
                </div>
              </div>

              {/* Full Description Section */}
              <div className="col-12 mt-4">
                <div className="p-4 bg-light">
                  <h4 className="text-secondary fw-bold">
                    Service Description
                  </h4>
                  <p className="mt-2">{service.description}</p>
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
