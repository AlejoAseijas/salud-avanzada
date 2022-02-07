import React from 'react';
import {Nav,Navbar,Container} from "react-bootstrap"
import logo from "../../assets/logo.jpeg"
function Index() {
  return <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
  <Container>
  <Navbar.Brand >Salud Avanzada</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link >Quines somos</Nav.Link>
      <Nav.Link >Principales Prestadores</Nav.Link>
      <Nav.Link>Contacto</Nav.Link>
      <Nav.Link>Respaldo</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>;
}

export default Index;
