import React from "react";
import arrow from "../images/image copy 2.png";
import vr from "../images/image copy 4.png";
import back from "../images/image copy 5.png";

function Secondpage() {
  return (
    <div>
      {" "}
      <div style={{ margin: "40px" }}>
        <div id="intro">
          {" "}
          <div
            id="intro-text"
            style={{
              color: "white",
              fontWeight: "300",
              display: "inline",
            }}
          >
            <span id="span" style={{ color: "white", fontWeight: "700" }}>
              INTRODUCTION
            </span>
            <br></br>
            TO HYDRA VR
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
        <div
          style={{
            background: `url(${back})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div
            id="vr-flex"
            style={{
              display: "flex",

              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img src={vr} id="vr" />
            <div
              style={{
                color: "white",
                fontWeight: "300",
                display: "inline",
                fontSize: "60px",
              }}
            >
              <span
                id="abouthydra"
                style={{ color: "white", fontWeight: "700" }}
              >
                ABOUT<br></br>HYDRA VR
              </span>
              <p
                id="vrtext"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
                Aenean et tortor at risus viverra adipiscing at in. Mattis
                aliquam faucibus purus in massa. Est placerat in egestas erat
                imperdiet sed. Consequat semper viverra nam libero justo laoreet
                sit amet. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
                ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
                nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
                tempor.
              </p>
              <button id="join_button" style={{ width: "20vw" }}>
                LET'S GET IN TOUCH{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
