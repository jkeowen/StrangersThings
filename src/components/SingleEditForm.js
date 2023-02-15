import React from "react";


const SingleEditForm = ({ singleListing, listingTitle, listingDescription, listingPrice, listingLocation, editHandler}) => {

    return(
        <form className="edit-post">
            <input className="single-listing-edit-title" name="title" onChange={editHandler} value={listingTitle} />
            <input className="single-listing-edit-content"  name="description" onChange={editHandler} value={listingDescription}/> 
            <h6 className="post-seller">{singleListing.author.username}</h6>
            <input className="single-listing-edit-price" name="price" onChange={editHandler} value={listingPrice} />
            <input className="single-listing-edit-location" name="location" onChange={editHandler} value={listingLocation}/>
            <h6 className="post-posted-at">{singleListing.createdAt}</h6>
        </form>
    )
}

export default SingleEditForm;
