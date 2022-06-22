import React from 'react';
import './Exhibits.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { deleteExhibit, getAllExhibits } from './Axios/ExhibitAPI';

const Exhibits = () => {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
      getAllExhibits(setExhibits);
    })


    function deleteExhib(id){
      deleteExhibit(setExhibits, id);
    }

  return (
    <ul>
      {
        exhibits.map(exhibit =>
          <li key={exhibit.id}>
            <a href = {"exhibitpage/" + exhibit.id}>
            {`${exhibit.name} | ${exhibit.museum.name}`}
            </a>
            <button onClick={()=>deleteExhib(exhibit.id)}>delete</button>
          </li>
          )
      }
    </ul>
  )
    }
export default Exhibits;
