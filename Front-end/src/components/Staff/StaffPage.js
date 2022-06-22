import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getStaffById} from "./Axios/StaffAPI";
import { getExhibitById } from "../Exhibits/Axios/ExhibitAPI";
import axios from 'axios';
function StaffPage () {

    const params = useParams();
    // const [exhibit, setExhibit] = useState({});
    // const [staff, setStaff] = useState({});

    const [id, setId] = useState(0);
    const handleIdChange = event => setId(event.target.value);


    const staff = {
        "id": id,

    }
    const handleSubmit = event => {
        event.preventDefault();
    
    axios.get(`http://127.0.0.1:8080/staff/${staff.id}`).then(res =>{
        console.log(res);
    }).catch((err) => console.log(err));
    }

    // if (!staff.id){
    //     getStaffById(setStaff, params.id);
    // }

    // useEffect(() => {
    //     setStaff(staff.id);
    // })

    return(
        <>

        </>
        // <>
        // <div className = "staff-page">
        //     <h1>{staff.firstName} {staff.lastName} Details:</h1>
        // </div>
        // <div>
        //     <ol>
        //         {staff && staff.map(staff => 
        //             <li key={staff.id}>
        //                 {staff.dob}
        //                 {staff.address}
        //                 {staff.salary}
        //                 {staff.exhibitIds}
        //             </li>)}
        //     </ol>
        // </div>
        // </>
    )

}
export default StaffPage;