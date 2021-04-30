import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';


function Mp4(props){
  var audio1 = new Audio (props.url);



function playAudio(){

audio1.play();



}


function pauseAudio(){


audio1.pause();


}



return(

<div class="flex-container" id="mp4">

<div class="flex-container" id="mp4-des">

<p class ="mp4-name"> {props.number}{props.name} <br/>{props.artist}</p>





</div>

<div class="flex-container" id="mp4-icons">







<FontAwesomeIcon icon={faPlay} size="1x" className="play-icon" onClick={playAudio}/>
<FontAwesomeIcon icon={faPause} size="1x" className="pause-icon" onClick={pauseAudio}/>





</div>








</div>















)







}



export default Mp4;
