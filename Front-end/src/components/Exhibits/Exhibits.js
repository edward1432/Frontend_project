import React from 'react';
import './Exhibits.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Exhibits = () => {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/exhibit')
      .then(res => {
        const exhibits = res.data;
        setExhibits(exhibits);
      }).catch((err) => console.log(err));
    }, []
  );

  return (
    <ul>
      {
        exhibits.map(exhibit =>
          <li key={exhibit.id}>{`${exhibit.name} | ${exhibit.museum}`}</li>
          )
      }
    </ul>
  )
  

}

export default Exhibits;
