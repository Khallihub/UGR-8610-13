const btn = document.getElementById("nav-btn")
btn.addEventListener("click", function(){
    const value = document.getElementById("main-nav")
    const valueCS = window.getComputedStyle(value)
    if (valueCS.display == "none") {
        value.style.display = "block"
    }
    else {
        value.style.display = "none"
    }
})