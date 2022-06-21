import React from 'react';
import PropTypes from 'prop-types';
import './Artefacts.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Artefacts = () => {
  const [artefacts, setArtefacts] = useState([]);

  useEffect(() => {
          axios.get('http://127.0.0.1:8080/artefacts')
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
            <li key={artefact.id}>{`${artefact.name} | ${artefact.exhibits}`}</li>
          )
      }
    </ul>
);
}

export default Artefacts;
