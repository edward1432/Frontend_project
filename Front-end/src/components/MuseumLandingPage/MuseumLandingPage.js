import React from 'react';
import './MuseumLandingPage.css';
import Museum from '../Museums/Museum';

function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <Museum />
        <button id="button">Add a new museum</button><br></br>
        <button id="button">Delete a museum</button>
      </div>
    </>
  )
  };

export default MuseumLandingPage;
