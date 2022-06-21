import React from 'react';
import './MuseumLandingPage.css';
import MuseumCreate from '../Museums/Axios/MuseumCreate';
import MuseumDeleteById from '../Museums/Axios/MuseumDeleteById';
import MuseumGetById from '../Museums/Axios/MuseumGetById';
import MuseumList from '../Museums/MuseumList';
function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <MuseumList />
        <MuseumGetById />
        <MuseumCreate />
        <MuseumDeleteById />
      </div>
    </>
  )
  };

export default MuseumLandingPage;
