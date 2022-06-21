import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMuseums } from "./Axios/MuseumAPI";
import { useState } from 'react';

const MuseumList = () => {

  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    getMuseums(setMuseums);
  })

  return (
    <ol>
      {museums.map(museum =>
          <li key={museum.id}>{`${museum.name} | ${museum.country}`}</li>
          )
          }
    </ol>
  )

}


export default MuseumList;