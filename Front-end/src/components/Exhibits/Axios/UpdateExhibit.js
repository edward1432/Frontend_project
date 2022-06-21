import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';

const UpdateExhibit = () => {

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handleIdChange = event => setId(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();


  const exhibit = {
    "name": name,
    "id": id
  }

  axios.put(`http://127.0.0.1:8080/exhibit/update/${id}?&name=${name}`)

  .then(res =>{
    console.log(res);
  }).catch((err) => console.log(err));
}

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>
            Update Exhibit Name:
            <input type = "text" name = "name" onChange = {handleNameChange} />
        </label><br></br>

        <label>
            Exhibit Id:
            <input type="number" name='id' onChange={handleIdChange} />
        </label>
        
        <button type = "submit" id="button">Update an exhibit</button><br></br>
        <br></br>
      </form>
    </div>
  )
}



export default UpdateExhibit;