import React, {useState}from "react";
import Post from "./Event-Post.jsx";
import Mp4 from "./mp4.jsx";
import Fade from '@material-ui/core/Fade';
import VizSensor from 'react-visibility-sensor';
function Music(){

let [mp3Fade, setMp3] = useState(false);
let [eventFade, setEvents] = useState(false);





return(
<div>

<div class ="flex-container" id="Music-sec">
<div class="music-overlay"></div>
  


   <VizSensor
     onChange={(isVisible) => {
       setEvents(isVisible);
       }}
   partialVisibility ={true}
           >

   <Fade in={eventFade} timeout={ {enter: 1651}} >
<div class="flex-container" id="events">

<div class="flex-container performance-container"><img class="performance-pic"src="/images/performance-2.jpg" /></div>




<div class="flex-container" id="event-list">
<p class="event-Title">Events</p>


<Post
date= "Sat, Jan 11"
artist= "Nicki Minaj"
time= "9pm - 1am"

  />

<Post
date="Fri, Mar 15"
artist="Marshmellow"
time= "10pm - 2am"
  />
<Post
date="Sat, May 19"
artist="Meek Mill"
time= "8pm - 12am"
  />
<Post

date=" Fri, Aug 10"
artist=" Billie Ellish"
time= "10pm - 3am"

  />

</div>




</div>

</Fade>

</VizSensor>







<VizSensor
  onChange={(isVisible) => {
    setMp3(isVisible);
    }}
partialVisibility ={true}
        >

<Fade in={mp3Fade} timeout={ {enter: 1651}} >
<div class="flex-container" id="music-player">

<div class="flex-container" id="music-banner">Our celebrity Djs</div>

<Mp4 number="1. " name="Popstar" artist=" DJ khaled" url="/music/popstar.mp3"/>

<Mp4  number="2. " name="Piece of your heart " artist="Meduza" url="/music/Heart.mp3"/>
<Mp4  number="3. " name="what you came for " artist="Calvin harris"  url="/music/whatyoucamefor.mp3" />
<Mp4  number="4. " name="Animals" artist="Martin Garrix"  url="/music/Animals.mp3"/>




</div>

</Fade>

</VizSensor>










</div>
</div>






)




}


export default Music;
