import React from "react";

const Header = () =>{
    return(
        <header>                
            <h4 className="login-register-header">Login/Register</h4>
            <h1 className="title-header">Stranger's Things</h1>
            <nav className="nav-bar-header">
                <span className="item-nav-bar-header">Home</span>
                <span className="item-nav-bar-header">Posts</span>
                <span className="item-nav-bar-header">Messages</span>
                <span className="item-nav-bar-header">Profile</span>
            </nav>
        </header>
    )
}

export default Header;