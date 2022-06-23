import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getStaffById } from '../Staff/Axios/StaffAPI';

function StaffPage () {

    const params = useParams();
    const [staff, setStaff] = useState({});
    const [exhibits, setExhibits] = useState([]);

    if (!staff.id){
        getStaffById(setStaff, params.id);
    }

    useEffect(() => {
        setExhibits(staff.exhibits);
    })

    return(
        <>
        <div className = "staff-page">
            <h1>{staff.firstName} {staff.lastName} </h1>
        </div>
        <div>
            <ol>
                {staff.params && staff.params.map (staff => 
                    <li key={staff.id}>
                        {staff.firstName}
                        {staff.lastName}
                        {staff.dob}
                        {staff.address}
                        {staff.salary}
                        {staff.exhibitIds}
                    </li>)}
            </ol>
        </div>
        </>
    )

}
export default StaffPage;