import { useState, useEffect } from 'react';
import { addExhibit } from './Axios/MuseumAPI';


const AddExhibitToMuseum = ({ musID }) => {

    const [exhibitID, setExhibitID] = useState(0)
    const [museums, setMuseums] = useState([])

    // const handleMuseumIdChange = event => setMuseumID(event.target.value);
    const handleExhibitIdChange = event => setExhibitID(event.target.value);

    const handleSubmit = event => {

        addExhibit(musID, exhibitID, setMuseums)
    }

    return (

        <form onSubmit={handleSubmit}>
            <div class="update-museum-form">
                {/* <label>
                    Museum ID:
                    <input type = "text" name = "museum-id" onChange = {handleMuseumIdChange}></input>
                </label> */}
                <label>
                    Exhibit ID:
                    <input type="text" name="exhibit-id" onChange={handleExhibitIdChange}></input>
                </label>
                <button class="update-museum" type="submit" id="button">Add exhibit to museum</button>
            </div>

        </form>


    )
}

export default AddExhibitToMuseum;