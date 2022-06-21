import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMuseums, deleteMuseum } from "./Axios/MuseumAPI";
import { useState } from 'react';

const MuseumList = () => {

  const [museums, setMuseums] = useState([]);


  useEffect(() => {
    getMuseums(setMuseums);
  })

  function deleteMus(id) {
    deleteMuseum(setMuseums, id);
  }

  return (
    <ol>
      {museums.map(museum =>
          <li key={museum.id}>
            <a href = {"museumpage/" + museum.id}>
            {museum.name} | {museum.country}
            </a>
            <button onClick={()=>deleteMus(museum.id)}>delete</button>
            </li>
          )
          }
    </ol>
  )

}


export default MuseumList;