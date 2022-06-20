import React from 'react';
import Museums from '../Museums/Museums';
import './MuseumLandingPage.css';

function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <Museums />
        <button>Add a new museum</button><br></br>
        <button>Delete a museum</button>
      </div>
    </>
  )
  };

export default MuseumLandingPage;
