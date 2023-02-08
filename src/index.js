import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Profile from "./components/Profile";

const App = () => {
    const [ userPosts, setUserPosts] = useState([]);
1

    return(
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Posts userPosts={userPosts} setUserPosts={setUserPosts} />}/>
                <Route path="/login" element={<Login />}/>
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