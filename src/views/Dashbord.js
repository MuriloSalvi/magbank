import React,{useState} from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/Dashbord/AccountBalance";
import AcccountPayment from "../components/Dashbord/AccountPayment";
import AccountHistory from "../components/Dashbord/AccountHistory";
import data from '../data/data'
import "./Dashbord.scss";


const Dashbord = ({ calssName= false, name, account }) => {
  const [activeLink, setActiveLink] = useState(0)

  const links = [
    { text:'Minha conta', path:'/dashbord', exact:true },
    {text: 'Pagamentos' , path:'/dashbord/payments'},
    {text:'Extrato', path:'/dashbord/balance'}
  ];



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
              <h4>{name}</h4>
              <p className="text-muted">agência: 00001 cc:{account}</p>
            </Col>
          </Row>
          {links.map(({text,path,exact},key)=>(
             <Link to={path} exact={exact ? exact: false} key={key}>
             <Button
               className={`dashbord__button ${key === activeLink ? 'dashbord__button--active' : ''} `}
               size="lg"
               variant="link"
               onClick={()=> setActiveLink(key)}
             >
               {text}
             </Button>
           </Link>
          )
           
          )}
          
        </Col>

        <Switch>
          <Route path="/dashbord/payments">
           <AcccountPayment/>
          </Route>
          <Route path="/dashbord/balance">
            <AccountHistory data={data}/>
          </Route>
          <Route path="/dashbord">
            <AccountBalance data={data}/>
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default Dashbord;
