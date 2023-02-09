import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Messages from "./components/Messages";
import Profile from "./components/Profile";

const App = () => {
    const [ userPosts, setUserPosts] = useState([]);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const [ isLoggedIn, setIsLoggedIn ] = useState(window.localStorage.getItem('strangeToken'));

    const apiURL = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am`;


    return(
        <div className="app">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path="/" element={<Posts apiURL={apiURL} isLoggedIn={isLoggedIn}  
                userPosts={userPosts} setUserPosts={setUserPosts} />}/>
                <Route path="/login" element={<Login apiURL={apiURL} username={username} setUsername={setUsername} 
                password={password} setPassword={setPassword} />}/>
                <Route path="/registration" element={<Registration apiURL={apiURL} 
                username={username} setUsername={setUsername} 
                password={password} setPassword={setPassword}
                setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HashRouter>
              <App />
            </HashRouter>);