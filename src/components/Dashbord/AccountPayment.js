import React from "react";
import { Tabs, Tab, Row, Col, Form, Button} from "react-bootstrap";


const AccountPayment = () => {
  return (
    <Col xs={12} lg={8}>
      <h3 className="mt-5 pt-5 mb-4">Pagamentos</h3>
      <Tabs
        defaultActiveKey="1"
        id="uncontrolled-tab-example"
        className="pt-lg-1"
      >
        <Tab eventKey="1" title="Boleto" className="tab">
          <Form>
            <Form.Group className="my-5" controlId="formBasicEmail">
              <Form.Label>
                <h3>Código de barras</h3>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o código de barras"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-4">
              <Form.Label>
                <strong>Forma de Pagamento</strong>
              </Form.Label>
              <div className="d-flex">
                <Form.Check
                  id="formHorizontalRadios1"
                  name="paymentType"
                  type="radio"
                  label="Débito em conta"
                />
                <Form.Check
                  className="mx-4"
                  id="formHorizontalRadios2"
                  name="paymentType"
                  type="radio"
                  label="Cartão de crédito"
                />
              </div>
            </Form.Group>

            <Button variant="success" type="submit">
              Continuar
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="2" title="Transferência" className="tab">
          <Form>
            <Row className="mt-5">
              <Form.Group as={Col} controlId="formAgency">
                <Form.Label>Banco</Form.Label>
                <Form.Control type="text" placeholder="selecione" />
              </Form.Group>

              <Form.Group as={Col} controlId="formAgency">
                <Form.Label>Agência</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formAccount">
                <Form.Label>Conta corrente</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
            <Row className='mt-4'>
            <Form.Group as={Col} controlId="formAccount">
                <Form.Label>Conta corrente</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group as={Col} controlId="formAccount">
                <Form.Label>Conta corrente</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
            
            <Button variant="success" type="submit" className='mt-5 pt-2'>
              Continuar
            </Button>
            
          </Form>
        </Tab>
      </Tabs>
    </Col>
  );
};

export default AccountPayment;
