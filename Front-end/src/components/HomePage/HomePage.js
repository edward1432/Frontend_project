import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';

function HomePage() {

  return(
    <>
  <div class="HomePage">
    HomePage Component
  </div>
<div id= "image-container">

<div class = "row1">
  <div class = "column">
<div class="museum-box">
    <div id="museum-pic"><input type = "image" src = "https://media.timeout.com/images/105625670/750/422/image.jpg" width = "600" height = "300"  alt = "museum picture"/></div>
</div>
</div>

<div class = "column">

<div class="exhibits-box">
  <input type="image" src='https://www.memphis.edu/egypt/exhibit/galleryview.jpg' width = "600" height = "300"  />
</div>
</div>
</div>

<div class = "row2">
  <div class = "column1">
<div class= "artefacts-box">
  <input type = "image" src = 'https://le.ac.uk/-/media/uol/images/academic-departments/archaeology/outreach/a2a2021.jpg?h=403&w=527&hash=907BEE8FCF48CC3F10F668BBF355603D' width = "600" height = "300"/>
</div>
</div>

<div class = "column">

<div class="staff/assignments-box">
  <input type="image" src='https://png.pngitem.com/pimgs/s/16-169527_team-silhouettes-corporate-human-group-office-employee-silhouette.png' width = "600" height = "300"  />
</div>
</div>
</div>

</div>


</>

  )


  };

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
