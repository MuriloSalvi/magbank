import React from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import './Hero.scss'

const Hero = ({onClick}) => {
  return (
    <Jumbotron className="text-center text-light hero">
      <Row className = 'mw-100'>
        <Col lg className ='text-lg-end my-lg-5'>
          <Image className='d-lg-none' src={logo}></Image>
          <Image className='d-none d-lg-inline-block' src={logoDesktop}></Image>
        </Col>
        <Col lg className ='text-lg-start my-lg-5'>
          <p>Pague suas contas pelo nosso APP</p>
          <Button variant="outline-light" onClick={onClick}>Abra sua conta</Button>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Hero;
