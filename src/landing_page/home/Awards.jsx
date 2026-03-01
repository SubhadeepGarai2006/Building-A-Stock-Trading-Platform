import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <div className="awards-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/media/largestBroker.svg"
              alt="Largest Broker"
              className="img-fluid awards-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">

            <h2 className="awards-title">
              Largest stock broker in India
            </h2>

            <p className="awards-desc">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            <div className="row">
              <div className="col-6">
                <ul className="awards-list">
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>

              <div className="col-6">
                <ul className="awards-list">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt securities</li>
                </ul>
              </div>
            </div>

            {/* small logos */}
            <div className="press-logos">
              <img src="/media/pressLogos.png" alt="Press Logos" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;