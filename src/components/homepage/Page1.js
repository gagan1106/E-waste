import React from "react";
import Lottie from "lottie-react";
import animationData from "./Peoples.json";

const Page1 = () => {
  return (
    <div className="container">
      <div className="container1" style={{ marginTop: "10%" }}>
        <h1
          style={{
            fontSize: "2.5em",
            textAlign: "left",
            fontFamily: "Titillium Web",
          }}
        >
          Transforming e-waste into sustainable future
        </h1>
        <p style={{ fontSize: "17px", textAlign: "left" }}>
          Join us in our mission to responsibily to manage and recycle
          electronic waste, reducing its impact on environment.
        </p>
        <div class="button-container">
          <button class="button">Learn More</button>
          <button class="button">Sign Up</button>
        </div>
      </div>
      <div className="container2">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Page1;
