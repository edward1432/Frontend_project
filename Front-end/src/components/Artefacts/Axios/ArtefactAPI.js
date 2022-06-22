import axios from 'axios';

export function getAllArtefacts (setArtefacts) {
    axios.get('http://127.0.0.1:8080/artefact')
    .then(res => {
      const artefacts = res.data;
      setArtefacts(artefacts);
    }).catch((err) => console.log(err));
}

export function getArtefactByExhibitId (setArtefact, id) {
  axios.get(`http://127.0.0.1:8080/artefact/byExhibit/${exhibit.id}`)
  .then(res =>{
    console.log(res);
    getArtefactByExhibitId(setArtefact);
  }).catch((err) => console.log(err));
}