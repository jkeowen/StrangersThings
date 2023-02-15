import React, { useState, useEffect } from "react";
import { getListings } from "../AjaxHelperFunctions";
import SearchForm from "./SearchForm";
import AddNewListing from "./AddNewListing";
import ListingsFetcher from "./ListingsFetcher";

const Listings = ({ userListings, 
                setUserListings,
                isLoggedIn,
                }) => {


const [ searchInput, setSearchInput ] = useState('');  
const [ searchCategory, setSearchCategory ] = useState('title')    

useEffect(()=>{
    getListings(setUserListings)
}, []);
    return(

        <div className="post-page">
            {
                isLoggedIn ? 
                    <AddNewListing userListings={userListings} setUserListings={setUserListings}/>
                    : null
            }
        <SearchForm setSearchInput={setSearchInput} setSearchCategory={setSearchCategory} />
        <ListingsFetcher userListings={userListings} searchCategory={searchCategory} searchInput={searchInput} /> 
        </div>
    )
}

export default Listings;