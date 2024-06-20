import React, { useState } from "react";
import img1 from "../images/cards-images/image.png";
import img2 from "../images/cards-images/image copy.png";
import img3 from "../images/cards-images/image copy 2.png";
import img4 from "../images/cards-images/image copy 3.png";
import arrow from "../images/image copy 2.png";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="carousel-item">
            <div className="card1" style={{ borderRadius: "50px" }}>
              <img className="card-img-top" src={img1} alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">SIMULATION</h3>
                <hr className="card-hr" />
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
          <div className="carousel-item">
            <div className="card1" style={{ borderRadius: "50px" }}>
              <img className="card-img-top" src={img2} alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">EDUCATION</h3>
                <hr className="card-hr" />
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
          <div className="carousel-item">
            <div className="card1" style={{ borderRadius: "50px" }}>
              <img className="card-img-top" src={img3} alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">SELF-CARE</h3>
                <hr className="card-hr" />
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
          <div className="carousel-item">
            <div className="card1" style={{ borderRadius: "50px" }}>
              <img className="card-img-top" src={img4} alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">OUTDOOR</h3>
                <hr className="card-hr" />
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
        </div>
      </div>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default App;
