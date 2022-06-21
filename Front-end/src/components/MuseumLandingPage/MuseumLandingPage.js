import React from 'react';
import './MuseumLandingPage.css';
import Museum from '../Museums/Museum';
import MuseumCreate from '../../Services/MuseumService/MuseumCreate';

function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <Museum />
        <MuseumCreate />
        <button id="button">Delete a museum</button>
      </div>
    </>
  )
  };

export default MuseumLandingPage;
