import React, {useState, useEffect} from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
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
  const options = [
    {icon:faCreditCard, text:'Cartão de crédito e débito'},
    {icon: faWallet, text:'Conta e abertura'},
    {icon:faShieldAlt, text:'Tolken digital'},
    {icon:faUserTie, text:'Produtos e serviços'}
  ];

  const [index, setIndex] = useState(0);

  const handleClick = key =>{
    setIndex(key)
  }
  useEffect(()=>{
    
  }, [index])

  return (
    <section className="faq">
      <Container className="py-5 ">
        <Row>
          <h2 className='my-5 text-center'>Dúvidas frequentes</h2>
        </Row>
        <Row>
          <Col className="d-none mb-5 mt-2 d-lg-block aling-items-center justify-content-center">
            {options.map(({icon, text}, key)=>(
              <IconText 
              color = {key === index ? '#fff' : '#bbb'}
              size={3} 
              icon={icon} 
              className=' faq__icon mb-3'
             onClick={()=> handleClick(key)} key={key}>
              {text}
            </IconText>
            ))}
            
          </Col>
          <Col className="d-lg-none text-center" xs={12}>
            <Row>
              {options.map(({icon}, key)=>(
                <Col key={key}>
                <FontAwesomeIcon icon={icon} size="2x" className='mt-0 ' onClick={()=> handleClick(key)} key={key}/>
              </Col>
              ))}
              
            </Row>
            <Row className='justify-content-center mt-5'>
              <p className='lead'>
                {options[index].text}
              </p>
            </Row>
          </Col>

          <Col>
            <Accordion className='mb-5 mt-3' defaultActiveKey={index} activeKey={`${index}`}>
              <Card className='faq__card'>
                <div className='faq__head'>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" >
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </div>
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
                <div className='faq__head'>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </div>
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
                <div className='faq__head'>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" > 
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </div>
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
                <div className='faq__head'>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" >
                  Lorem ipsum dolor sit amet.
                  </Accordion.Toggle>
                </div>
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
