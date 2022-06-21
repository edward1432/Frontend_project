import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';

const MuseumDeleteById = () => {

    const [id, setId] = useState(0);

  const handleIdChange = event => setId(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    const museum = {
      "id": id
    }

  axios.delete(`http://127.0.0.1:8080/museum/delete/${museum.id}`)
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
        <button type = "submit" id="button">Delete a museum</button>
      </form>
    </div>
  )
}


  
  export default MuseumDeleteById;