import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import notification from "../../assets/images/notification.svg";
import user from "../../assets/images/user.svg";

const Header: React.FC = () => {
  return (
    <header className="header_outer_container">
      <div className="header_container">
        <nav className="header_nav" aria-label="Primary">
          <div className="nav_left">
            <img src={logo} alt="Netflix" className="logo" />
            <ul className="nav_links">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <ul className="icons_container" aria-label="Utilities">
            <li>
              <img src={search} alt="Search" className="icons" />
            </li>
            <li>
              <img
                src={notification}
                alt="Notifications"
                className="icons"
              />
            </li>
            <li>
              <img src={user} alt="User profile" className="icons" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
