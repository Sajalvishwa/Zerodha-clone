import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-2">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/media/lo.png"
            alt="Smart Growth Network Tech"
            style={{
              height: "50px",
              width: "",
              objectFit: "contain",
              transition: "transform 0.2s ease"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-4">

            <li className="nav-item">
              <Link className="nav-link fs-6 fw-semibold text-dark" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-6 fw-semibold text-dark" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-6 fw-semibold text-dark" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-6 fw-semibold text-dark" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-6 fw-semibold text-dark" to="/support">
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;