import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {  NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ButtonUI from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
function Heading(){

return(

  <header class="v-header flex-container" maxwidth="sm" id="home">


<div class="navigation">
    <Navbar  className="nav-bg " variant="dark"   expand="lg">
      <Navbar.Brand href="#home"><p class="nav-text">Aurora</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" class="hamburger"/>
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto ">


          <Nav.Link href="#about-section" ><p class="nav-text ">About</p></Nav.Link>
          <Nav.Link href="#whatweoffer"><p class="nav-text">Features</p></Nav.Link>
          <Nav.Link href="#lineup"><p class="nav-text">Artists</p></Nav.Link>
          <Nav.Link href="#Music-sec"><p class="nav-text">Events</p></Nav.Link>
          <Nav.Link href="#gallery"><p class="nav-text">Gallery</p></Nav.Link>
          <Nav.Link href="#contact"><p class="nav-text">Contact</p></Nav.Link>
        <Link to={`reserve`}><p class="nav-textR">Reserve</p></Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

</div>















  <div class="fullscreen-video-wrap">


  <video playsinline src="/videos/herovideo.mp4" autoPlay="true" loop="true" muted></video>
  </div>
<div class = "flex-container header-overlay">

  <div class = "header-content flex-container">

  <p class="title">Aurora <br/> <em className="title-fun">lets have a good time</em></p>

<Link to={`reserve`}>
    <ButtonUI variant="contained" color="secondary" className="sub-button" id="header-btn" >
          Reserve
    </ButtonUI>
</Link>
  </div>


</div>




  </header>



)















}

export default Heading;
