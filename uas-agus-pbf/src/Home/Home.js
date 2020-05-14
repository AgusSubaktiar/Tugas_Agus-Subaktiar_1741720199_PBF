import React, { Component } from "react";
import "./Home.css";
import Note from "../Note/Note";
import NoteForm from "../NoteForm/NoteForm";
import Firebase from "../firebase/config";
import "firebase/database";
import Review from "../Review/Review"
import News from "../News/News";
import AboutComponent from "../component/AboutComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";


export default function Uas() {
    return (
      <Router>
      <div>
         <center>
          <h1 className="title">AGUS KONTOL</h1>
          </center>
 
          <ul className="navbar navbar-light bg-light">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/News">News</NavLink></li>
            <li><NavLink to="/Review">Review</NavLink></li>
          </ul>
          <div className="navbar navbar-light bg-light">
          <Route exact path="/" component={Home}/>
            <Route exact path="/Review" component={Review}/>
            <Route exact path="/About" component={AboutComponent}/>
            <Route exact path="/News" component={News}/>
          </div>
        </div>
      </Router>
    );
  }
  function Home() {
    return (
      <div >
      <div className="nine columns">
        <div className="ec_post ec_block">
          <div >
            <h3 className="bebas" >اَللَّهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدٍ</h3>
            <h4 className="bebas seven">Ya Allah berikanlah rahmat kepada junjungan kita Nabi Muhammad dan atas keluarga junjungan kita Nabi Muhammad.</h4>
            <hr />
            <hr /> 
            <div >
              <p className="six column">
                <strong> Inilah Hadits-hadits Tentang Menuntut Ilmu itu Wajib</strong>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; Imam Syafi’i pernah berkata, “Ta’allam falaisal mar’u yuuladu ‘aaliman. Belajarlah karena tidak ada orang yang terlahir dalam keadaan berilmu.
                Setiap insan lahir dalam keadaan sama, suci dari dosa dan tak berilmu. Akan tetapi, manusia sudah dibekali insting belajar, dari mulai belajar berjalan, berbicara, mengetahui nama-nama benda, hingga mengenal tuhan.
                Maka, belajar adalah sifat alamiah manusia yang perlu terus diasah dan dikembangkan.
                Nah, beberapa hadis ini bisa bikin kamu makin semangat belajar: 
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;Orang yang belajar dimudahkan jalan menuju surga
                Allah Swt akan memudahkan jalan menuju surga untuk hambanya yang senantiasa mencari ilmu. Sebagaimana potongan hadis riwayat Abu Hurairah Ra, Rasulullah Saw bersabda:
                مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ
                "Barang siapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan jalan ke surga baginya." (HR. Muslim)
                Abdurrauf Al-Munawi dalam Faidhul Qadir mengatakan, orang yang dimudahkan menuju surga adalah mereka yang mencari ilmu karena ikhlas mengharap ridha Allah Swt, bukan karena riya.
                Melalui ilmu yang dimilikinya, Allah akan memudahkannya melakukan amal saleh. Sedangkan amal saleh adalah wasilah bagi seorang hamba dimasukkan ke surga.
                <br></br>
              </p>
              <div className="youtube">
                <div className="flex-video widescreen ">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/aN0ZnoRg_IY" frameborder="0" allowfullscreen></iframe>
                </div>
                <p>
                  <span className=" label orange">&nbsp;&nbsp;&nbsp;&nbsp; SABYAN - AISYAH ISTRI RASULULLAH | COVER</span>
                  <hr></hr>
                  <em>&nbsp;&nbsp;&nbsp;&nbsp;Semua makhluk di bumi mendoakan penuntut ilmu
                  Tak hanya orang tua yang selalu mendoakan anaknya, seluruh makhluk yang ada di bumi ini bahkan ikut mendoakan orang yang giat mencari ilmu. Sebagaimana sabda Rasulullah Saw:
                 وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا رِضًا لِطَالِبِ الْعِلْمِ، وَإِنَّ الْعَالِمَ لَيَسْتَغْفِرُ لَهُ مَنْ فِي السَّمَوَاتِ، وَمَنْ فِي الْأَرْضِ، وَالْحِيتَانُ فِي جَوْفِ الْمَاءِ
                  "Sungguh, para malaikat merendahkan sayapnya sebagai keridaan kepada penuntut ilmu. Orang yang berilmu akan dimintai ampunan oleh penduduk langit dan bumi, bahkan hingga ikan yang ada di dasar laut."(HR. Abu Daud, Tirmidzi dan Ibnu Majah) </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  