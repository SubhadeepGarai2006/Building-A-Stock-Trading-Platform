import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education-section">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/media/education.svg"
              alt="education"
              className="education-img"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="col-md-6">

            <h2 className="education-title">
              Free and open market education
            </h2>

            <p className="education-desc">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <a href="#" className="edu-link">Varsity →</a>

            <p className="education-desc mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <a href="#" className="edu-link">TradingQ&A →</a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;