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

// Sugestões
document.addEventListener('DOMContentLoaded', function() {
    const formButton = document.getElementById('form_buttom');
    const formulario = document.querySelector('.formulario');
    const backButton = document.querySelector('.formulario .back');
    const user_opinion = document.querySelector('#user_opinion');
    const body = document.body;
    const mainElement = document.getElementById('main-content');

    // Função para pegar o nome do usuário sempre que for necessário
    function getUserName() {
        return sessionStorage.getItem('userName') || '';
    }

    // Atualiza o nome de usuário na seção de sugestões
    function updateUserOpinion() {
        const user = getUserName();
        user_opinion.innerHTML = `Nos dê sua opinião ${user}.`;
    }

    // Atualiza o nome do usuário na tela de boas-vindas
    const welcome_h1 = document.querySelector(".welcome");
    const savedUser = getUserName();
    if (savedUser) {
        welcome_h1.innerText = `Bem Vindo ${savedUser}!`;
    }

    // Abrir o formulário
    formButton.addEventListener('click', function() {
        formulario.style.display = 'flex';
        setTimeout(() => { formulario.classList.add('formulario--active'); }, 100);
        mainElement.classList.add('main-blur'); // Aplica o efeito de blur no conteúdo principal
        body.classList.add('formulario-active'); // Remove a rolagem horizontal
        updateUserOpinion(); // Atualiza o nome no formulário
    });

    // Fechar o formulário
    backButton.addEventListener('click', function() {
        formulario.classList.remove('formulario--active');
        setTimeout(() => { formulario.style.display = 'none'; }, 300);
        mainElement.classList.remove('main-blur'); // Remove o efeito de blur
        setTimeout(() => { body.classList.remove('formulario-active'); }, 400); // Restaura a rolagem
    });


// FeedBack Response
const FeedBackTextArea = document.getElementById('feedback')
const likedTextArea = document.getElementById('liked')
const submitButton = document.getElementById('subited_button')
const form = document.getElementById('opinionForm')

// Função para verificar se os campos estão preenchidos
function validateForm(){
    if(FeedBackTextArea.value.trim() !== '' && likedTextArea.value.trim() !== ''){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }
}
// Adiciona eventos de input para validar enquanto o usuário estiver digitando
FeedBackTextArea.addEventListener('input', validateForm)
likedTextArea.addEventListener('input', validateForm)

// Evitar o envio do formulário se os campos estiverem vazio (medida extra)

form.addEventListener('submit', (e) => {
    if(FeedBackTextArea.value.trim() === '' || likedTextArea.value.trim() === ''){
    e.preventDefault() // impede o envio
    alert('Por favor, preencha todos os campos antes de enviar a sua opinião.')
    }else{
        // Fechar o formulário ao enviar
    const formSubmit = document.querySelector('form');
    formSubmit.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio real do formulário para efeitos de demonstração
        formulario.classList.remove('formulario--active');
        setTimeout(() => { formulario.style.display = 'none'; }, 300);
        mainElement.classList.remove('main-blur');
        setTimeout(() => { body.classList.remove('formulario-active'); }, 400); // Restaura a rolagem
    });
        window.alert('Obrigado por nos avaliar')
    }
})

});
