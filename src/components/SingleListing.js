import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleListing } from "../HelperFunctions";
import { editPostHandler, deleteListingHandler } from "../HelperFunctions";

const SingleListing = ({ singleListing, setSingleListing, userPosts, setUserPosts }) => {

    

    const [ isEditing, setIsEditing ] = useState(false);
    const [ editCancelbutton, setEditCancelButton] = useState('Edit')
    const [ listingTitle, setListingTitle ] = useState('');
    const [ listingDescription, setListingDescription ] = useState('');
    const [ listingPrice, setListingPrice ] = useState('');
    const [ listingLocation, setListingLocation ] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    const backHandler = () => {
        navigate('/');
    }

    
    const editButtonHandler = () => {
       if(isEditing){
        setEditCancelButton('Edit')
        setIsEditing(false);
       }
       else{
        setEditCancelButton('Cancel')
        setIsEditing(true)
        setListingTitle(singleListing.title);
        setListingDescription(singleListing.description);
        setListingPrice(singleListing.price);
        setListingLocation(singleListing.location);
       }
    }

    useEffect(()=>{
        getSingleListing(id, setSingleListing);
    },[])
 
    const editHandler = (event) => { 
        if(event.target.name === "title"){setListingTitle(event.target.value);}
        else if(event.target.name === "description") {setListingDescription(event.target.value)}
        else if(event.target.name === "price") {setListingPrice(event.target.value)}
        else if(event.target.name === "location") {setListingLocation(event.target.value)};
    }
    
    const submitEditHandler = (event) => {
        event.preventDefault();
        editPostHandler(singleListing._id, listingTitle, listingDescription, listingPrice, listingLocation, id, setSingleListing);
        setIsEditing(false);
        setEditCancelButton('Edit');
    }

    const deleteButtonHandler = () => {
        deleteListingHandler(singleListing._id, userPosts, setUserPosts, singleListing);
        navigate('/deleteConfirmation')
    }

    const toSendMessageHandler = () => {
        navigate(`/messages/${id}`)
    }

    return(
        
        <div className="post">
            { !isEditing ?
                <div>
                <h3 className="post-title">{singleListing.title}</h3>
                <p className="post-content">{singleListing.description}</p>
                <h6 className="post-seller">{singleListing.author.username}</h6>
                <h6 className="post-price">{singleListing.price}</h6>
                <h6 className="post-location">{singleListing.location}</h6>
                <h6 className="post-posted-at"> {singleListing.createdAt}</h6>
                </div> : 
                <form className="edit-post">
                <input className="single-listing-edit-title" name="title" onChange={editHandler} value={listingTitle} />
                <input className="single-listing-edit-content"  name="description" onChange={editHandler} value={listingDescription}/> 
                <h6 className="post-seller">{singleListing.author.username}</h6>
                 <input className="single-listing-edit-price" name="price" onChange={editHandler} value={listingPrice} />
                <input className="single-listing-edit-location" name="location" onChange={editHandler} value={listingLocation}/>
                <h6 className="post-posted-at">{singleListing.createdAt}</h6>
            </form>
            }
        { singleListing.author.username === window.localStorage.getItem('username') ?
            <div className="user-buttons-single-post">
                { isEditing ?
                <button onClick={submitEditHandler} >Submit</button> : <button onClick={deleteButtonHandler} >Delete</button>
                }
                <button onClick={editButtonHandler}>{editCancelbutton}</button>
            </div> : 
            window.localStorage.getItem('username') ? 
            <button onClick={toSendMessageHandler}>Message</button> : null
        }
        { isEditing ? null :
        <button onClick={backHandler}>Back</button>
        }
    </div>
    )
}

export default SingleListing;