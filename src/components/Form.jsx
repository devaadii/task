import React from "react";

function Form() {
  return (
    <div
      className="form-container"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
      }}
    >
      <h2 className="form-title" style={{ color: "white" }}>
        JOIN HYDRA
      </h2>
      <hr id="foot-hr"></hr>
      <p
        className="form-subtitle"
        style={{ color: "white", textAlign: "center" }}
      >
        Let's Build Your VR Experience
      </p>
      <form className="form" style={{ background: "transparent" }}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              style={{
                border: "2px solid white",
                borderRadius: "40px",

                height: "5vh",
                padding: "5px",
              }}
              type="text"
              className="form-control names"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              style={{
                border: "2px solid white",
                borderRadius: "40px",

                height: "5vh",
                padding: "5px",
              }}
              type="text"
              className="form-control names"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              style={{
                border: "2px solid white",
                borderRadius: "40px",

                height: "5vh",
                padding: "5px",
              }}
              type="email"
              className="form-control names"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              style={{
                border: "2px solid white",
                borderRadius: "40px",

                height: "5vh",
                padding: "5px",
              }}
              type="text"
              className="form-control names"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            style={{
              border: "2px solid white",
              borderRadius: "40px",
              width: "100%",

              height: "5vh",
            }}
            type="text"
            className="form-control"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            style={{
              border: "2px solid white",
              borderRadius: "40px",
              width: "100%",

              height: "15vh",
            }}
            className="form-control"
            rows="5"
            placeholder="Tell Us Something..."
          ></textarea>
        </div>
        <button
          id="join_button"
          type="submit"
          className="btn btn-primary btn-block"
          style={{ width: "50%", margin: "0 auto" }}
        >
          SEND TO HYDRA
        </button>
      </form>
    </div>
  );
}

export default Form;
