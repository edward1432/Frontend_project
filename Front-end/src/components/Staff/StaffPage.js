import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getStaffByID2 } from '../Staff/Axios/StaffAPI';
import AssignStaff from "./AssignStaff";

function StaffPage () {

    const params = useParams();
    const [staff, setStaff] = useState({});

    if (!staff.id){
        getStaffByID2(setStaff, params.id);
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
            <p>ID: {staff.id}</p>
            <p>D.O.B: {staff.dob}</p>
            <p>Address: {staff.address}</p>
            <p>Salary: £{staff.salary}</p>
            <p>{staff.exhibitIds}</p>
        </div>
        <AssignStaff staID={staff.id}/>
        </section>

        
        </>
    )

}
export default StaffPage;