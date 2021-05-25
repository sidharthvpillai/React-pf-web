import React from "react";
import "./Home.css";
import wire1 from "./wire2.jpg";
import wire2 from "./wire3.jpg";
import wire3 from "./wire4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <>
      <div className="home-class">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showThumbs={false}
        >
          <div>
            <img src={wire1} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={wire2} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={wire3} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
        <div className="fader">

        </div>
        <div className="row">
          <h2>Introduction</h2>

          <br />

          <p>
            We are a group of innovative, and empowered individuals, focused on
            providing global standard service with a reasonable price to our
            customers. We have got expertise in all aspects of electrical
            contracting for residential and commercial buildings. Further have
            got resources with expertise in renewable energy sources providing
            quality service in all aspects.
            <br /><br />
            We comprise of dedicated team of Licensed and experienced electrical
            supervisor's and electricians who helps us provide outstanding
            service to our customers.
            <br /><br />
            We always keeps ourself updated with the latest technology and
            product, so that we can serve our customers better.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
