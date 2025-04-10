import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Service.css";
import "../Styles/Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
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

  // for testimonial
  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 4 },
    },
  };

  // section for fetch testimonial from database table
  const [testimonial, SetTestimonial] = useState([]);

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const fetchTestimonial = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/testimonial/get-testimonial`
      );
      if (response.status === 200) {
        SetTestimonial(response.data.data);
        // console.log("The Fetched Testimonial are:", response.data);
      }
    } catch (error) {
      // console.error(
      //   "Error fetching testimonial:",
      //   error.response?.data || error.message
      // );
      toast.error(
        `Error fetching testimonial: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  //section for fetch Active slider
  const [slider, Setslider] = useState([]);
  useEffect(() => {
    fetchSlider();
  }, []);

  const fetchSlider = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/slider/get-active`);
      if (response.status === 200) {
        Setslider(response.data.data);
        // console.log("The Fetched Slider are:", response.data);
      }
    } catch (error) {
      // console.error(
      //   "Error fetching slider:",
      //   error.response?.data || error.message
      // );
      toast.error(
        `Error fetching slider: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  //Accounting setting for fetch social media icons link
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

  // for slider issue

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="container-fluid position-relative p-0">
        <OwlCarousel
          className="header-carousel owl-theme"
          loop
          margin={0}
          nav
          items={1}
          autoplay
          autoplayTimeout={3000}
          smartSpeed={1000}
        >
          {/* Slide 1 */}
          {slider.map((slider, index) => (
            <div key={index} className="header-carousel-item">
              <img
                src={slider.image}
                className="img-fluid w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row g-5">
                    {/* <div className="col-12 animated fadeInLeft"> */}
                    <div className="col-12 owl-animated owl-fadeInLeft">
                      <div className="text-center">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                          Welcome To Apna Dmat
                        </h4>
                        <h2 className="display-4 text-uppercase text-white mb-4">
                          Maximize Your Wealth Through Smart Investments
                        </h2>
                        <p className="mb-5 fs-5">
                          Join thousands of investors who are leveraging the
                          power of the stock market to grow their wealth. With
                          expert insights, real-time data, and personalized
                          strategies, we help you make informed investment
                          decisions.
                        </p>
                        <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                          <a
                            className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                            href="#"
                          >
                            Learn More About Our Services
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <h2 className="text-white me-2">Follow Us:</h2>
                          <div className="d-flex justify-content-end ms-2">
                            <a
                              className="btn btn-md-square btn-light rounded-circle me-2"
                              href={accountsetting?.[0]?.facebook || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href={accountsetting?.[0]?.twitter || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href={accountsetting?.[0]?.instagram || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle ms-2"
                              href={accountsetting?.[0]?.linkedin || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide 2 */}
          {slider.map((slider, index) => (
            <div key={`image2-${index}`} className="header-carousel-item">
              <img
                src={slider.image2}
                className="img-fluid w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row g-5">
                    <div className="col-12 animated fadeInUp">
                      <div className="text-center">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                          Welcome To Apna Dmat
                        </h4>
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          Invest your money with higher return
                        </h1>
                        <p className="mb-5 fs-5">
                          With over 16 years of experience in the stock market,
                          we take care of 3500+ clients and manage over ₹30
                          Crores in Assets Under Management (AUM). As an
                          authorized partner of Angel One for the last 7 years,
                          we are committed to providing you with expert guidance
                          and support.
                        </p>
                        <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                          <a
                            className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                            href="#"
                          >
                            Learn More
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <h2 className="text-white me-2">Follow Us:</h2>
                          <div className="d-flex justify-content-end ms-2">
                            <a
                              className="btn btn-md-square btn-light rounded-circle me-2"
                              href={accountsetting?.[0]?.facebook || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href={accountsetting?.[0]?.twitter || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href={accountsetting?.[0]?.instagram || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle ms-2"
                              href={accountsetting?.[0]?.linkedin || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>

      {/* service section */}
      <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Our Services
            </h5>
          </div>
          <div className="row g-5">
            {service.length > 0 ? (
              service.map((service, index) => (
                <div
                  className="col-lg-3 col-md-6 wow zoomIn"
                  data-wow-delay={`${0.3 + index * 0.3}s`}
                  key={service.id}
                >
                  <NavLink
                    // to={`/sub-service/${service.service_id}`}
                    to={`/service/${service.slug}`}
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="service-icon">
                        <i className={`fa ${service.icon} text-white`} />
                      </div>
                      <h4 className="mb-3">{service.title}</h4>
                      <p className="m-0">{service.description}</p>
                    </div>
                  </NavLink>
                </div>
              ))
            ) : (
              <p className="text-center">No services available</p>
            )}
          </div>
        </div>
      </div>

      {/* about section  */}
      <div className="container-fluid about py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Side - Text Content */}
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h4 className="text-primary fw-bold mb-3 text-uppercase">
                  About Us
                </h4>
                <h1 className="display-5 fw-semibold mb-4">
                  Empowering Your Financial Journey in the Stock Market
                </h1>
                <p className="mb-4 text-muted fs-5">
                  With over 16 years of experience, we offer reliable investment
                  consultancy, smart portfolio management, and personalized
                  wealth-building strategies to help you grow with confidence.
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-chart-line fa-2x text-primary me-3" />
                      <div>
                        <h5 className="mb-2">Expert Guidance</h5>
                        <p className="mb-0 text-muted">
                          Unlock powerful stock market insights and risk-managed
                          strategies from seasoned professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-user-clock fa-2x text-primary me-3" />
                      <div>
                        <h5 className="mb-2">16+ Years of Experience</h5>
                        <p className="mb-0 text-muted">
                          Navigating every market phase with time-tested
                          knowledge and trusted decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <NavLink
                      to="/about"
                      className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-sm"
                    >
                      Learn More About Us
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Content */}
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="position-relative rounded overflow-hidden shadow-lg">
                <img
                  src="img/about6.jpg"
                  className="img-fluid rounded-top w-100"
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="container-fluid py-5 bg-primary text-white mt-5">
        <div className="container">
          <h2 className="text-center text-white mb-4 fw-bold">
            Our Expertise & Achievements
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white shadow rounded text-primary">
                <i className="fas fa-users fa-2x me-3" />
                <p className="mb-0">
                  <strong>3500+ Clients</strong> - We take care of over 3500
                  clients across different sectors.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white shadow rounded text-primary">
                <i className="fas fa-chart-line fa-2x me-3" />
                <p className="mb-0">
                  <strong>30cr+ AUM</strong> - Our assets under management
                  exceed 30 crores, showcasing our financial expertise.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white shadow rounded text-primary">
                <i className="fas fa-cogs fa-2x me-3" />
                <p className="mb-0">
                  <strong>16 Years of Stock Market</strong> - Our team has been
                  deeply involved in the stock market for over 16 years.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white shadow rounded text-primary">
                <i className="fas fa-handshake fa-2x me-3" />
                <p className="mb-0">
                  <strong>7 Years as Authorized Partner of Angel One</strong> -
                  We've built a strong partnership with Angel One for over 7
                  years.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white shadow rounded text-primary">
                <i className="fas fa-briefcase fa-2x me-3" />
                <p className="mb-0">
                  <strong>9 Years of Experience with Angel One</strong> - We
                  have an extensive 9-year experience with Angel One, both as an
                  employee and partner.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center p-3 bg-white shadow rounded text-primary">
                <i className="fas fa-certificate fa-2x me-3" />
                <p className="mb-0">
                  <strong>AMFI Certified MF Distributor</strong> - We are
                  certified by AMFI, ensuring our reliability as a mutual fund
                  distributor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5 mt-4">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Testimonial</h4>
            <h1 className="display-5 mb-4">Our Clients Reviews</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>

          {/* Ensure OwlCarousel re-renders when data updates */}
          <OwlCarousel
            className="owl-theme"
            {...options}
            key={testimonial.length}
          >
            {testimonial.length > 0 ? (
              testimonial.map((item) => (
                <div
                  key={item.testimonial_id}
                  className="wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 className="mb-3">{item.name}-</h4>
                    <p className="m-0">{item.review}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading testimonials...</p>
            )}
          </OwlCarousel>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
