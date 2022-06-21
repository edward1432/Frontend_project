import React from 'react';
import './MuseumLandingPage.css';
import Museum from '../Museums/Museum';
import MuseumCreate from '../../Services/MuseumService/MuseumCreate';
import MuseumDeleteById from '../../Services/MuseumService/MuseumDeleteById';
function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <Museum />
        <MuseumCreate />
        <MuseumDeleteById />
      </div>
    </>
  )
  };

export default MuseumLandingPage;
