
const apiURL = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am`;


const registrationHandler = (uname, pword, tokenSetter, nav) => {
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
    loginHandler(uname, pword, tokenSetter, nav)
  })
  .catch(console.error);
}

export const loginHandler = (uname, pword, tokenSetter, nav) => {
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
        tokenSetter(window.localStorage.getItem('strangeToken'));
        nav("/");
      })
      
      
}

export default registrationHandler;