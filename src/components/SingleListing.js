import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleListing } from "../AjaxHelperFunctions";
import { editPostHandler, deleteListingHandler } from "../AjaxHelperFunctions";
import SingleNotEditingView from "./SingleNotEditingView";
import SingleEditForm from "./SingleEditForm";
import SingleListingButtons from "./SingleListingButtons";
const SingleListing = ({ singleListing, setSingleListing, userListings, setUserListings }) => {

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
        deleteListingHandler(singleListing._id, userListings, setUserListings, singleListing);
        navigate('/deleteConfirmation')
    }

    const toSendMessageHandler = () => {
        navigate(`/messages/${id}`)
    }
    return(
        
        <div className="post">
            { !isEditing ?
                <SingleNotEditingView singleListing={singleListing}/>: 
                <SingleEditForm singleListing={singleListing} listingTitle={listingTitle}
                                listingDescription={listingDescription} listingPrice={listingPrice}
                                listingLocation={listingLocation} editHandler={editHandler} />
            }

            <SingleListingButtons singleListing={singleListing} isEditing={isEditing} 
            submitEditHandler={submitEditHandler} deleteButtonHandler={deleteButtonHandler} 
            editButtonHandler={editButtonHandler} editCancelbutton={editCancelbutton} 
            toSendMessageHandler={toSendMessageHandler} backHandler={backHandler}/>
        </div>
    )
}

export default SingleListing;