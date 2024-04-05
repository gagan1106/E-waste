import React from "react";
import Lottie from "lottie-react";
import animationData from "./Growth.json";

const Page2 = () => {
  return (
    <div className="container">
      <div className="container1" style={{ marginTop: "15%" }}>
        <h1
          style={{
            fontSize: "2.5em",
            textAlign: "left",
            fontFamily: "Titillium Web",
          }}
        >
          Our Impact in Numbers
        </h1>
        <p style={{ fontSize: "17px", textAlign: "left" }}>
          At our company, we are proud to have recycled over _____(example - 1
          million tons) of e-waste, reducing carbon emmisions and preserving
          valuable resources.
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", marginRight: "5%" }}>
            <h1
              style={{
                fontSize: "4em",
                textAlign: "left",
                fontFamily: "Titillium Web",
              }}
            >
              50%
            </h1>
            <p style={{ textAlign: "left" }}>
              Reduction in electronic waste send to landfills.
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <h1
              style={{
                fontSize: "4em",
                fontFamily: "Titillium Web",
                textAlign: "left",
              }}
            >
              50%
            </h1>
            <p style={{ textAlign: "left" }}>
              Decrease in green house gas emissions through our recycling
              efforts.
            </p>
          </div>
        </div>
      </div>
      <div className="container2">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Page2;
