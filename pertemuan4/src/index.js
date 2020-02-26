import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import app from'./App';
import * as serviceWorker from './serviceWorker';
// import HelloComponent from './container/HelloComponent';
// import StatefullComponent from './container/StateFullComponent';
import Login from'./Tugas/Login';

// function HelloWord()
// {
//     return <p> Ini adalah function component</p>
// }

// const HelloWord = () =>{
//     return <p> Ini adalah arrow function</p>
// }

// class StatefullComponent extends React.Component{
//     render(){
//         return <p> ini adalah Statefull Component</p>
//     }
// }

ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
