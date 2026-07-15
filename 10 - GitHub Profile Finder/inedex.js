// console.log(fetch('https://api.github.com/users/naz-muhammad'))

const cont = document.getElementById('container')

fetch('https://api.github.com/users/naz-muhammad')
.then( (response) => {
    // console.log(response); // This is a Response object. The JSON data is inside its body.

    // console.log(response.json())  //  does not return the JSON immediately. starts reading the body.Reading takes time.
    // So it returns another Promise.

    return response.json()
})
.then( ( data ) => {
    // console.log(typeof data);
    console.log(data);

    cont.innerHTML += `
    
    <img src="${data.avatar_url}" alt="not found">
    <p style="background-color: red;">Public Repo : ${data.public_repos}</p>
    <p style="background-color: red;">Name : ${data.login}</p>
    <p style="background-color: red;">Public Repo : ${data.following}</p>
    <p style="background-color: red;">Name : ${data.followers}</p>
    `
    
    
})

