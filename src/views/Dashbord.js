import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import Tables from "../components/Tables";
import "./Dashbord.scss";

const Dashbord = () => {
  

  return (
    <Container className="dashbord py-4">
      <Row>
        <Col xs={12} lg={4}>
          <Row className="align-items-center mb-4">
            <Col xs={3}>
              <span className="fa-layers fa-fw dashbord__user">
                <FontAwesomeIcon icon={faCircle} size="4x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashbord__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={8} className="mb-0 mt-2">
              <h4>Murilo Furlan</h4>
              <p className="text-muted">agência: 1234 cc:4321-5</p>
            </Col>
          </Row>

          <Button
            className="dashbord__button dashbord__button--active"
            size="lg"
            variant="link"
          >
            Minha conta
          </Button>
          <Button className="dashbord__button" size="lg" variant="link">
            Pagamento
          </Button>
          <Button className="dashbord__button " size="lg" variant="link">
            Extrato
          </Button>
        </Col>
        <Col xs={12} lg={3} className="mt-3 mt-lg-5 pt-lg-5 dashbord__balance">
          <h3 className="mb-5 mb-lg-5">Conta corrente</h3>
          <h6>Saldo em conta corrente</h6>
          <h4 className="dashbord__balance--label mb-4">
            <small>R$</small>3500<small>,00</small>
          </h4>
          <h6 className="mb-3">Cheque especial</h6>
          <div className="mb-3">
            <p className="mb-0">Limite disponivel</p>
            <p>R$5.000,00</p>
          </div>
          <Button variant="secondary">Ver extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="dashboard__tab mt-lg-5">
          <Tables/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashbord;
