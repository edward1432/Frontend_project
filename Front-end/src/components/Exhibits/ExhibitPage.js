import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getExhibitById } from "./Axios/ExhibitAPI";

function ExhibitPage () {

    const params = useParams();
    const [exhibit, setExhibit] = useState({});
    const [artefacts, setArtefacts] = useState([]);

    if (!exhibit.id){
    getExhibitById(setExhibit, params.id);
    }

    useEffect(() => {
        setArtefacts(exhibit.artefacts);
    })

    return(
        <>
        <div className = "exhibit-page">
            <h1>{exhibit.name}</h1>
            <h2>Currently housed in the {exhibit.museum.name}</h2>
        </div>
        <div>
            <ol>
                {artefacts && artefacts.map(artefact => 
                    <li key={artefact.id}>
                        {artefact.name}
                    </li>)}
            </ol>
        </div>
        </>
    )

}

export default ExhibitPage;