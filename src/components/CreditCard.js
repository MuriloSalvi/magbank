import React from "react";
import { Image } from 'react-bootstrap'
import CreditImage from '../assets/credit-card.jpg'
import './CreditCard.scss'

const CreditCard = ()=>{
  return(
    <div className = 'creditcard container'>
      <div className='left__side'>
        <h2>Cartão de crédito</h2>
      </div>
      <div className='right__side'>
      <Image src={CreditImage} fluid />
      </div>
    </div>
  )
}

export default CreditCard;