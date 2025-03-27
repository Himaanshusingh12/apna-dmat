import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Service.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { NavLink } from "react-router-dom";

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
        console.log("The Fetched Service are:", response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching service:",
        error.response?.data || error.message
      );
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
          <div className="header-carousel-item">
            <img
              src="img/carousel-1.jpg"
              className="img-fluid w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row gy-0 gx-5">
                  <div className="col-lg-0 col-xl-5"></div>
                  <div className="col-xl-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-end">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To Stocker
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        Invest your money with higher return
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                        <a
                          className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          <i className="fa fa-play-circle me-2" /> Watch Video
                        </a>
                        <a
                          className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          Learn More
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                        <h2 className="text-white me-2">Follow Us:</h2>
                        <div className="d-flex justify-content-end ms-2">
                          <a
                            className="btn btn-md-square btn-light rounded-circle me-2"
                            href="#"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href="#"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href="#"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle ms-2"
                            href="#"
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

          {/* Slide 2 */}
          <div className="header-carousel-item">
            <img
              src="img/carousel-2.jpg"
              className="img-fluid w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row g-5">
                  <div className="col-12 animated fadeInUp">
                    <div className="text-center">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To Stocker
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        Invest your money with higher return
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                        <a
                          className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          <i className="fa fa-play-circle me-2" /> Watch Video
                        </a>
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
                            href="#"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href="#"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href="#"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle ms-2"
                            href="#"
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
        </OwlCarousel>
      </div>

      {/* about section  */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h4 className="text-primary">About Us</h4>
                <h1 className="display-5 mb-4">
                  Meet our company unless miss the opportunity
                </h1>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  velit temporibus repudiandae ipsa, eaque perspiciatis cumque
                  incidunt tenetur sequi reiciendis.
                </p>
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex">
                      <div>
                        <i className="fas fa-lightbulb fa-3x text-primary" />
                      </div>
                      <div className="ms-4">
                        <h4>Business Consuluting</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex">
                      <div>
                        <i className="bi bi-bookmark-heart-fill fa-3x text-primary" />
                      </div>
                      <div className="ms-4">
                        <h4>Year Of Expertise</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0"
                    >
                      Discover Now
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex">
                      <i className="fas fa-phone-alt fa-2x text-primary me-4" />
                      <div>
                        <h4>Call Us</h4>
                        <p className="mb-0 fs-5" style={{ letterSpacing: 1 }}>
                          +01234567890
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-primary rounded position-relative overflow-hidden">
                <img
                  src="img/about-2.png"
                  className="img-fluid rounded w-100"
                  alt
                />
                <div
                  className
                  style={{ position: "absolute", top: "-15px", right: "-15px" }}
                >
                  <img
                    src="img/about-3.png"
                    className="img-fluid"
                    style={{ width: 150, height: 150, opacity: "0.7" }}
                    alt
                  />
                </div>
                <div
                  className
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: 10,
                    transform: "rotate(90deg)",
                  }}
                >
                  <img
                    src="img/about-4.png"
                    className="img-fluid"
                    style={{ width: 100, height: 150, opacity: "0.9" }}
                    alt
                  />
                </div>
                <div className="rounded-bottom">
                  <img
                    src="img/about-5.jpg"
                    className="img-fluid rounded-bottom w-100"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    // to={`/subservice/${service.service_id}`}
                    to={`/sub-service/${service.service_id}`}
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

      {/* Team Start */}
      <div className="container-fluid team pb-5 mt-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Team</h4>
            <h1 className="display-5 mb-4">Meet Our Advisers</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-1.jpg" className="img-fluid" alt />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-2.jpg" className="img-fluid" alt />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-3.jpg" className="img-fluid" alt />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-4.jpg" className="img-fluid" alt />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      <Footer />
    </>
  );
}

export default Home;
