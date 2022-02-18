import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="intro">
        <p>Looking for a property !</p>
        <h1>
          <span>Buy </span>and <span>sell </span>Properties
        </h1>
        <p className="details">
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country.
            pakistan is a beautiful country.
        </p>
        <a href="#" className="header-btn">
          Details
        </a>
      </div>
    </div>
  );
}

export default Header;
