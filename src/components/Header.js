import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn, setUsername, setPassword }) =>{

    const logoutHandler = () => {
        window.localStorage.clear();
        setPassword('');
        setUsername('');
        setIsLoggedIn(false);
    }

    return(
        <header>     
            {
                isLoggedIn ? <Link className="login-register-header" to="/login" onClick={logoutHandler}>Logout</Link> :
                <Link className="login-register-header" to="/login">Login/Register</Link>


            }           
            <h1 className="title-header">Stranger's Things</h1>
           
            <nav className="nav-bar-header">
                <span className="item-nav-bar-header"><Link to="/">Home</Link></span>
                { window.localStorage.getItem('username') ? 
                <span><span className="item-nav-bar-header"><Link to="/messages">Messages</Link></span>
                <span className="item-nav-bar-header"><Link to="/profile">Profile</Link></span></span>
                :null}
            </nav>
           
        </header>
    )
}

export default Header;