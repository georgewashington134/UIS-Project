// script.js
const themeToggle = document.querySelector(".theme-checkbox")
const SwapButton = document.querySelector('#SwapButton')
const User_Name = document.querySelector('#User_Name')
const get_nameDiv = document.querySelector('.get_name')
const welcome_h1 = document.querySelector(".welcome")

// Verifica se já existe um nome no LocalStorage ao carregar a página
window.addEventListener('DOMContentLoaded', () =>{
    const savedUser = localStorage.getItem('userName')
    if(savedUser){
        // Exibe a mensagem de boas-vindas com o nome salvo
        welcome_h1.innerText = `Bem Vindo ${savedUser}!`
        // Oculta a div get_name
        get_nameDiv.style.display = 'none'
    }
})


// Função que desliza a div (.get_name) para fora e salva o nome no localStorage

function Swap_out(){
    const user = User_Name.value.trim() // Remove os espaços em branco
    if(user != 0){
        // SALVA O NOME DO USUÁRIO NO LOCALSTORAGE
        localStorage.setItem('userName', user)
        // Exibe a mensagem de boas-vindas
        welcome_h1.innerText = `Bem Vindo ${user}!`
        // Oculta a div get_name
        get_nameDiv.classList.add('swapped')
    }else{
        window.alert("Insira seu nome.")
    }
}

themeToggle.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
})

