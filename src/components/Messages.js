import React, { useState, useEffect } from "react";
import { getCurrentUserInfo } from "../AjaxHelperFunctions";

const Messages = ({ userInfo, setUserInfo }) => {

    const [ isDisplayingSent, setIsDisplayingSent ] = useState(false);

    useEffect(()=> {
        getCurrentUserInfo(setUserInfo);
    },[]) 

    const displayHandler = (event) => {
        if(event.target.name === 'sent'){
            setIsDisplayingSent(true)
        }
        else{setIsDisplayingSent(false)}
    }

    return(
        <div className="messages-container">
             <h2>Messages</h2>
             <button name="sent" onClick={displayHandler} >Sent</button> <button name="recieved" onClick={displayHandler}>Recieved</button>
            {   userInfo.messages[0]._id === undefined ? 
                <h2 className="up-messages-none">Looks like you don't have any messages at this time {':('}</h2> :
                <div className="up-messages-content">
                    { !isDisplayingSent ?
                    <div className="message-section">
                    <h3>Recieved</h3>
                    {userInfo.messages.filter((message) => message.fromUser.username !== window.localStorage.getItem('username')).map((message, index) => {
                        return <div className="up-messages" key={index}>
                            <h3 className="up-messages-from-username">From: {message.fromUser.username}</h3>
                            <h3 className="up-messages-title">Listing: {message.post.title}</h3>
                            <p className="up-messages-content">{message.content}</p>    
                        </div>
                  })}
                  </div> :
                  <div className="message-section">
                    <h3>Sent</h3>
                    {userInfo.messages.filter((message) => message.fromUser.username === window.localStorage.getItem('username')).map((message, index) => {
                        return <div className="up-messages" key={index}>
                            <h3 className="up-messages-from-username">From: {message.fromUser.username}</h3>
                            <h3 className="up-messages-title">Listing: {message.post.title}</h3>
                            <p className="up-messages-content">{message.content}</p>
                            
                        </div>
                  })}
                  </div>
            }
              </div>
         } 
        </div>
    )
}

export default Messages;