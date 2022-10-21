import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/competences" component={Knowledges}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>

      </BrowserRouter>
    </>
  );
};

export default App;
