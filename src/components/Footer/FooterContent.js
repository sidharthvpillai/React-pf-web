import React from "react";
import "./Footer.css";
function FooterContent(props) {
  return (
    <>
      <div className="footer-content">
        <h4>About Us</h4>
        <p>
          We comprise of dedicated team of Licensed and experienced electrical
          supervisor's and electricians who helps us provide outstanding service
          to our customers.
        </p>
        <ul class="sci">
          <li>
            <a href="#">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterContent;
