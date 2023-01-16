let form = document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById('password')
let password2 = document.getElementById('Re-enter-password')
let emailVal = document.getElementById("email-val")
let passwordVal = document.getElementById("password-val")

form.addEventListener("submit", function(e){

    for (let i = 0; i<password.value.length;i++){
        if (password.value[i] == " ") {           
            passwordVal.textContent = "Password can't contain space"
            password.style.border = "2px solid red";
             e.preventDefault()
        } 
    }
    if (password.value.toLowerCase() == "password") {
        passwordVal.textContent = `"password" can not be used as password`
        password.style.border = "2px solid red";
        e.preventDefault()  
    }
    else if (password.value.trim().length <= 6 ) {
        passwordVal.textContent = "Password must be longer than 6 characters"
        password.style.border = "2px solid red";
        e.preventDefault()
    }
    else if (password.value.trim().length >= 20 ) {
        passwordVal.textContent = "Password must be less than 20 characters"
        password.style.border = "2px solid red";
        e.preventDefault()
    }
    if (password2.value !== password.value) {
        passwordVal.textContent = "the passwords must be the same"
        password.style.border = "2px solid red";
        password2.style.border = "2px solid red";
        e.preventDefault()
    }
})
