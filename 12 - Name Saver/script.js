// Select elements
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");



saveBtn.addEventListener('click' , () => {

    let name = nameInput.value.trim()

    if ( name === "" ) {
        alert('Please Enter Your Name!')
        return
    } else {
        console.log(localStorage.getItem(name))
        message.innerText = `Welcome! ${nameInput.value}`
    }
    
})
