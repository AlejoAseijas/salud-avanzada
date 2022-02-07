import React from "react";
import NavBar from "../NavBar/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Index() {
  return (
    <div id="home-container">
      <NavBar />
      <div className="data-container">
        <p>
          Somos una empresa Argentina que se concentra en medicina privada mas
          de 10 años avalan nuestra experiencia en soluciones de cobertura
          medica
        </p>
      </div>
      {/* <div className="icon">
        <FontAwesomeIcon icon={faWhatsapp} />
      </div> */}
    </div>
  );
}

export default Index;
