import React from "react";
import PropTypes from "prop-types";
import "./Component.css";
import BgImage from "./divFramer";

const Component = ({ className = "" }) => {
  return (
    <div className={`div17 ${className}`}>
      <div className="image1">
        <BgImage/>
      </div>
      <div className="vector-group">
        <img className="vector-icon3" alt="" src="/vector1.svg" />
        <div className="why-should-you-container">
          <p className="why-should-you">{`Why Should You `}</p>
          <p className="why-should-you">Join Airblack?</p>
        </div>
        <img className="vector-icon4" alt="" src="/vector2.svg" />
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <img className="frame-child" alt="" src="/frame-12705@2x.png" />
          <div className="do-it-together-live-on">
            Do-it-together, live on zoom
          </div>
        </div>
        <div className="frame-div">
          <img className="frame-item" alt="" src="/frame-12705.svg" />
          <div className="do-it-together-live-on">
            <p className="why-should-you">{`4.8 /5 `}</p>
            <p className="why-should-you">Rated Classes</p>
          </div>
        </div>
        <div className="frame-div">
          <img className="frame-item" alt="" src="/frame-127051.svg" />
          <div className="do-it-together-live-on">
            <p className="why-should-you">{`35000+ `}</p>
            <p className="why-should-you">Members</p>
          </div>
        </div>
      </div>
      <button className="divframer-zlvey91">
        <div className="divframer-923v641">
          <div className="p5">
            <b className="apply-now">Apply Now</b>
          </div>
        </div>
      </button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
