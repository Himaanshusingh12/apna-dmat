import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function About() {
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

  const aboutSeo = seoDetail.find((item) => item.page_name === "about");
  return (
    <>
      {aboutSeo && (
        <Helmet>
          <title>{aboutSeo.meta_title}</title>
          <meta name="description" content={aboutSeo.meta_description} />
          <meta name="keywords" content={aboutSeo.meta_keywords} />
        </Helmet>
      )}
      <TopBar />
      <Header pageTitle="About Us" breadcrumb1="About" />
      <div className="container-fluid p-0">
        {/* Company Info */}
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-semibold mb-3">Who We Are</h2>
              <p className="fs-5">
                With over <strong>16 years</strong> in the stock market, we
                proudly serve <strong>3500+ happy clients</strong> and manage{" "}
                <strong>₹30+ crores</strong> in AUM. We’re certified by{" "}
                <span className="badge bg-success">AMFI</span> and{" "}
                <span className="badge bg-primary">IRDA</span>, offering
                everything from investments to insurance in one place.
              </p>
              <p className="fs-5 fst-italic text-primary">
                "Apna Demat Apno Ke Saath."
              </p>
              <p className="text-muted">
                We go beyond business — building lasting relationships through
                personal guidance and transparency.
              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <img
                src="img/about1.jpg"
                className="img-fluid rounded shadow"
                alt="About Image"
              />
            </div>
          </div>
        </div>
        {/* Achievements Section */}
        <div className="container py-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold">Why Choose Us?</h3>
            <p className="text-muted">A track record you can count on</p>
          </div>
          <div className="row text-center">
            <div className="col-sm-6 col-md-3 mb-3">
              <div className="bg-light p-4 rounded shadow-sm">
                <i className="fas fa-clock fa-2x text-primary mb-2" />
                <h6>16+ Years Experience</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
              <div className="bg-light p-4 rounded shadow-sm">
                <i className="fas fa-users fa-2x text-success mb-2" />
                <h6>3500+ Clients</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
              <div className="bg-light p-4 rounded shadow-sm">
                <i className="fas fa-rupee-sign fa-2x text-warning mb-2" />
                <h6>₹30+ Cr AUM</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
              <div className="bg-light p-4 rounded shadow-sm">
                <i className="fas fa-certificate fa-2x text-info mb-2" />
                <h6>AMFI &amp; IRDA Certified</h6>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mb-3">
              <div class="bg-light p-4 rounded shadow-sm">
                <i class="fas fa-hand-holding-heart fa-2x text-danger mb-2"></i>
                <h6>Personalized & Transparent</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
              <div className="bg-light p-4 rounded shadow-sm">
                <i className="fas fa-phone-volume fa-2x text-primary mb-2" />
                <h6>Expert On-Call Support</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Core Values Section */}
        <div className="bg-light py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h3 className="fw-bold">Our Core Values</h3>
              <p className="text-muted">What drives us every day</p>
            </div>
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <div className="p-4 border rounded-3 shadow-sm h-100">
                  <i className="fas fa-handshake fa-2x text-primary mb-3" />
                  <h6 className="fw-semibold">Trust & Transparency</h6>
                  <p className="text-muted">
                    We believe in open communication and ethical guidance at
                    every step.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="p-4 border rounded-3 shadow-sm h-100">
                  <i className="fas fa-users fa-2x text-success mb-3" />
                  <h6 className="fw-semibold">Client-Centric</h6>
                  <p className="text-muted">
                    We treat every client like family and tailor our services to
                    your needs.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="p-4 border rounded-3 shadow-sm h-100">
                  <i className="fas fa-chart-line fa-2x text-warning mb-3" />
                  <h6 className="fw-semibold">Commitment to Growth</h6>
                  <p className="text-muted">
                    Your success is our ultimate goal, and we grow only when you
                    grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mission/Vision Section */}
        <div className="bg-light py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h3 className="fw-bold">Our Mission &amp; Vision</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-6 mb-4">
                <div className="p-4 border rounded-3 shadow-sm h-100">
                  <h5>
                    <i className="fas fa-bullseye text-danger me-2" />
                    Our Mission
                  </h5>
                  <p className="text-muted">
                    To empower individuals and families with secure,
                    transparent, and personalized financial solutions that grow
                    their wealth with confidence.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="p-4 border rounded-3 shadow-sm h-100">
                  <h5>
                    <i className="fas fa-eye text-info me-2" />
                    Our Vision
                  </h5>
                  <p className="text-muted">
                    To be India’s most trusted financial partner, where every
                    client feels like family and every plan is built on honesty
                    and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline / Company Journey Section */}
        <div className="container py-5">
          <div className="text-center mb-5">
            <h3 className="fw-bold">Our Journey</h3>
            <p className="text-muted">Milestones that define our legacy</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline list-unstyled">
                <li className="mb-5 position-relative ps-4 border-start border-2 border-primary">
                  <h6 className="fw-bold">2010 - Foundation Year</h6>
                  <p className="text-muted">
                    Started our journey in the stock market industry with a
                    commitment to trust and transparency.
                  </p>
                </li>
                <li className="mb-5 position-relative ps-4 border-start border-2 border-primary">
                  <h6 className="fw-bold">2020 - 1000+ Clients</h6>
                  <p className="text-muted">
                    Crossed a major milestone with a loyal and growing client
                    base across India.
                  </p>
                </li>
                <li className="mb-5 position-relative ps-4 border-start border-2 border-primary">
                  <h6 className="fw-bold">2022 - ₹30+ Cr AUM</h6>
                  <p className="text-muted">
                    Achieved ₹30+ crores in Assets Under Management, reflecting
                    strong client trust.
                  </p>
                </li>
                <li className="mb-3 position-relative ps-4 border-start border-2 border-primary">
                  <h6 className="fw-bold">Present - Certified & Growing</h6>
                  <p className="text-muted">
                    Certified by AMFI & IRDA, we now serve 3500+ clients with
                    complete investment and insurance solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Final Quote */}
        <div className="bg-primary text-white text-center py-5 mb-2">
          <div className="container">
            <p className="fs-4 mb-0">
              Your trust is our greatest asset.{" "}
              <strong>Your success is our ultimate commitment.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* new one */}

      <Footer />
    </>
  );
}

export default About;
