import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';

function HomePage() {

  return(
    <>
    <section>
    <div class = "row1">
      <div class = "column">
      <div class="museum-box">
<div> 
    <img class="museum-picture" src="https://cdn.londonandpartners.com/assets/attractions/culture/3516-640x360-great_court_large.jpg"></img>
</div>
<div class = "museum-button-container">
    <a href = "museumslanding">
    <button class="museum-button">Museums</button>
    </a>
</div>

</div>

<div class="exhibit-box">
<div>
    <img class="exhibit-picture" src="https://libraries.mit.edu/exhibits/files/cropped-gallery-web.jpg"></img>
</div>

<div class = "exhibit-button-container">
    <a href='http://localhost:3000/exhibitlanding'>
    <button class="exhibit-button">Exhibits</button>
    </a>
</div>
</div>
{/* Column */}
</div> 
{/* Row */}
</div>

<div class = "row2">
      <div class = "column2">
      <div class="artefact-box">
<div> 
    <img class="artefact-picture" src="https://le.ac.uk/-/media/uol/images/academic-departments/archaeology/outreach/a2a2021.jpg?h=403&w=527&hash=907BEE8FCF48CC3F10F668BBF355603D"></img>
</div>
<div class = "artefact-button-container">
    <a href='artefactslanding'>
    <button class="artefact-button">Artefacts</button>
    </a>
</div>

</div>

<div class="staff-box">
<div>
    <img class="staff-picture" src="https://png.pngitem.com/pimgs/s/16-169527_team-silhouettes-corporate-human-group-office-employee-silhouette.png"></img>
</div>

<div>
    <button class="staff-button">Staff/Assignments</button>
</div>
</div>
{/* Column */}
</div> 
{/* Row */}
</div>
</section>


</>

  )


  };

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
