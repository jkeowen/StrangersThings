import React from "react";
import { useNavigate } from "react-router-dom";


const ListingsFetcher = ({userListings, searchCategory, searchInput}) =>{

    const navigate = useNavigate();

    const moreInfoHandler = (index) => {
        navigate(`/singleListing/${index}`)
    }
    
    const toSendMessageHandler = (recListingIndex) => {
        navigate(`/messages/${recListingIndex}`);
    }

    return(
        <div>
            {
        userListings.filter((post) => {
            if(searchCategory === 'username'){
                if(searchInput === '') return post
                else if(post.author.username.toLowerCase().includes(searchInput.toLowerCase())){
                return post
            }
            }
            else{
            if(searchInput === '') return post
            else if(post[searchCategory].toLowerCase().includes(searchInput.toLowerCase())){
                return post
            }}
        }).map((post, index) => {
            return(
                <div className="post" key={index}>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-content">{post.description}</p>
                    <h6 className="post-seller">Username: {post.author.username}</h6>
                    <h6 className="post-price">Price: {post.price}</h6>
                    <h6 className="post-location">Location: {post.location}</h6>
                    <button onClick={()=> moreInfoHandler(index)} >More Info</button>
                    {
                        window.localStorage.getItem('username') ?
                        post.author.username === window.localStorage.getItem('username') ? null : 
                        <button onClick={()=>toSendMessageHandler(index)}>Message</button> : null
                    }
                </div>
            )
        })}
        </div>
    )
}

export default ListingsFetcher;