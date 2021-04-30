import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import SimpleModal from "./Modal-c"
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Grow from '@material-ui/core/Grow';
import VizSensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';
import {reserve} from './store';


function Footer(){


const dispatch = useDispatch();

var [name, setName] = React.useState();
var [phone, setPhone] = React.useState("");
var [email, setEmail] = React.useState("");
var [number, setNumber] = React.useState("");
var [state, setState] = React.useState("");
var [date, setDate] = React.useState("");
var [message, setMessage] = React.useState("");




function handleForm(event){

  var reserveObj = {

    name: name,
    phone: phone,
    email: email,
    number: number,
    state: state,
    date: date,
    message: message




  }

  dispatch(reserve(reserveObj))




}








function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'black',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const classes = useStyles();

const [modalStyle] = React.useState(getModalStyle);
const [open, setOpen] = React.useState(false);
const[content, setContent]= React.useState("");

var [res, setRes] = useState(false);





const handleOpen = () => {


  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleContent = (source) => {
  setContent(source);
  handleOpen();

};



const body = (

  <Fade in={open} timeout={500}>
    <div style={modalStyle} className={classes.paper} id="modal">
      <img src={content} class="modal-img"></img>

  </div>

</Fade>
);







return(
<div>
  <div class="flex-container" id="gallery">


    <div class="grid-container">

      <div class=" flex-container image" >
        <div class="overlay"  onClick={() => handleContent("/images/neon.jpg")}></div>
      <img src="/images/neon.jpg" class ="gallery-pic" ></img>
  </div>
  <div class="flex-container image" >
    <div class="overlay"   onClick={() => handleContent("/images/DJ.jpg")}></div>
  <img src="/images/DJ.jpg" class ="gallery-pic" ></img>
</div>
<div class="flex-container image-long" >
<div class="overlay"  onClick={() => handleContent("/images/dancing.jpg")}></div>
<img src="/images/dancing.jpg" class ="gallery-pic" ></img>
</div>
<div class="flex-container image-mask" >
<div class="overlay" onClick={() => handleContent("/images/mask.jpg")}></div>
<img src="/images/mask.jpg" class ="gallery-pic " id="mask-girls" ></img>
</div>
<div class="flex-container  image-wide" >
<div class="overlay"  onClick={() => handleContent("/images/bar-2.jpg")}></div>
<img src="/images/bar-2.jpg" class ="gallery-pic"  ></img>
</div>
<div class="flex-container image-last" >
<div class="overlay"  onClick={() => handleContent("/images/dababy.jpg")}></div>
<img src="/images/dababy.jpg" class ="gallery-pic" id="dababy"  ></img>
<Modal
open={open}
onClose={handleClose}
aria-labelledby="simple-modal-title"
aria-describedby="simple-modal-description"
>
  {body}
</Modal>


</div>



</div>










</div>



<div class="flex-container" id="contact">


<div class="flex-container" id = "contact-overlay"></div>

<div class="flex-container" id = "contact-us">

<div class="flex-container" id="contact-write">
  <p class="contact-title">Contact Us</p>
<p class="contact-info">Fill out the form to attend the most anticipated events in the
  city and get your tickets for the best night party today for you
  and your friends.</p>


</div>

<div class="flex-container" id="contact-info">

<p class ="location">New York</p>
<p class="location-info">169 Water Street, New York, 11226</p>
<p class="location-info">+1 212 425 8617</p>
<p class="location-info">office@Aurora.com</p>

</div>





</div>





<VizSensor
onChange={(isVisible) => {
  setRes(isVisible);
}}
partialVisibility ={true}
>

  <Grow in={res} timeout={ {enter: 1651}} >
    <div class="flex-container" id="reserve">
      <p class="reserve-title">Want to Reserve</p>

    <form>


      <div class="flex-container" id="form-info">
        <input type="text" class="text-box text-left" placeholder="Your name*" name="Name" onChange= {e => setName(e.target.value) }></input>
      <input type="text" class="text-box text-r" placeholder="Phone*" name="Phone"  onChange= {e => setPhone(e.target.value) }></input>
    <hr/>
  <input type="text" class="text-box text-left" placeholder="Email*" name="Email"  onChange= {e => setEmail(e.target.value) } />
<input  type="text" class="text-box text-r" placeholder="No. of people*" name="Number"  onChange= {e => setNumber(e.target.value)}></input>
<hr/>
<input type="text" class="text-box text-left" placeholder="State" name="State"  onChange= {e => setState(e.target.value) }></input>
<input type="text" class="text-box text-r" placeholder="Date*" name="Date"  onChange= {e => setDate(e.target.value)}></input>
<hr/>
<textarea id="text-area" rows="6" cols="60" placeholder="Message*" name="Message"  onChange= {e => setMessage(e.target.value) }></textarea>
<div class="break"></div>

<Link to={`reserve`}>
<Button variant="contained" color="secondary" className="sub-button" id="res-button" onClick={handleForm} >
  Reserve
</Button>
</Link>
</div>




</form>




</div>

</Grow>

</VizSensor>









</div>





<div class="flex-container" id="newsletter">

<p class="news-title"> Subscribe to our newsletter</p>
<hr/>

<div class="flex-container" id="subscribe">
<input type="text" class="text-news" placeholder="Your email*"></input>
<Button variant="contained" color="secondary" className="sub-button">
Subscribe
</Button>
</div>







</div>


















</div>


)














}








export default Footer;
