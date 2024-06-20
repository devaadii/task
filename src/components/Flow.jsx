import React from "react";
import arrow from "../images/image copy 2.png";
import vector from "../vector/image.png";
import smallArrow from "../icons/image copy 2.png";
function Flow() {
  return (
    <div id="flows">
      <div style={{ margin: "40px" }}>
        {" "}
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
      </div>
      <div
        id="circle"
        style={{
          background: `url(${vector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div
          className="circles"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
          }}
        >
          01
        </div>
        <div
          className="circles"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
          }}
        >
          02
        </div>
        <div
          className="circles"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
          }}
        >
          03
        </div>
        <div
          className="circles"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
          }}
        >
          04
        </div>
      </div>
      <div id="label" style={{ margin: "80px 0 80px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <img src={smallArrow} style={{ marginTop: "3px" }} />

          <div style={{ display: "inline-block", margin: "0 20px" }}>
            <span className="labelh">
              3D Conception <br />& Design
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <img src={smallArrow} style={{ marginTop: "3px" }} />

          <div style={{ display: "inline-block", margin: "0 20px" }}>
            <span className="labelh">
              3D Conception <br />& Design
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <img src={smallArrow} style={{ marginTop: "3px" }} />

          <div style={{ display: "inline-block", margin: "0 20px" }}>
            <span className="labelh">
              INTERACTION <br />
              DESIGN
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <img src={smallArrow} style={{ marginTop: "3px" }} />

          <div style={{ display: "inline-block", margin: "0 20px" }}>
            <span className="labelh">
              VR World
              <br />
              User Testing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flow;
