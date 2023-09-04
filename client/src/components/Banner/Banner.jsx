import React, { useEffect, useState } from "react";
import "./Banner.scss";

function Banner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <header>
      <div className="Banner">
        <div className="content">
          <div className="logo-part">
            <div className="logo">
              <span className="logo-style">Space</span>Xplorer
            </div>
          </div>
          <div className="main">
            <div className="header-content">
              <div className="heading">Discover Space Adventures</div>
              <div className="sub-heading">Explore the Future of Space</div>
              <div className="text">
                "Embark on a journey beyond the stars with SpaceX's cutting-edge
                capsules, revolutionizing space travel for a brighter future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
