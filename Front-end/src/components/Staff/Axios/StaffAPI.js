import axios from 'axios';

export function getAllStaff (setStaff) {
    axios.get('http://127.0.0.1:8080/staff')
    .then(res => {
      const staff = res.data;
      setStaff(staff);
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


// export function updateStaff (setStaff, staff) {
//     axios.put(`http://127.0.0.1:8080/staff/${staff.id}/exhibit/${exhibit.id}`)
//   .then(res =>{
//     console.log(res);
//     getAllStaff(setStaff);
//   }).catch((err) => console.log(err));
// }

export function fireStaff (setStaff, id) {
    axios.delete(`http://127.0.0.1:8080/staff/fire/${id}`)
  .then(res =>{
    console.log(res);
    alert(`Staff fired`);
    getAllStaff(setStaff);
  }).catch((err) => console.log(err));
}