import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleListing } from "../HelperFunctions";

const SingleListing = ({ singleListing, setSingleListing }) => {

    

    const { id } = useParams();

    const navigate = useNavigate();

    const backHandler = () => {
        navigate('/');
    }

    
    const editButtonHandler = () => {
       navigate(`/editlisting/${id}`)
    }

    useEffect(()=>{
        getSingleListing(id, setSingleListing)
    },[singleListing])

   
   
    return(
        
        <div className="post">
    
                <h3 className="post-title">{singleListing.title}</h3>
                <p className="post-content">{singleListing.description}</p>
                <h6 className="post-seller">{singleListing.author.username}</h6>
                <h6 className="post-price">{singleListing.price}</h6>
                <h6 className="post-location">{singleListing.location}</h6>
                <h6 className="post-posted-at"> {singleListing.createdAt}</h6>
        
        { singleListing.author.username === window.localStorage.getItem('username') ?
            <div className="user-buttons-single-post">
                <button>Delete</button>
                <button onClick={editButtonHandler}>Edit</button>
            </div> : 
            <button>Message</button>
        }
        <button onClick={backHandler}>Back</button>
    </div>
    )
}

export default SingleListing;