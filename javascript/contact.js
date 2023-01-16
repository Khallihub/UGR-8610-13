let btn = document.getElementById("nav-btn")
btn.addEventListener("click", function(){
    let searchValue = document.getElementById("search")
    let valueCS = window.getComputedStyle(searchValue)
    if (valueCS.display == "none") {
        searchValue.style.display = "block"
    }
    else {
        searchValue.style.display = "none"
    }
    let value1 = document.getElementById("search1")
    let valueCS1 = window.getComputedStyle(value1)
    if (valueCS1.display == "none") {
        value1.style.display = "block"
    }
    else {
        value1.style.display = "none"
    }
    let value2 = document.getElementById("nonediv")
    let valueCS2 = window.getComputedStyle(value2)
    if (valueCS2.display == "none") {
        value2.style.display = "block"
    }
    else {
        value2.style.display = "none"
    }   
})

let cname = document.getElementById("contact-name")
let cemail = document.getElementById("contact-email")
let cphone = document.getElementById("contact-tel")
let caddress = document.getElementById("contact-address")
let submit = document.getElementById("form-btn-submit")

submit.addEventListener('click', function(e) {
    let nameArr = cname.value.split(" ")
    let phoneno = /^\d{10}$/;
    if(!cphone.value.match(phoneno)) {
        window.alert("enter the last 10 digits without space commas and plus sign")
        e.preventDefault()
    }
    else if (nameArr.length != 3) {
        window.alert("enter your full name")
        e.preventDefault()
    }
    else if (cphone.value.length != 10) {
        window.alert("check your phone number")
        e.preventDefault()
    }


})

