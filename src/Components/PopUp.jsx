import axios from "axios";
import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";

function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const isPopupShown = localStorage.getItem("popupShown");

    // If not shown before, trigger the popup after 5 seconds
    if (!isPopupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        const modal = new window.bootstrap.Modal(
          document.getElementById("popupModal")
        );
        modal.show();
      }, 5000);

      // Cleanup the timer when the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupShown", "true");
    console.log("Popup closed, setting 'popupShown' to true");
  };

  // Reset the popup to show again
  const resetPopup = () => {
    localStorage.removeItem("popupShown");
    setShowPopup(false);
  };

  // section for add data by user
  const [formData, SetFormdata] = useState({
    name: "",
    mobile_number: "",
    services: [],
  });

  const servicesList = ["Dmat Account", "Mutual Funds SIP", "Insurance"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle checkbox selection for services
  const handleServiceChange = (service) => {
    SetFormdata((prevData) => {
      const isSelected = prevData.services.includes(service);
      return {
        ...prevData,
        services: isSelected
          ? prevData.services.filter((s) => s !== service)
          : [...prevData.services, service],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "") {
      toast.error("Name field is required");
      return;
    }
    if (formData.mobile_number === "") {
      toast.error("Mobile number field is required");
      return;
    }

    if (formData.services.length === 0) {
      toast.error("Please select service");
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/api/popup-detail/add`, formData);
      toast.success("Details Submited");
      SetFormdata({
        name: "",
        mobile_number: "",
        services: [],
      });
    } catch (err) {
      toast.error("Error sending message");
      console.error(err);
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="popupModal"
        tabIndex="-1"
        aria-labelledby="popupModalLabel"
        aria-hidden="true"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="popupModalLabel">
                Enter Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closePopup}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile_number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile_number"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-3">
                  {/* Label for Interested Services */}
                  <label htmlFor="serviceDropdown" className="form-label">
                    Interested Services
                  </label>

                  {/* Input Field (Dropdown Toggle) */}
                  <div className="dropdown">
                    <input
                      type="text"
                      className="form-control dropdown-toggle"
                      id="serviceDropdown"
                      data-bs-toggle="dropdown"
                      value={formData.services.join(", ")}
                      readOnly
                      placeholder="Select services"
                    />

                    {/* Bootstrap Dropdown Menu */}
                    <ul className="dropdown-menu w-100">
                      {servicesList.map((service, index) => (
                        <li key={index} className="dropdown-item">
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            id={`service-${index}`}
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`service-${index}`}
                          >
                            {service}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Button for testing */}
      <button onClick={resetPopup}>Reset Popup</button>
    </>
  );
}

export default PopUp;
