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

export function getArtefactByCountry (setArtefact, country) {
  axios.get(`http://127.0.0.1:8080/artefact//${country}`)
  .then(res =>{
    console.log(res);
    getArtefactByCountry(setArtefact);
  }).catch((err) => console.log(err));
}

export function createArtefact (setArtefacts, artefact) {
  axios.post(`http://127.0.0.1:8080/artefact/create?name=${artefact.name}&creator=${artefact.creator}&date=${artefact.date}&country=${artefact.country}&exhibitId=${exhibit.id}`)
  .then(res =>{
    console.log(res);
    getAllArtefacts(setArtefacts);
  }).catch((err) => console.log(err));
}

export function updateArtefact (setArtefact, artefact) {
  axios.put(`http://127.0.0.1:8080/artefact/update/${id}?&name=${artefact.name}&creator=${artefact.creator}&date=${artefact.date}&country=${artefact.country}`)
.then(res =>{
  console.log(res);
  getAllArtefacts(setArtefact);
}).catch((err) => console.log(err));
}

export function deleteArtefact (setArtefact, id) {
  axios.delete(`http://127.0.0.1:8080/artefact/delete/${id}`)
.then(res =>{
  console.log(res);
  alert(`Artefact deleted`);
  getAllArtefacts(setArtefact);
}).catch((err) => console.log(err));
}