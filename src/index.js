import React, { useState} from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import SingleListing from "./components/SingleListing";
import EditListing from "./components/EditListing";
import SendAMessage from "./components/SendAMessage";
import DeleteConfirmation from "./components/DeleteConfirmation";

const App = () => {
    const [ userPosts, setUserPosts] = useState([]);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const [ isLoggedIn, setIsLoggedIn ] = useState(window.localStorage.getItem('strangeToken'));
    const [ alreadyExistsMessage, setAlreadyExistsMessage] = useState('');
    const [ listingIndex, setListingIndex ] = useState('');
    const [ singleListing, setSingleListing ] = useState({title:'', author:{}});
    const [ listingUsername, setListingUserName ] = useState('');
    const [ userInfo, setUserInfo ] = useState({posts:[{}], messages:[{post:{}, fromUser:{}}]});
    


    const apiURL = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am`;


    return(
        <div className="app">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path="/" element={<Posts apiURL={apiURL} isLoggedIn={isLoggedIn}  
                userPosts={userPosts} setUserPosts={setUserPosts} username={username} setListingIndex={setListingIndex} />}/>
                <Route path="/login" element={<Login apiURL={apiURL} username={username} setUsername={setUsername} 
                password={password} setPassword={setPassword} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}
                alreadyExistsMessage={alreadyExistsMessage} setAlreadyExistsMessage={setAlreadyExistsMessage}/>
                <Route path="/registration" element={<Registration apiURL={apiURL} 
                username={username} setUsername={setUsername} 
                password={password} setPassword={setPassword}
                alreadyExistsMessage={alreadyExistsMessage} setAlreadyExistsMessage={setAlreadyExistsMessage}
                setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path="/singleListing/:id" element={<SingleListing listingIndex={listingIndex} singleListing={singleListing}
                                                        setSingleListing={setSingleListing} userPosts={userPosts} setUserPosts={setUserPosts}/>}/>
                <Route path="/editListing/:id" element={<EditListing singleListing={singleListing} setSingleListing={setSingleListing}/>}
                                listingUsername={listingUsername} setListingUserName={setListingUserName} listingIndex={listingIndex}/>
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