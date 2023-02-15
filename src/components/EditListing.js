import React, { useState, useEffect } from "react";
import { editPostHandler } from "../AjaxHelperFunctions";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleListing } from "../AjaxHelperFunctions";

const EditListing = ({ singleListing, setSingleListing, listingIndex, setListingUsername }) =>{

    const [ listingTitle, setListingTitle ] = useState('');
    const [ listingDescription, setListingDescription ] = useState('');
    const [ listingPrice, setListingPrice ] = useState('');
    const [ listingLocation, setListingLocation ] = useState('');
    
    const navigate = useNavigate();
    
    const { id } = useParams();
    useEffect(()=> {
        getSingleListing(id, setSingleListing);
        setListingTitle(singleListing.title);
        setListingDescription(singleListing.description);
        setListingPrice(singleListing.price);
        setListingLocation(singleListing.location);
    }, [])
console.log(listingPrice)
console.log(singleListing.price)

    const changeEditButtonHandler = (event) => {
        event.preventDefault();
        editPostHandler(singleListing._id, listingTitle, listingDescription, listingPrice, listingLocation, listingIndex, setSingleListing, setListingUsername);
        navigate(`/singleListing/${id}`)
        // console.log(singleListing);
           
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
        <button onClick={()=> navigate(`/singleListing/${id}`)}>Cancel</button>
    </form>
    )
}

export default EditListing;