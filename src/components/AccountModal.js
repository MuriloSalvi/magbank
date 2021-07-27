import React,{useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'

const AcconuntModal = ({ show, handleClose, auth }) => {

const history=useHistory();
const [name, setName]=useState()

const handleSubmit = ()=> {
  auth.login(name, '12666',history.push("/dashbord"))
  handleClose();
}
  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Seu nome" value={name}
                  onChange={(e) => setName(e.currentTarget.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              as="select"
              defaultChecked='1'
              className="my-1 mr-sm-2 w-100"
              id="formCitySelect"
              label='selecione sua cidade'
              controlId="formBasicPassword"
            >
              <option value="1">Curitiba</option>
              <option value="2">Cornélio crocópio</option>
              <option value="3">Faxinal</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
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
        <Button variant="primary" onClick={handleSubmit}>
          Criar conta
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default AcconuntModal;
