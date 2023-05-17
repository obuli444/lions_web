import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import headerlogo from "../assets/header-logo.png";


export default function Header() {
  const dropdownMenuItems = [
    {
      title: "Our mentor",
      path: "/Ourmentor",
    },
    {
      title: "Governors team",
      path: "/Governorsteam",
    },
    {
      title: "Cabinet officials",
      path: "/Cabinetofficials",
    },
    {
      title: "Governor calendar",
      path: "/Governorcalendar",
    },
    {
      title: "Intl. President team",
      path: "/IntlPresident team",
    },
    {
      title: "About us",
      path: "Aboutus",
    },
    {
      title: "Contact us",
      path: "Contactus",
    },
    {
      title: "Find a club",
      path: "Findaclub",
    },
    {
      title: "Become a member",
      path: "Becomeamember",
    },
  ];
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container className="m-a-0 p-a-0">
          <Navbar.Brand href="/">
            <img src={headerlogo} className="header-logo" alt="header-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${""}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${""}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${""}`}>
                <img
                  src={headerlogo}
                  className="header-logo"
                  alt="header-logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <div className="divider-line mobile-divider"></div>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Activities</Nav.Link>
                <Nav.Link href="#action2">Programs & Initiatives</Nav.Link>
                <Nav.Link href="#action3">Resources</Nav.Link>
                <NavDropdown
                  title="Our district"
                  id={`offcanvasNavbarDropdown-expand-${""}`}
                >
                  {dropdownMenuItems.map((ele, index) => {
                    return (
                      <NavDropdown.Item href={ele.path} key={index}>
                        {ele.title}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                <p className="web-menu web-login-btn">Login</p>
                <p className="web-menu web-donate-btn">Donate</p>
              </Nav>
            </Offcanvas.Body>
            <Nav.Link className="mobile-menu mobile-login-btn">Login</Nav.Link>
          <Nav.Link className="mobile-menu mobile-donate-btn">Donate</Nav.Link>
          </Navbar.Offcanvas>
         
        </Container>
      </Navbar>
      <div className="divider-line"></div>
    </React.Fragment>
  );
}
