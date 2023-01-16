const btn = document.getElementById("nav-btn")
btn.addEventListener("click", function(){
    const value = document.getElementById("search")
    const valueCS = window.getComputedStyle(value)
    if (valueCS.display == "none") {
        value.style.display = "block"
    }
    else {
        value.style.display = "none"
    }
    const value1 = document.getElementById("search1")
    const valueCS1 = window.getComputedStyle(value1)
    if (valueCS1.display == "none") {
        value1.style.display = "block"
    }
    else {
        value1.style.display = "none"
    }
    const value2 = document.getElementById("nonediv")
    const valueCS2 = window.getComputedStyle(value2)
    if (valueCS2.display == "none") {
        value2.style.display = "block"
    }
    else {
        value2.style.display = "none"
    }
})