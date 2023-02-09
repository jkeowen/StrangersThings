
const apiURL = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am`;


const registrationHandler = (uname, pword, tokenSetter, nav, errorMessageSet, usernameSaver) => {
fetch(`${apiURL}/users/register`,{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
        user:{
            username: uname,
            password: pword
        }
    })
}).then(response => response.json())
  .then(result => {
    console.log(result)
    if(result.success === true) loginHandler(uname, pword, tokenSetter, nav, errorMessageSet)
    else errorMessageSet('That account already exists')
  }).catch(console.error);
}

export const loginHandler = (uname, pword, tokenSetter, nav, errorMessageSet) => {
    fetch(`${apiURL}/users/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user:{
                username: uname,
                password: pword
            }
        })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        window.localStorage.setItem('strangeToken', result.data.token);
        window.localStorage.setItem('username', uname);
        tokenSetter(window.localStorage.getItem('strangeToken'));
        nav("/");
      }).catch(errorMessageSet('Invalid Credentials!'))
}

export const getCurrentUser = (setFunction) =>{
    fetch(`${apiURL}/user/me`, {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('strangeToken')
        },            
    }).then(response => response.json())
        .then(result => {
        console.log(result);
        setFunction(result);
        }).catch(console.error)
}

export const newPostHandler = (postTitle, postDescription, postPrice, postWillDeliver, postSetter, currentPosts) => {
    fetch(`${apiURL}/posts`,{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('strangeToken')
        },
        body: JSON.stringify({
            post: {
                title: postTitle,
                description: postDescription,
                price, postPrice,
                willDeliver: postWillDeliver
            }
        })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        postSetter([...currentPosts, result])
      })
      .catch(console.error)
}


export default registrationHandler;