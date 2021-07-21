import React from "react";
import { Link } from "react-router-dom";
import { Container ,Navbar, Nav, ButtonGroup, Button, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import logo from '../assets/logo.svg'

const Navigation = ({handleCreateAcc}) => {
  return (
   
    <Navbar variant = 'dark' expand="lg">
      <Container>
      <Navbar.Brand href="/"><img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="Magbank logo"
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Cartão</Nav.Link>
          <Nav.Link href="">Quem somos</Nav.Link>
          <Nav.Link href="">FAQ</Nav.Link>
        </Nav>
        
        <ButtonGroup aria-label="Basic example" title ='Acessar Minha Conta' id ='basic-nav-dropdown'>
          <Button variant ='outline-light'>
          <NavDropdown title ='Acessar minha conta'>
          
          <NavDropdown.Item href ='action/3.3'>
            <Link to='/login'>
             Pessoa física
             </Link>
             </NavDropdown.Item>
            
          <NavDropdown.Item href ='action/3.43'> Pessoa jurídica</NavDropdown.Item>
          </NavDropdown>
          </Button>
          <Button variant ='outline-light' onClick={handleCreateAcc}>Abra sua conta</Button>
        </ButtonGroup>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
  );
};

export default Navigation;
