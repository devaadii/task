import React from "react";
import logo from "../images/image.png";
import facebook from "../socials/image.png";
import twitter from "../socials/image copy.png";
import linkedin from "../socials/image copy 2.png";
import youtube from "../socials/image copy 3.png";
import instagram from "../socials/image copy 4.png";
import pinintrest from "../socials/image copy 5.png";
import vector from "../vector/image copy 2.png";
const Footer = () => {
  return (
    <footer
      className="footer-container"
      style={{
        background: `url(${vector})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "40%",
      }}
    >
      <div className="footer-content" style={{ background: "transparent" }}>
        <div className="logo-section" style={{ background: "transparent" }}>
          <img
            style={{ background: "rgba(0,0,0,0)" }}
            src={logo}
            alt="Hydra Logo"
          />
        </div>
        <hr className="links-hr"></hr>
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
          <hr className="links-hr"></hr>
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
        <hr className="links-hr"></hr>
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
            className="button-foot"
            style={{ margin: "50px 0" }}
          >
            Build Your World
          </button>
        </div>
      </div>
      <hr id="foot-hr" />
      <div className="copyright-section" style={{ background: "transparent" }}>
        <span> 2023 © HYDRA LANDING PAGE</span>{" "}
        <span>- BY ZINE. E. FALOUTI</span>
        <span>- ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;
