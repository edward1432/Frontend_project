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
        <section>
        <div className = "exhibit-page">
            <h1>{exhibit.name}</h1>
        </div>
        <div>Contains artefacts:
            <ul>
                {artefacts && artefacts.map(artefact => 
                    <li key={artefact.id}>
                        <a href={"/artefactpage/" + artefact.id}>{artefact.name}</a>
                    </li>)}
            </ul>
        </div>
        </section>
        </>
    )

}

export default ExhibitPage;