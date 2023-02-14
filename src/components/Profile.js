import React, { useState, useEffect } from "react";
import { getCurrentUserInfo } from "../HelperFunctions";

const Profile = () => {
    
    const [ userInfo, setUserInfo ] = useState({posts:[{}], messages:[{post:{}, fromUser:{}}]});
    useEffect(() => {
        getCurrentUserInfo(setUserInfo)
    }, [])

    console.log(userInfo.messages.length)
    console.log(userInfo.messages[0].content)
    return(
    <div className="user-profile">
        <h1>Hi, {userInfo.username}!</h1>
        <div className="up-listings">
            {
                userInfo.posts.map((post, index) => {
                    return(
                        post.active ? 
                        <div className="post" key={index}>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-content">{post.description}</p>
                            <h6 className="post-price">{post.price}</h6>
                            <h6 className="post-location">{post.location}</h6>
                            {/* <button onClick={()=> moreInfoHandler(post._id, index)} >More Info</button> */}
                        </div>
                        :null
                    )
                })
            }
        </div>
        <div className="up-messages-box">
            <h2>Messages</h2>
            {   userInfo.messages[0]._id === undefined ? 
                <h2 className="up-messages-none">Looks like you don't have any messages at this time {':('}</h2> :
                <div className="up-messages-content">
                    {userInfo.messages.map((message, index) => {
                        return <div className="up-messages" key={index}>
                            <h3>test</h3>
                            <h3 className="up-messages-from-username">From:{message.fromUser.username}</h3>
                            <h3 className="up-messages-title">Listing:{message.post.title}</h3>
                            <p className="up-messages-content">{message.content}</p>
                            
                        </div>
                  })}
              </div>
         } 
        </div>
    </div>
    )
}

export default Profile;