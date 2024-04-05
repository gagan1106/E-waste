import React from "react";

const Page1 = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "10%",
          marginTop: "10%",
          marginBottom: "5%",
        }}
      >
        <h1 style={{ fontFamily: "Titillium Web", fontSize: "2.5em" }}>
          Welcome to
        </h1>
        <p>We are committed to managing e-waste responsibly and sustainably.</p>
      </div>

      <div>
        <div className="container">
          <div
            className="container1"
            style={{ marginTop: "5%", marginLeft: "10%" }}
          >
            <h1
              style={{
                fontSize: "2.5em",
                textAlign: "left",
                fontFamily: "Titillium Web",
              }}
            >
              Leading the Way in E-Waste Management System
            </h1>
          </div>
          <div className="container2">
            <p style={{ fontSize: "17px", textAlign: "left" }}>
              At our company, we have a rich history of providing innovative
              solutions for e-waste management. Our mission is to reduce
              electronic waste and promote recycling practices. We envision a
              future where electronic waste is minimized, and valuable resources
              are recovered. Our values of sustainability, responsibility, and
              innovation guide everything we do.
            </p>
            <div class="button-container">
              <button class="button">Learn More</button>
              <button class="button">Sign Up</button>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "10%", marginLeft: "2%" }}>
          <img
            src="https://media.istockphoto.com/id/1372577388/photo/old-electronic-devices-on-a-dark-background-the-concept-of-recycling-and-disposal-of.webp?b=1&s=170667a&w=0&k=20&c=9yxM8zJ2WEgmu3oDjRuYrxmflZF3KQvSbCtKvPdLUcg="
            alt="pic"
            style={{ width: "75em", height: "38em", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
