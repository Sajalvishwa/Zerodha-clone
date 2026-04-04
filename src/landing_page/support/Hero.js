import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid py-4"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">

        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0 fw-semibold">Support Portal</h5>
          <a href="#" className="text-decoration-none small">
            Track Tickets
          </a>
        </div>

        {/* Main Content */}
        <div className="row align-items-start">

          {/* Left Section */}
          <div className="col-lg-7">

            <h5 className="mb-3">
              Search for an answer or browse help topics to create a ticket
            </h5>

            {/* Search */}
            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className="form-control mb-3"
              style={{ maxWidth: "500px" }}
            />

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-decoration-none small">
                Track account opening
              </a>
              <a href="#" className="text-decoration-none small">
                Track segment activation
              </a>
              <a href="#" className="text-decoration-none small">
                Intraday margins
              </a>
              <a href="#" className="text-decoration-none small">
                Kite user manual
              </a>
            </div>

          </div>

          {/* Right Section */}
          <div className="col-lg-5">

            <h6 className="mb-3 fw-semibold">Featured</h6>

            <ol className="ps-3 small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;