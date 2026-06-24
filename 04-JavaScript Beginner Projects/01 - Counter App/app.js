let clickCount = 0;

const container = document.querySelector(".container")
const counter = document.querySelector(".counter")
const increase = document.querySelector(".inc")
const decrease = document.querySelector(".dec")
const reset = document.querySelector(".reset")

increase.addEventListener("click" , () => {
    clickCount++ ;
    counter.textContent = clickCount ;
    container.style.backgroundColor = "#4444449f"
})

decrease.addEventListener("click" , () => {
    clickCount--;
    counter.textContent = clickCount;
    container.style.backgroundColor = "#44444438"
})

reset.addEventListener("click" , () => {
    clickCount = 0 ;
    counter.textContent = clickCount ;
    container.style.backgroundColor = "#333333a4"
})