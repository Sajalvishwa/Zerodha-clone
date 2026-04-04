import React from "react";

function Universe() {
  const items = [
    { img: "media/zerodhaFundhouse.png" },
    { img: "media/sensibullLogo.svg" },
    { img: "media/smallcaseLogo.png" },
    { img: "media/streakLogo.png" },
    { img: "media/tijori.svg" },
    { img: "media/dittoLogo.png" },
  ];

  return (
    <div className="container py-5">
      
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* Grid */}
      <div className="row g-4 justify-content-center">

        {items.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            
            <div
              className="text-center p-4 h-100"
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                transition: "0.3s",
                backgroundColor: "#fff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={item.img}
                alt="logo"
                style={{
                  maxWidth: "140px",
                  height: "60px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />

              <p className="text-muted small mb-0">
                Thematic investment platform
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-5">
        <button className="btn btn-primary px-4 py-2">
          Signup Now
        </button>
      </div>

    </div>
  );
}

export default Universe;