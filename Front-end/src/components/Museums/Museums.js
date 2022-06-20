import React from 'react';
import PropTypes from 'prop-types';
import './Museums.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Museums = () => {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/museum')
    .then(res => {
      const museums = res.data;
      setMuseums(museums);
    }).catch((err) => console.log(err));
  }, []
  );
  return(
    <ul>
      {
        museums.map(museum =>
          <li key={museum.id}>{`${museum.name}`}</li>
          )
      }
    </ul>
  )

}

Museums.propTypes = {};

Museums.defaultProps = {};

export default Museums;
