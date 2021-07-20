import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button,Image } from "react-bootstrap";
import logo from '../assets/magbankWite.svg'

import './login.scss'
const Login = () => (
  <section className='login'>
    <div className='login__container'>
    <Row>
      <Col className='text-center'>
        <Image src={logo}/>
        <Form>
          <Form.Group className="mb-3 mt-5" controlId="formAccountNumber">
            <Form.Label className='lead'>Numero da conta</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className='lead'>Senha</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
          <Link to='/dashbord'>
          <Button className='w-100 login__button' variant="success" type="submit">
            Login
          </Button>
          </Link>
        </Form>
      </Col>
    </Row>
    </div>
  </section>
);

export default Login;
