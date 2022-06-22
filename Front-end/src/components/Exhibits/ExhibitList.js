import React, { useEffect, useState } from 'react';
import { getExhibits, deleteExhibit} from './Axios/ExhibitAPI';

const ExhibitList = (museumID) => {
    const [exhibits, setExhibits] = useState([]);

    useEffect(() => {
        getExhibits(setExhibits);
    })

    function deleteExhib(id) {
        deleteExhibit(setExhibits, id);
      }

    return (
        <ol>
            {exhibits
            .filter(exhibit => exhibit.museum.id == museumID)
                .map(exhibit => 
                <li key={exhibit.id}>
                        {exhibit.name}
                </li>
                )
            }
        </ol>
    )
}

export default ExhibitList;