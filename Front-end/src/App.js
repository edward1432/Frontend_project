import './App.css';
import Header from './components/Header/Header';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import MuseumLandingPage from './components/MuseumLandingPage/MuseumLandingPage';
import ArtefactsLandingPage from './components/ArtefactsLandingPage/ArtefactsLandingPage';
import ExhibitLandingPage from './components/ExhibitLandingPage/ExhibitLandingPage';
import StaffLandingPage from './components/StaffLandingPage/StaffLandingPage';
import MuseumPage from './components/Museums/MuseumPage';

function App() {


  return (
    <div>
      
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/museumslanding' element={<MuseumLandingPage />}/>
          <Route path='/museumpage/:id' element={<MuseumPage />}/>
          <Route path='/artefactslanding' element={<ArtefactsLandingPage />}/>
          <Route path='/exhibitlanding' element={<ExhibitLandingPage />}/>
          <Route path='/stafflanding' element={<StaffLandingPage />}/>
        </Routes>
      </Router>
    </div>
  );

}


export default App;