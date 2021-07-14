import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";


import Hero from '../components/Hero'
import CreditCard from '../components/CreditCard'
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButon';
import Institucional from '../components/Institucional';
import Faq from '../components/Faq'
import posts from '../data/posts'

const Home = ({heandleClick})=>{
 ;
  return (
      <>
      <Hero/>
      <CreditCard/>
      <CardList posts={posts}/>
      <CenteredButton onClick={heandleClick}><b>Abra sua conta</b></CenteredButton>
      <Institucional/>
      <Faq/>
      
    </>
  );
}

export default Home;