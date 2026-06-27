const taskInput = document.querySelector("#taskInput") ;
const addBtn = document.querySelector("#addBtn") ;
const taskList = document.querySelector(".task-list") ; 

function newTask( text ) {

    const task = document.createElement("div")
    const p = document.createElement("p")
    const deleteBtn = document.createElement("button")

    task.classList.add("task")

    p.textContent = text ;
    deleteBtn.innerText = "Delete" ;

    task.appendChild(p)
    task.appendChild(deleteBtn)

    taskList.appendChild(task)

    deleteBtn.addEventListener('click' , () => {
        task.remove()
    })
    
}

function handleAddTask() {

    if ( taskInput.value.trim() === "" ) {
        
        alert("The input field is empty! add some text.")
        return;
    } 

    newTask(taskInput.value)
        
    taskInput.value = ""
    taskInput.focus()

}

addBtn.addEventListener("click" , handleAddTask)

taskInput.addEventListener("keydown" , (e) => {
    if ( e.key === "Enter" ) {
        handleAddTask() ;
    }
})
