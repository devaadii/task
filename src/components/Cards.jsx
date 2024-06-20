import React from "react";
import { useState } from "react";
import img1 from "../images/cards-images/image.png";
import img2 from "../images/cards-images/image copy.png";
import img3 from "../images/cards-images/image copy 2.png";
import img4 from "../images/cards-images/image copy 3.png";
import arrow from "../images/image copy 2.png";
import vr from "../images/image copy 4.png";
import back from "../images/image copy 5.png";

function Cards() {
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
      <div style={{ margin: "40px" }}>
        <div id="intro">
          <div
            id="intro-text"
            style={{
              color: "white",
              fontWeight: "300",
              display: "inline",
            }}
          >
            <span id="span" style={{ color: "white", fontWeight: "700" }}>
              WHY BUILD<br></br>
            </span>
            WITH HYDRA
            <img src={arrow} id="intro-arrow" />
          </div>

          <p id="intro1" style={{ color: "white", fontWeight: "400" }}>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px 60px",
        }}
      >
        <div className="card" style={{ width: "18rem", borderRadius: "50px" }}>
          <img className="card-img-top" src={img1} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">SIMULATION</h3>
            <hr className="card-hr"></hr>
            <p className="card-text">
              Vitae sapien pellentesque habitant i nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button
              id="join_button"
              style={{ fontSize: "12px", alignSelf: "center" }}
            >
              TRY IT NOW
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", borderRadius: "50px" }}>
          <img className="card-img-top" src={img2} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">EDUCATION</h3>
            <hr className="card-hr"></hr>
            <p className="card-text">
              Vitae sapien pellentesque habitant i nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button
              id="join_button"
              style={{ fontSize: "12px", alignSelf: "center" }}
            >
              TRY IT NOW
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", borderRadius: "50px" }}>
          <img className="card-img-top" src={img3} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">SELF-CARE</h3>
            <hr className="card-hr"></hr>
            <p className="card-text">
              Vitae sapien pellentesque habitant i nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button
              id="join_button"
              style={{ fontSize: "12px", alignSelf: "center" }}
            >
              TRY IT NOW
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", borderRadius: "50px" }}>
          <img className="card-img-top" src={img4} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">OUTDOOR</h3>
            <hr className="card-hr"></hr>
            <p className="card-text">
              Vitae sapien pellentesque habitant i nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button
              id="join_button"
              style={{ fontSize: "12px", alignSelf: "center" }}
            >
              TRY IT NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
