import React from "react";

const Page3 = () => {
  return (
    <div style={{ marginTop: "4%" }}>
      <h1
        style={{
          fontFamily: "Titillium Web",
          fontSize: "2.1em",
          marginBottom: "4%",
        }}
      >
        E-Waste Services for a Greener Future
      </h1>
      <p
        style={{
          fontSize: "1em",
          marginLeft: "25%",
          marginRight: "25%",
          marginBottom: "2%",
        }}
      >
        At our company, we offer a range of e-waste services including
        electronic recycle, data destruction, and collection events. We are
        commited to help you to dipose of your electronic waste reponsibly and
        sustainabily.
      </p>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div>
          <img
            src="https://media.istockphoto.com/id/1418156343/photo/woman-doing-recycle.jpg?s=612x612&w=0&k=20&c=YSBLnRZMmmT14qkIQhAlpyXOYTMtgoZhNQiMOY9HqBk="
            alt="Card image cap"
            height={250}
            width={400}
          />
          <div>
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "3%",
                marginBottom: "3%",
              }}
            >
              Electronic Recycling Done Right
            </h1>
            <p className="card-text">
              We specialize in environmentally-friendly electronic recycling
              solutions, ensuring that your old devices are properly recycled
              and their components are reused or disposed of safely.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1631861178/photo/environmental-activism-at-home-woman-with-e-waste.jpg?s=612x612&w=0&k=20&c=F9wc6tROH_62H3-2NNHdXRwwZMbT8s4kC9MASneL8WU="
            alt="Card image cap"
            height={250}
            width={400}
          />
          <div>
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "3%",
                marginBottom: "3%",
              }}
            >
              Secure Data Destruction Services
            </h1>
            <p className="card-text">
              Protect your sensitive data with our secure data destruction
              services. We use industry-leading techniques to ensure that your
              data is completely wiped from your devices.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1480934075/photo/man-disassembling-old-digital-tablet.jpg?s=612x612&w=0&k=20&c=HnzjmuToxRWExw80cDo68x8CsxUaJNWGUmyJ9eajOKM="
            alt="Card image cap"
            height={250}
            width={400}
          />
          <div>
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "3%",
                marginBottom: "3%",
              }}
            >
              Convenient Collection Events
            </h1>
            <p className="card-text">
              Join our collection events and safely dispose of your electronic
              waste. We make it easy for you to drop off your old devices and
              contribute to a cleaner environment
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "3%" }}>
        <button class="button">Learn More</button>
        <button class="button">Sign Up</button>
      </div>
    </div>
  );
};
export default Page3;
