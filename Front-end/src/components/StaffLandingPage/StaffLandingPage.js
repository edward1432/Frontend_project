import React from 'react';
import PropTypes from 'prop-types';
import './StaffLandingPage.css';
import HireStaff from '../Staff/Axios/HireStaff';
import StaffTable from '../Staff/StaffTable';
function StaffLandingPage () {
  return (
    <>
      <div className = "StaffLandingPage">
        <h1>Staff</h1>
        <StaffTable />
        <HireStaff />


      </div>
    
    </>
  )
}

export default StaffLandingPage;
