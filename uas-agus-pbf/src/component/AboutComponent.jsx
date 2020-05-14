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
    <p class="card-text" > Semua makhluk di bumi mendoakan penuntut ilmu
                  Tak hanya orang tua yang selalu mendoakan anaknya, seluruh makhluk yang ada di bumi ini bahkan ikut mendoakan orang yang giat mencari ilmu. Sebagaimana sabda Rasulullah Saw:
                 وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا رِضًا لِطَالِبِ الْعِلْمِ، وَإِنَّ الْعَالِمَ لَيَسْتَغْفِرُ لَهُ مَنْ فِي السَّمَوَاتِ، وَمَنْ فِي الْأَرْضِ، وَالْحِيتَانُ فِي جَوْفِ الْمَاءِ
                  "Sungguh, para malaikat merendahkan sayapnya sebagai keridaan kepada penuntut ilmu. Orang yang berilmu akan dimintai ampunan oleh penduduk langit dan bumi, bahkan hingga ikan yang ada di dasar laut."(HR. Abu Daud, Tirmidzi dan Ibnu Majah) </p>
               
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