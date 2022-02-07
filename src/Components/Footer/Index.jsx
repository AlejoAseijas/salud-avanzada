import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";
function Index() {
  return (
    <footer>
      <p>
        © 2022 Salud Avanzada. Todos los derechos reservados. Desarrollado por
        <a
          href="https://alejoaseijas.com/"
          style={{ textDecoration: "none", marginLeft: "5px" }}
        >
          Alejo Aseijas
        </a>
      </p>
      <div id="fan-pages">
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ width: "200px" }}
          onClick={() => {
            return window.open("https://www.facebook.com/Avanzamos.juntos");
          }}
        />
      </div>
    </footer>
  );
}

export default Index;
