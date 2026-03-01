import React from "react";
import "./pricing.css";

function Pricing() {
  return (
    <div className="pricing-section">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6">
            <h2 className="pricing-title">Unbeatable pricing</h2>

            <p className="pricing-desc">
              We pioneered the concept of discount broking and price transparency
              in India. Flat fees and no hidden charges.
            </p>

            <a href="#" className="pricing-link">
              See pricing →
            </a>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-md-6">
            <div className="row text-center">

              <div className="col-4">
                <img src="/media/pricing0.svg" className="pricing-img" />
                <p className="pricing-text">Free account opening</p>
              </div>

              <div className="col-4">
                <img src="/media/pricingEquity.svg" className="pricing-img" />
                <p className="pricing-text">
                  Free equity delivery and direct mutual funds
                </p>
              </div>

              <div className="col-4">
                <img src="/media/intradayTrades.svg" className="pricing-img" />
                <p className="pricing-text">Intraday and F&O</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;