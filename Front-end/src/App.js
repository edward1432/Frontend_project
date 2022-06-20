import logo from './logo.svg';
import './App.css';
import Museums from './components/Museums/Museums';
import { createContext, useState } from "react";
import Header from './components/Header/Header';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';


function App() {

  return (
      <div className='App'>
        <Router>
          <Header />
            <Routes>
              <Route path="/" exact component={HomePage} />
            </Routes>
        </Router>
      </div>
  );
}


export default App;