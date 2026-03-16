import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="widget-wrapper">
        <div className="first-widget">
          <ul>
            <li className="list-item">Audio and subtitles</li>
            <li className="list-item">Media Center</li>
            <li className="list-item">Privacy</li>
            <li className="list-item">Contact</li>
          </ul>
        </div>
        <div className="second-widget">
          <ul>
            <li className="list-item">Help Center</li>
            <li className="list-item">Cookies</li>
            <li className="list-item">Jobs</li>
          </ul>
        </div>
        <div className="third-widget">
          <ul>
            <li className="list-item">Audio description</li>
            <li className="list-item">Investor Relations</li>
            <li className="list-item">Legal Notice</li>
          </ul>
        </div>
        <div className="forth-widget">
          <ul>
            <li className="list-item">Gift Card</li>
            <li className="list-item">Terms of Use</li>
            <li className="list-item">Corporate Information</li>
          </ul>
        </div>
      </div>
      <button className="button-service">Service Code</button>
      <p className="copyright">
        &copy; {currentYear} Vanilacodes, Inc.
      </p>
    </div>
  );
};

export default Footer;
