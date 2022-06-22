import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMuseum } from "./Axios/MuseumAPI";
import {useState} from "react";

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
        </>
    )
}

export default MuseumPage;