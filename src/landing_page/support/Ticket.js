import React, { useState } from "react";

function Ticket() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and DP",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "MTF and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      items: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      items: [
        "Mutual funds",
        "NPS",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h3 className="mb-4">
        To create a ticket, select a relevant topic
      </h3>

      <div className="row">

        {/* LEFT */}
        <div className="col-lg-8">

          {data.map((section, index) => (
            <div key={index} className="mb-3 border rounded">

              {/* Header */}
              <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{ cursor: "pointer", background: "#fff" }}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div>
                  <i className="fa fa-plus-circle me-2 text-primary"></i>
                  {section.title}
                </div>

                <i
                  className={`fa ${
                    openIndex === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                ></i>
              </div>

              {/* Body */}
              {openIndex === index && (
                <div className="px-4 pb-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="mb-2">
                      <a href="#" className="text-decoration-none small">
                        {item}
                      </a>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="col-lg-4">

          {/* Highlight */}
          <div
            className="p-3 mb-4"
            style={{
              background: "#fff3cd",
              borderLeft: "4px solid orange",
            }}
          >
            <ul className="mb-0 ps-3 small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Trading holiday on account of Good Friday
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border rounded">
            <div className="p-2 border-bottom fw-semibold">
              Quick links
            </div>

            <ol className="mb-0 p-3 small">
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Track account opening
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Track segment activation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Intraday margins
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none">
                  Kite user manual
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Learn how to create a ticket
                </a>
              </li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Ticket;