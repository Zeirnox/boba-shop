import './App.css';
import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar/index'
import Home from './components/Home/index'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" />
          <Route path="Menu" />
      </Routes>
     <Home />
    </Router>
  );
}

export default App;
