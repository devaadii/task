import React from "react";
import girl from "../images/cards-images/image copy 6.png";
import arrow from "../icons/image copy.png";
import unreal from "../brands/image.png";
import unity from "../brands/image copy.png";
import ocolus from "../brands/image copy 2.png";
import vive from "../brands/image copy 3.png";

function Technologies() {
  return (
    <>
      {" "}
      <div
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
            fontSize: "3vw",
            fontWeight: "700px",
            background: "transparent",
          }}
        >
          TECHNOLOGIES & HARDWARE <br />
          <p
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
      <div>
        <img className="image-brand" src={unreal} />
        <img className="image-brand" src={unity} />
        <img className="image-brand" src={ocolus} />
        <img className="image-brand" src={vive} />
      </div>
    </>
  );
}

export default Technologies;
