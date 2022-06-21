import { useState} from 'react';

const NewMuseumForm = ({countrys, postMuseum}) => {

    const countryOptions = countrys.map((country) => {
        return <option key={country.id} value={country.id}>{country.name}</option>
    })

    const [stateMuseum, setStateMuseum] = useState(
        {
            name: "",
            cocoaPercentage: 0,
            country: null
        }
    )
    
    const handleChange = (event) => {
        console.log(event);
        let propertyName = event.target.name;
        let copiedMuseum = {...stateMuseum};
        copiedMuseum[propertyName] = event.target.value;
        setStateMuseum(copiedMuseum)
    }

    const handlecountry = (event) => {
        const countryId = parseInt(event.target.value);
        const selectedcountry = countrys.find(country => country.id === countryId);
        let copiedMuseum = {...stateMuseum};
        copiedMuseum.country = selectedcountry;
        setStateMuseum(copiedMuseum);
    }

    const handleFormSubmit= (event) => {
        event.preventDefault();
        postMuseum(stateMuseum)
    }


    return(
        <form onSubmit={handleFormSubmit}>
            <h3>Add a new Museum:</h3>
            <input
                type="text"
                placeholder="Museum name"
                name="name"
                onChange={handleChange}
                value={stateMuseum.name}
                />
            <input
                type="text"
                placeholder="cocoa percentage"
                name="cocoaPercentage"
                onChange={handleChange}
                value={stateMuseum.cocoaPercentage}
                />
            <select
                name="country"
                onChange={handlecountry}>
                <option>Select an country</option>
                {countryOptions}
            </select>
            <button type="submit">OK</button>
        </form>
    )
}

export default NewMuseumForm;