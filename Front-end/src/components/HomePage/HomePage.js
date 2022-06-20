import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import { HomePageButtonList } from '../../helpers/HomePageButtonList';
import MuseumButtonHomePage from '../MuseumButtonHomePage/MuseumButtonHomePage';

function HomePage() {

  return(
    <>
      <div className = "buttonMenu">
        <div className = "buttonList">
          {HomePageButtonList.map((buttonItem, key) => {
            return(
              <MuseumButtonHomePage
              key = {key}
              image = {buttonItem.image}
              name = {buttonItem.name}
              />
            );
          })}
        </div>
      </div>
    </>

  )
        };

export default HomePage;