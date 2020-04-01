import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './images/jazz.jpg'
import image2 from './images/dangdut.png'
import image3 from './images/rock.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Link,
  useLocation,
  useHistory,
  Redirect
} from "react-router-dom";

export default function NestingExample(){
  return(
    <Router>
      <div className="App">
      {/* <AuthButton/> */}

      <nav className=" navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">


          <li className="nav-item">
            <Link to="/topics"> 
             <a className="nav-link">Lihat Daftar Musik</a>
            </Link>
          </li>
          <li className="nav-item">
              <Link to="/about">
              <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to = "/profil">
              <a className="nav-link">Profil</a>
              </Link>
            </li>

          </ul>
        </nav>

      <Redirect exact from="/" to="/profil"/>

        <Switch>
          <Route exact path="/">
              <Topics />
              <Home/>
          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <PrivateRoute path = "/profil">
            <About/>
          </PrivateRoute>

          <Route path="/topics">
              <Topics/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}



function Topics(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Daftar Kategori</h2>

         <div> 
         <Link to={`${url}/Jazz`}>
            <button type="button" className="btn btn-primary" > Jazz  </button> 
          </Link>

          <Link to={`${url}/Rock`}>
            <button type="button" className="btn btn-danger" > Rock </button>
          </Link>

          <Link to={`${url}/Dangdut`}>
             <button type="button" className="btn btn-info" > Dangdut  </button>
          </Link>
        </div>

      <Switch>
        <Route exact path={path}>
        <h3> Please Select a Kategori.</h3>
        </Route>
        <Route path={`${url}/Jazz`} component={Jazz}/>
        <Route path={`${url}/Rock`} component={Rock}/> 
        <Route path={`${url}/Dangdut`} component={Dangdut}/> 
    

      </Switch>
    </div>
  );
}
function Jazz() {  
  return(
    <div class="videos-grid">
<div class="videos-grid-video">
  <h5 id="videos-grid">
  Ardhito Pramono - bitterlove (Official Video)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lbYc76YluJQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Ardhito Pramono - cigarettes of ours (Official Music Video)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CT7nGxDFD8k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Daniel Caesar & H.E.R. - Best Part, a Visual
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hKgl5-lkT8U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Fly Me To The Moon - Frank Sinatra (Cover) oleh The Macarons Project
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ev_-gOW-gMo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Pamungkas - One Only (Lyrics Video)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dBFp0Ext0y8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Bengawan Solo (Jazz Cover) - Voyage Entertainment
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KrqQgEiLcTQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

</div>
  );
}

function Rock() {  
  return(
    <div class="videos-grid">
<div class="videos-grid-video">
  <h5 id="videos-grid">
  Scorpions - Wind Of Change (Official Music Video)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/n4RjJKxsamQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  "WHAT´S UP ?" FOUR NON BLONDES - TRADUCIDA (1992)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S5Teq2LeKCY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Bon Jovi - Always (Official Music Video)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9BMwcO6_hyA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Mr. Big - Wild World (MV)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Za9LY6Q3EuI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Michael Bolton - How Am I Supposed To Live Without You
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YFood_bTOX4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Thirty Seconds To Mars - The Kill (Bury Me)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8yvGCAvOAfM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

</div>
  );
}

function Dangdut() {  
  return(
    <div class="videos-grid">
<div class="videos-grid-video">
  <h5 id="videos-grid">
  PAMER BOJO ANYAR - JIHAN AUDY - COVER NEW PALLAPA LIVE KUDUS 2019
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QOscCXa9ppc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  MEMANDANGMU - ALL ARTIST NEW PALLAPA GBK 2018
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QsU3-8uZXyo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Happy Asmara - Tatu (Official Music Video ANEKA SAFARI) | Didi Kempot
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EiU4GrsEowg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  Happy Asmara - Dalan Liyane (Official Music Video ANEKA SAFARI)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/a9t3ATV98pw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  HAPPY ASMARA - TAK IKHLASNO (Official Music Video)
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/E3dZs0kJ4w4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

  <div class="videos-grid-video">
  <h5 id="videos-grid">
  
Gede Roso Yeni Om Adella Anniversari 1 Dekade MAKI Madiun Terbaru 2019 1
  </h5>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EPClIeAZIv8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

</div>
  );
}

