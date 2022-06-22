import React from "react";
import { useParams } from "react-router-dom";
import { getMuseum } from "./Axios/MuseumAPI";
import {useState} from "react";
import ExhibitList from "../Exhibits/ExhibitList";

function MuseumPage () {

    const params = useParams();
    const [museum, setMuseum] = useState({});

    if (!museum.id){
    getMuseum(setMuseum, params.id);
    }

    return(
        <>
        <div className = "museum-page">
            <h1>{museum.name}</h1>
        </div>
        <div>
            <ol>
                {museum.exhibits.map(exhibit => 
                    <li key={exhibit.id}>
                        {exhibit.name}
                    </li>)}
            </ol>
        </div>
        </>
    )
}

export default MuseumPage;