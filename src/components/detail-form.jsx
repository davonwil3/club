import React from "react";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import {useSelector, useDispatch} from 'react-redux';
import {reserve} from './store';
function DetailForm(props){


  const dispatch = useDispatch();
  const reserveInfo = useSelector(state=> state);
  var [name, setName] = React.useState();
  var [phone, setPhone] = React.useState();
  var [email, setEmail] = React.useState();
  var [number, setNumber] = React.useState();
  var [state, setState] = React.useState();
  var [date, setDate] = React.useState();
  var [message, setMessage] = React.useState();
  var [address, setAddress] = React.useState();
  var [city, setCity] = React.useState();







  function handleFormf(event){


    console.log(state);


    var reserveObj = {

      name: name,
      phone: phone,
      email: email,
      number: number,
      state: state,
      date: date,
      message: message,
      address : address,
      city: city



    }

    dispatch(reserve(reserveObj))




  }


  return(

    <Fade in="true" timeout={ {enter: 351}} >
      <div class="flex-container" id="reservef" >
        <p class="reserve-title">Want to Reserve</p>



      <div className="flex-container reserve-1" >
        <input type="text" class="text-boxf text-leftf" placeholder="Your name*" defaultValue={reserveInfo.name}  onChange= {e => setName(e.target.value)} />
      <input type="text" class="text-boxf text-rf" placeholder="Phone*"  defaultValue={reserveInfo.phone}  onChange= {e => setPhone(e.target.value)} />
  </div>
  <div className="flex-container reserve-1">
    <input type="text" class="text-boxf text-leftf" placeholder="Email*"    defaultValue={reserveInfo.email}  onChange= {e => setEmail(e.target.value) }/>
  <input  type="text" class="text-boxf text-rf" placeholder="No. of people*"   defaultValue={reserveInfo.number}  onChange= {e => setNumber(e.target.value)} />
</div>
<div className="flex-container reserve-1">
  <input type="text" class="text-boxf text-leftf" placeholder="Address*"  defaultValue={reserveInfo.address}  onChange= {e => setAddress(e.target.value) }/>
<input type="text" class="text-boxf text-rf" placeholder="Date*" name="Date"  defaultValue={reserveInfo.date}  onChange= {e => setDate(e.target.value)} />
</div>
<div className="flex-container reserve-1">
  <input type="text" class="text-boxf text-leftf" placeholder="State"    defaultValue={reserveInfo.state}  onChange= {e => setState(e.target.value)} />
<input type="text" class="text-boxf text-rf" placeholder="City*" defaultValue={reserveInfo.city}   onChange= {e => setCity(e.target.value)} />


</div>

<textarea id="text-areaf" rows="6" cols="60" placeholder="Message*" name="Message"  defaultValue = {reserveInfo.message}   onChange= {e => setMessage(e.target.value)} />
<div className="flex-container detail-container">
  <Button variant="contained" color="secondary" className="sub-buttonfd"  onClick={() => {handleFormf();  props.switch("checkout") }} >
    Reserve
  </Button>
</div>



</div>


</Fade>



)








}


export default DetailForm;
