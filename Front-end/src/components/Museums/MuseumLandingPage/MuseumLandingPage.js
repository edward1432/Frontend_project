import React from 'react';
import './MuseumLandingPage.css';
import MuseumCreate from '../MuseumCreate';
import MuseumGetById from '../MuseumGetById';
import MuseumTable from '../MuseumTable';
// import Assets from './src/Assets';

function MuseumLandingPage () {
    
  return(
    <>
      <div className="MuseumLandingPage">
        <h1 class = "name">Museums</h1>
        <MuseumTable /><br></br>
        <MuseumGetById />
        <MuseumCreate />
        {/* <audio autoPlay>
          <source src='museums.mp3' type='audio/mp3' />
        </audio> */}
      </div>
    </>
  )
  };

export default MuseumLandingPage;
