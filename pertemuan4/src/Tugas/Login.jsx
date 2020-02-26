import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <body>
            <center><h1>Form Login</h1></center>
      
                <div className="kotak_login">
                    <h2>Tugas Pertemuan Keempat</h2>
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter username" name="uname"/>
                    <label><b>Password</b></label>
                    <input type="text" placeholder="Masukan Password Anda" name="psw"/>

                    <center><button type="submit" className="loginbtn">Login</button></center>
                    <br></br>
                    <center><input type="checkbox" defaultChecked/> Remember me</center>
                    <br></br>
                    <center><button type="button" className="cancelbtn">Cancel</button></center>
                </div>
                </body>

    );
}
export default Login;