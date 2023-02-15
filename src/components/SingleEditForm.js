import React from "react";


const SingleEditForm = ({ singleListing, listingTitle, listingDescription, listingPrice, listingLocation, editHandler}) => {

    return(
        <form className="edit-post">
            <label htmlFor="title">Title: </label>
            <input className="single-listing-edit-title" name="title" onChange={editHandler} value={listingTitle} />
            <label htmlFor="description">Description: </label>
            <textarea name="description" rows='5' onChange={editHandler} >{listingDescription}</textarea>
            <h6 className="post-seller">Username: {singleListing.author.username}</h6>
            <div>
                <label htmlFor="price" >Price: </label>
                <input className="single-listing-edit-price" name="price" onChange={editHandler} value={listingPrice} />
                <label htmlFor="location">Location: </label>
                <input className="single-listing-edit-location" name="location" onChange={editHandler} value={listingLocation}/>
            </div>
            <h6 className="post-posted-at">{singleListing.createdAt}</h6>
        </form>
    )
}

export default SingleEditForm;
