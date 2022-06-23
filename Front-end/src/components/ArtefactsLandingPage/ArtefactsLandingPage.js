import React from 'react';
import './ArtefactsLandingPage.css';
import ArtefactsTable from '../Artefacts/ArtefactsTable';

function ArtefactsLandingPage () {
    
  return(
    <>
      <div className="ArtefactsLandingPage">
        <h1>Artefacts</h1>
        <ArtefactsTable />
      </div>
    </>
  )
  };

export default ArtefactsLandingPage;
