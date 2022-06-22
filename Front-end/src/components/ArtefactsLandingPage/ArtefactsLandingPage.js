import React from 'react';
import './ArtefactsLandingPage.css';
import Artefacts from '../Artefacts/Artefacts';
import GetAllArtefacts from '../Artefacts/Axios/GetAllArtefacts';
import GetArtefactByExhibitId from '../Artefacts/Axios/GetArtefactsByExhibitId';

function ArtefactsLandingPage () {
    
  return(
    <>
      <div className="ArtefactsLandingPage">
        <Artefacts />
      </div>
    </>
  )
  };

export default ArtefactsLandingPage;
