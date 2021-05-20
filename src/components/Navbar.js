import React from "react";
import { Container ,Navbar, Nav, ButtonGroup, Button, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import logo from '../assets/logo.svg'

const Navigation = () => {
  return (
   
    <Navbar variant = 'dark' expand="lg">
      <Container>
      <Navbar.Brand href="#home"><img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="Magbank logo"
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Cartão</Nav.Link>
          <Nav.Link href="#link">Quem somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        
        <ButtonGroup aria-label="Basic example" title ='Acessar Minha Conta' id ='basic-nav-dropdown'>
          <Button variant ='outline-light'>
          <NavDropdown title ='Acessar minha conta'>
          <NavDropdown.Item href ='action/3.3'> Algo</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href ='action/3.43'> Algo Separado</NavDropdown.Item>
          </NavDropdown>
          </Button>
          <Button variant ='outline-light'>Abra sua conta</Button>
        </ButtonGroup>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
  );
};

export default Navigation;
