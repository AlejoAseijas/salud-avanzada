import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../Components/NavBar/AdminNavBar";
import CreateUser from "./CreateUser";
import Table from "./TableUsers";
function Index() {
  return (
    <>
      <NavBar />
      <Container className="border border-dark mt-3 bg-light">
        <h1 className="whithe">Crear usuario</h1>
        <CreateUser />
      </Container>
      <Container className="border border-dark mt-3 mb-3 bg-light">
        <h1>Usuarios registrados</h1>
        <Table />
      </Container>
    </>
  );
}

export default Index;
