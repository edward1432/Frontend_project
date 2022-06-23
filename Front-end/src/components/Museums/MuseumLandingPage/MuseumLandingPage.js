import React from 'react';
import './MuseumLandingPage.css';
import MuseumCreate from '../MuseumCreate';
import MuseumGetById from '../MuseumGetById';
import MuseumList from '../MuseumList';
import MuseumTable from '../MuseumTable';
function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <h1 class = "name">Museums</h1>
        <MuseumTable /><br></br>
        <MuseumGetById />
        <MuseumCreate />
      </div>
    </>
  )
  };

export default MuseumLandingPage;
