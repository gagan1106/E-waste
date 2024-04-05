import React from "react";
import Lottie from "lottie-react";
import animationData1 from "./Harsh.json";
import animationData2 from "./Gagan.json";
import animationData3 from "./Aryan.json";
import animationData4 from "./Riya.json";

const Page3 = () => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Titillium Web",
          fontSize: "2.1em",
          marginBottom: "2%",
        }}
      >
        Meet Our Team
      </h1>
      <p
        style={{
          fontSize: "1em",
          marginLeft: "25%",
          marginRight: "25%",
          marginBottom: "5%",
        }}
      >
        Our Team is comprised of experts in e-waste.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <div style={{ height: "100%", width: "25%" }}>
          <Lottie animationData={animationData1} style={{ height: "100%" }} />
          <h2 style={{ fontFamily: "Titillium Web" }}>Harsh Kumar</h2>
          <h4 style={{ fontFamily: "Titillium Web" }}>
            Team Leader - Development
          </h4>
        </div>

        <div style={{ height: "100%", width: "25%" }}>
          <Lottie animationData={animationData2} style={{ height: "100%" }} />
          <h2 style={{ fontFamily: "Titillium Web" }}>Gagan Maddheshia</h2>
          <h4 style={{ fontFamily: "Titillium Web" }}>
            Team Member - Development
          </h4>
        </div>

        <div style={{ height: "100%", width: "25%" }}>
          <Lottie animationData={animationData3} style={{ height: "100%" }} />
          <h2 style={{ fontFamily: "Titillium Web" }}>Aryan Singh</h2>
          <h4 style={{ fontFamily: "Titillium Web" }}>
            Team Member - Research & Analytics
          </h4>
        </div>

        <div style={{ height: "100%", width: "25%" }}>
          <Lottie animationData={animationData4} style={{ height: "100%" }} />
          <h2 style={{ fontFamily: "Titillium Web" }}>Riya Bisht</h2>
          <h4 style={{ fontFamily: "Titillium Web" }}>
            Team Member - Research & Analytics
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Page3;
