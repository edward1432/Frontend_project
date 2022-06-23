import React from "react";
import { useParams } from "react-router-dom";
import { getMuseum } from "./Axios/MuseumAPI";
import {useState, useEffect} from "react";
import AddExhibitToMuseum from "./AddExhibitToMuseum";

function MuseumPage () {

    const params = useParams();
    const [museum, setMuseum] = useState({});
    const [exhibits, setExhibits] = useState([]);

    if (!museum.id){
    getMuseum(params.id, setMuseum);
    }

    useEffect(() => {
        setExhibits(museum.exhibits);
    })

    return(
        <>
        <section>
        <div className = "museum-page">
            <h1>{museum.name}</h1>
        </div>
        <div>Exhibits:
            <ul>
                {exhibits && exhibits.map(exhibit => 
                    <li key={exhibit.id}>
                        <a href={"/exhibitpage/" + exhibit.id}>{exhibit.name}</a>
                    </li>)}
            </ul>
        </div>
        <AddExhibitToMuseum />
        </section>
        </>
    )
}

export default MuseumPage;