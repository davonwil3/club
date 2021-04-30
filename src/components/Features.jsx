import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWaveform} from '@fortawesome/pro-duotone-svg-icons';
function Features(props){


  return(

    <div class="flex-container" id="features-info">


      <div class="flex-container" id="features-des">

        <FontAwesomeIcon icon = {faWaveform}  size="3x" className="features-icon" />
      <p id="advertisementID">{props.title}</p>

    <p class="f-description">{props.description}</p>



</div>
<div class="flex-container" id="image-padding">
  <img src={props.source} class ="features-pic" ></img>

</div>

</div>






)




}


export default Features;
