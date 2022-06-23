import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllStaff, fireStaff} from "./Axios/StaffAPI";
import { useState } from 'react';

const StaffList = () => {

  const [staff, setStaff] = useState([]);


  useEffect(() => {
    getAllStaff(setStaff);
  })

  function deleteStaff(id) {
    fireStaff(setStaff, id);
  }

  return (
    <ol>
      {staff.map(staff =>
          <li key={staff.id}>
            <a href = {"staffpage/" + staff.id}>
            {staff.firstName} | {staff.lastName}
            </a>
            <button onClick={()=>deleteStaff(staff.id)}>delete</button>
            </li>
          )
          }
    </ol>
  )

}


export default StaffList;