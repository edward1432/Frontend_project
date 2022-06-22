import React from 'react';
import PropTypes from 'prop-types';
import './Artefacts.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { getAllArtefacts, deleteArtefact } from './Axios/ArtefactAPI';

const Artefacts = () => {
  const [artefacts, setArtefacts] = useState([]);

  useEffect(() => {
    getAllArtefacts(setArtefacts);
  })
  
  function deleteArte(id) {
    deleteArtefact(setArtefacts, id);
  }

  return (
    <ol>
      {
          artefacts.map(artefact =>
            <li key={artefact.id}>
            <a href = {"artefactpage/" + artefact.id}>
            {`${artefact.name} | ${artefact.creator} | ${artefact.date} | ${artefact.country}`}
            </a>
            <button onClick={()=>deleteArte(artefact.id)}>delete</button>
            </li>
          )
      }
    </ol>
);
}

export default Artefacts;
