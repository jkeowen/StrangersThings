import React from "react";



const SearchForm = ({ setSearchInput, setSearchCategory }) => {

    const searchHandler = (event) => {
        setSearchInput(event.target.value);
    }
    
    const changeSearch = (event) =>{
        setSearchCategory(event.target.value)
    }

    return(
        <div className="searchForm">
        <input type="text" placeholder="Search" onChange={searchHandler}/>
        <select placeholder="Search Category" onChange={changeSearch} >
            <option value='title'>Title</option>
            <option value='price'>Price</option>
            <option value='description' >Description</option>
            <option value='location'>Location</option>
            <option value='username'>Username</option>
        </select>
        </div>
    )
}

export default SearchForm;