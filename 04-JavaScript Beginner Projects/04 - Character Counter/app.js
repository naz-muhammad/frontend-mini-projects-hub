const count = document.querySelector(".counter");
const text = document.querySelector("#textarea");

text.addEventListener("input", () => {
    count.textContent = text.value.length;
});