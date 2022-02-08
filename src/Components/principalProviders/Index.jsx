import React from "react";
import doctoredLogo from "../../assets/providers/doctored-logo.jpeg";
import premedicLogo from "../../assets/providers/premedic-logo.jpeg";
import sancorsaludLogo from "../../assets/providers/sancorsalud-logo.jpeg";
import galenoLogo from "../../assets/providers/galeno-logo.png";
import { Carousel } from "react-bootstrap";
import "./style.scss";
function Index() {
  return (
    <div id="providers-container">
      <h3>Nuestros Principales Prestadores</h3>
      <div className="carousel-container">
        <Carousel className="w-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={doctoredLogo}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={premedicLogo}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sancorsaludLogo}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={galenoLogo} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Index;
