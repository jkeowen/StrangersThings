import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../HelperFunctions";

const Login = ({ username, 
                 setUsername,   
                 password, 
                 setPassword, 
                 setIsLoggedIn,
                 isLoggedIn }) =>{
    
    const [ issueMessage, setIssueMessage ] = useState('');
    const [ showPassword, setShowPassword] = useState('password');
    const navigate = useNavigate();

    const handleChange = (event) => {
        if(event.target.placeholder === "username"){
            setUsername(event.target.value);
        }
        else setPassword(event.target.value);
    }

    const clickHandler = () =>{
        if(username !== '' && password !== ''){
            if(!isLoggedIn){
            loginHandler(username, password, setIsLoggedIn, navigate, setIssueMessage);
            }
            else setIssueMessage('You are already logged in!')
        }
      
    }

    const passwordViewHandler = () =>{
        if(showPassword === 'password') setShowPassword('text');
        else setShowPassword('password');

    }

    return(
        <div className="login-page">
            <h3 className="login-title">Login to Stranger's Things</h3>
            <form className="login-form">
                <input className="login-input" type="text"  placeholder="username" onChange={handleChange}/> 
                <div className="login-password"><input className="login-input" type={showPassword}  placeholder="password" onChange={handleChange} 
                /> <button onClick={passwordViewHandler} >Show</button></div> 
                <div className="login-buttons">
                  <button className="login-submit" onClick={clickHandler} >Login</button>
                  <span className="login-register-question">No Account? <Link className="login-register" to="/registration">Register</Link></span>
                  <div className="already-exists">{issueMessage}</div>
                </div>
            </form>
        </div>
    )
}

export default Login;