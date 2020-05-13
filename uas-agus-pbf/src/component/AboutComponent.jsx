import React, { Component } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import '../App.css';

const AboutComponent = () => {
  return (
      <center>
      <div className="App">
        <center>
          <center>
         
              <Card.Body>
                  <Card.Title><i><b>About Us</b></i></Card.Title>
                  <img src="about.jpg" alt="" />
    <br/>
    <br></br>
    <p class="card-text" > Hei Beauties ?

    Here at Female Daily, we think beauty is the HAPPINESS you feel every day from the little things. We love mornings with a great cup of coffee in the pantry, sharing nail polish shades after lunch, and having open discussions about our brand, vision, goals and the remarkable ways to achieve them.

FEMALE DAILY is all about empowering women through the happiness from small acts of joy, like opening a new tube of lipstick. FEMALE DAILY is about YOU. We want to bring out the inner beauty already engrained in women of all sizes, shapes, and ages, and help you share that with the world.

Also we are proud to tell you that Female Daily is now part of Detik Network under Transmedia Group. </p>
               
              </Card.Body>
              <div class="row mt-5">
               </div>     
        </center>
        </center>
      </div>
      </center>
  )
}
export default AboutComponent;