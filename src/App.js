import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AcconuntModal from "./components/AccountModal";

import Home from "./views/Home";
import Login from './views/Login'
import Dashbord from './views/Dashbord'

import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Switch>
        <Route path="/" exact>
          <Home heandleClick={() => setShowModal(true)} />
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/dashbord'>
          <Dashbord/>
        </Route>
      </Switch>
      <Footer />
      <AcconuntModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
};

export default App;
