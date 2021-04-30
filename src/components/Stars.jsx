import React, {useState}from "react";
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWaveform} from '@fortawesome/pro-duotone-svg-icons'
import Fade from '@material-ui/core/Fade';
import VizSensor from 'react-visibility-sensor';

function Stars(){

let [starsFade, setStars] = useState(false);






return(
<div>
<div class="flex-container " id="lineup">
<FontAwesomeIcon icon = {faWaveform}  size="3x" className="lineup-icon"/>
<div class="break"></div>
<p class="Star-title">Come see these stars</p>

<hr></hr>

  <VizSensor
    onChange={(isVisible) => {
      setStars(isVisible);
      }}
  partialVisibility ={true}
          >

  <Fade in={starsFade} timeout={ {enter: 1651}} >

<div class="flex-container " id="attractions">

  <Card className="card">
        <CardHeader
          className="card-header"
          title="Nicki Minaj"
                 subheader="January 11, 2020"
        />

        <CardMedia
                className="card-pic"
                image="/images/nicki.jpeg"

              />


    </Card>







    <Card className="card">
          <CardHeader
            className="card-header"
            title="Marshmellow"
                   subheader="March 15, 2020"
          />

          <CardMedia
                  className="card-pic"
                  image="/images/marsh.jpeg"

                />


      </Card>







      <Card className="card">
            <CardHeader
              className="card-header"
              title="Meek-Mill"
                     subheader="May 19, 2020"
            />

            <CardMedia
                    className="card-pic"
                    image="/images/meek-mill.jpg"

                  />


        </Card>






        <Card className="card">
              <CardHeader
                className="card-header"
                title="Billie Ellish"
                       subheader="August 10, 2020"
              />

              <CardMedia
                      className="card-pic"
                      image="/images/Billie.jpg"
                      title="Paella dish"
                    />


          </Card>






</div>

</Fade>

</VizSensor>




</div>

















</div>


)




}


export default Stars;
