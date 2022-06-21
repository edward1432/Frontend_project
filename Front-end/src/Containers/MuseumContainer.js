import NewMuseumForm from './NewMuseumForm';
import MuseumList from './MuseumList';
import {useEffect, useState} from 'react';

const MuseumContainer = () => {

    const [Museums, setMuseums] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8080/museum")
            .then(response => response.json())
            .then(data => setMuseums(data))
    }, [])

    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8080/country")
            .then(response => response.json())
            .then(data => setCountry(data))
    }, [])

    const postMuseum = (newMuseum) => {
        // add the new Museum to db/server
        fetch("http://localhost:8080/Museums", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMuseum)
        })
        // update locally
        .then(response => response.json())
        .then(savedMuseum => setMuseums([...Museums, savedMuseum]))
    }

    const deleteMuseum = (id) => {
        // deal with db
        fetch("http://127.0.0.1:8080/Museums/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        // delete locally
        setMuseums(Museums.filter(Museum => Museum.id != id))
    }

    return (
        <>
            <h1>Single Origin Museum</h1>
            <p>a resource for people</p>
            <NewMuseumForm 
                    country={country}
                    postMuseum={postMuseum}/>
            <MuseumList 
                    Museums={Museums}
                    deleteMuseum={deleteMuseum}/>
        </>
    )
}

export default MuseumContainer;