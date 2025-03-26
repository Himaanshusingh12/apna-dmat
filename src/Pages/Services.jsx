import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Service.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { BACKEND_URL } from "../Constant";

function Services() {
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
        console.log("The Fetched Testimonial are:", response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching testimonial:",
        error.response?.data || error.message
      );
      toast.error(
        `Error fetching testimonial: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Services" breadcrumb1="Services" />
      {/* Services Start */}
      {/* <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Services</h4>
            <h1 className="display-5 mb-4">We Services provided best offer</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/service-1.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Image"
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    {" "}
                    Strategy Consulting
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, sint? Excepturi facilis neque nesciunt similique
                    officiis veritatis,
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/service-2.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Image"
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Financial Advisory
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, sint? Excepturi facilis neque nesciunt similique
                    officiis veritatis,
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/service-3.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Image"
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Managements
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, sint? Excepturi facilis neque nesciunt similique
                    officiis veritatis,
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/service-4.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Image"
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Supply Optimization
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, sint? Excepturi facilis neque nesciunt similique
                    officiis veritatis,
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/service-5.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Image"
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Hr Consulting
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, sint? Excepturi facilis neque nesciunt similique
                    officiis veritatis,
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/service-6.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Image"
                  />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Marketing Consulting
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, sint? Excepturi facilis neque nesciunt similique
                    officiis veritatis,
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* first section */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Our Services
            </h5>
            <h1 className="mb-0">Stock Broking</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center ">
                <div className="service-icon">
                  <i className="fa fa-chart-line text-white" />
                </div>
                <h4 className="mb-3">Equity</h4>
                <p className="m-0">
                  Invest in company shares and participate in the growth and
                  profits of businesses through equity trading.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-file-contract text-white" />
                </div>
                <h4 className="mb-3">F & O</h4>
                <p className="m-0">
                  Trade in Futures and Options to hedge risks or speculate on
                  market movements with advanced strategies.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-building text-white" />
                </div>
                <h4 className="mb-3">IPOs</h4>
                <p className="m-0">
                  Get early access to companies going public and invest in their
                  growth from the very beginning.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-boxes text-white" />
                </div>
                <h4 className="mb-3">Commodity</h4>
                <p className="m-0">
                  Diversify your portfolio by trading in essential commodities
                  like gold, silver, and crude oil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-0">Mutual Funds & Etf</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-piggy-bank text-white" />
                </div>
                <h4 className="mb-3">Sip</h4>
                <p className="m-0">
                  Build wealth steadily by investing small amounts regularly
                  through Systematic Investment Plans.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-hand-holding-usd text-white" />
                </div>
                <h4 className="mb-3">Swp</h4>
                <p className="m-0">
                  Generate a steady income by withdrawing fixed amounts
                  regularly from your investments with an SWP.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-layer-group text-white" />
                </div>
                <h4 className="mb-3">Nfos</h4>
                <p className="m-0">
                  Invest in structured fixed offerings designed to provide
                  stable returns with minimized risk.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-chart-bar text-white" />
                </div>
                <h4 className="mb-3">Etf</h4>
                <p className="m-0">
                  Invest in a diverse range of assets through Exchange Traded
                  Funds and track market indices efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-0">Insurance</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-piggy-bank text-white" />
                </div>
                <h4 className="mb-3">Medi Claim</h4>
                <p className="m-0">
                  Protect yourself and your family from unexpected medical
                  expenses with comprehensive health coverage.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-hand-holding-usd text-white" />
                </div>
                <h4 className="mb-3">Term Plan</h4>
                <p className="m-0">
                  Secure your family's financial future with affordable life
                  cover for a fixed period through a Term Insurance Plan.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-layer-group text-white" />
                </div>
                <h4 className="mb-3">Motor Insurance</h4>
                <p className="m-0">
                  Protect your vehicle against accidents, theft, and damages
                  with comprehensive Motor Insurance coverage.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-chart-bar text-white" />
                </div>
                <h4 className="mb-3">Investment Plans</h4>
                <p className="m-0">
                  Grow your wealth with customized investment plans designed to
                  meet your financial goals and risk appetite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-0">FD</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-piggy-bank text-white" />
                </div>
                <h4 className="mb-3">Regular Fixed</h4>
                <p className="m-0">
                  Earn guaranteed returns on your lump sum investment with
                  flexible tenure options and fixed interest rates.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-hand-holding-usd text-white" />
                </div>
                <h4 className="mb-3">Recurring Deposit</h4>
                <p className="m-0">
                  Save regularly with fixed monthly deposits and earn attractive
                  interest, making it ideal for disciplined savings.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-layer-group text-white" />
                </div>
                <h4 className="mb-3">Senior Citizen</h4>
                <p className="m-0">
                  Enjoy higher interest rates and secure returns specially
                  designed for senior citizens to support their retirement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-chart-bar text-white" />
                </div>
                <h4 className="mb-3">Flexi Fixed</h4>
                <p className="m-0">
                  Enjoy the flexibility of partial withdrawals and auto sweeps
                  while earning steady returns on your fixed deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Testimonial Start */}
      <div className="container-fluid testimonial pb-5 mt-5">
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

export default Services;
