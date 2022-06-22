import axios from 'axios';

export function getAllExhibits (setExhibits) {
    axios.get('http://127.0.0.1:8080/exhibit')
    .then(res => {
      const exhibits = res.data;
      setExhibits(exhibits);
    }).catch((err) => console.log(err));
}

export function getExhibitById (setExhibit, id) {
    axios.get(`http://127.0.0.1:8080/exhibit/${id}`)
  .then(res =>{
    console.log(res);
    getAllExhibits(setExhibit);
  }).catch((err) => console.log(err));
}

// export function createExhibit (setExhibits, exhibit) {
//     axios.post(`http://127.0.0.1:8080/exhibit/create?name=${exhibit.name}&museum_id=${museum_id}`)
//     .then(res =>{
//       console.log(res);
//       getAllExhibits(setExhibits);
//     }).catch((err) => console.log(err));
// }

export function updateExhibit (setExhibit, exhibit) {
    axios.put(`http://127.0.0.1:8080/exhibit/update/${exhibit.id}?&name=${exhibit.name}`)
  .then(res =>{
    console.log(res);
    getAllExhibits(setExhibit);
  }).catch((err) => console.log(err));
}

export function deleteExhibit (setExhibit, id) {
    axios.delete(`http://127.0.0.1:8080/exhibit/delete/${id}`)
  .then(res =>{
    console.log(res);
    alert(`Exhibit deleted`);
    getAllExhibits(setExhibit);
  }).catch((err) => console.log(err));
}
