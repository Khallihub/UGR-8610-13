const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById('password')
const emailVal = document.getElementById("email-val")
const passwordVal = document.getElementById("password-val")
form.addEventListener("submit",(e) => {
    console.log(password.value)
    if (password.value.trim().length <= 6 ) {
        passwordVal.textContent = "Password must be longer than 6 characters"
        password.style.border = "2px solid red";
        e.preventDefault()
    }
    if (password.value.trim().length >= 20 ) {
        passwordVal.textContent = "Password must be less than 20 characters"
        e.preventDefault()
    }
}) 