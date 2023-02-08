import React from "react";
import { Form } from "react-router-dom";

const Login = () =>{
    
    return(
        <form>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button>Login</button>
        </form>
    )
}

export default Login;