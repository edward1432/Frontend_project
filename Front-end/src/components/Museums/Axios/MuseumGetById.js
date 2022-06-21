import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';

const MuseumGetById = () => {

    const [id, setId] = useState(0);

  const handleIdChange = event => setId(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    const museum = {
      "id": id
    }

  axios.get(`http://127.0.0.1:8080/museum/${museum.id}`)
  .then(res =>{
    console.log(res);
  }).catch((err) => console.log(err));
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