import React from "react";

const SingleListingButtons = ({ singleListing, 
                                isEditing, 
                                submitEditHandler, 
                                deleteButtonHandler, 
                                editButtonHandler, 
                                editCancelbutton, 
                                toSendMessageHandler, 
                                backHandler}) => {

    return(
        <div className="single-listing-buttons">
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

export default SingleListingButtons;