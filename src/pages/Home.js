import React from "react";

import Imagecarousel from "../components/Imagecarousel";
import Newsletter from "../components/Newsletter";
import aboutImage from "../assets/about-us.png"

function Home() {
  return (
    <div className="bg-white">
      <div>
        <Imagecarousel />
      </div>
      <div className="mt-4"> 
        <img src={aboutImage}/>
      </div>
      <div>
        <Newsletter/>
      </div>
    </div>
  );
}

export default Home;
