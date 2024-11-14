const mainElement = document.getElementById('main-content');
const header = document.getElementById('header');
const themeToggle = document.querySelector(".theme-checkbox");
const SwapButton = document.querySelector('#SwapButton');
const User_Name = document.querySelector('#User_Name');
const welcome_h1 = document.querySelector(".welcome");
const get_nameDiv = document.querySelector('.get_name'); 

// Função para aplicar o tema baseado no estado do checkbox
function applyTheme() {
    if (themeToggle.checked) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

// Aplica o tema ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedUser = sessionStorage.getItem('userName');

    // Verifica se o tema está salvo no sessionStorage
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }
    applyTheme(); // Aplica o tema baseado no estado do checkbox

    if (savedUser) {
        // Exibe a mensagem de boas-vindas com o nome salvo
        welcome_h1.innerText = `Bem Vindo ${savedUser}!`;
        // Oculta a div get_name
        get_nameDiv.style.display = 'none';
        mainElement.style.display = 'block'
    }else{
        mainElement.style.display = 'none'
        header.style.display = 'none'
    }

    // Função que desliza a div (.get_name) para fora e salva o nome no sessionStorage
    function Swap_out() {
        const user = User_Name.value.trim(); // Remove os espaços em branco
        if (user !== '') {
            // Salva o nome do usuário no sessionStorage
            sessionStorage.setItem('userName', user);
            // Exibe a mensagem de boas-vindas
            welcome_h1.innerText = `Bem Vindo ${user}!`;
            // Usa setTimeout para adicionar a classe 'swapped' com um atraso
            get_nameDiv.classList.add('swapped') // Adiciona a classe 'swapped' após 1 segundo
            setTimeout(() => {
                mainElement.classList.add('PushUp-animation');
                header.classList.add('PushUp-animation');
                mainElement.style.display = 'block'
                header.style.display = 'block'
                header.style.display = 'flex'
            }, 500)
        } else {
            window.alert("Insira seu nome.");
        }
    }

    // Evento de clique para o botão SwapButton
    SwapButton.addEventListener('click', Swap_out);
});

// Evento para alternar o tema e salvar a preferência no sessionStorage
if (themeToggle) {
    themeToggle.addEventListener('change', function () {
        applyTheme(); // Aplica o tema baseado no estado do checkbox
        sessionStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light'); // Salva a preferência
    });
}
