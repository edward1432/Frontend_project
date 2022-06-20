import React from 'react';
import Museums from '../Museums/Museums';
import './MuseumLandingPage.css';

function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <Museums />
        <button id="button">Add a new museum</button><br></br>
        <button id="button">Delete a museum</button>
      </div>
    </>
  )
  };

export default MuseumLandingPage;
