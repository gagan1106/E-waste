import React from "react";

const Page2 = () => {
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
          marginBottom: "4%",
        }}
      >
        Collection Services
      </h1>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div>
          <img
            src="https://www.skvewasterecycling.com/assets/img/skv.png"
            alt="Card image cap"
            height={250}
            width={400}
          />
          <div>
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Recycling Services
            </h1>
            <p className="card-text" style={{ marginBottom: "10" }}>
              We ensure secure data destruction to protect your sensitive
              information.
            </p>
            <a href="">Read More</a>
          </div>
        </div>

        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*MVPMTE0SiZKJcHf5MWT1_Q.jpeg"
            alt="Card image cap"
            height={250}
            width={400}
          />
          <div>
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Refurbishing Services
            </h1>
            <p className="card-text" style={{ marginBottom: "10%" }}>
              Our refurbishing services give new life to old electronic devices,
              reducing waste.
            </p>
          </div>
          <a href="#">Read More</a>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzK7uxW0NXUCRX2wCYKONQik8swQIsPpSoOmb8TIM_zw&s"
            alt="Card image cap"
            height={250}
            width={400}
          />
          <div>
            <h1
              style={{
                fontFamily: "Titillium Web",
                fontSize: "1.8em",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Data Distruction Services
            </h1>
            <p className="card-text" style={{ marginBottom: "10%" }}>
              We ensure secure data destruction to protect your sensitive
              information.
            </p>
          </div>
          <a href="#">Read More </a>
        </div>
      </div>
    </div>
  );
};

export default Page2;
