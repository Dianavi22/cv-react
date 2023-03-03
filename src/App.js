import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

        <Routes>
          <Route path="/cv-react" element={<Home />} Route />
          <Route path="/competences" element={<Knowledges />} Route />
          <Route path="/portfolio" element={<Portfolio />} Route />
          <Route path="/contact" element={<Contact />} Route />
          <Route path="*" element={<NotFound />} Route />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
