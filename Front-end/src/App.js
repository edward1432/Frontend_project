import './App.css';
import Header from './components/Header/Header';
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import MuseumLandingPage from './components/Museums/MuseumLandingPage/MuseumLandingPage';
import ArtefactsLandingPage from './components/ArtefactsLandingPage/ArtefactsLandingPage';
import StaffLandingPage from './components/StaffLandingPage/StaffLandingPage';
import MuseumPage from './components/Museums/MuseumPage';
import HelpLandingPage from './components/Help/Help';
import ExhibitLandingPage from './components/Exhibits/ExhibitLandingPage/ExhibitLandingPage';
import ExhibitPage from './components/Exhibits/ExhibitPage';

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
          <Route path='/artefactpage/:id' element={<MuseumPage />}/>
          <Route path='/exhibitlanding' element={<ExhibitLandingPage />}/>
          <Route path='/exhibitpage/:id' element={<ExhibitPage />}/>
          <Route path='/stafflanding' element={<StaffLandingPage />}/>
          {/* <Route path='/museumpage/:id' element={<MuseumPage />}/> */}
          <Route path='/help' element={<HelpLandingPage />}/>
        </Routes>
      </Router>
    </div>
  );

}


export default App;