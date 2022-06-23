import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getStaffById } from '../Staff/Axios/StaffAPI';

function StaffPage () {

    const params = useParams();
    const [staff, setStaff] = useState({});

    if (!staff.id){
        getStaffById(setStaff, params.id);
    }

    // useEffect(() => {
    //     setExhibits(staff.exhibits);
    // })

    return(
        <>
        <section>
        <div className = "staff-page">
            <h1>Employee: {staff.firstName} {staff.lastName} </h1>
        </div>
        <div>
            <p>D.O.B: {staff.dob}</p>
            <p>Address: {staff.address}</p>
            <p>Salary: £{staff.salary}</p>
        </div>
        </section>
        </>
    )

}
export default StaffPage;