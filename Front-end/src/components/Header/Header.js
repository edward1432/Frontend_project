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
  const [isClicked, setIsClicked] = useState(false)
  function darkModebutton() {
    let element = document.body;

    element.classList.toggle("dark");

    setIsClicked(isClicked => !isClicked);
  }


  return (
    <div className='navBar'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <div class = "leftBar">
          <div class = "Row">
            
            <div class = "Column">
        <div className='Home'>
          <Link to="/">Home</Link>
          </div>
        </div>
        <div class = "Column">
        <div className = "Help">
          <Link to = "/">Help!</Link>
          </div>
        </div>
        </div>
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

        <button className="dark-mode-button" onClick={darkModebutton}>{isClicked ? "Dark" : "Light"}</button>

      
      </div>

    </div>
  )
}

export default Header;
