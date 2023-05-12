import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import headerlogo from '../assets/header-logo.png'; 
export default function Header() {
  return <React.Fragment>
        <Navbar bg="light" expand="lg">
      <Container className="m-a-0 p-a-0">
        <Navbar.Brand href="#home"><img src={headerlogo} className="header-logo"  alt="header-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${""}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${""}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${""}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Activities</Nav.Link>
                  <Nav.Link href="#action2">Programs & Initiatives</Nav.Link>
                  <Nav.Link href="#action3">Resources</Nav.Link>
                  <NavDropdown
                    title="Our district"
                    id={`offcanvasNavbarDropdown-expand-${""}`}
                  >
                    <NavDropdown.Item href="#action3">Our district</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
    </Navbar>
    <div className="">
    </div>
  </React.Fragment>;
}
