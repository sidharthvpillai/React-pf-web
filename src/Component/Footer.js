import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <p>
              We comprise of dedicated team of Licensed and experienced
              electrical supervisor's and electricians who helps us provide
              outstanding service to our customers.
            </p>
          </div>
          <div className="footer-link-items">
            <h2>Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Services</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Info</h2>
            <div className="address">
              <i className="fas fa-map-marker"></i>
              <p>
                {" "}
                Kadavath (H)
                <br />
                Chengaloor PO Thrissur
                <br />
                Pin: 680312
              </p>{" "}
            </div>
            <br />
            <div className="mobile">
              <i className="fas fa-phone"></i>
              9995580846
              <br />
              1234567890
            </div>
            <br />
            <div className="email">
              <i className="fas fa-envelope"></i>
              vishnuvijayan1010@gmail.com
            </div>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
        <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
          <small className="website-rights">© Copyright 2021 ASK In ELECTRIC. All rights reserved.</small>
          <Link to="/">
            <img src={logo} className="navbar-logo"></img>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
