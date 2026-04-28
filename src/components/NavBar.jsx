

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar no-print">
      <div className="nav-container">
        <h2 className="logo">InvoiceGen</h2>

        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#form" onClick={() => setIsOpen(false)} >Forms</a></li>
          <li><a href="#preview" onClick={() => setIsOpen(false)}>Preview</a></li>
        </ul>

        <a href="#contact"><button className="nav-btn desktop-btn">Contact</button></a>

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