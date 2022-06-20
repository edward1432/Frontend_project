import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from "react-router-dom";

function Header () {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navBar'>

      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <div className='Home'>
          <Link to="/home">Home</Link>
        </div>
      </div>

      <div className='middle'>
        <div className='Title'>
          <h1>Muse360</h1>
        </div>
      </div>

      <div className='rightSide'>
        <div className='SearchBar'>
          <img
            src="https://iconarchive.com/download/i60242/zerode/plump/Search.ico"
            alt='Search icon'
          />
          <input type="text" placeholder="Search..."></input>
        </div>

        {/* <div className='DarkModeButton'>
          const [theme, setTheme] = useState("dark");

          const toggle Theme
        </div> */}
      </div>

    </div>
  )
}

export default Header;
