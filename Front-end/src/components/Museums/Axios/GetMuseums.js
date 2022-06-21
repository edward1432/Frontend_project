import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetMuseums = () => {
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

GetMuseums.propTypes = {};

GetMuseums.defaultProps = {};

export default GetMuseums;
