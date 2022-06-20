import logo from './logo.svg';
import './App.css';
import Museums from './components/Museums/Museums';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
