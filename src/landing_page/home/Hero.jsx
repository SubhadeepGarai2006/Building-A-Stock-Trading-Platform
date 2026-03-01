import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="container text-center">

        {/* Hero Image */}
        <div className="hero-img">
          <img src="/media/homehero.png" alt="Hero" className="img-fluid" />
        </div>

        {/* Heading */}
        <h1 className="hero-title">Invest in everything</h1>

        {/* Paragraph */}
        <p className="hero-subtitle">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more.
        </p>

        {/* Button */}
        <button className="hero-btn">Sign up for free</button>

      </div>
    </div>
  );
}

export default Hero;