function Home(){
  return (
    <div>
      <h2>INI ADALAH HALAMAN AWAL</h2>
    </div>
  );
}

function Profil(){
  return <from className="from" action="/topics">
    <div>
      <AuthButton/>

      <h2>INI ADALAH HALAMAN PROFIL </h2>
      {/* <button className="btn btn-info">Login</button> */}
    </div>
    </from>
}
function About(){
  return <div id="wrapper">
  <div id="logo" class="container">
    <h1><a href="#">ARTI DAN SEJARAH MUSIK</a></h1>
  </div>
  <div id="page" class="container">
    <div>
      <div class="entry">
        <p>Ini adalah <strong>Jenis Musik </strong>, web untuk melihat jenis musik</p>
      </div>
    </div>
  </div>
  <div id="three-column" class="container">
  <div class="tbox1">
    <div class="box-style box-style01">
      <div class="content">
        <div class="image"><img src={image1} width="324" alt="" /></div>
        <h2>Jazz</h2>
        <p>Asal usul kata ‘jazz’ merupakan salah satu kata yang paling banyak dicari dalam bahasa Inggris Amerika modern. Seperti yang dijelaskan dalam wikipedia, ‘jazz’ muncul sebagai istilah dari bahasa slang, sebuah daerah pantai barat Amerika Serikat. Penggunaan istilah ‘jazz’ pertama kali digunakan sebagai istilah musik pada tahun 1915 di Chicago.</p>
        <Link to="topics/Jazz" class="button">View</Link>
      </div>
    </div>
  </div>
  <div class="tbox2">
    <div class="box-style box-style02">
      <div class="content">
        <div class="image"><img src={image2} width="324"  alt="" /></div>
        <h2>Rock</h2>
        <p>Musik rok (bahasa Inggris: rock) atau musik cadas adalah genre musik populer yang mulai diketahui secara umum pada pertengahan tahun '50-an. Akarnya berasal dari rhythm and blues, musik country dari tahun '40 dan '50-an serta berbagai pengaruh lainnya. Selanjutnya, musik rok juga mengambil gaya dari berbagai musik lainnya, termasuk musik rakyat (folk music), jazz dan musik klasik.</p>
        <Link to="topics/Rock" class="button">View</Link>
      </div>
    </div>
  </div>
  <div class="tbox3">
    <div class="box-style box-style03">
      <div class="content">
        <div class="image"><img src={image3} width="324"  alt="" /></div>
        <h2>Dangdut</h2>
        <p>Dangdut merupakan salah satu dari genre seni musik populer tradisional Indonesia yang khususnya memiliki unsur-unsur Hindustani (India), Melayu, dan Arab. Dangdut bercirikan dentuman tabla (alat musik perkusi India) dan gendang. Dangdut juga sangat dipengaruhi dari lagu-lagu musik India klasik dan Bollywood.</p>
        <Link to="topics/Dangdut" class="button">View</Link>
      </div>
    </div>
  </div>
</div>
</div>;
}

const fakeAuth = {
  isAuthenticated : false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb,100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button 
        onClick={() => {
          fakeAuth.signout(() => history.push('/about'));
        }}
        >
        SignOut
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({children, ...rest}){
  return(
    <Route
      {...rest}
      render = {({ location }) => 
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: {from: location}
            }}
            />
        )
       }
    />
  );
}

function PublicPage() {
  return <h3> Public </h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/topics"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  }

  return (
    <div>
      <p> you must log in to view the page at {from.pathname}</p>
      <button className="btn btn-info" onClick={login}>Log In</button>
    </div>
  );
}

