import axios from 'axios';

export function getExhibits(setExhibits) {
  axios.get('http://127.0.0.1:8080/exhibit').then(res => {
    const exhibits = res.data;
    setExhibits(exhibits);
  }).catch((err) => console.log(err));
}
export function deleteExhibit(setExhibits, id) {
    axios.delete(`http://127.0.0.1:8080/exhibit/delete/${id}`)
    .then(res => {
      alert(`Exhibit deleted`);
      getExhibits(setExhibits);
    }).catch((err) => console.log(err));
  }