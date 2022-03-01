import React from "react";
import logo from "../../assets/fb-logo.png";
import wspLogo from "../../assets/wspLogo.png";
import "./style.scss";
function Index() {
  return (
    <footer>
      <div className="information">
        <p>
          © 2022 Salud Avanzada. Todos los derechos reservados. Desarrollado por
          <a
            href="https://alejoaseijas.com/"
            style={{ textDecoration: "none", marginLeft: "5px" }}
          >
            Alejo Aseijas
          </a>
        </p>
      </div>
      <div className="fan-pages">
        <img
          src={logo}
          alt="fb-logo"
          onClick={() => {
            return window.open("https://www.facebook.com/Avanzamos.juntos");
          }}
        />
        <img
          src={wspLogo}
          alt="wsp-logo"
          onClick={() => {
            return window.open(
              "https://api.whatsapp.com/send?phone=541169986500&text=Hola%2C%20como%20estan%3F%20Estoy%20interesado%20en..."
            );
          }}
        />
      </div>
    </footer>
  );
}

export default Index;
