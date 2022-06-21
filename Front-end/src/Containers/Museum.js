const Museum = ({Museum, deleteMuseum}) => {

    const handleDeleteMuseum = () => {
        deleteMuseum(Museum.id);
    }

    return(
        <div>
            <h4>{Museum.name}</h4>
            <p>country: {Museum.country.name}</p>
            <button onClick={handleDeleteMuseum}>Delete Museum</button>
            <hr />
        </div>
    )
}

export default Museum;