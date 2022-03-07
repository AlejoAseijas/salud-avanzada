import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../services/index";

function Index() {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo phtho"
            style={{ width: "11rem", borderRadius: "8px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ display: "flex", gap: "1rem" }}>
            <Link
              to="about-container"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#fff",
                fontWeight: "1rem",
              }}
            >
              Quienes Somos
            </Link>
            <Link
              to="providers-container"
              style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}
            >
              Principales Prestadores
            </Link>
            <Link
              to="contact-container"
              style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}
            >
              Contacto
            </Link>
          </Nav>
          <Nav>
            <Link
              onClick={async () => {
                await logOut();
                navigate("/logIn");
              }}
              style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}
            >
              Log In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;
