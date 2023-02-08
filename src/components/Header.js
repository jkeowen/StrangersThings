import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header>                
            <Link className="login-register-header" to="/login">Login/Register</Link>
            <h1 className="title-header">Stranger's Things</h1>
            <nav className="nav-bar-header">
                <Link className="item-nav-bar-header" to="/">Home</Link>
                {/* <span className="item-nav-bar-header">Posts</span> */}
                <Link className="item-nav-bar-header" to="/messages">Messages</Link>
                <Link className="item-nav-bar-header" to="/profile">Profile</Link>
            </nav>
        </header>
    )
}

export default Header;