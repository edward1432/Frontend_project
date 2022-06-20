import logo from './logo.svg';
import './App.css';
import Museums from './components/Museums/Museums';
import { useState } from "react";
import Header from './components/Header/Header';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeContext } from '@emotion/react';


function App() {

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className='App' id='theme'>
        <Router>
          <Header />
            <Routes>
              <Route path="/home" exact component={HomePage} />
            </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
