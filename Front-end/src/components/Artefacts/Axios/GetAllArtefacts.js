import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const GetAllArtefacts = () => {
  const [artefacts, setArtefacts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/artefact')
    .then(res => {
      const artefacts = res.data;
      setArtefacts(artefacts);
    }).catch((err) => console.log(err));
  }, []
  );
  return(
    <ul>
      {
        artefacts.map(artefact =>
          <li key={artefact.id}>{`${artefact.name} | ${artefact.exhibit.name}`}</li>
          )
      }
    </ul>
  )

}

export default GetAllArtefacts;
