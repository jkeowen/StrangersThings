import React, { useState, useEffect } from "react";
import { newPostHandler, deleteListingHandler } from "../HelperFunctions";
import { useNavigate } from "react-router-dom";


const Posts = ({apiURL, 
                userPosts, 
                setUserPosts,
                isLoggedIn,
                setListingIndex,
                }) => {

const [ newListingTitle, setNewListingTitle] = useState('');
const [ newListingDescription, setNewListingDescription ] = useState('');
const [ newListingPrice, setNewListingPrice ] = useState('');
const [ newListingLocation, setNewListingLocation ] = useState('');
const [ newListingWillDeliver, setNewListingWillDeliver ] = useState(false);
                    
const navigate = useNavigate();

useEffect(()=>{
   const getPosts = () => {
        fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(result => {
            setUserPosts(result.data.posts)
        })
    .catch(console.error);
}
    getPosts()
}, []);

    const handleNewListingChange = (event) => {
        if(event.target.placeholder === 'title') setNewListingTitle(event.target.value);
        else if(event.target.placeholder === 'description') setNewListingDescription(event.target.value);
        else if(event.target.placeholder === 'price') setNewListingPrice(event.target.value);
        else if(event.target.placeholder === 'location') setNewListingLocation(event.target.value);
        // else setNewListingWillDeliver(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        newPostHandler(newListingTitle, newListingDescription, 
                        newListingPrice, newListingLocation, 
                        newListingWillDeliver, userPosts, setUserPosts);
    }
       
    const moreInfoHandler = (listingId, index) => {
        setListingIndex(index);
        navigate(`/singleListing/${listingId}`)
    }
 
    return(

        <div className="post-page">
            {
                isLoggedIn ? 
                    <div className="post-logged-in-stuff">
                    <h2 className="post-welcome">Welcome {window.localStorage.getItem('username')}! </h2>
                    <h3 className="post-add-listing-title">Create A New Listing:</h3>
                    <form className="post-add-listing-form" onSubmit={handleSubmit}>
                        <input placeholder="title" type="text" onChange={handleNewListingChange}/>
                        <input placeholder="description" type="text" onChange={handleNewListingChange}/>
                        <input placeholder="price" type="text" onChange={handleNewListingChange}/>
                        <input placeholder="location" type='text' onChange={handleNewListingChange}/>
                        {/* <input placeholder="will deliver?" type="text" onChange={handleNewListingChange}/> */}
                        <button type="submit">Add New Listing!</button>
                    </form>
                    </div> 
                    : null
            }
        {
        userPosts.map((post, index) => {
            return(
                <div className="post" key={index}>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-content">{post.description}</p>
                    <h6 className="post-seller">{post.author.username}</h6>
                    <h6 className="post-price">{post.price}</h6>
                    <h6 className="post-location">{post.location}</h6>
                    <button onClick={()=> moreInfoHandler(post._id, index)} >More Info</button>
                </div>
            )
        })}
        </div>
            
        
    )

}



export default Posts;