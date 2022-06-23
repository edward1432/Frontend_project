import React from 'react';
import './ArtefactsLandingPage.css';
import ArtefactsTable from '../Artefacts/ArtefactsTable';

function ArtefactsLandingPage () {
    
  return(
    <>
      <div className="ArtefactsLandingPage">
        <h1 class = "name">Artefacts</h1>
        <ArtefactsTable />
      </div>
      <div class = 'artefact-gif'>
        <img src="https://media2.giphy.com/media/uULru6cnBO4gM/giphy.gif?cid=ecf05e4730vk3i70ewcbawj9m5z3x2h73lcq8lgbmaiff1kn&rid=giphy.gif&ct=g" width = '200px'/>
      </div>
    </>
  )
  };

export default ArtefactsLandingPage;
