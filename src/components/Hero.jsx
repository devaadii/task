import React, { useState } from "react";
import hero_img from "../images/hero.png";
import arrow from "../images/arrow.png";
import vector from "../images/vector.png";
import gps from "../icons/image.png";
import call from "../icons/call.png";
import message from "../icons/rename.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="hero">
      <img src={vector} id="vector" />
      <img id="hero-img" src={hero_img} />
      <div id="hero-content">
        <h2>
          <span>Dive</span> Into The Depths of <span>Virtual Reality</span>
        </h2>
        <p id="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          inventore neque, adipisci quibusdam dicta tempore qui unde id
          molestias cumque numquam dolores ex facilis amet debitis
          necessitatibus asperiores! Nam, optio.
        </p>
        <div className="button-arrow">
          {" "}
          <button id="join_button">Build Your World</button>
          <img
            src={arrow}
            style={{ height: "5.8vh", margin: "0 20px 0 40px" }}
          />
        </div>
      </div>
      <div className="long-section">
        <div className="single">
          <img className="gps" src={gps} alt="loca" />
          <div style={{ background: "rgba(0, 0, 0, 0)", margin: "8px" }}>
            <span className="big">Pay Us a visit</span>
            <br />
            <span className="small">
              Union St, Seattle, WA 98101, United States
            </span>
          </div>
        </div>{" "}
        <hr></hr>
        <div className="single">
          <img className="call" src={call} alt="loca" />
          <div style={{ background: "rgba(0, 0, 0, 0)", margin: "8px" }}>
            <span className="big">Pay Us a visit</span>
            <br />
            <span className="small">
              Union St, Seattle, WA 98101, United States
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="single">
          <img className="mess" src={message} alt="loca" />
          <div style={{ background: "rgba(0, 0, 0, 0)", margin: "8px" }}>
            <span className="big">Pay Us a visit</span>
            <br />
            <span className="small">
              Union St, Seattle, WA 98101, United States
            </span>
          </div>
        </div>
      </div>{" "}
      <div id="slider">
        <Slider {...settings}>
          <div className="single">
            <div
              style={{
                float: "left",
                marginRight: "20px",
              }}
            >
              <img className="gps" src={gps} alt="loca" />
            </div>
            <div style={{ background: "rgba(0, 0, 0, 0)", margin: "8px" }}>
              <span className="big">Pay Us a Visit</span>
              <br />
              <span className="small">
                Union St, Seattle, WA 98101, United States
              </span>
            </div>
          </div>
          <div className="single">
            <div
              style={{
                float: "left",
                marginRight: "20px",
              }}
            >
              <img className="call" src={call} alt="loca" />
            </div>

            <div
              style={{
                background: "rgba(0, 0, 0, 0)",
                margin: "8px",
              }}
            >
              <span className="big">Call Us</span>
              <br />
              <span className="small">+1 234 567 890</span>
            </div>
          </div>
          <div className="single">
            <div
              style={{
                float: "left",
                marginRight: "20px",
              }}
            >
              <img className="mess" src={message} alt="loca" />
            </div>
            <div
              style={{
                background: "rgba(0, 0, 0, 0)",
                margin: "8px",
              }}
            >
              <span className="big">Send Us a Message</span>
              <br />
              <span className="small">info@example.com</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
