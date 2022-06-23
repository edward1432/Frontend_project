import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';

const CreateExhibit = () => {

  const [name, setName] = useState('');
  const [museum_id, setMuseum_id] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handleMuseum_IdChange = event => setMuseum_id(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();


  const exhibit = {
    "name": name,
    "museum_id": museum_id
  }

  axios.post(`http://127.0.0.1:8080/exhibit/create?name=${name}&museum_id=${museum_id}`)

  .then(res =>{
    console.log(res);
  }).catch((err) => console.log(err));
}

  return (
    <div class='exhibit-form'>
      <form onSubmit = {handleSubmit}>
        <div class='exhibit-name'>
        <label>
            Exhibit Name:
            <input type = "text" name = "name" onChange = {handleNameChange} />
        </label><br></br>

        </div>

        <div class = 'museum-id'>
        <label>
            Museum Id:
            <input type="number" name='museum_id' onChange={handleMuseum_IdChange} />
        </label>
        </div>
       
        
        <button class = 'add-exhibit-button' type = "submit" id="button">Add a new exhibit</button><br></br>
        <br></br>
      </form>
    </div>
  )
}



export default CreateExhibit;