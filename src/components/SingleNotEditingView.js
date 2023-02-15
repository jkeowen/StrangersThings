import React from "react";

const SingleNotEditingView = ({ singleListing }) => {
    return(
        <div>
            <h3 className="post-title">{singleListing.title}</h3>
            <p className="post-content">{singleListing.description}</p>
            <h6 className="post-seller">{singleListing.author.username}</h6>
            <h6 className="post-price">{singleListing.price}</h6>
            <h6 className="post-location">{singleListing.location}</h6>
            <h6 className="post-posted-at"> {singleListing.createdAt}</h6>
        </div> 
    )
}

export default SingleNotEditingView;