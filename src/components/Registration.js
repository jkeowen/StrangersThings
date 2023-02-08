import React, { useState } from "react";

const Registration = ({ apiURL, username, setUsername, password, setPassword }) =>{
     

    const [ passwordConfirmation, setPasswordConfirmation] = useState('');
    const [ passwordMatchMessage, setPasswordMatchMessage ] = useState('');
    const [ missingInfoMessage, setMissingInfoMessage ] = useState('');
    
    const handleChange = (event) => {
        if(event.target.placeholder === "username"){
            setUsername(event.target.value);
        }
        else if(event.target.placeholder === "password"){
            setPassword(event.target.value);
        }
        else(setPasswordConfirmation(event.target.value))
    }
   
    const handleRegister = () => {
        if(password !== '' && username !== '' && password === passwordConfirmation ){
        fetch(`${apiURL}/users/register`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                user:{
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
          .then(result => {
            console.log(result)
          })
          .catch(console.error);
        }
        if(password !== passwordConfirmation){
            setPasswordMatchMessage('Passwords do not match!');
        }
        else{setPasswordMatchMessage('')}
        if(username === '' || password === '' || passwordConfirmation === ''){
            setMissingInfoMessage('Missing info, please complete registration form')
        }
        if(username !== '' && password !== '' && passwordConfirmation !== ''){
            setMissingInfoMessage('')
        }
    }

    return(
        <div className="login-page">
            <h3 className="login-title">Login to Stranger's Things</h3>
            <form className="login-form">
                <input className="login-input" type="text" value={username} onChange={handleChange} placeholder="username"/> 
                <input className="login-input" type="text" value={password} onChange={handleChange} placeholder="password"/> 
                <input className="login-input" type="text" value={passwordConfirmation} onChange={handleChange} placeholder="confirm password"/> 
                <div className="login-buttons">
                  <button className="login-submit" onClick={handleRegister}>Register</button>
                </div>
                <p>{passwordMatchMessage}</p>
                <p>{missingInfoMessage}</p>
            </form>
        </div>
    )
}

export default Registration;