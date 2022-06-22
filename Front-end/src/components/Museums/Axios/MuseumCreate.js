import {useState, useEffect} from 'react';
import { createMuseum, getMuseums} from './MuseumAPI';

const MuseumCreate = () => {

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [museums, setMuseums] = useState([])

  const handleNameChange = event => setName(event.target.value);
  const handleCountryChange = event => setCountry(event.target.value);

  useEffect(() => {
    getMuseums(setMuseums)
  })

  const handleSubmit = event => {
    event.preventDefault();
  
  const museum = {
    "name": name,
    "country": country
  }
  createMuseum(setMuseums, museum);
}

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
        <br></br>
      </form>
    </div>
  )
}



export default MuseumCreate;