import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
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
          <Nav
            className="me-auto"
            style={{ display: "flex", gap: "1rem" }}
          ></Nav>
          <Nav>
            <Link
              onClick={() => {
                navigate("/");
              }}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#ff3232",
              }}
            >
              Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;
