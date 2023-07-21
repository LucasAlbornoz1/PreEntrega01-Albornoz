import React from "react";
import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-danger-subtle">
      <Container>
        <Navbar.Brand href="#home">Muy Dulce Tucuman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nuestra Empresa</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Tienda Online" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chocolates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Golosinas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    
    </Navbar>
    
   
  );



}

export default Menu;