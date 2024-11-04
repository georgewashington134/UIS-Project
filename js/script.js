// script.js
const themeToggle = document.querySelector(".theme-checkbox")

themeToggle.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
})