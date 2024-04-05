import React from "react";
import { FaEnvelope, FaPhone, FaAddressBook } from "react-icons/fa";
const Page4 = () => {
  return (
    <div className="container">
      <div className="container1">
        <h1
          style={{
            fontSize: "2.5em",
            textAlign: "left",
            fontFamily: "Titillium Web",
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            fontSize: "17px",
            textAlign: "left",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          Schedule E-Waste Pickup Today.
        </p>

        <div>
          <div style={{ display: "flex" }}>
            <FaAddressBook />
            <h3 style={{ marginLeft: "10%", marginBottom: "5%" }}>
              123 street , Near xyz place , India
            </h3>
          </div>

          <div style={{ display: "flex" }}>
            <FaEnvelope />
            <h3 style={{ marginLeft: "10%", marginBottom: "5%" }}>
              hello@example.com
            </h3>
          </div>
          <div style={{ display: "flex" }}>
            <FaPhone />
            <h3 style={{ marginLeft: "10%" }}>+1 000-0000-000</h3>
          </div>
        </div>
      </div>
      <div
        className="container2"
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <form>
          <div style={{}}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Page4;
