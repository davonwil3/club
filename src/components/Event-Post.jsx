import React from "react";


function Post(props){

  return(

    <div class="flex-container" id="event-post">

      <p class="event-Date">{props.date}</p>

    <p class= "event-info">come see {props.artist} perform</p>

  <p class= "event-time">{props.time}</p>



</div>










)



















}


export default Post;
