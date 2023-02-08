import React from "react";

const Login = () =>{
    
    return(
        <div className="login-page">
            <h3 className="login-title">Login to Stranger's Things</h3>
            <form className="login-form">
                <input className="login-input" type="text" placeholder="username"/>
                <input className="login-input" type="text" placeholder="password"/>
                <div className="login-buttons">
                  <button className="login-submit">Login</button>
                  <span className="login-register-question">No Account? <button className="login-register">Register</button></span>
                </div>
            </form>
        </div>
    )
}

export default Login;