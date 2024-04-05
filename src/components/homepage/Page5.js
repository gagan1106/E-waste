import React from "react";
import Lottie from "lottie-react";
import animationData from "./Truck.json";
const Page5 = () => {
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
          Schedule Your E-Waste Pickup
        </h1>
        <p style={{ fontSize: "17px", textAlign: "left" }}>
          Dispose of your electronic waste responsibly with our expert
          consultants.
        </p>
        <div class="button-container">
          <button class="button">Schedule</button>
          <button class="button">Learn More</button>
        </div>
      </div>
      <div className="container2">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Page5;
