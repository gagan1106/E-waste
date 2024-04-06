import React from "react";
import { FaCube } from "react-icons/fa";

const Page2 = () => {
  return (
    <div className="containers">
      <div className="contact-second">
        <div className="second-first">
          <p className="first-head">
            Discover Our Efficient and <br/>
            Sustainable Electronic Recycling <br/>
            Process
          </p>
        </div>
        <div className="second-last">
          <p className="last-para">
              At our company , we take electronic recycling seriously.Our process ensures that your e-waste is handled responsibly and sustainably.
          </p>
         <div className="coll">
         <div className="collections">
          <FaCube size={"50"} />
          
            <p className="collection-head">
              Collection
            </p>
            <p className="collection-item">
              We offer convinent collection services<br/>
              to pick up your electronic waste from<br/>
              your location.

            </p>

          </div>
          <div className="collections">
          <FaCube size={"50"} />
            <p className="collection-head">
              Processing
              </p>
            <p className="collection-item">
              We offer convinent collection services<br/>
              to pick up your electronic waste from<br/>
              your location.

            </p>

          </div>
         </div>
        </div>
      </div>

    <div className="process-content">
      <input type="text" className="cont-input " placeholder="Enter  Your Location"/>
      <button className="button" >Submit</button>

    </div>
    <img
            src="https://media.istockphoto.com/id/1418156343/photo/woman-doing-recycle.jpg?s=612x612&w=0&k=20&c=YSBLnRZMmmT14qkIQhAlpyXOYTMtgoZhNQiMOY9HqBk="
            alt="Card image cap"
            height={500}
            width={1000}
          />
       
    </div>
  );
};

export default Page2;
