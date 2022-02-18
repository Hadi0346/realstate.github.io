import React from "react";
import aboutimage from "../images/2.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image" />
      </div>

      <div className="about-text">
        <h2>
          we are the best <br />
          Real Estate Company
        </h2>
        <p>
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country.
        </p>

        <button>View More Details</button>
      </div>
    </div>
  );
}

export default About;
