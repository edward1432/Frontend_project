import React from 'react';
import './ExhibitLandingPage.css';
import CreateExhibit from '../Axios/CreateExhibit';
import ExhibitTable from '../ExhibitTable';

function ExhibitLandingPage () {
    
  return(
    <>
      <div className="ExhibitLandingPage">
        <h1 class = "name">Exhibits</h1>
        <ExhibitTable />
        <br></br>
        <CreateExhibit />

      </div>
    </>
  )
  };

export default ExhibitLandingPage;
