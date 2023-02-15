import React, { useState, useEffect } from "react";
import { getPosts } from "../AjaxHelperFunctions";
import SearchForm from "./SearchForm";
import AddNewListing from "./AddNewListing";
import ListingsFetcher from "./ListingsFetcher";

const Posts = ({ userPosts, 
                setUserPosts,
                isLoggedIn,
                }) => {


const [ searchInput, setSearchInput ] = useState('');  
const [ searchCategory, setSearchCategory ] = useState('title')    

useEffect(()=>{
    getPosts(setUserPosts)
}, []);
    return(

        <div className="post-page">
            {
                isLoggedIn ? 
                    <AddNewListing userPosts={userPosts} setUserPosts={setUserPosts}/>
                    : null
            }
        <SearchForm setSearchInput={setSearchInput} setSearchCategory={setSearchCategory} />
        <ListingsFetcher userPosts={userPosts} searchCategory={searchCategory} searchInput={searchInput} /> 
        </div>
    )
}

export default Posts;