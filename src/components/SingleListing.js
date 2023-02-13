import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleListing } from "../HelperFunctions";

const SingleListing = () => {

    const [ singleListing, setSingeListing ] = useState({});
    const [ listingUsername, setListingUserName ] = useState('');

    const { id } = useParams();

    useEffect(()=>{
        getSingleListing(id, setSingeListing, setListingUserName)
    },[])

    return(
        <div className="post">
        <h3 className="post-title">{singleListing.title}</h3>
        <p className="post-content">{singleListing.description}</p>
        <h6 className="post-seller">{listingUsername}</h6>
        <h6 className="post-price">{singleListing.price}</h6>
        <h6 className="post-location">{singleListing.location}</h6>
        <h6 className="[post-posted-at"> {singleListing.createdAt}</h6>
        <button>Back</button>
           { listingUsername === window.localStorage.getItem('username') ?
             <button>Delete</button> : <button>Message</button>
           }
    </div>
    )
}

export default SingleListing;