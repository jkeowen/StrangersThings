import React, { useEffect } from "react";



const Posts = ({apiURL, 
                userPosts, 
                setUserPosts,
                isLoggedIn,
                }) => {
    

useEffect(()=>{
   const getPosts = () => {
        fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(result => {
            console.log(result.data.posts);
            setUserPosts(result.data.posts)
        })
    .catch(console.error);
}
    getPosts()
}, []);


    return(

        <div className="post-page">
            {
                isLoggedIn ? 
                    <div className="post-logged-in-stuff">
                    <h2 className="post-welcome">Welcome {window.localStorage.getItem('username')}! </h2>
                    <h3 className="post-add-listing-title"></h3>
                    <form className="post-add-listing-form" >
                        <input placeholder="title" type="text"/>
                        <input placeholder="description" type="text"/>
                        <input placeholder="price" type="text"/>
                        <input placeholder="will deliver?" type="text"/>
                    </form>
                    </div> 
                    : null
            }
        {
        userPosts.map((post, index) => {
            return(
                <div className="post" key={index}>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-content">{post.description}</p>
                    <h6 className="post-seller">{post.author.username}</h6>
                    <h6 className="post-price">{post.price}</h6>
                    <h6 className="post-location">{post.location}</h6>
                    <button>More Info</button>
                </div>
            )
        })}
        </div>
            
        
    )

}



export default Posts;