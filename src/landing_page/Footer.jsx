import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          {/* LEFT LOGO */}
          <div className="col-md-3">
            <h3 className="footer-logo">ZERODHA</h3>
            <p className="copyright">
              © 2010 - 2026, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* ACCOUNT */}
          <div className="col-md-3">
            <h5>Account</h5>
            <ul>
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI account</li>
              <li>Commodity</li>
              <li>Fund transfer</li>
              <li>MTF</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-md-3">
            <h5>Support</h5>
            <ul>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint</li>
              <li>Status of complaints</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Open source</li>
            </ul>
          </div>

        </div>

        {/* Bottom legal text */}
        <div className="footer-bottom">
          <p>
            Investments in securities market are subject to market risks.
            Read all related documents carefully before investing.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;