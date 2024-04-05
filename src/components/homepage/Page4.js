import React from "react";

const Page4 = () => {
  return (
    <div
      style={{
        marginTop: "10%",
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
        Stay Informed with Our Blog
      </h1>
      <p
        style={{
          fontSize: "1em",
          marginLeft: "25%",
          marginRight: "25%",
          marginBottom: "2%",
        }}
      >
        Get the latest insights on e-waste management and industry news.
      </p>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <div>
          <img
            src="https://www.clearias.com/up/e-waste.png"
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
              The Importance of Recycling Electronics
            </h1>
            <p className="card-text">
              Learn why recycling electronic is crucial for a sustainable
              future.
            </p>
            <a href="">Read More</a>
          </div>
        </div>

        <div>
          <img
            src="https://ecogreenitrecycling.co.uk/wp-content/uploads/2019/10/Header-How-To-Dispose-Of-Electronics-In-The-Most-Responsible-Way-1.jpg"
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
              How to Dispose of E-Waste Responsibly
            </h1>
            <p className="card-text">
              Discuss the proper methods for disposing an electronic waste.
            </p>
          </div>
          <a href="#">Read More</a>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMjxBliUOYUUDlxqf5cwl8FV2vWfEM4MnEdU4eN6r9Q&s"
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
              The Future of E-Waste Recycling
            </h1>
            <p className="card-text">
              Explore the innovative technologies shaping the e-waste recycling
              industry.
            </p>
          </div>
          <a href="#">Read More </a>
        </div>
      </div>
      <div style={{ marginTop: "4%" }}>
        <button class="button">Learn More</button>
        <button class="button">Sign Up</button>
      </div>
    </div>
  );
};
export default Page4;
