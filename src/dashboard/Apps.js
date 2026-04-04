import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  const apps = [
    {
      name: "Trading Dashboard",
      desc: "View holdings, orders and positions",
      path: "/dashboard",
      icon: "📊",
    },
    {
      name: "Holdings",
      desc: "Track your investments portfolio",
      path: "/dashboard/holdings",
      icon: "💼",
    },
    {
      name: "Orders",
      desc: "Check all your buy & sell orders",
      path: "/dashboard/orders",
      icon: "📦",
    },
    {
      name: "Funds",
      desc: "Manage your wallet & margin",
      path: "/dashboard/funds",
      icon: "💰",
    },
  ];

  return (
    <div className="apps-container">
      <h2 className="title">Apps</h2>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <Link to={app.path} key={index} className="app-card">
            <div className="app-icon">{app.icon}</div>

            <h3>{app.name}</h3>
            <p>{app.desc}</p>

            <div className="hover-glow"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Apps;