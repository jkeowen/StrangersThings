import React, {useState, useEffect } from "react";
import { getCurrentUserInfo } from "../AjaxHelperFunctions";

const Profile = ({ userInfo, setUserInfo}) => {
    
    const [ isActiveListings, setIsActiveListings] = useState(true);

    useEffect(() => {
        getCurrentUserInfo(setUserInfo)
    }, [])

    return(
    <div className="user-profile">
        <h1>Hi, {userInfo.username}!</h1>
        <div className="user-profile">
           { isActiveListings ? <h2>Active Listings</h2> : <h2>Inactive Listings</h2>}
            <div><button onClick={()=> setIsActiveListings(true)} >Active</button><button onClick={()=> setIsActiveListings(false)} >Inactive</button></div>
            { 
                isActiveListings ? 
                userInfo.posts.map((post, index) => {
                    return(
                        post.active ? 
                        <div className="post" key={index}>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-content">{post.description}</p>
                            <h6 className="post-price">Price: {post.price}</h6>
                            <h6 className="post-location">Location: {post.location}</h6>
                        </div>
                        :null
                    )
                }):
                userInfo.posts.map((post, index) => {
                    return(
                        post.active ? null:
                        <div className="post" key={index}>
                            <h3 className="post-title"> {post.title}</h3>
                            <p className="post-content">{post.description}</p>
                            <h6 className="post-price">Price: {post.price}</h6>
                            <h6 className="post-location">Location: {post.location}</h6>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Profile;