import React from "react";
import { Tabs, Tab, Col,Row, Form,Button } from "react-bootstrap";
import "./Tables.scss";

const Payment = () => {
 
  return (
    <Col xs={12} lg={8}>
    <Tabs
      defaultActiveKey="1"
      id="uncontrolled-tab-example"
      className=" mt-5 pt-lg-5"
    >
      <Tab eventKey="1" title="Boleto" className="tab">
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h3>Código de barras</h3></Form.Label>
    <Form.Control type="text" placeholder="Insira o código de barras" />
  </Form.Group>

  <h4>Forma de pagamento</h4>
  <Form.Group as={Col} className="mb-3 d-flex">
    <Form.Check id="formHorizontalRadios1" name='paymentType' type="radio" label="Débito em conta"/>
    <Form.Check id="formHorizontalRadios2" name='paymentType' type="radio" label="Cartão de crédito" />
  </Form.Group>
  
  <Button variant="success" type="submit">
    Continuar
  </Button>
</Form>
      </Tab>
      <Tab eventKey="2" title="Transferência" className="tab">
        
      </Tab>
    </Tabs>
    </Col>
  );
};

export default Payment;
