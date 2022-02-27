import React from "react";
import NavBar from "../../Components/NavBar/AdminNavBar";
import { Container } from "react-bootstrap";
import "./style.scss";
import galenoLogo from "../../assets/providers/galeno-logo.png";
import doctoredLogo from "../../assets/providers/doctored-logo.jpeg";
import premedicLogo from "../../assets/providers/premedic-logo.jpeg";

function Index() {
  return (
    <>
      <NavBar />
      <h1 className="text-center">Cotizadores</h1>
      <Container id="dashboard-container">
        <img src={galenoLogo} alt="galenoLogo" />
        <img src={doctoredLogo} alt="doctoredLogo" />
        <img src={premedicLogo} alt="premedicLogo" />
      </Container>
    </>
  );
}

export default Index;
