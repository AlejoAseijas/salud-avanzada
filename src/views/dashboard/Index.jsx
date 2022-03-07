import React from "react";
import NavBar from "../../Components/NavBar/AdminNavBar";
import { Container } from "react-bootstrap";
import "./style.scss";
import galenoLogo from "../../assets/providers/galeno-logo.png";
import doctoredLogo from "../../assets/providers/doctored-logo.jpeg";
import premedicLogo from "../../assets/providers/premedic-logo.jpeg";
import { useNavigate } from "react-router-dom";
function Index() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Container id="dashboard-container">
        <img
          src={galenoLogo}
          alt="galenoLogo"
          onClick={() => {
            navigate("/dashboard/galeno");
          }}
        />
        <img
          src={doctoredLogo}
          alt="doctoredLogo"
          onClick={() => {
            navigate("/dashboard/doctored");
          }}
        />
        <img
          src={premedicLogo}
          alt="premedicLogo"
          onClick={() => {
            navigate("/dashboard/premedic");
          }}
        />
      </Container>
    </>
  );
}

export default Index;
