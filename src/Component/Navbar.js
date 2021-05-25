import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
function Navbar() {
  const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     } else {
  //       setButton(true);
  //     }
  //   };

  //   useEffect(() => {
  //     showButton();
  //   }, []);

  //   window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img src={logo} className="navbar-logo" onClick={closeMobileMenu}></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;