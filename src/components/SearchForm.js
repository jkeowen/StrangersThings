import React from "react";



const SearchForm = ({ setSearchInput }) => {

    const searchHandler = (event) => {
        setSearchInput(event.target.value);
    }
    

    return(
        <input type="text" placeholder="Search" onChange={searchHandler}/>
    )
}

export default SearchForm;