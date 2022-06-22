import React from 'react';
import PropTypes from 'prop-types';
import './ArtefactsLandingPage.css';
import Artefacts from '../Artefacts/Artefacts';
import GetAllArtefacts from '../Artefacts/Axios/GetAllArtefacts';

function ArtefactsLandingPage () {
    
  return(
    <>
      <div className="ArtefactsLangingPage">
        <Artefacts />
        <GetAllArtefacts />

      </div>
    </>
  )
  };

export default ArtefactsLandingPage;
