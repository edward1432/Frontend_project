import React from 'react';
import PropTypes from 'prop-types';
import './Artefacts.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Artefacts = () => {
  const [artefacts, setArtefacts] = useState([]);

  useEffect(() => {
          axios.get('http://127.0.0.1:8080/artefact')
            .then(res => {
              const artefacts = res.data;
              setArtefacts(artefacts);
            }).catch((err) => console.log(err));
    },[]
  );

  return (
    <ul>
      {
          artefacts.map(artefact =>
            <li key={artefact.id}>{`${artefact.name} | ${artefact.creator} | ${artefact.date} | ${artefact.country}`}</li>
          )
      }
    </ul>
);
}

export default Artefacts;
