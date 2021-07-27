import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AcconuntModal from "./components/AccountModal";

import Home from "./views/Home";
import Login from './views/Login'
import Dashbord from './views/Dashbord'

import "./App.scss";
const PrivateRoute = ( { children, logged,...rest } )=> (
  <Route {...rest}
      render={()=> (logged ? children : <Redirect to='/login/'/>)}  
 />
);
   

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, SetName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      SetName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      SetName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} logged ={isLogged} auth={fakeAuth}/>
      <Switch>
        <Route path="/" exact>
          <Home heandleClick={() => setShowModal(true)} />
        </Route>
        <Route path='/login'>
          <Login auth={fakeAuth} text='Entrar'/>
        </Route>
        
        <PrivateRoute path='/dashbord' logged={isLogged}>
          <Dashbord name={name} account={account} logged={isLogged}/>
        </PrivateRoute>
      </Switch>
      <Footer />
      <AcconuntModal show={showModal} auth={fakeAuth} handleClose={() => setShowModal(false)} />
    </Router>
  );
};

export default App;
