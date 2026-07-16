
const container = document.querySelector('.container')
const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const result = document.getElementById('result')
const pending = document.getElementById('pending')

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
    console.log(data);

    result.innerHTML = ""

    pending.style.display = 'none'

    
    result.innerHTML += `
    
    <div class="profile-card">

    <img class="profile-img" src="${data.avatar_url}" alt="Not found">

    <h2 class="profile-name">${data.login}</h2>

    ${data.bio ? `<p class="profile-bio">${data.bio}</p>` : ""}
   
    <div class="stats">

        <div class="stat">
            <span class="stat-number">${data.followers}</span>
            <span class="stat-title">Followers</span>
        </div>

        <div class="stat">
            <span class="stat-number">${data.following}</span>
            <span class="stat-title">Following</span>
        </div>

        <div class="stat">
            <span class="stat-number">${data.public_repos}</span>
            <span class="stat-title">Repositories</span>
        </div>

    </div>

</div>

    
    `
})
.catch((error) => {
    // console.log('Error: some error occur' );
    // console.log(error);
    
    pending.innerHTML = `

    <p>${error}</p>
    
    `
})

})