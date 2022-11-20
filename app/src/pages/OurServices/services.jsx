import React from "react";
import Img1 from "../../media/image/ser1.png";
import Img2 from "../../media/image/ser2.png";
import Img3 from "../../media/image/ser3.png";

// import css
import "./servies.css";

const Services = () => {
  return (
    <div className="bg-color">
      <div className="max_w2">
        <div className="ourhead">
          <h4>Our Core Features</h4>
          <h1>Our Services</h1>
        </div>

        <div className="ourcard">
          <div className="sercard">

            <img className="rotet" src={Img1} alt="404" />
            <h3>Web Design</h3>
            <h5>Suspendisse varius enim in</h5>
            <h5>cursus id rutrum imperdiet. eros elementum <br /> tristique.</h5>
          </div>
          <div className="sercard">

            <img className="rotet"  src={Img2} alt="404" />
            <h3>UI/UX Design</h3>
            <h5>Suspendisse varius enim in</h5>
            <h5>cursus id rutrum imperdiet. eros elementum <br /> tristique.</h5>
          </div>

          <div className="sercard">
            <img className="rotet" src={Img3} alt="404" />
            <h3>SEO & Marketing</h3>
            <h5>Suspendisse varius enim in</h5>
            <h5>cursus id rutrum imperdiet. eros elementum <br /> tristique.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
