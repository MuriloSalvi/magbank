import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconText =({
  icon,
  size=1,
  color = '#fff',
  className ='',
  textClassName ='',
  children,
  onClick,
})=>{
  return(
    <Row className ={`d-flex align-items-center ${className}`} onclick={onClick}>
      <Col xs={size} className ='d-flex justify-content-center'>
        <FontAwesomeIcon icon ={icon} size={`${size}x`} color={color}></FontAwesomeIcon>
      </Col>
      <Col xs={11-size} className = {textClassName}>
        {children}
      </Col>
    </Row>
  )
}
export default IconText;