import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';

const MuseumCreate = () => {

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handleCountryChange = event => setCountry(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
  }

  const museum = {
    "name": name,
    "country": country
  }

  axios.post('http://127.0.0.1:8080/museum', museum)
  .then(res =>{
    console.log(res);
  }).catch((err) => console.log(err));

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>
          Museum Name:
          <input type = "text" name = "name" onChange = {handleNameChange} />
        </label><br></br>
        <label>
          Country Name:
          <input type = "text" name = "country" onChange = {handleCountryChange} />
        </label><br></br>
        <button type = "submit" id="button">Add a new museum</button><br></br>
      </form>
    </div>
  )
}



export default MuseumCreate;