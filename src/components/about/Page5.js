import React, { useState } from "react";
import FAQ from "./FAQ";

const Page5 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is e-waste?",
      answer:
        "E-waste refers to electronic products that have reached the end of their useful life and are discarded. These can include computers, mobile phones, televisions, and other electronic devices.",
      open: true,
    },
    {
      question: "How can I recycle e-waste?",
      answer:
        "We provide convenient e-waste recycling services. Simply drop off your old electronic devices at our designated collection points, and we will ensure they are properly recycled and disposed of.",
      open: false,
    },
    {
      question: "What happens to recycled e-waste?",
      answer:
        "Recycled e-waste goes through a careful process of dismantling, sorting, and recycling. Valuable materials such as metals and plastics are recovered, while hazardous substances are safely disposed of, minimizing environmental impact.",
      open: false,
    },
    {
      question: "Can I donate e-waste?",
      answer:
        "Yes, we accept donations of functional electronic devices that can be refurbished and given to those in need. Contact us for more information on how to donate your e-waste.",
      open: false,
    },
    {
      question: "How can I get involved?",
      answer:
        "There are various ways to get involved in e-waste management. You can participate in our recycling programs, spread awareness about the importance of responsible e-waste disposal, or become a partner organization.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "Titillium Web",
          marginBottom: "2%",
          fontSize: "2.5em",
        }}
      >
        FAQs
      </h1>
      <p style={{ marginBottom: "7%" }}>
        Find answers to comman question about e-waste management and services.{" "}
      </p>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default Page5;
