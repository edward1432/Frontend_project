import React from 'react';
import PropTypes from 'prop-types';
import './Museum.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Museum = () => {
  const [museums, setMuseums] = useState([]);

  useEffect((getAllMuseums) => {
    axios.get('http://127.0.0.1:8080/museum')
      .then(res => {
        const museums = res.data;
        setMuseums(museums);
      }).catch((err) => console.log(err));
    }, []
  );

  return (
    <ul>
      {
        museums.map(museum =>
          <li key={museum.id}>{`${museum.name} | ${museum.country}`}</li>
          )
      }
    </ul>
  )
  

}

const Museum = () => {
  const [museums, setMuseums] = useState([]);

  useEffect((getAllMuseums) => {
    axios.get('http://127.0.0.1:8080/museum')
      .then(res => {
        const museums = res.data;
        setMuseums(museums);
      }).catch((err) => console.log(err));
    }, []
  );

  return (
    <ul>
      {
        museums.map(museum =>
          <li key={museum.id}>{`${museum.name} | ${museum.country}`}</li>
          )
      }
    </ul>
  )
  

}


export default Museum;