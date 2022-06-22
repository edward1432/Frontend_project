import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { getMuseum } from './Axios/MuseumAPI';
import { useNavigate } from 'react-router-dom';

const MuseumGetById = () => {

  const [id, setId] = useState(0);
  const handleIdChange = event => setId(event.target.value);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    function goToMuseum(museum) {
      navigate("/museumpage/" + museum.id);   
    }

    function notFound(err) {
        alert("can't find museum " + err)
    }

    const museum = {
      "id": id
    }

    getMuseum(id, goToMuseum, notFound);
}

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>
          Museum Id:
          <input type = "text" name = "id" onChange = {handleIdChange} />
        </label><br></br>
        <button type = "submit" id="button">Get a museum</button>
      </form>
    </div>
  )
}


  
  export default MuseumGetById;