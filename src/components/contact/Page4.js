import React from "react";
import { FaCube } from "react-icons/fa";

const Page4 = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <p className="page-title">
        Follow these steps to recycle your electronics responsibly
        </p>
      </div>


      <div className="page-second">
        <div className="second-steps">
        <FaCube size={"50"} />
        <div>
        <p className="steps-title">
        Step 1: Gather your old electronics
        </p>
        <p className="steps-depsc">
       Collect  all the items you no longer use or need.
        </p>
        </div>
        </div>
        <div className="second-steps">
        <FaCube size={"50"} />
        <div>
        <p className="steps-title">
        Step 2: Find a certified e-waste recycling center
        </p>
        <p className="steps-depsc">
        Locate a reputable recycling center that accepts electronic-waste.
       </p>
        </div>
        </div>
        <div className="second-steps">
        <FaCube size={"50"} />
        <div>
        <p className="steps-title">
        Step 3: Prepare your electronics for recycling
        </p>
        <p className="steps-depsc">
        Remove any personal data and accessories from your devices.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Page4;
