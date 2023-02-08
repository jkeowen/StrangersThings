import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ apiURL, username, setUsername, password, setPassword }) =>{
    
    // const [ username, setUsername ] = useState('');
    // const [ password, setPassword ] = useState(''); 
    
    // const handleChange = (event) => {
    //     if(event.target.placeholder === "username"){
    //         setUsername(event.target.value);
    //     }
    //     else{
    //         setPassword(event.target.value);
    //     }
    // }
    
    // const handleSubmit = () => {
    //     fetch(`${apiURL}/users/register`,{
    //         method: "POST",
    //         header: {
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: JSON.stringify({
    //             user:{
    //                 username: username,
    //                 password: password
    //             }
    //         })
    //     }).then(response => response.json())
    //       .then(result => {
    //         console.log(result)
    //       })
    //       .catch(console.error);
    // }

    return(
        <div className="login-page">
            <h3 className="login-title">Login to Stranger's Things</h3>
            <form className="login-form">
                <input className="login-input" type="text"  placeholder="username"/> 
                <input className="login-input" type="text"  placeholder="password"/> 
                <div className="login-buttons">
                  <button className="login-submit" >Login</button>
                  <span className="login-register-question">No Account? <Link className="login-register" to="/registration">Register</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Login;