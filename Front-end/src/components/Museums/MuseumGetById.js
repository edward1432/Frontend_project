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

    const museum = {
      "id": id
    }
    try {
      getMuseum(id);
      navigate("/museumpage/" + museum.id);
    } catch (err) {
      alert(err)
    }

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