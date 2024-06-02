import React from "react";
import PropTypes from "prop-types";
import "./ContainerForm.css";

const ContainerForm = ({ className = "" }) => {
  return (
    <div className={`frame-parent ${className}`}>
      <div className="fill-the-form-below-to-enquire-wrapper">
        <b className="fill-the-form">Fill the form below to enquire</b>
      </div>
      <div className="form">
        <div className="frame-group">
          <div className="enter-your-name-parent">
            <div className="enter-your-name">*Enter your name</div>
            <div className="input">
              <input
                className="eg-aneesha-mehra"
                type="text"
                placeholder="Eg. Aneesha Mehra"
              />
            </div>
          </div>
          <div className="enter-your-name-parent">
            <div className="enter-your-name">*Enter your WhatsApp Number</div>
            <div className="input-parent">
              <div className="input1">
                <input className="div16" type="text" placeholder="+91" />
              </div>
              <div className="input2">
                <div className="divplaceholder">
                  <input
                    className="eg-0000000000"
                    type="text"
                    placeholder="Eg. 0000000000"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="enter-your-name-parent">
            <div className="enter-your-name">*Select your profession</div>
            <div className="input3">
              <div className="choose-the-most">
                Choose the most relevant option
              </div>
              <img className="svg-icon5" alt="" src="/svg3.svg" />
            </div>
          </div>
          <div className="enter-your-name-parent">
            <div className="enter-your-name">*Select your goal</div>
            <div className="input3">
              <div className="choose-the-most">
                Choose the most relevant option
              </div>
              <img className="svg-icon5" alt="" src="/svg3.svg" />
            </div>
          </div>
          <div className="enter-your-name-parent">
            <div className="enter-your-name">*Select your city</div>
            <div className="input3">
              <div className="choose-the-most">
                Choose the most relevant option
              </div>
              <img className="svg-icon5" alt="" src="/svg3.svg" />
            </div>
          </div>
        </div>
        <button className="divframer-zlvey9">
          <div className="divframer-923v64">
            <div className="p2">
              <b className="submit">Submit</b>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

ContainerForm.propTypes = {
  className: PropTypes.string,
};

export default ContainerForm;
