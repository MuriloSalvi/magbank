import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer'
import AcconuntModal from './components/AccountModal';
import Home from './views/Home'

import './App.scss';

const App = ()=>{
 const [showModal, setShowModal] =useState(true);
  return (
    <Router>
      <Navbar handleCreateAcc={()=>setShowModal(true)}/>
      <Switch>
        <Route path='/'>
          <Home heandleClick={()=>setShowModal(true)}/>
        </Route>
      </Switch>
      <Footer/>
      <AcconuntModal show={showModal} handleClose={()=> setShowModal(false)}/>
    </Router>
    
  );
}

export default App;
