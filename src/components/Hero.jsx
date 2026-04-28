import React from "react";

const Hero = () => {
  return (
    <section id="hero"
    className="hero no-print">
      <div className="hero-content">
        <h1>Create Professional Invoices in Seconds</h1>
        <p>
          Generate, preview, and download clean invoices instantly.  No signup required.
        </p>

        <div className="hero-buttons">
          <a href="#form"><button className="primary-btn" >Create Invoice</button></a>
          <a onClick={() => window.print()}><button className="secondary-btn">See Demo</button></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;