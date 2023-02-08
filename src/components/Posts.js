import React, { useEffect } from "react";




const Posts = ({ userPosts, setUserPosts }) => {
    

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
        })
            
        
    )

}



export default Posts;