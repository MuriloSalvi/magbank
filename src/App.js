import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import CreditCard from './components/CreditCard'
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButon';
import Institucional from './components/Institucional';
import posts from './data/posts'

import './App.scss';

const App = ()=>{
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CreditCard/>
      <CardList posts={posts}/>
      <CenteredButton><b>Abra sua conta</b></CenteredButton>
      <Institucional/>
    </div>
    
  );
}

export default App;
