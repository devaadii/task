import React, { useState } from "react";

const FlowCarousel = ({ vector, smallArrow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { number: "01", label: "3D Conception & Design" },
    { number: "02", label: "3D Conception & Design" },
    { number: "03", label: "INTERACTION DESIGN" },
    { number: "04", label: "VR World User Testing" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div
      id="flow-phone"
      style={{
        textAlign: "center",
        position: "relative",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <div
        id="circle"
        style={{
          background: `url(${vector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "400px",
          margin: "auto",
          position: "relative",
        }}
      >
        <div
          className="circles"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
            height: "200px",
          }}
        >
          {items[currentIndex].number}
        </div>
        <div id="label" style={{ margin: "80px 0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <img src={smallArrow} style={{ marginTop: "3px" }} />
            <div style={{ display: "inline-block", margin: "0 20px" }}>
              <span className="labelh">
                <button
                  onClick={prevSlide}
                  style={{ ...buttonStyle, left: "10px" }}
                >
                  Previous
                </button>
                {items[currentIndex].label.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}

                <button
                  onClick={nextSlide}
                  style={{ ...buttonStyle, right: "10px" }}
                >
                  Next
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "18px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  zIndex: 1,
};

export default FlowCarousel;
