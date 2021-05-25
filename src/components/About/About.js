import React from "react";
import home from './home-image.png'
import './About.css'
function About() {
  return (
    <div className="home-description">
    <div className="home-items">
      <h2>Introduction</h2>

      <br />

      <p>
        We are a group of innovative, and empowered individuals, focused on
        providing global standard service with a reasonable price to our
        customers. We have got expertise in all aspects of electrical
        contracting for residential and commercial buildings. Further have
        got resources with expertise in renewable energy sources providing
        quality service in all aspects.
        <br />
        We comprise of dedicated team of Licensed and experienced electrical
        supervisor's and electricians who helps us provide outstanding
        service to our customers.
        <br />
        We always keeps ourself updated with the latest technology and
        product, so that we can serve our customers better.
      </p>
    </div>
    <img src={home} className="home-items"></img>
  </div>
  );
}

export default About;
