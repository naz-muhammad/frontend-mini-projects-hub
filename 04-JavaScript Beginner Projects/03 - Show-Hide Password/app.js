const showPasswordbtn = document.querySelector(".show-password");
const passwordInput = document.querySelector("#password");

showPasswordbtn.addEventListener("click", () => {

  if (passwordInput.type === "password") {
    passwordInput.type = "text"
    showPasswordbtn.textContent = "Hide Password"
    showPasswordbtn.style.backgroundColor = "red"
  } 
  else {
    passwordInput.type = "password"
    showPasswordbtn.textContent = "Show Password"
    showPasswordbtn.style.backgroundColor = "green"
  }

});
