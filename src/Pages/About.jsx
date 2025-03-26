import React from "react";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function About() {
  return (
    <>
      <TopBar />
      <Header pageTitle="About Us" breadcrumb1="About" />
      {/* About Start */}
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
      {/* About End */}

      {/* Features Start */}
      <div className="container-fluid feature pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Features</h4>
            <h1 className="display-5 mb-4">
              Connecting businesses, ideas, and people for greater impact.
            </h1>
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
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-chart-line fa-4x text-primary" />
                </div>
                <h4>Global Management</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-university fa-4x text-primary" />
                </div>
                <h4>Corporate Banking</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-file-alt fa-4x text-primary" />
                </div>
                <h4>Asset Management</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-hand-holding-usd fa-4x text-primary" />
                </div>
                <h4>Investment Bank</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Team Start */}
      <div className="container-fluid team pb-5">
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

export default About;
