import React from 'react';
import './MuseumLandingPage.css';
import Museum from '../Museums/Museum';
import MuseumCreate from '../Museums/Axios/MuseumCreate';
import MuseumDeleteById from '../Museums/Axios/MuseumDeleteById';
import MuseumGetById from '../Museums/Axios/MuseumGetById';
function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <Museum />
        <MuseumGetById />
        <MuseumCreate />
        <MuseumDeleteById />
      </div>
    </>
  )
  };

export default MuseumLandingPage;
