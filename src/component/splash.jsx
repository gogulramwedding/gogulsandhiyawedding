import React, { useEffect, useState } from "react";
import topFlower from "../assets/top.png";
import bottomFlower from "../assets/bottom.png";
import nameCircle from "../assets/nameCircle.png";
import GSLogo from "../assets/GSLogo.png";
import { Link } from "react-router-dom";
function Splash() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(myfunction, 3000);
  }, []);
  function myfunction() {
    setLoad(false);
  }

  return (
    <>
      {load ? (
        <div id="initLoad">
          <div className="lds-heart">
            <div></div>
          </div>{" "}
          <div className="lds-heart heart2">
            <div></div>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="container">
            <div className="header">
              <img src={topFlower} />
            </div>
            <div className="nameArea">
              <div className="imgSpin">
                <img src={nameCircle} />
              </div>
              <div className="coupleName">
                {" "}
                <label>
                  <img src={GSLogo} />
                </label>
              </div>
            </div>

            <div className="buttonClass">
              <Link to="/wedding">
                {" "}
                <button>Click To Join With Us</button>
              </Link>
            </div>

            <div className="footer">
              <img src={bottomFlower} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Splash;
