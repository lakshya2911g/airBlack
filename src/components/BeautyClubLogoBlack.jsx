import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./BeautyClubLogoBlack.css";

const BeautyClubLogoBlack = ({
  className = "",
  beautyClubLogoBlackBeauty,
  beautyClubLogoBlackWidth,
  beautyClubLogoBlackOverflow,
  beautyClubLogoBlackHeight,
  beautyClubLogoBlackPosition,
}) => {
  const beautyClubLogoBlackStyle = useMemo(() => {
    return {
      width: beautyClubLogoBlackWidth,
      overflow: beautyClubLogoBlackOverflow,
      height: beautyClubLogoBlackHeight,
      position: beautyClubLogoBlackPosition,
    };
  }, [
    beautyClubLogoBlackWidth,
    beautyClubLogoBlackOverflow,
    beautyClubLogoBlackHeight,
    beautyClubLogoBlackPosition,
  ]);

  return (
    <img
      className={`beauty-club-logoblack ${className}`}
      alt=""
      src={beautyClubLogoBlackBeauty}
      style={beautyClubLogoBlackStyle}
    />
  );
};

BeautyClubLogoBlack.propTypes = {
  className: PropTypes.string,
  beautyClubLogoBlackBeauty: PropTypes.string,

  /** Style props */
  beautyClubLogoBlackWidth: PropTypes.any,
  beautyClubLogoBlackOverflow: PropTypes.any,
  beautyClubLogoBlackHeight: PropTypes.any,
  beautyClubLogoBlackPosition: PropTypes.any,
};

export default BeautyClubLogoBlack;
