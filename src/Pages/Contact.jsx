import React, { useState } from "react";
import Header from "../Components/Header";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";

function Contact() {
  const [formData, SetFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "") {
      toast.error("Name field is required");
      return;
    }
    if (formData.email === "") {
      toast.error("Email field is required");
      return;
    }

    if (formData.phone === "") {
      toast.error("Phone field is required");
      return;
    }

    if (formData.project === "") {
      toast.error("Project field is required");
      return;
    }

    if (formData.subject === "") {
      toast.error("Subjet field is required");
      return;
    }

    if (formData.message === "") {
      toast.error("Message field is required");
      return;
    }

    try {
      axios.post(`${BACKEND_URL}/api/users/add-user`, formData);
      alert("Message send successfully");
      // Reset form data
      SetFormdata({
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error("Error sending message");
      console.error(err);
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Contact Us" breadcrumb1="Contact" />
      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <div className="bg-light rounded p-5 mb-5">
                  <h4 className="text-primary mb-4">Get in Touch</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fas fa-map-marker-alt fa-2x" />
                        </div>
                        <div>
                          <h4>Address</h4>
                          <p className="mb-0">
                            A 1018 Sun Westbank River Front Ashram Road
                            Ahmedabad 380009
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fas fa-envelope fa-2x" />
                        </div>
                        <div>
                          <h4>Mail Us</h4>
                          <p className="mb-0">
                            <a
                              href="mailto: apnademat@gmail.com"
                              className="text-secondary"
                            >
                              apnademat@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fa fa-phone-alt fa-2x" />
                        </div>
                        <div>
                          <h4>Telephone</h4>
                          <p className="mb-0">8980989866</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fab fa-firefox-browser fa-2x" />
                        </div>
                        <div>
                          <h4>Yoursite@ex.com</h4>
                          <p className="mb-0">(+012) 3456 7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-light p-5 rounded h-100 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h4 className="text-primary">Send Your Message</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control border-0"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="phone"
                            className="form-control border-0"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <label htmlFor="phone">Your Phone</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="project"
                            name="project"
                            placeholder="Project"
                            value={formData.project}
                            onChange={handleChange}
                          />
                          <label htmlFor="project">Your Project</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            name="message"
                            style={{ height: 160 }}
                            defaultValue={""}
                            value={formData.message}
                            onChange={handleChange}
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="rounded h-100">
                <iframe
                  className="rounded h-100 w-100"
                  style={{ height: 400 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.791399452939!2d72.57103599999999!3d23.0314302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850885fa2bc5%3A0xe970e5c262a79db!2sAngel%20One%20(Angel%20Broking)!5e0!3m2!1sen!2sin!4v1741092508316!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      <Footer />
    </>
  );
}

export default Contact;
