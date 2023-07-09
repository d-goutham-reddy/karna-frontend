import React, { Fragment } from "react";
// import women from "../../assests/woman.png"

const TestMonial = (props) => {
  return (
    <Fragment>
      <div className="col-12 col-md-4 w-100 h-100" style={{ position: "relative" }}>
        <div
          className="w-100 d-flex mt-3 h-100 justify-content-center align-items-center"
          style={{
            zIndex: "2",
            border: "1px solid #FE472D",
            borderRadius: "10px",
          }}
        >
          <img
            src={props.ima}
            alt="profile-pic"
            style={{
              width: "70px",
              height: "70px",
              position: "absolute",
              top: "-33px",
              border: "2px solid #FE472D",
              borderRadius: "50%",
              background: "#fff",
              zIndex: "5",
            }}
          />
          <div className="my-4">
            {/* <h4 style={{ position: "relative", textAlign:'center' }}>
              {props.name ? props.name : " "}
            </h4> */}
            <p className="text-center">
              <span style={{ fontSize: "30px" }}>{`“`}</span>
              {props.feed ? props.feed : ""}
              <span style={{ fontSize: "30px" }}>{`“`}</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TestMonial;
