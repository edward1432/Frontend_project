import axios from 'axios';

export function getMuseums(setMuseums) {
  axios.get('http://127.0.0.1:8080/museum').then(res => {
    const museums = res.data;
    setMuseums(museums);
  }).catch((err) => console.log(err));
}

export function getMuseum(setMuseum, id) {
  axios.get('http://127.0.0.1:8080/museum/' + id).then(res => {
    const museum = res.data;
    setMuseum(museum);
  }).catch((err) => console.log(err));
}

export function deleteMuseum(setMuseums, id) {
  axios.delete(`http://127.0.0.1:8080/museum/delete/${id}`)
  .then(res => {
    alert(`Museum deleted`);
    getMuseums(setMuseums);
  }).catch((err) => console.log(err));
}

export function createMuseum(setMuseums, museum) {
  axios.post('http://127.0.0.1:8080/museum/create', null, { params: museum})
  .then(res => {
    console.log(res)
    getMuseums(setMuseums)
  }).catch((err) => console.log(err));
}