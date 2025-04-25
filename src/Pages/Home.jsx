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
import { Helmet } from "react-helmet";

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
        console.log("The Fetched seo detail are:", response.data);
      }
    } catch (error) {
      toast.error(
        `Error fetching seo detail: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const homeSeo = seoDetail.find((item) => item.page_name === "home");
  return (
    <>
      {homeSeo && (
        <Helmet>
          <title>{homeSeo.meta_title}</title>
          <meta name="description" content={homeSeo.meta_description} />
          <meta name="keywords" content={homeSeo.meta_keywords} />
        </Helmet>
      )}
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
          autoplayTimeout={5000}
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
                    <div className="col-12 owl-animated owl-fadeInLeft">
                      <div className="text-center">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                          Welcome To Apna Demat
                        </h4>
                        <h2 className="display-4 text-uppercase text-white mb-4">
                          Full Power Broking,
                          <span className="content-color"> Half the Cost</span>
                        </h2>
                        <p className="mb-5 fs-5">
                          Why pay more when you can get full-service broking —
                          expert guidance, trading tools, and customer support —
                          at a price made for friends and family?
                        </p>
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
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          We Don’t Just Recommend.
                          <span className="content-color"> We Understand.</span>
                        </h1>
                        <p className="mb-5 fs-5">
                          As an investor, you deserve a plan made just for you.
                          We profile your investment style and offer mutual fund
                          advice that’s personalized, practical, and focused on
                          growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* third slider */}
          {slider.map((slider, index) => (
            <div key={`image2-${index}`} className="header-carousel-item">
              <img
                src={slider.image3}
                className="img-fluid w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row g-5">
                    <div className="col-12 animated fadeInUp">
                      <div className="text-center">
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          Right Cover,
                          <span className="content-color"> No Guesswork</span>
                        </h1>
                        <p className="mb-5 fs-5">
                          Right cover, right time, right price. We recommend
                          insurance that fits your profile — so you’re prepared
                          for tomorrow without overpaying today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/*fourth slider */}
          {slider.map((slider, index) => (
            <div key={`image2-${index}`} className="header-carousel-item">
              <img
                src={slider.image4}
                className="img-fluid w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row g-5">
                    <div className="col-12 animated fadeInUp">
                      <div className="text-center">
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          Fixed Returns.
                          <span className="content-color">Zero Surprises.</span>
                        </h1>
                        <p className="mb-5 fs-5">
                          Not all savings need to swing with the market. With
                          handpicked FD options, you earn steady returns while
                          keeping your capital safe and sound.
                        </p>
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
            <h5 className="fw-bold text-primary text-uppercase fix-color">
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
                <h4 className="text-primary fw-bold mb-3 text-uppercase fix-color">
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
                      <i className="fas fa-chart-line fa-2x text-primary me-3 fix-color" />
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
                      <i className="fas fa-user-clock fa-2x text-primary me-3 fix-color" />
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
                      to=""
                      className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-sm investing-button"
                    >
                      Start Investing
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Content */}
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="position-relative rounded overflow-hidden shadow-lg">
                <img
                  src="img/about2.jpg"
                  className="img-fluid rounded-top w-100"
                  alt="About Us"
                  style={{ height: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="container-fluid py-5 text-white mt-5 experties-section">
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
                <i className="fas fa-id-card-alt fa-2x me-3" />
                <p className="mb-0">
                  <strong>IRDA Certified Insurance Advisor</strong> – We are
                  officially certified by IRDA to offer reliable and trusted
                  insurance services.
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
      <div className="container-fluid testimonial py-5 mt-4 bg-light">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-success fw-bold">Testimonial</h4>
            <h1 className="display-5 fw-semibold mb-4">What Our Clients Say</h1>
            <p className="mb-0 text-muted">
              Real stories from real investors — discover how our guidance is
              helping people build smarter financial futures.
            </p>
          </div>

          <OwlCarousel
            className="owl-theme"
            items={3}
            margin={20}
            loop
            autoplay
            smartSpeed={1000}
            dots={true}
            nav={false}
            responsive={{
              0: { items: 1 },
              576: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            }}
            key={testimonial.length}
          >
            {testimonial.length > 0 ? (
              testimonial.map((item) => (
                <div
                  key={item.testimonial_id}
                  className="wow zoomIn px-3"
                  data-wow-delay="0.4s"
                >
                  <div
                    className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center bg-white"
                    style={{ height: "300px", overflowY: "auto" }}
                  >
                    <h5 className="fw-bold text-primary mb-3">{item.name}</h5>
                    <p className="text-dark fst-italic">"{item.review}"</p>
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
