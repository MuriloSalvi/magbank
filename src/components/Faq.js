import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import IconText from "./IconText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./Faq.scss";

const Faq = () => {
  return (
    <section className="faq">
      <Container classNmae="py-5 ">
        <Row>
          <h2 className='my-5 text-center'>Dúvidas frequentes</h2>
        </Row>
        <Row>
          <Col className="d-none mb-5 mt-2 d-lg-block aling-items-center justify-content-center">
            <IconText size={3} icon={faCreditCard} className='mb-3'>
              Cartão de crédito e débito
            </IconText>
            <IconText size={3} icon={faWallet} className='mb-3'>
              Conta e abertura
            </IconText>
            <IconText size={3} icon={faShieldAlt} className='mb-3'>
              Tolken digital
            </IconText>
            <IconText size={3} icon={faUserTie}>
              Produtos e serviços
            </IconText>
          </Col>
          <Col className="d-lg-none text-center" xs={12}>
            <Row>
              <Col>
                <FontAwesomeIcon icon={faCreditCard} size="2x" className='mt-0'/>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faWallet} size="2x" className='mt-0'/>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faShieldAlt} size="2x" className='mt-0'/>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faUserTie} size="2x" className='mt-0'/>
              </Col>
            </Row>
          </Col>

          <Col>
            <Accordion className='mb-5 mt-5'>
              <Card className='faq__card'>
                <Card.Header className='faq__head'>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec tristique ac nulla a euismod. Aenean pretium erat
                    sapien, ut aliquet lacus consectetur sed. Donec et luctus
                    risus. Nullam id orci in turpis condimentum blandit. Aliquam
                    quis eros nulla. Sed eleifend ipsum arcu, sit amet dignissim
                    ipsum ullamcorper eget. Fusce mollis accumsan molestie. Nam
                    enim massa, malesuada sed sapien id, venenatis vulputate
                    lorem.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='faq__card'>
                <Card.Header className='faq__head'>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec tristique ac nulla a euismod. Aenean pretium erat
                    sapien, ut aliquet lacus consectetur sed. Donec et luctus
                    risus. Nullam id orci in turpis condimentum blandit. Aliquam
                    quis eros nulla. Sed eleifend ipsum arcu, sit amet dignissim
                    ipsum ullamcorper eget. Fusce mollis accumsan molestie. Nam
                    enim massa, malesuada sed sapien id, venenatis vulputate
                    lorem.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='faq__card'>
                <Card.Header className='faq__head'>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2" > 
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec tristique ac nulla a euismod. Aenean pretium erat
                    sapien, ut aliquet lacus consectetur sed. Donec et luctus
                    risus. Nullam id orci in turpis condimentum blandit. Aliquam
                    quis eros nulla. Sed eleifend ipsum arcu, sit amet dignissim
                    ipsum ullamcorper eget. Fusce mollis accumsan molestie. Nam
                    enim massa, malesuada sed sapien id, venenatis vulputate
                    lorem.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='faq__card'>
                <Card.Header className='faq__head'>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3" >
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec tristique ac nulla a euismod. Aenean pretium erat
                    sapien, ut aliquet lacus consectetur sed. Donec et luctus
                    risus. Nullam id orci in turpis condimentum blandit. Aliquam
                    quis eros nulla. Sed eleifend ipsum arcu, sit amet dignissim
                    ipsum ullamcorper eget. Fusce mollis accumsan molestie. Nam
                    enim massa, malesuada sed sapien id, venenatis vulputate
                    lorem.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
