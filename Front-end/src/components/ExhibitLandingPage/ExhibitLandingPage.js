import React from 'react';
import PropTypes from 'prop-types';
import './ExhibitLandingPage.css';
import Exhibits from '../Exhibits/Exhibits';
import GetExhibitById from '../Exhibits/Axios/GetExhibitById';
import CreateExhibit from '../Exhibits/Axios/CreateExhibit';
import UpdateExhibit from '../Exhibits/Axios/UpdateExhibit';

function ExhibitLandingPage () {
    
  return(
    <>
      <div className="ExhibitLandingPage">
        <Exhibits />
        <GetExhibitById />
        <CreateExhibit />
        <UpdateExhibit />

      </div>
    </>
  )
  };

export default ExhibitLandingPage;
