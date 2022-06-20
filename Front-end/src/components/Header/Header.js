import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from "react-router-dom";
import { height, sizeWidth } from '@mui/system';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Header () {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
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
            width={15}
            height={15}
            src="https://iconarchive.com/download/i60242/zerode/plump/Search.ico"
            alt='search icon image'
          />
          <input type="text" placeholder="Search..."></input>
        </div>

        <div className='DarkModeButton'>
          <label>
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>

    </div>
  )
}

export default Header;
