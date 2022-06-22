import React from 'react';
import './MuseumLandingPage.css';
import MuseumCreate from '../MuseumCreate';
import MuseumGetById from '../MuseumGetById';
import MuseumList from '../MuseumList';
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
