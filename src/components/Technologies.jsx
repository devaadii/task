import React from "react";
import girl from "../images/cards-images/image copy 6.png";
import arrow from "../icons/image copy.png";
import unreal from "../brands/image.png";
import unity from "../brands/image copy.png";
import ocolus from "../brands/image copy 2.png";
import vive from "../brands/image copy 3.png";
import { useState } from "react";
import left from "../icons/image copy 5.png";
import right from "../icons/image copy 6.png";

function Technologies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  return (
    <>
      {" "}
      <div
        className="techs"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          height: "40vh",
          margin: "40px",
        }}
      >
        <img src={girl} id="girl" />
        <h3
          style={{
            position: "absolute",
            color: "white",
            textAlign: "center",

            fontWeight: "700px",
            background: "transparent",
          }}
        >
          TECHNOLOGIES & HARDWARE <br />
          <p
            id="p2"
            style={{
              color: "white",
              fontWeight: "300px",
              fontSize: "3vw",
            }}
          >
            USED BY HYDRA VR.
          </p>{" "}
        </h3>{" "}
        <button
          id="join_button"
          style={{
            borderRadius: "100%",
            width: "4vw",
            height: "4vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "-2vw",
            borderColor: "background: rgba(14, 14, 14, 0.32)",
            border: "5px solid",
          }}
          className="halfDiv"
        >
          <img
            src={arrow}
            style={{
              background: "transparent",
              height: "1vw",
            }}
          />
        </button>
      </div>
      <div id="brands">
        <img className="image-brand" src={unreal} />
        <img className="image-brand" src={unity} />
        <img className="image-brand" src={ocolus} />
        <img className="image-brand" src={vive} />
      </div>
      <div className="carousel-container" style={{ margin: "20px auto" }}>
        <button className="carousel-control prev" onClick={prevSlide}>
          <img
            src={left}
            style={{ background: "transparent", width: "40px" }}
          />
        </button>
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="carousel-item">
              <img className="image-brand" src={unreal} alt="Unreal Engine" />
            </div>
            <div className="carousel-item">
              <img className="image-brand" src={unity} alt="Unity" />
            </div>
            <div className="carousel-item">
              <img className="image-brand" src={ocolus} alt="Ocolus" />
            </div>
            <div className="carousel-item">
              <img className="image-brand" src={vive} alt="Vive" />
            </div>
          </div>
        </div>
        <button className="carousel-control next" onClick={nextSlide}>
          <img
            src={right}
            style={{ background: "transparent", width: "40px" }}
          />
        </button>
      </div>
    </>
  );
}

export default Technologies;
