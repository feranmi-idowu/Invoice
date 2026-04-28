import React from "react";

const Hero = () => {
  return (
    <section id="hero"
    className="hero">
      <div className="hero-content">
        <h1>Create Professional Invoices in Seconds</h1>
        <p>
          Generate, preview, and download clean invoices instantly.  No signup required.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Create Invoice</button>
          <button className="secondary-btn">See Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;