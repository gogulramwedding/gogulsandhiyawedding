import React from "react";
import nslogo from "../assets/GSLogo.png";
import corFlower from "../assets/cornerFlower.png";
import corFlower2 from "../assets/cornerFlower2.png";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="cardArea flex  flex-col justify-center items-center w-2/3 bg-[#faebd7] min-h-screen rounded relative">
      <img src={corFlower} className="absolute top-0 left-0" />
      <div className="logo">
        <img src={nslogo} />
      </div>
      <Link to="/wedding">
        <button className="bg-[#a78b5f] px-4 py-3 rounded-md text-white mt-6">
          CLICK TO JOIN WITH US
        </button>
      </Link>
      <img src={corFlower2} className="absolute bottom-0 right-0" />
    </div>
  );
}

export default Landing;
