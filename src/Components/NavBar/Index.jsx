import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../assets/logo.jpg";
function Index() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo phtho"
            style={{ width: "8rem", borderRadius: "8px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ display: "flex", gap: "1rem" }}>
            <Link to="about-container">Quienes Somos</Link>
            <Link to="providers-container">Principales Prestadores</Link>
            <Link to="contact-container">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;
