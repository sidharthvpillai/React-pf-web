import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "./logo.png";
import Navbar from "./Navbar";

class MenuItem extends React.Component {
  render() {
    return (
      <Link className="link-class" to={this.props.link}>
        {this.props.name}
      </Link>
    );
  }
}

function Header() {
  var myMenu = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/About" },
    { name: "SERVICES", link: "/Services" },
    { name: "PROJECTS", link: "/Projects" },
    { name: "GALLERY", link: "/Gallery" },
    { name: "CONTACT US", link: "/Enquiry" },
  ];
  return (
    <>
      <div className="header-class">
        <Link to="/">
          <img className="logo-class" src={img} alt="Ask In Electric" />
        </Link>
        <ul className="menu">
          {myMenu.map((item) => {
            return <MenuItem key={item} name={item.name} link={item.link} />;
          })}
        </ul>
      </div>
      <div className="hamburger">
        <ul className="menu">
          {myMenu.map((item) => {
            return <MenuItem key={item} name={item.name} link={item.link} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
