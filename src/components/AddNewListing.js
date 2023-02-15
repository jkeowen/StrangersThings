import React, { useState } from "react";
import { newPostHandler } from "../AjaxHelperFunctions";


const AddNewListing = ({ userPosts, setUserPosts }) => {


    const [ newListingTitle, setNewListingTitle] = useState('');
    const [ newListingDescription, setNewListingDescription ] = useState('');
    const [ newListingPrice, setNewListingPrice ] = useState('');
    const [ newListingLocation, setNewListingLocation ] = useState('');
    const [ newListingWillDeliver, setNewListingWillDeliver ] = useState(false);

    const handleNewListingChange = (event) => {
        if(event.target.placeholder === 'title') setNewListingTitle(event.target.value);
        else if(event.target.placeholder === 'description') setNewListingDescription(event.target.value);
        else if(event.target.placeholder === 'price') setNewListingPrice(event.target.value);
        else if(event.target.placeholder === 'location') setNewListingLocation(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        newPostHandler(newListingTitle, newListingDescription, 
                        newListingPrice, newListingLocation, 
                        newListingWillDeliver, userPosts, setUserPosts);
    }

    return(
        <div className="post-logged-in-stuff">
        <h2 className="post-welcome">Welcome {window.localStorage.getItem('username')}! </h2>
        <h3 className="post-add-listing-title">Create A New Listing:</h3>
        <form className="post-add-listing-form" onSubmit={handleSubmit}>
            <div className="post-add-input">
                <input placeholder="title" type="text" onChange={handleNewListingChange}/>
                <input placeholder="description" type="text" onChange={handleNewListingChange}/>
                <input placeholder="price" type="text" onChange={handleNewListingChange}/>
                <input placeholder="location" type='text' onChange={handleNewListingChange}/>
            </div>
            <button type="submit">Add New Listing!</button>
        </form>
        </div> 
    )
}


export default AddNewListing;
