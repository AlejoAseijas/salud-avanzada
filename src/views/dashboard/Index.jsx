import React from "react";
import NavBar from "../../Components/NavBar/AdminNavBar";
import { Container, Button } from "react-bootstrap";
import "./style.scss";
import galenoLogo from "../../assets/providers/galeno-logo.png";
import doctoredLogo from "../../assets/providers/doctored-logo.jpeg";
import premedicLogo from "../../assets/providers/premedic-logo.jpeg";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("data-user"));
  return (
    <>
      <NavBar />
      <Container id="dashboard-container">
        <Container className="img-container">
          <img
            src={galenoLogo}
            alt="galenoLogo"
            onClick={() => {
              navigate("/dashboard/galeno");
            }}
          />
        </Container>
        <Container className="img-container">
          <img
            src={doctoredLogo}
            alt="doctoredLogo"
            onClick={() => {
              navigate("/dashboard/doctored");
            }}
          />
        </Container>
        <Container className="img-container">
          <img
            src={premedicLogo}
            alt="premedicLogo"
            onClick={() => {
              navigate("/dashboard/premedic");
            }}
          />
        </Container>
      </Container>
      {user.role === "admin" ? (
        <Container className="text-center">
          <Button
            onClick={() => {
              navigate("/dashboard/users");
            }}
            className="mt-3 btn btn-success"
          >
            Usuarios
          </Button>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Index;
