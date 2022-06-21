import Museum from './Museum';

const MuseumList = ({Museums, deleteMuseum}) => {

    const MuseumComponents = Museums.map(Museum => {
        return <Museum 
                    key={Museum.id}
                    Museum={Museum}
                    deleteMuseum={deleteMuseum}/>
    })

    return(
        <>
            <h3>List of Museums</h3>
            <hr />
            {MuseumComponents}
        </>
    )
}

export default MuseumList;