import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AcconuntModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sua conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>seu email</Form.Label>
          <Form.Control type="email" placeholder="seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="formCitySelect"
            custom
          >
            <option value="0"></option>
            <option value="1">Curitiba</option>
            <option value="2">Cornélio crocópio</option>
            <option value="3">São paulo</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Li e concordo com os termos de uso."
          ></Form.Check>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Criar conta
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AcconuntModal;
