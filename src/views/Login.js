import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/magbankWite.svg";

import "./login.scss";
const Login = ({ text, auth }) => {
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const history = useHistory();

  const handleSubmit = () => {
    auth.login(name, account, history.push("/dashbord"));
  };

  return (
    <section className="login">
      <div className="login__container">
        <Row>
          <Col className="text-center">
            <Image src={logo} className="mb-4" />
            <Form>
              <Form.Group className="mt-3" controlId="1">
                <Form.Label className="lead">Nome completo</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mt-2" controlId="2">
                <Form.Label className="lead">Número da conta</Form.Label>
                <Form.Control
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group className="mt-2" controlId="formBasicPassword">
                <Form.Label className="lead">Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Button
                className="w-100 login__button mt-5"
                variant="success"
                type="submit"
                onClick={handleSubmit}
              >
                {text}
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
