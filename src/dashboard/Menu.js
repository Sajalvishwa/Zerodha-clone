import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear login
    navigate("/signup"); // redirect to signup page
  };

  return (
    <div className="menu-container mt-2">

      {/* LOGO */}
      <img src="/media/logo.png" style={{ width: "50px" }} alt="logo" />

      {/* MENU */}
      <div className="menus mt-3">
        <ul>

          <li>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <p className={isActive("/dashboard") ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/orders" style={{ textDecoration: "none" }}>
              <p className={isActive("/dashboard/orders") ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/holdings" style={{ textDecoration: "none" }}>
              <p className={isActive("/dashboard/holdings") ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/positions" style={{ textDecoration: "none" }}>
              <p className={isActive("/dashboard/positions") ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/funds" style={{ textDecoration: "none" }}>
              <p className={isActive("/dashboard/funds") ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/apps" style={{ textDecoration: "none" }}>
              <p className={isActive("/dashboard/apps") ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* PROFILE */}
        <div className="profile" onClick={toggleProfile}>
          <div className="avatar mb-4">ZU</div>
          <p className="username mb-4">USERID</p>
        </div>

        {/* DROPDOWN */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">

            <p>Profile</p>
            <p>Settings</p>

            {/* LOGOUT */}
            <p
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Logout
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;