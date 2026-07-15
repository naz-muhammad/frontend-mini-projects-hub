// console.log(fetch('https://api.github.com/users/hiteshchoudhary'))

// const cont = document.getElementById('container')

// fetch('https://api.github.com/users/CodeWithHarry')
// .then( (response) => {
//     // console.log(response); // This is a Response object. The JSON data is inside its body.

//     // console.log(response.json())  //  does not return the JSON immediately. starts reading the body.Reading takes time.
//     // So it returns another Promise.

//     return response.json()
// })
// .then( ( data ) => {
//     // console.log(typeof data);
//     console.log(data);

//     cont.innerHTML += `
    
//     <img src="${data.avatar_url}" alt="not found">
//     <p style="background-color: red;">Public Repo : ${data.public_repos}</p>
//     <p style="background-color: red;">Name : ${data.login}</p>
//     <p style="background-color: red;">following : ${data.following}</p>
//     <p style="background-color: red;">followers : ${data.followers}</p>
//     `
    
    
// })



// +++++++++++++++++++++++++++++++++++++++++++

const container = document.getElementById('container')
const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const result = document.querySelector('.result')

searchBtn.addEventListener('click' , () => {

//    console.log(searchInput.value)
//    console.log('clicked');

const name = searchInput.value.trim()

if ( name === '' ) {
    alert('Please Enter User Name ...')
    return
}

// console.log(name);

fetch(`https://api.github.com/users/${name}`)
.then( ( response ) => {
    return response.json()
})
.then( ( data ) => {
    // console.log(data);

    container.innerHTML += `
    
    <img src="${data.avatar_url}" alt="not found">
    <p>Public Repo : ${data.public_repos}</p>
    <h2>Name : ${data.login}</h2>
    <p>following : ${data.following}</p>
    <p>followers : ${data.followers}</p>
    `
})
.catch((error) => {
    console.log('Error: wrong username! please enter the correct name...');
})

})