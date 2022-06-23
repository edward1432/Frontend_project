import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getAllArtefacts } from "./Axios/ArtefactAPI";

function ArtefactPage () {

    const params = useParams();
    const [artefact, setArtefact] = useState({});
    const [artefacts, setArtefacts] = useState([]);

    useEffect(() => {
        getAllArtefacts(setArtefacts);
        // setArtefact(artefacts.filter(artefact => artefact.id === params.id))
    })


    return(
        <>
        <div className = "artefact-page">
            <h1>{artefact.name}</h1>
        </div>
        <div>
            <p>Creator: {artefact.creator}</p>
            <p>Date: {artefact.date}</p>
            <p>Country: {artefact.country}</p>
        </div>
        

        </>
    )

}
export default ArtefactPage;