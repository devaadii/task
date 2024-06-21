import React from "react";
import logo from "../images/image.png";
import facebook from "../socials/image.png";
import twitter from "../socials/image copy.png";
import linkedin from "../socials/image copy 2.png";
import youtube from "../socials/image copy 3.png";
import instagram from "../socials/image copy 4.png";
import pinintrest from "../socials/image copy 5.png";
const Footer = () => {
  return (
    <footer className="footer-container" style={{ background: "transparent" }}>
      <div className="footer-content">
        <div className="logo-section">
          <img src={logo} alt="Hydra Logo" />
        </div>
        <div className="links-section">
          <div className="column">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">How To</a>
              </li>
              <li>
                <a href="#">Join Hydra</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media-section">
          <h3>SOCIALIZE WITH HYDRA</h3>
          <div className="social-icons">
            <a href="#">
              <img src={facebook} className="social" />
            </a>
            <a href="#">
              <img src={twitter} className="social" />
            </a>
            <a href="#">
              <img src={linkedin} className="social" />
            </a>
            <a href="#">
              <img src={youtube} className="social" />
            </a>
            <a href="#">
              <img src={instagram} className="social" />
            </a>
            <a href="#">
              <img src={pinintrest} className="social" />
            </a>
          </div>
          <button
            id="join_button"
            style={{ margin: "50px 0", marginRight: "auto" }}
          >
            Build Your World
          </button>
        </div>
      </div>
      <hr id="foot-hr" />
      <div className="copyright-section" style={{ background: "transparent" }}>
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
