import React from 'react';
import {Button, Col} from 'react-bootstrap';
import Tables from './Tables';

const Balance = ()=> {
  return (
    <>
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
    </>
    
  )
}

export default Balance