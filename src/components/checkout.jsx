import React from "react";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';




function Checkout(props){








  return(

    <Fade in="true" timeout={ {enter: 351}} >
      <div class="flex-container" id="reservef" >
        <p class="reserve-title">Shipping address</p>



      <div className="flex-container reserve-1" >
        <input type="text" class="text-boxf text-leftf" placeholder="First name" name="Name" ></input>
      <input type="text" class="text-boxf text-rf" placeholder="Last name" name="Phone"  ></input>
  </div>
  <div className="flex-container reserve-1">
    <input type="text" class="text-boxf text-leftf" placeholder="Address" name="Email"   />
  <input  type="text" class="text-boxf text-rf" placeholder="Apartment, suite, etc" name="Number"  ></input>
</div>
<div className="flex-container reserve-1">
  <input type="text" class="text-boxf text-leftf" placeholder="City" name="State"  ></input>
<input type="text" class="text-boxf text-rf" placeholder="Zipcode" name="Date"  ></input>
</div>
<div className="flex-container reserve-1">
  <input type="text" class="text-boxf text-leftf" placeholder="State" name="State"  ></input>
<input type="text" class="text-boxf text-leftf" placeholder="security code" name="State"  ></input>


</div>
<div className="flex-container reserve-1">
  <input type="text" class="text-boxf text-c" placeholder="Card number" name="Date"  ></input>



</div>

<textarea id="text-areaf" rows="6" cols="60" placeholder="Message*" name="Message"  ></textarea>
<div className="flex-container button-price">

  <div className="button-marginl">
    <Button variant="outlined" color="secondary" className="sub-buttonf" onClick={() => {props.switch("detail")}} >
      Back
    </Button>
  </div>

  <div className="button-marginr">
    <Button variant="contained" color="secondary" className="sub-buttonf" >
      Checkout
    </Button>
  </div>

</div>



</div>

</Fade>



)



}




export default Checkout;
