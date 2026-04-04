import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand"  to="/" >
          <img
            src="media/logo.svg"
            alt="Logo"
            style={{ width: "150px" }}
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-4">

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/support">Support</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;