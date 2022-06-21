import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetAllExhibits = () => {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/exhibit')
    .then(res => {
      const exhibits = res.data;
      setExhibits(exhibits);
    }).catch((err) => console.log(err));
  }, []
  );
  return(
    <ul>
      {
        exhibits.map(exhibit =>
          <li key={exhibit.id}>{`${exhibit.name} | ${exhibit.museum}`}</li>
          )
      }
    </ul>
  )

}

GetAllExhibits.propTypes = {};

GetAllExhibits.defaultProps = {};

export default GetAllExhibits;
