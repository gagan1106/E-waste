import React from "react";
import { FaCube } from "react-icons/fa";
const Page3 = () => {
  return (
    <div
      style={{
        marginLeft: "4%",
        marginRight: "4%",
        marginBottom: "10%",
      }}
    >
      <h1
        style={{
          fontFamily: "Titillium Web",
          fontSize: "2.1em",
          marginBottom: "5%",
        }}
      >
        Secure and Environmentally Compliant E-Waste Management Services
      </h1>
      <p style={{ marginBottom: "10%", marginLeft: "25%", marginRight: "25%" }}>
        Our e-waste management services offer secure processing,environmental
        compliances,and certificates of distruction/ recycling. We ensure that
        your electronic waste is handled responsibly and disposed of in an
        environmentally friendly manner.
      </p>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div>
          <div>
            <FaCube size={"50"} />
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Secure Processing
            </h1>
            <p className="card-text" style={{ marginBottom: "10%" }}>
              We priortize the security of your electronic waste throughout the
              entire disposal process.
            </p>
          </div>
        </div>

        <div>
          <div>
            <FaCube size={"50"} />
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Environmental Compliances
            </h1>
            <p className="card-text" style={{ marginBottom: "10%" }}>
              Our services adhere to all relevant environmental regulations and
              guidelines.
            </p>
          </div>
        </div>

        <div>
          <div>
            '<FaCube size={"50"} />'
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Certificates of Distruction and Recycling
            </h1>
            <p className="card-text" style={{ marginBottom: "10%" }}>
              We provide certificates to verify the proper destruction or
              recycling your electronic e-waste.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "4%" }}>
        <button class="button">Learn More</button>
        <button class="button">Schedule</button>
      </div>
    </div>
  );
};

export default Page3;
