import React from 'react'
import {Col,Table} from 'react-bootstrap'

const AccountHistory = ({data})=>{
 const {accountHistory} = data;

 return(
   <Col xs={12} lg={8}>
     <h3>Extrato de conta corrente</h3>
     <Table striped borderless hover className='dashbord__table'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th >Valor(R$)</th>
              <th>Saldo(R$)</th>
            </tr>
          </thead>
          <tbody>
            {accountHistory.map(({ date,description,value }) => (
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td className="text-danger font-weight-bold">- {value}</td>
                <td>NaN</td>
              </tr>
            ))}            
          </tbody>
        </Table>
   </Col>
 )
}

export default AccountHistory;

