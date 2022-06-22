import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { GetArtefactByExhibitId} from "./Axios/ArtefactAPI";
function ArtefactPage () {

    const params = useParams();
    const [artefact, setArtefact] = useState({});
    const [staff, setStaff] = useState([]);

    if (!artefact.id){
        GetArtefactByExhibitId(setArtefact, params.id);
    }

    useEffect(() => {
        setStaff(artefact.staff);
    })

    return(
        <>
        <div className = "artefact-page">
            <h1>{artefact.name}</h1>
        </div>
        <div>
            <ol>
                {staff && staff.map(staff => 
                    <li key={staff.id}>
                        {staff.name}
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
export default ArtefactPage;