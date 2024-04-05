import React from "react";

const Page4 = () => {
  return (
    <div className="container">
      <div
        className="container1"
        style={{ marginTop: "10%", marginLeft: "10%" }}
      >
        <h1
          style={{
            fontSize: "2.5em",
            textAlign: "left",
            fontFamily: "Titillium Web",
            marginTop: "20%",
            marginRight: "5%",
          }}
        >
          Our Journey in E-Waste Management
        </h1>

        <div class="button-container">
          <button class="button">Learn More</button>
          <button class="button">Sign Up</button>
        </div>
      </div>
      <div style={{ width: "50%", textAlign: "left", marginTop: "6%" }}>
        <h1>👉 Sustainable Solutions</h1>
        <p style={{ marginLeft: "9%" }}>
          We started a solution to revolutionise e-waste management.
        </p>
        <h1 style={{ marginTop: "10%" }}>👉 Environmental Impact</h1>
        <p style={{ marginLeft: "9%" }}>
          Our efforts haveled to a significant reduction in electronic waste
          pollution.
        </p>
        <h1 style={{ marginTop: "10%" }}>👉 Community Engagement</h1>
        <p style={{ marginLeft: "9%" }}>
          We activily collaborate with local communities to raise awareness and
          promote responsible e-waste disposal.
        </p>
        <h1 style={{ marginTop: "10%" }}>👉 Technological Advancements</h1>
        <p style={{ marginLeft: "9%" }}>
          We continuously innovate and adopt cutting edge technologies to
          improve e-waste recycling processes.
        </p>
      </div>
    </div>
  );
};

export default Page4;
