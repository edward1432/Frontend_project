import React from 'react';
import PropTypes from 'prop-types';
import './ExhibitLandingPage.css';
import Exhibits from '../Exhibits';
import CreateExhibit from '../Axios/CreateExhibit';

function ExhibitLandingPage () {
    
  return(
    <>
      <div className="ExhibitLandingPage">
        <Exhibits />
        <CreateExhibit />

      </div>
    </>
  )
  };

export default ExhibitLandingPage;
