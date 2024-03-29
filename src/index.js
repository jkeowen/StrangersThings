import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Listings from "./components/Listings";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import SingleListing from "./components/SingleListing";
import SendAMessage from "./components/SendAMessage";
import DeleteConfirmation from "./components/DeleteConfirmation";

const App = () => {
    const [ userListings, setUserListings] = useState([]);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const [ isLoggedIn, setIsLoggedIn ] = useState(window.localStorage.getItem('strangeToken'));
    const [ alreadyExistsMessage, setAlreadyExistsMessage] = useState('');
    const [ singleListing, setSingleListing ] = useState({author:{}});
    const [ userInfo, setUserInfo ] = useState({posts:[{}], messages:[{post:{}, fromUser:{}}]});
    


    const apiURL = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am`;


    return(
        <div className="app">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setPassword={setPassword}/>
            <Routes>
                <Route path="/" element={<Listings apiURL={apiURL} isLoggedIn={isLoggedIn}  
                userListings={userListings} setUserListings={setUserListings} username={username} />}/>
                <Route path="/login" element={<Login apiURL={apiURL} username={username} setUsername={setUsername} 
                password={password} setPassword={setPassword} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}
                alreadyExistsMessage={alreadyExistsMessage} setAlreadyExistsMessage={setAlreadyExistsMessage}/>
                <Route path="/registration" element={<Registration apiURL={apiURL} 
                username={username} setUsername={setUsername} 
                password={password} setPassword={setPassword}
                alreadyExistsMessage={alreadyExistsMessage} setAlreadyExistsMessage={setAlreadyExistsMessage}
                setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/singleListing/:id" element={<SingleListing singleListing={singleListing}
                                                        setSingleListing={setSingleListing} userListings={userListings} setUserListings={setUserListings}/>}/>
                <Route path="/messages" element={<Messages userInfo={userInfo} setUserInfo={setUserInfo} />}/>
                <Route path="/messages/:index" element={<SendAMessage/>}/>
                <Route path="/profile" element={<Profile userInfo={userInfo} setUserInfo={setUserInfo}/>}/>
                <Route path="/deleteConfirmation" element={<DeleteConfirmation/>} />
            </Routes>
        </div>
    )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HashRouter>
              <App />
            </HashRouter>);