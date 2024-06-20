import React, { useState } from "react";
import logo from "../images/image.png";
import hydra_name from "../images/image copy.png";
import toggle from "../images/toggle.png";

function Nav() {
  const [isToggled, setIstoggled] = useState(false);
  const handleToggle = () => {
    setIstoggled(!isToggled);
  };
  return (
    <nav
      className="opacity-0"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div id="logo_div" style={{ margin: "20px" }}>
        <img id="log0" src={logo} alt="logo" />
        <img id="hydra" src={hydra_name} alt="name" />
      </div>
      <div
        className={`links-container ${isToggled ? "show" : ""}`}
        style={{
          marginLeft: "auto",
          marginRight: "80px",
          background: "transparent",
        }}
      >
        <a> ABOUT</a>
        <a> SERVICES</a>
        <a> TECHNOLOGIES</a>
        <a> HOW TO</a>
      </div>
      <div id="button-container" style={{ margin: "20px" }}>
        <button id="contact_button">CONTACT US</button>
        <button id="join_button">JOIN HYDRA</button>
      </div>
      <button className="toggler" onClick={handleToggle}>
        <img src={toggle} id="toggle-icon" />
      </button>
    </nav>
  );
}

export default Nav;
