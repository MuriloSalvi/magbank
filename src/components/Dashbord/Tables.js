import React from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import "./Tables.scss";

const Tables = () => {
  const data = [
    { date: "25/07", description: "Netflix", value: "30,00" ,id: 1 },
    { date: "22/07", description: "posto petrobrás", value: "50,00" ,id: 2},
    { date: "17/07", description: "Borracharia carlão", value: "570,00" ,id: 3},
    { date: "17/07", description: "Mc Donalds", value: "35,00" ,id: 4},
    { date: "17/07", description: "Big_supermercados", value: "257,80" ,id: 5},
    { date: "17/07", description: "sem ideia", value: "10,00" ,id: 6},
    { date: "17/07", description: "aaaaa", value: "30,00" ,id: 7},
  ];
  const future = [
    { date: "15/07", description: "manutenção de conta", value: "15,00",id: 1 },
    { date: "15/07", description: "prest_habitação", value: "650,00",id: 2 },
  ];
  return (
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
            {data.map(({ date, description, value, index }) => (
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
            {future.map(({ date, description, value }) => (
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
  );
};

export default Tables;
