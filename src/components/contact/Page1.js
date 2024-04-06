import React from "react";

const Page1 = () => {
  return (
    <div className="container">
      <div className="container1">
        <p className="header"
        style={{
          fontFamily: "Titillium Web",
          fontSize: "14px",
          marginLeft: "5%",
          textAlign: "left",
        }}>Sustainable</p>
        <h1
          style={{
            fontFamily: "Titillium Web",
            fontSize: "2.5em",
            marginLeft: "5%",
            textAlign: "left",
          }}
        >
          Recycle Your Electronics
        </h1>
      </div>
      <div className="container2">
        <p style={{ fontSize: "17px", textAlign: "left" }}>
        Discover the importance of electronic recycling and how it helps protect the environment. <br/>Join us in reducing e-waste and promoting a greener future.
        </p>
        <div class="button-container">
          <button class="button">Learn More</button>
          <button class="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
