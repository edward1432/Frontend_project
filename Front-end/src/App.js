import logo from './logo.svg';
import './App.css';
import Museums from './components/Museums/Museums';
import { useState } from "react";
import Header from './components/Header/Header';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
          <Routes>
            <Route path="/home" exact component={HomePage} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;
