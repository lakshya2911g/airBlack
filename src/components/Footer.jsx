import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import BgImage from "./divFramer";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="image2">
        <BgImage/>
      </div>
      <div className="p6">
        <div className="join-our-growing-container">
          <p className="join-our-growing">{`Join our growing `}</p>
          <p className="join-our-growing">{`community of `}</p>
          <p className="join-our-growing">
            <span>35,000</span>
            <span className="span">+</span>
            <span className="alumni1"> alumni</span>
          </p>
        </div>
      </div>
      <button className="divframer-zlvey92">
        <div className="divframer-923v642">
          <div className="p7">
            <b className="apply-now1">Apply Now</b>
          </div>
        </div>
      </button>
      <div className="instagram-parent">
        <img className="instagram-icon" alt="" src="/instagram.svg" />
        <img className="image-487-icon" alt="" src="/image-487@2x.png" />
        <img className="instagram-icon" alt="" src="/linkedin.svg" />
        <img className="image-487-icon" alt="" src="/image-488@2x.png" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
