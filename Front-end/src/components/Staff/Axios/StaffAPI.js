import axios from 'axios';

export function getAllStaff (setStaff) {
    axios.get('http://127.0.0.1:8080/staff')
    .then(res => {
      const staff = res.data;
      setStaff(staff);
    }).catch((err) => console.log(err));
}

export function getStaffByID2 (setStaff, id) {
  axios.get('http://127.0.0.1:8080/staff')
  .then(res => {
    const matchingStaff = res.data.filter(staff => staff.id == id);
    console.log(matchingStaff)
    setStaff(matchingStaff[0]);
  }).catch((err) => console.log(err));
}

function findExhibitByID (exhibits, id){
  const matchingExhibits = exhibits.filter(exhibit => id == exhibit.id);
  return matchingExhibits[0];
}

export function getStaffByID3 (setStaff, id) {
  axios.get('http://127.0.0.1:8080/staff')
  .then(res => {
    const matchingStaff = res.data.filter(staff => staff.id == id);
    console.log(matchingStaff)
    axios.get('http://127.0.0.1:8080/exhibit')
    .then(rese => {
      const exhibits = rese.data;
      const staff = matchingStaff[0];
      const exhibitsForStaff = staff.exhibitIds.map(id => findExhibitByID(exhibits, id))
      staff.exhibits = exhibitsForStaff;
      console.log(staff)
      setStaff(staff);
    })
  }).catch((err) => console.log(err));
}

export function getStaffById (setStaff, id) {
    axios.get(`http://127.0.0.1:8080/staff/` + id).then(res =>{
    const staff = res.data;
    setStaff(staff);
  })
}

export function hireStaff (setStaff, staff) {
    axios.post(`http://127.0.0.1:8080/staff/hire?firstName=${staff.firstName}&lastName=${staff.lastName}&age=${staff.age}&address=${staff.address}&salary=${staff.salary}`)
    .then(res =>{
      console.log(res);
      getAllStaff(setStaff);
    }).catch((err) => console.log(err));
}


export function updateStaff (staID, exhibID, setStaff) {
    axios.put(`http://127.0.0.1:8080/staff/${staID}/exhibit/${exhibID}`)
  .then(res =>{
    console.log(res);
    getAllStaff(setStaff);
  }).catch((err) => console.log(err));
}

export function fireStaff (setStaff, id) {
    axios.delete(`http://127.0.0.1:8080/staff/fire/${id}`)
  .then(res =>{
    console.log(res);
    alert(`Staff fired`);
    getAllStaff(setStaff);
  }).catch((err) => console.log(err));
}