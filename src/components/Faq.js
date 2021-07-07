import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import IconText from './IconText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'

const Faq =()=>{
  return(
    <Container>
    <Row>
      <Col className = 'd-none d-lg-block'>
          <IconText size={3} icon={faCreditCard}>Cartão de crédito e débito</IconText>
          <IconText size={3} icon={faWallet}>Conta e abertura</IconText>
          <IconText size={3} icon ={faShieldAlt}>Tolken digital</IconText>
          <IconText size={3} icon ={faUserTie}>Produtos e serviços</IconText>
      </Col>
      <Col className = 'd-lg-none' xs={12}>
          <Row>
            <Col>
            <FontAwesomeIcon icon ={faCreditCard} size='2x'/>
            </Col>
            <Col>
            <FontAwesomeIcon icon = {faWallet} size='2x'/>
            </Col>
            <Col>
            <FontAwesomeIcon icon={faShieldAlt} size='2x'/>
            </Col>
            <Col>
            <FontAwesomeIcon icon={faUserTie} size='2x'/>
            </Col>
          </Row>
      </Col>
      <Col>
      
      </Col>
    </Row>
  </Container>
  )
}

export default Faq;