import React from 'react';
import {Button, Col,Tabs,Tab,Table} from 'react-bootstrap';

import './AccountBalance.scss'

const AccountBalance = ({data})=> {
  const {latestBalance, futureBalance} = data;
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
    <Tabs
      defaultActiveKey="1"
      id="uncontrolled-tab-example"
      className=" mt-5 pt-lg-5"
    >
      <Tab eventKey="1" title="Últimos lançamentos" className="tab">
        <Table striped borderless hover className='dashbord__table'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor(R$)</th>
            </tr>
          </thead>
          <tbody>
            {latestBalance.map(({ date,description,value }) => (
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="2" title="Lançamentos futuros" className="tab">
        <Table striped borderless hover className='dashbord__table'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor(R$)</th>
            </tr>
          </thead>
          <tbody>
            {futureBalance.map(({ date, description, value }) => (
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
    </Tabs>
    </Col>
    </>
    
  )
}

export default AccountBalance