import React from "react";
import aboutImage from "../../assets/background.jpeg";
import "./style.scss";
function Index() {
  return (
    <>
      <div id="about-container">
        <div className="about-text">
          <h3>Quienes Somos</h3>
          <p>
            Somos una empresa Argentina que se concentra en medicina privada mas
            de 10 años avalan nuestra experiencia en soluciones de cobertura
            medica.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImage} alt="about photho" />
        </div>
      </div>
    </>
  );
}

export default Index;
