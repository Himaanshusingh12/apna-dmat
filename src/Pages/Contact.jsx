import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

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
      // console.error(err);
    }
  };

  // section for fetch account details
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
      }
    } catch (error) {
      toast.error(
        `Error fetching account setting: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  // section for fetch meta title , meta description and meta keywords
  const [seoDetail, SetseoDetail] = useState([]);

  useEffect(() => {
    fetchSeodetail();
  }, []);

  const fetchSeodetail = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/seo/get-active`);
      if (response.status === 200) {
        SetseoDetail(response.data.data);
        // console.log("The Fetched seo detail are:", response.data);
      }
    } catch (error) {
      toast.error(
        `Error fetching seo detail: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const contactSeo = seoDetail.find((item) => item.page_name === "contact");
  return (
    <>
      {contactSeo && (
        <Helmet>
          <title>{contactSeo.meta_title}</title>
          <meta name="description" content={contactSeo.meta_description} />
          <meta name="keywords" content={contactSeo.meta_keywords} />
        </Helmet>
      )}
      <TopBar />
      <Header pageTitle="Contact Us" breadcrumb1="Contact" />
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="row g-5 mb-4">
            <div className="col-12">
              <div className="bg-light rounded p-4 row text-center g-3">
                <div className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
                  <div className="text-primary mb-2">
                    <i className="fas fa-map-marker-alt fa-2x" />
                  </div>
                  <h5>Address</h5>
                  <p className="mb-0" style={{ wordBreak: "break-word" }}>
                    {accountsetting?.[0]?.address || "No address available"}
                  </p>
                </div>

                {/* Mail Us */}
                <div className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
                  <div className="text-primary mb-2">
                    <i className="fas fa-envelope fa-2x" />
                  </div>
                  <h5>Mail Us</h5>
                  <p className="mb-0">
                    <a
                      href={`mailto:${
                        accountsetting?.[0]?.email_one || "apnademat@gmail.com"
                      }`}
                      className="text-secondary"
                    >
                      {accountsetting?.[0]?.email_one || "apnademat@gmail.com"}
                    </a>
                  </p>
                </div>

                {/* Telephone */}
                <div className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
                  <div className="text-primary mb-2">
                    <i className="fa fa-phone-alt fa-2x" />
                  </div>
                  <h5>Mobile</h5>
                  <a
                    href={`tel:${accountsetting?.[0]?.mobile_number}`}
                    className="text-secondary"
                  >
                    {accountsetting?.[0]?.mobile_number ||
                      "No number available"}
                  </a>
                </div>

                {/* Landline */}
                <div className="col-md-6 col-lg-3 d-flex flex-column align-items-center">
                  <div className="text-primary mb-2">
                    <i className="fas fa-phone-square-alt fa-2x" />
                  </div>
                  <h5>LandLine</h5>
                  <a href="tel:07949189316" className="mb-0 text-secondary">
                    079 49189316
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="row g-5 align-items-stretch">
            {/* Contact Form */}
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="bg-light p-5 rounded h-100">
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
                          value={formData.message}
                          onChange={handleChange}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="rounded h-100">
                <iframe
                  className="rounded h-100 w-100"
                  style={{ height: "100%" }}
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.791399452939!2d72.57103599999999!3d23.0314302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850885fa2bc5%3A0xe970e5c262a79db!2sAngel%20One%20(Angel%20Broking)!5e0!3m2!1sen!2sin!4v1741092508316!5m2!1sen!2sin"
                  src={
                    accountsetting?.[0]?.map_iframe ||
                    "https://www.google.com/maps/embed?..."
                  }
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
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
