import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";

export default function AuthExample(){
  return (
    <Router>
      <Navbar bg="light" expand="lg">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      {/* <Nav.Link href="#link">Link</Nav.Link> */}
      <NavDropdown title="Kategori" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>


      <div>
        <AuthButton/>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
            <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function Kategori(){
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Kategori</h2>
      <ul>
        <li>
          <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to={`${url}/wisata alam, Museum`}>Traveling</Link>
        </li>
        <li>
          <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a Kategori</h3>
        </Route>
        <Route path={`${path}/:kategoriID`}>
          <Kategori/>
        </Route>
      </Switch>
    </div>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cd){
    fakeAuth.isAuthenticated = true;
    setTimeout(cd,100);
  },
  signout(cd){
    fakeAuth.isAuthenticated = false;
    setTimeout(cd, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button 
      onClick={() =>{
        fakeAuth.signout(() => history.push("/"));
      }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest}) {
  return(
    <Route
    {...rest}
    render={({ location }) =>
      fakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage(){
  return <h3>Public</h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>;
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/"}};
  let login = () => {
    fakeAuth.authenticated(() => {
      history.replace(from);
    });
  };

  return(
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
