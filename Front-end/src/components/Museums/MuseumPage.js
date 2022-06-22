<<<<<<< HEAD
import React from "react";
import { PropTypes } from "@mui/material";
=======
import React, { useEffect } from "react";
>>>>>>> edwardd
import { useParams } from "react-router-dom";
import { getMuseum } from "./Axios/MuseumAPI";
import {useState} from "react";

function MuseumPage () {

    const params = useParams();
    const [museum, setMuseum] = useState({});
    const [exhibits, setExhibits] = useState([]);

    if (!museum.id){
    getMuseum(setMuseum, params.id);
    }

    useEffect(() => {
        setExhibits(museum.exhibits);
    })

    return(
        <>
        <div className = "museum-page">
            <h1>{museum.name}</h1>
        </div>
<<<<<<< HEAD
=======
        <div>
            <ol>
                {exhibits.map(exhibit => 
                    <li key={exhibit.id}>
                        {exhibit.name}
                    </li>)}
            </ol>
        </div>
>>>>>>> edwardd
        </>
    )
}

export default MuseumPage;