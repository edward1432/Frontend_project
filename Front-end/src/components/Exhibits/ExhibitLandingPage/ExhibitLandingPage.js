import React from 'react';
import './ExhibitLandingPage.css';
import CreateExhibit from '../Axios/CreateExhibit';
import ExhibitTable from '../ExhibitTable';

function ExhibitLandingPage () {
    
  return(
    <>
      <div className="ExhibitLandingPage">
        <h1>Exhibits</h1>
        <ExhibitTable />
        <CreateExhibit />

      </div>
    </>
  )
  };

export default ExhibitLandingPage;
