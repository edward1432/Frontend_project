import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllExhibits } from './ExhibitAPI';

const GetAllExhibits = () => {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    getAllExhibits(setExhibits);
  }
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
