import React, { Component, Fragment } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../css/custome.css";
import "../../css/bootstrap.min.css";
import mainlogo from "../../images/spark.png";
import { Link } from "react-router-dom";

export class Navebar extends Component {
  render() {
    return (
      <Fragment>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={mainlogo} alt="Logo" style={{ width: "169px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-4" style={{ color: "white", marginLeft: "5rem" }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
           <Nav.Link as={Link} to="/Services">Services</Nav.Link>
            <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/Events">Events</Nav.Link>
            <Nav.Link as={Link} to="/Contact_Us">Contact Us</Nav.Link>
          </Nav>
           <div className="button-container-1" style={{ marginLeft: "13rem" }}>
            <span className="mas">Get Started</span>
            <button id="work" type="button" name="Hover">
              Get Started
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Fragment>
    );
  }
}

export default Navebar;
