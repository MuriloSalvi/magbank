import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({handleCreateAcc, logged, auth }) => {
  const history = useHistory()
  const handleClick = () => {
    auth.logout(()=> history.push("/"))
  }
  return (
    <Navbar variant = 'dark' expand="lg">
      <Container>
      <Navbar.Brand href="#home">
        <Link to='/'>
        <img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="Magbank logo"
      />
      </Link>
      </Navbar.Brand>
      {logged && (
        <>
        <Form>
          <div className="navbar__search-group d-none d-lg-flex">
            <Form.Control type="text" placeholder="O que você procura?" />
            <Button variant="link">
              <FontAwesomeIcon icon={faSearch} color="#FFF" />
            </Button>
          </div>
        </Form>

        <Button variant="outline-light" onClick={handleClick}>
          Sair
        </Button>
      </>
        )}
        {!logged && (
          <>
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
          <NavDropdown.Item href ='action/3.43'> 
          <Link to='/login'>
          Pessoa jurídica
          </Link>
          </NavDropdown.Item>
          </NavDropdown>
          </Button>
         
          <Button variant ='outline-light' onClick={handleCreateAcc}>
         
            Abra sua conta
         
            </Button>
          
        </ButtonGroup>
        </Navbar.Collapse>
        </>
        )}
        </Container>
        
    </Navbar>
    
  );
};

export default Navigation;
