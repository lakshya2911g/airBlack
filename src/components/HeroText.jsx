import React from "react";
import PropTypes from "prop-types";
import "./HeroText.css";

const HeroText = ({ className = "" }) => {
  return (
    <div className={`hero-text ${className}`}>
      <div className="title">
        <p className="professional-online">Professional Online</p>
        <p className="professional-online">Makeup Course</p>
      </div>
      <div className="divframer-1htwsli">
        <div className="divframer-171cvlq-parent">
          <div className="divframer-171cvlq">
            <img className="svg-icon" alt="" src="/svg.svg" />
          </div>
          <div className="divframer-yhfsxu">
            <div className="p">
              <div className="certification-programme">
                Certification Programme
              </div>
            </div>
          </div>
        </div>
        <div className="divframer-2kuydl">
          <div className="divframer-1jff7sf">
            <img className="svg-icon" alt="" src="/svg1.svg" />
          </div>
          <div className="divframer-1j9x5ww">
            <div className="p1">
              <div className="rated-4855">Rated 4.85/5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="points">
        <div className="div13">
          <div className="icon">
            <img className="svg-icon2" alt="" src="/svg2.svg" />
          </div>
          <div className="text">India’s No.1 Online Makeup Course</div>
        </div>
        <div className="div13">
          <div className="icon">
            <img className="svg-icon2" alt="" src="/svg2.svg" />
          </div>
          <div className="text">Learn by LIVE Do-it-Together Classes</div>
        </div>
        <div className="div13">
          <div className="icon">
            <img className="svg-icon2" alt="" src="/svg2.svg" />
          </div>
          <div className="text">
            Unlimited Practise Session to master skills
          </div>
        </div>
      </div>
    </div>
  );
};

HeroText.propTypes = {
  className: PropTypes.string,
};

export default HeroText;
