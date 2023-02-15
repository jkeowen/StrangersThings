import React, { useEffect } from "react";
import { getCurrentUserInfo } from "../HelperFunctions";

const Profile = ({ userInfo, setUserInfo}) => {
    
    useEffect(() => {
        getCurrentUserInfo(setUserInfo)
    }, [])

    return(
    <div className="user-profile">
        <h1>Hi, {userInfo.username}!</h1>
        <div className="up-listings">
            <h2>Listings</h2>
            {
                userInfo.posts.map((post, index) => {
                    return(
                        post.active ? 
                        <div className="post" key={index}>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-content">{post.description}</p>
                            <h6 className="post-price">{post.price}</h6>
                            <h6 className="post-location">{post.location}</h6>
                        </div>
                        :null
                    )
                })
            }
        </div>
    </div>
    )
}

export default Profile;