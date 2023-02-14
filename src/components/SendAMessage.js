import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleListing, sendMessageHandler } from "../HelperFunctions";

const SendAMessage = () =>{

   const [ messageRecipientInfo, setMessageRecipientInfo ] = useState({author:{}});
   const [ messageContent, setMessageContent ] = useState('');
   const [ isMessageSent, setIsMessageSent ] = useState(false);

    
    const { index } = useParams();


    useEffect(()=> {
        getSingleListing(index, setMessageRecipientInfo)
    },[])    

    const messageChangeHandler = (event) =>{
        setMessageContent(event.target.value);
        
    }

    const sendButtonHandler = () => {
        sendMessageHandler(messageRecipientInfo._id, messageContent);
        setIsMessageSent(true)
    }
    

    return(
        <div className="overal-container">
            {!isMessageSent ?
        <div className="single-message-container">
            <h4>To: {messageRecipientInfo.author.username}</h4>
            <h4>From: {window.localStorage.getItem('username')}</h4>
            <h4>Listing: {messageRecipientInfo.title}</h4>
            <form>
                <input type="text" placeholder="Type Message here" onChange={messageChangeHandler}/>
                <button type="submit" onClick={sendButtonHandler}>Send</button>
            </form>
        </div> : <h2>Message Sent!</h2>} 
        </div>
    )
}

export default SendAMessage;