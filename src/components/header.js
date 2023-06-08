import React from "react";
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
      path: "/IntlPresidentteam",
    },
    {
      title: "About us",
      path: "aboutus",
    },
    {
      title: "Contact us",
      path: "contactus",
    },
    {
      title: "Find a club",
      path: "findaclub",
    },
    {
      title: "Become a member",
      path: "becomeamember",
    },
  ];
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <div className="m-a-0 p-a-0 footer-grid-links-sections">
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
              <Nav className="justify-content-end flex-grow-1 pe-3 p-r-0">
                <Nav.Link href="/">Activities</Nav.Link>
                <Nav.Link href="/programsandinitiatives">Programs & Initiatives</Nav.Link>
                <Nav.Link href="/resorces">Resources</Nav.Link>
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
                <p className="web-menu web-donate-btn m-r-0">Donate</p>
              </Nav>
            </Offcanvas.Body>
            <Nav.Link className="mobile-menu mobile-login-btn">Login</Nav.Link>
          <Nav.Link className="mobile-menu mobile-donate-btn">Donate</Nav.Link>
          </Navbar.Offcanvas>
         
        </div>
      </Navbar>
      <div className="divider-line"></div>
    </React.Fragment>
  );
}
