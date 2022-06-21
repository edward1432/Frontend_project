import React from 'react';
import PropTypes from 'prop-types';
import './ExhibitLandingPage.css';
import Exhibits from '../Exhibits/Exhibits';
import GetExhibitById from '../Exhibits/Axios/GetExhibitById';
import CreateExhibit from '../Exhibits/Axios/CreateExhibit';

function ExhibitLandingPage () {
    
  return(
    <>
      <div className="ExhibitLandingPage">
        <Exhibits />
        <GetExhibitById />
        <CreateExhibit />

      </div>
    </>
  )
  };

export default ExhibitLandingPage;
