// Select elements
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

const savedName = localStorage.getItem('name')

if ( savedName ) {
    message.textContent = `Welcome, ${savedName}`
    nameInput.value = savedName
}

saveBtn.addEventListener('click' , () => {

    const name = nameInput.value.trim() ;

    if ( name === '') {
        alert('Please Enter The Name!')
        return ;
    } 

    localStorage.setItem('name' , name)
    console.log(localStorage.getItem('name'))

    message.textContent = `Welcome, ${name}`

})

clearBtn.addEventListener('click' , () => {
    localStorage.removeItem("name");
    nameInput.value = ""
    message.textContent = `Welcome!`
})

// console.log(localStorage.getItem('name'))

// enable the Enter and Delete button to do the work of save and clear

nameInput.addEventListener( 'keydown' , (event) => {

    if ( event.key === "Enter") {

        saveBtn.click(
            
        )
        
    } 

    if ( event.key === "Escape" || event.key === "Delete") {

        clearBtn.click()
        
    }
});