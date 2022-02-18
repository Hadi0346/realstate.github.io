import React from "react";
import Bproperty from "./Bproperty";
import pimage1 from "../images/4.jpg";
import pimage2 from "../images/2.jpg";
import pimage3 from "../images/3.jpg";

function Properties() {
  return (
    <div className="product">
      <div className="p-heading">
        <h3>Properties</h3>
        <p>pakistan is a beautiful country.</p>
      </div>

      <div className="product-container">
        <Bproperty image={pimage1} name="Hadi-Rehman" price="$44.33" />
        <Bproperty image={pimage2} name="React js" price="$22.33" />
        <Bproperty image={pimage3} name="Development" price="$33.22" />
      </div>
    </div>
  );
}

export default Properties;
