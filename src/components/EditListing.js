import React, { useState} from "react";
import { editPostHandler } from "../HelperFunctions";
import { useNavigate } from "react-router-dom";

const EditListing = ({ singleListing, setSingleListing, listingIndex, setListingUsername }) =>{

    const [ listingTitle, setListingTitle ] = useState(singleListing.title);
    const [ listingDescription, setListingDescription ] = useState(singleListing.description);
    const [ listingPrice, setListingPrice ] = useState(singleListing.price);
    const [ listingLocation, setListingLocation ] = useState(singleListing.location);

    const navigate = useNavigate();
    

    const changeEditButtonHandler = () => {
        editPostHandler(singleListing._id, listingTitle, listingDescription, listingPrice, listingLocation, listingIndex, setSingleListing, setListingUsername);
        navigate(`/singleListing/${singleListing._id}`)
        // navigate('/')
           
    }

    const editHandler = (event) => { 
        if(event.target.name === "title"){setListingTitle(event.target.value);}
        else if(event.target.name === "description") {setListingDescription(event.target.value)}
        else if(event.target.name === "price") {setListingPrice(event.target.value)}
        else if(event.target.name === "location") {setListingLocation(event.target.value)};
    }

    return(
    <form className="edit-post">
        <input className="single-listing-edit-title" name="title" onChange={editHandler} value={listingTitle} />
        <input className="single-listing-edit-content"  name="description" onChange={editHandler} value={listingDescription}/> 
        <h6 className="post-seller">{singleListing.author.username}</h6>
         <input className="single-listing-edit-price" name="price" onChange={editHandler} value={listingPrice} />
        <input className="single-listing-edit-location" name="location" onChange={editHandler} value={listingLocation}/>
        <h6 className="post-posted-at">{singleListing.createdAt}</h6>
        <button onClick={changeEditButtonHandler}>Edit</button>
    </form>
    )
}

export default EditListing;