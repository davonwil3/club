import React, {useState} from 'react';
import Stars from "./Stars";
import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button';

import Features from "./Features";
import Testimonial from "./Testimonials";

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWaveform} from '@fortawesome/pro-duotone-svg-icons'
import Fade from '@material-ui/core/Fade';
import VizSensor from 'react-visibility-sensor';
function AboutUs(){



  let [active, setActive] = useState(false);
  let [testFade, setTest] = useState(false);
  let [featFade, setFeat] = useState(false);

  return(
    <div id="about-section">



      <div class="flex-container  " id="intro-des">

        <div class="flex-container  " id="about-pic">

          <img
            className="intro-img"
            src="/images/bar.jpg"

          />


        </div>




        <div  class="flex-container" id="about-des">
          <p class="aboutUs">We know </p>
        <p class="aboutUs">how to party.</p>
      <p class="description">Aurora is New Yorks #1 nightclub. Come see what everyone is talking about
        We have some of New York's most famous Dj's that are here to show you a good time.
        Come have a drink and enjoy live music from music's hottest names.</p>
    </div>


  </div>













  <div class="flex-container" id="whatweoffer">





    <div class="about-overlay"></div>

  <div class ="flex-container" id="column">











    <VizSensor
      onChange={(isVisible) => {
        setActive(isVisible);
      }}
      partialVisibility ={true}
      >

        <Fade in={active} timeout={ {enter: 1651}} >
          <div class="flex-container" id="info">




            <div class =" flex-container entertainment">
              <FontAwesomeIcon icon = {faWaveform}  size="3x" className="info-icon"/>
            <div class="break"></div>

          <p class="advertisement">Live Entertainment</p>



        <p class="description">Aurora hosts some of the hottest talents in the music industry
          Weve had bands like imagine dragons and artist such as lil uzi. This is New york's #1 spot for live entertainment</p>

      </div>





    </div>
  </Fade>

</VizSensor>





<VizSensor
  onChange={(isVisible) => {
    setTest(isVisible);
  }}
  partialVisibility ={true}
  >

    <Fade in={testFade} timeout={ {enter: 1651}} >


      <div class="flex-container  " id="carousel-2">
        <Carousel fade={true}>
          <Carousel.Item>
            <Testimonial

              src = "/images/msnbc.png"
              test = "Young kids are now going crazy over the new night club Aurora! They have become New Yorks #1 club"

              sig = "-msnbc"

            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Testimonial

              src = "/images/profile-man.jpg"
              test = "Wow this club is amazing i had so much fun and the bar has every drink you can think of!"

              sig = "- Eric"

            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>





          <Carousel.Item>
            <Testimonial

              src = "/images/profile-woman.jpg"
              test = "Love this club I went to go see Imagine dragons perform and it was absolutely amazing!"

              sig = "- Julie"

            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>






        </Carousel>

      </div>

    </Fade>

  </VizSensor>







</div>





<VizSensor
  onChange={(isVisible) => {
    setFeat(isVisible);
  }}
  partialVisibility ={true}
  >

    <Fade in={featFade} timeout={ {enter: 1651}} >


      <div class="flex-container" id="carousel-3">
        <Carousel fade={true} interval={7000} controls={false}>
          <Carousel.Item>
            <Features
              title="Women get in free"
              source="/images/woman-club.jpg"
              description="Every Friday night women get in free , bring your friends and have a wonderful night that you will never forget"




            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>



          <Carousel.Item>
            <Features
              title="Thirsty Thursday"
              source="/images/martini.jpg"
              description="Every thursday night is Thirsty Thursday. All drinks are half off! We have every drink you can think of. Also your first drink is on us "




            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>





          <Carousel.Item>
            <Features
              title="#1 rated Nightclub"
              source="/images/dancing-club.jpg"
              description=" Aurora is the highest rated club in NY. Come hear New Yorks most famous Djs and Artist. Everyone is talking about Aurora, where else would you rather be!"




            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>










        </Carousel>

      </div>
    </Fade>

  </VizSensor>

  



















</div>








</div>








)

}

export default AboutUs;
