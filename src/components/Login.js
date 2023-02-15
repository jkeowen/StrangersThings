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

    const submitHandler = () =>{
        if(username !== '' && password !== ''){
            if(!isLoggedIn){
            loginHandler(username, password, setIsLoggedIn, navigate, setIssueMessage);
            }
            else setIssueMessage('You are already logged in!');
        }
        else setIssueMessage('Please enter a valid username and password to login.');

        if(username === '' && password !== '') setIssueMessage('You are missing a username.')
        if(username !== ''&& password === '') setIssueMessage('You are missing a password.')
    }

    const handleChange = (event) => {
        if(event.target.placeholder === "username"){
            setUsername(event.target.value);
        }
        else setPassword(event.target.value);
    }

    const onEnter = (event) => {
        if(event.key === "Enter"){
            submitHandler();
        }
        else return
    }

    const clickHandler = (event) => {
        event.preventDefault();
        submitHandler();
    }

    const passwordViewHandler = (event) =>{
        event.preventDefault();
        if(showPassword === 'password') setShowPassword('text');
        else setShowPassword('password');

    }

    return(
        <div className="login-page">
            <h3 className="login-title">Login to Stranger's Things</h3>
            <form className="login-form">
                <input className="login-input" type="text"  placeholder="username" onChange={handleChange} onKeyDown={onEnter}/> 
                <div className="login-password"><input className="login-input" type={showPassword}  placeholder="password" onKeyDown={onEnter} onChange={handleChange} 
                /> <span className="login-show-password" onClick={passwordViewHandler} >Show</span></div> 
                <div className="login-buttons">
                  <button className="login-submit" type="submit" onClick={clickHandler} >Login</button>
                  <span className="login-register-question">No Account? <Link className="login-register" to="/registration">Register</Link></span>
                </div>
                <div className="already-exists">{issueMessage}</div>
            </form>
        </div>
    )
}

export default Login;