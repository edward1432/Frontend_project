import React from 'react';
import PropTypes from 'prop-types';
import './StaffLandingPage.css';
import StaffList from '../Staff/StaffList';
import HireStaff from '../Staff/Axios/HireStaff';
function StaffLandingPage () {
  return (
    <>
      <div className = "StaffLandingPage">
        <StaffList />
        <HireStaff />


      </div>
    
    </>
  )
}

export default StaffLandingPage;
