import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getStaffByIDEnriched } from '../Staff/Axios/StaffAPI';
import AssignStaff from "./AssignStaff";

function StaffPage () {

    const params = useParams();
    const [staff, setStaff] = useState({exhibits: []});

    useEffect(() => {
        getStaffByIDEnriched(setStaff, params.id);
    }, []);

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
            <p>Assigned to exhibits:
                <ul>
                {staff.exhibits.map(exhibit => 
                    <li key={exhibit.id}>
                        <a href={"/exhibitpage/" + exhibit.id}>{exhibit.name}</a>
                    </li>)}
                </ul>
            </p>
        </div>
        <AssignStaff staID={staff.id}/>
        </section>

        
        </>
    )

}
export default StaffPage;