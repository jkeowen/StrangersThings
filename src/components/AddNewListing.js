import React, { useState } from "react";
import { newPostHandler } from "../AjaxHelperFunctions";


const AddNewListing = ({ userListings, setUserListings }) => {


    const [ newListingTitle, setNewListingTitle] = useState('');
    const [ newListingDescription, setNewListingDescription ] = useState('');
    const [ newListingPrice, setNewListingPrice ] = useState('');
    const [ newListingLocation, setNewListingLocation ] = useState('');
    const [ changeMessage, setChangeMessage ] = useState('');

    const handleNewListingChange = (event) => {
        if(event.target.placeholder === 'title') setNewListingTitle(event.target.value);
        else if(event.target.placeholder === 'description') setNewListingDescription(event.target.value);
        else if(event.target.placeholder === 'price') setNewListingPrice(event.target.value);
        else if(event.target.placeholder === 'location') setNewListingLocation(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newListingTitle !== '' && newListingPrice !== '' && newListingLocation !== '' && newListingDescription !== ''){
        newPostHandler(newListingTitle, newListingDescription, 
                        newListingPrice, newListingLocation, 
                         userListings, setUserListings);
        setNewListingTitle('');
        setNewListingDescription('');
        setNewListingLocation('');
        setNewListingPrice('');
        setChangeMessage('New Listing Added!');
        }
        else{
            setChangeMessage('Not added! Please completely fill out form to add new listing');
        }
    }

    return(
        <div className="post-logged-in-stuff">
        <h2 className="post-welcome">Welcome {window.localStorage.getItem('username')}! </h2>
        <h3 className="post-add-listing-title">Create A New Listing:</h3>
        <form className="post-add-listing-form" onSubmit={handleSubmit}>
            <div className="post-add-input">
                <div className="add-inputs">
                    <input placeholder="title" type="text" value={newListingTitle} onChange={handleNewListingChange}/>
                    <input placeholder="price" type="text" value={newListingPrice} onChange={handleNewListingChange}/>
                    <input placeholder="location" type='text' value={newListingLocation} onChange={handleNewListingChange}/>
                </div>
                <textarea name="description" rows='5' placeholder="description" value={newListingDescription} onChange={handleNewListingChange} ></textarea>

            </div>
            <button type="submit">Add New Listing!</button>
        </form>
        <h4>{changeMessage}</h4>
        </div> 
    )
}


export default AddNewListing;
