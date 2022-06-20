import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from "react-router-dom";
import { boxSizing, height, sizeWidth } from '@mui/system';



function Header () {

  const [openLinks, setOpenLinks] = useState(false);

  // const toggleNavBar = () => {
  //   setOpenLinks(!openLinks);
  // };


  return (
    <div className='navBar'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <div className='Home'>
          <Link to="/">Home</Link>
        </div>
      </div>


      <div className='middle'>
        <div className='Title'>
          <h1><u>Muse360</u></h1>
        </div>
      </div>


      <div className='rightSide'>
        <div className='SearchBar'>
          <input type="text" placeholder="Search..."></input>
          <button type="submit"><i class="fa fa-search"></i></button>
        </div>

        {/* DARK MODE BUTTON */}

        {/* <div className='DarkModeButton'>
          <ThemeContext.Consumer>
            {({changeTheme}) => (
              <DarkModeToggle
                color="link"
                onChange={() => {
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode}

            )}
          </ThemeContext.Consumer> */}
      </div>

    </div>
  )
}

export default Header;
