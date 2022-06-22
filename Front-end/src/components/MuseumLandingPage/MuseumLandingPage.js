import React from 'react';
import './MuseumLandingPage.css';
import MuseumCreate from '../Museums/MuseumCreate';
import MuseumGetById from '../Museums/Axios/MuseumGetById';
import MuseumList from '../Museums/MuseumList';
function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <MuseumList />
        <MuseumGetById />
        <MuseumCreate />
      </div>
    </>
  )
  };

export default MuseumLandingPage;
