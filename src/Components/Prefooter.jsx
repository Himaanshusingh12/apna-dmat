import React from "react";
import "../Styles/Navbar.css";
function Prefooter() {
  return (
    <>
      <section className="container py-5 my-3 border-start border-4 bg-white shadow-sm left-border">
        <div className="row align-items-center">
          <div className="col-md-8 ps-5">
            <h2 className="fw-bold text-dark">
              Let's Build Your Financial Future
              <span className="together-button">Together</span>
            </h2>
            <p className="text-muted mb-0">
              From SIPs and equities to insurance and FDs — our team is ready to
              guide you every step of the way. Don't wait to secure your future.
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-4 mt-md-0 pe-5 ">
            <a
              href="https://chat.whatsapp.com/LcuZGSxH3Tj5WQefAWkqTy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill chats-button"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prefooter;
