import React from "react";

function Award() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Left Image */}
        <div className="col-md-6 p-5">
          <img
            src="/media/largestBroker.svg"
            alt="largest broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 p-5">
          <h1>Largest stock broker in India</h1>

          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/media/pressLogos.png"
            alt="press logos"
            style={{ width: "90%" }}
            className="mt-4"
          />
        </div>

      </div>
    </div>
  );
}

export default Award;