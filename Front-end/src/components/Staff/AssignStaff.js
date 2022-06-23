import { useState, useEffect } from 'react';
import { updateStaff } from './Axios/StaffAPI';

const AssignStaff = ({staID}) => {

    const [exhibitID, setExhibitID] = useState(0);
    const [staff, setStaff] = useState([]);

    const handleExhibitIdChange = event => setExhibitID(event.target.value);

    const handleSubmit = event => {
        
        updateStaff(staID, exhibitID, setStaff);
    }
    
    return (
        
        
        <form onSubmit = {handleSubmit}>
            <div class = "update-museum-form">
                <label>
                    Exhibit ID:
                    <input type = "text" name = "exhibit-id" onChange = {handleExhibitIdChange}></input>
                </label>
                <button class = "update-staff" type = "submit" id = "button">Assign Employee to Exhibit</button>
            </div>

        </form>
        
        
    )
}
export default AssignStaff;