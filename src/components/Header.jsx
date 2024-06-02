import React from "react";
import BeautyClubLogoBlack from "./BeautyClubLogoBlack";
import PropTypes from "prop-types";
import "./Header.css";
import BgImage from "./divFramer";

const Header = ({ className = "" }) => {
  return (
    <div className={`image ${className}`}>
      <BgImage/>
      <div className="airblack-beauty-club-logo-parent">
        <BeautyClubLogoBlack
          beautyClubLogoBlackBeauty="/airblack-beauty-club-logo.svg"
          beautyClubLogoBlackWidth="4.294rem"
          beautyClubLogoBlackOverflow="unset"
          beautyClubLogoBlackHeight="1.775rem"
          beautyClubLogoBlackPosition="relative"
        />
        <div className="presents">Presents</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
