import React from "react";

const Page8=()=>{
    return(
        <div className="eight">
            <div className="eight-head">

                <p className="head-text">
                    Affordable
                </p>
                <p className="head-header">
                    Pricing Options
                </p>
                <p className="head-cony">
                    Choose the plan that fits your needs and budget
                </p>

            </div>


            <div className="eight-last">
            <div className="eight-box">
                <h3>Basic</h3>
            <p className="head-header">
                    $19<span>/mo</span>
                </p>
               <div className="price-text">
               <p className="head-cony">
                    Secure Data Protection
                </p>
               <p className="head-cony">
                   24/7 Customer Support
                </p>
               <p className="head-cony">
                    Easy E-Waste Disposal
                </p>
               </div>
                <button className="btn" type="submit">Get Started</button>
            </div>
            <div className="eight-box">
                <h3>Business Plan</h3>
            <p className="head-header">
                    $29<span>/mo</span>
                </p>
                <div className="price-text">
               <p className="head-cony">
                    Advanced Data Recovery
                </p>
               <p className="head-cony">
                   Environment Friendly Practices
                </p>
               <p className="head-cony">
                    Certified E-waste Destruction
                </p>
                <p className="head-cony">
                    Secure Data Destruction
                </p>
               
               <p className="head-cony">
                Free E-Waste Disposal
                </p>
                </div>
                <button type="submit">Get Started</button>
            </div>
            </div>

        </div>
    );

}
export default Page8;