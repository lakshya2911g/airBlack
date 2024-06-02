import React from "react";
import Header from "../components/Header";
import HeroText from "../components/HeroText";
import ContainerForm from "../components/ContainerForm";
import Component from "../components/Component";
import Footer from "../components/Footer";
import "./Mobile.css";

const Mobile = () => {
  return (
    <div className="mobile">
      <Header />
      <div className="hero-section">
        <HeroText />
        <ContainerForm />
      </div>
      <Component />
      <div className="div">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector3.svg" />
          <div className="get-certified-from-container">
            <p className="get-certified-from">{`Get Certified From `}</p>
            <p className="get-certified-from">{`India’s Biggest `}</p>
            <p className="get-certified-from">Beauty Platform</p>
          </div>
          <img className="vector-icon1" alt="" src="/vector4.svg" />
        </div>
        <img className="image-676-icon" alt="" src="/image-676@2x.png" />
      </div>
      <Footer />
    </div>
  );
};

export default Mobile;
