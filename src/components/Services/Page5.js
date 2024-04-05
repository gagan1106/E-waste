import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Page5 = () => {
  return (
    <div className="container">
      <div className="container1">
        <h1
          style={{
            fontSize: "2.5em",
            textAlign: "left",
            fontFamily: "Titillium Web",
            marginBottom: "5%",
          }}
        >
          LOGO
        </h1>
        <p style={{ fontSize: "17px", textAlign: "left" }}>
          Join our newsletter to receive updates on new features and releases.
        </p>
        <div class="button-container">
          <input
            type="text"
            placeholder="Your Email Address"
            style={{ width: "300px", height: "40px" }}
          />
          <button class="button">Subscribe</button>
        </div>
      </div>
      <div className="container2" style={{ display: "flex" }}>
        <div>
          <div>
            <h2 style={{ textAlign: "center" }}>Follow us</h2>
          </div>
          <div style={{ display: "flex", marginTop: "25%" }}>
            <div style={{ marginLeft: "25%" }}>
              <a href="https://www.facebook.com/">
                <FaFacebook size={40} />
              </a>
            </div>
            <div style={{ marginLeft: "25%" }}>
              <a href="https://www.instagram.com/">
                <FaInstagram size={40} />
              </a>
            </div>
            <div style={{ marginLeft: "25%" }}>
              <a href="https://www.twitter.com/">
                <FaTwitter size={40} />
              </a>
            </div>
            <div style={{ marginLeft: "25%" }}>
              <a href="https://www.linkedin.com/">
                <FaLinkedin size={40} />
              </a>
            </div>
            <div style={{ marginLeft: "25%" }}>
              <a href="https://www.youtube.com/">
                <FaYoutube size={45} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
