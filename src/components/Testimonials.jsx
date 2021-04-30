import React from "react";


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Testimonial(props){


return(
<div class="flex-container" id="test">

<img src={props.src} class="test-pic" />

<p class ="test-des"> {props.test}</p>
<p class ="test-des-sig"> {props.sig}</p>


</div>


)




}


export default Testimonial;
