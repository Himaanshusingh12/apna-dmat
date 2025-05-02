import React from "react";
import { Link } from "react-router-dom";

function Prefooter() {
  return (
    <>
      <section className="container py-5 my-3 border-start border-4 border-warning bg-white shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="fw-bold text-dark">
              Let's Build Your Financial Future
              <span className="text-success">Together</span>
            </h2>
            <p className="text-muted mb-0">
              From SIPs and equities to insurance and FDs — our team is ready to
              guide you every step of the way. Don't wait to secure your future.
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-4 mt-md-0">
            <Link
              href="/contact"
              className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill shadow"
            >
              Let's Chat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prefooter;
