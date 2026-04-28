

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">InvoiceGen</h2>

        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#form">Forms</a></li>
          <li><a href="#preview">Preview</a></li>
        </ul>

        <button className="nav-btn desktop-btn">Get Started</button>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;