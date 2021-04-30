import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {  NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ButtonUI from '@material-ui/core/Button';
import DetailForm from './detail-form'
import Checkout from './checkout'
import { Link } from 'react-router-dom';



function FormPage(){

var [formMenu, setForm]= React.useState(<DetailForm switch={handleformSwitch}/>)



function handleformSwitch(section){

console.log("switch");
if (section === "detail"){

console.log("it worked");
setForm(<DetailForm switch={handleformSwitch}/>)


}
if (section === "checkout"){

setForm(<Checkout switch={handleformSwitch}/>)


}




}








return (
<div>
  <div class="navigation-form">
      <Navbar  className="navform-bg " variant="dark"   expand="lg">
        <Link to={`/`}>  <Navbar.Brand href="#home"><p class="nav-text">Aurora</p></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" class="hamburger"/>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto ">


            <Nav.Link href="#about-section" ><p class="nav-text ">About</p></Nav.Link>
            <Nav.Link href="#whatweoffer"><p class="nav-text">Features</p></Nav.Link>
            <Nav.Link href="#lineup"><p class="nav-text">Artists</p></Nav.Link>
            <Nav.Link href="#Music-sec"><p class="nav-text">Events</p></Nav.Link>
            <Nav.Link href="#gallery"><p class="nav-text">Gallery</p></Nav.Link>
            <Nav.Link href="#contact"><p class="nav-text">Contact</p></Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar>

  </div>


<div className="flex-container form-page">



{formMenu}








</div>
<div class="flex-container" id="form-newsletter">

<p class="news-titlef"> Subscribe to our newsletter</p>
<hr/>

<div class="flex-container" id="subscribe">
<input type="text" class="text-news" placeholder="Your email*"></input>
<ButtonUI variant="contained" color="secondary" className="sub-button">
        Subscribe
</ButtonUI>
</div>







</div>







</div>



)
}

export default FormPage;
