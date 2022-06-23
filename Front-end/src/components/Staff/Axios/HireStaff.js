import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useState, useEffect} from 'react';

const HireStaff = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');

    const handleFirstNameChange = event => setFirstName(event.target.value);
    const handleLastNameChange = event => setLastName(event.target.value);
    const handleAgeChange = event => setAge(event.target.value);
    const handleAddressChange = event => setAddress(event.target.value);
    const handleSalaryChange = event => setSalary(event.target.value);

    const handleSubmit = event => {
    event.preventDefault();

    const staff = {
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "address": address,
        "salary": salary
    }

    axios.post(`http://127.0.0.1:8080/staff/hire?firstName=${staff.firstName}&lastName=${staff.lastName}&age=${staff.age}&address=${staff.address}&salary=${staff.salary}`)
    .then(res =>{
      console.log(res);
}).catch((err) => console.log(err));
}

return (
<div>
      <form onSubmit = {handleSubmit}>
        <label>
            First Name:
            <input type = "text" name = "name" onChange = {handleFirstNameChange} />
        </label>

        <label>
            Last Name:
            <input type="text" name='name' onChange={handleLastNameChange} />
        </label>

        <label>
            Age:
            <input type="text" name='name' onChange={handleAgeChange} />
        </label>

        <label>
            Address:
            <input type="text" name='name' onChange={handleAddressChange} />
        </label>

        <label>
            Salary:
            <input type="number" name='name' onChange={handleSalaryChange} />
        </label>
        
        <button type = "submit" id="button">Hire new staff member</button><br></br>
        <br></br>
      </form>
    </div>
)



}

export default HireStaff;