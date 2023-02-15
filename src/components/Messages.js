import React, { useState, useEffect } from "react";
import { getCurrentUserInfo } from "../AjaxHelperFunctions";

const Messages = ({ userInfo, setUserInfo }) => {

    const [ isDisplayingSent, setIsDisplayingSent ] = useState(false);

    useEffect(()=> {
        getCurrentUserInfo(setUserInfo);
    },[]) 

    return(
        <div className="user-profile">
             <h2>Messages</h2>
             <div><button name="sent" onClick={()=> setIsDisplayingSent(true)} >Sent</button> <button name="recieved" onClick={()=> setIsDisplayingSent(false)}>Recieved</button></div>
             {isDisplayingSent ? <h3>Sent</h3> : <h3>Recieved</h3>}
            {   userInfo.messages[0]._id === undefined ? 
                <h2 className="up-messages-none">Looks like you don't have any messages at this time {':('}</h2> :
                <div className="up-messages-content">
                    { !isDisplayingSent ?
                    <div className="message-section">
                    {userInfo.messages.filter((message) => message.fromUser.username !== window.localStorage.getItem('username')).map((message, index) => {
                        return <div className="post" key={index}>
                            <h3 className="up-messages-from-username">From: {message.fromUser.username}</h3>
                            <h3 className="up-messages-title">Listing: {message.post.title}</h3>
                            <p className="up-messages-content">{message.content}</p>    
                        </div>
                  })}
                  </div> :
                  <div className="message-section">
                    {userInfo.messages.filter((message) => message.fromUser.username === window.localStorage.getItem('username')).map((message, index) => {
                        return <div className="post" key={index}>
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