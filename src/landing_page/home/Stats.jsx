import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats-section">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT TEXT CONTENT */}
          <div className="col-md-6">

            <h2 className="stats-heading">Trust with confidence</h2>

            <div className="stats-block">
              <h4>Customer-first always</h4>
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India's largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            <div className="stats-block">
              <h4>No spam or gimmicks</h4>
              <p>
                No gimmicks, spam, “gamification”, or annoying push notifications.
                High quality apps that you use at your pace, the way you like.
              </p>
            </div>

            <div className="stats-block">
              <h4>The Zerodha universe</h4>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your needs.
              </p>
            </div>

            <div className="stats-block">
              <h4>Do better with money</h4>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with your money.
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/media/ecosystem.png"
              alt="Ecosystem"
              className="img-fluid ecosystem-img"
            />

            <div className="stats-links">
              <a href="#">Explore our products →</a>
              <a href="#">Try Kite demo →</a>
            </div>
          </div>

        </div>

        {/* PRESS LOGOS */}
        <div className="press-section text-center">
          <img src="/media/pressLogos.png" alt="Press Logos" />
        </div>

      </div>
    </div>
  );
}

export default Stats;