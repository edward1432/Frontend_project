import axios from 'axios';

export function getAllStaff (setStaff) {
    axios.get('http://127.0.0.1:8080/staff')
    .then(res => {
      const staff = res.data;
      setStaff(staff);
    }).catch((err) => console.log(err));
}

export function getStaffById (setStaff, id) {
    axios.get(`http://127.0.0.1:8080/staff/${id}`)
  .then(res =>{
    console.log(res);
    getAllStaff(setStaff);
  }).catch((err) => console.log(err));
}

export function createExhibit (setExhibits, exhibit) {
    axios.post(`http://127.0.0.1:8080/exhibit/create?name=${exhibit.name}&museum_id=${museum_id}`)
    .then(res =>{
      console.log(res);
      getAllExhibits(setExhibits);
    }).catch((err) => console.log(err));
}

export function updateExhibit (setExhibit, exhibit) {
    axios.put(`http://127.0.0.1:8080/exhibit/update/${id}?&name=${exhibit.name}`)
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
    getAllExhibits(setExhibits);
  }).catch((err) => console.log(err));
}