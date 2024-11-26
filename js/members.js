// Seleciona o botão para abrir a galeria
const galery = document.querySelector('#galery_button'); 
// Seleciona o botão para fechar a galeria
const galeryClose = document.querySelector('.close-window'); 
// Seleciona o elemento que contém a galeria
const galeryContent = document.querySelector('.galery'); 
// Seleciona a lista de imagens na galeria
const galleryImages = document.querySelector('.galery_images ul'); 
// Seleciona a seta para mover à esquerda
const leftArrow = document.querySelector('.left'); 
// Seleciona a seta para mover à direita
const rightArrow = document.querySelector('.right'); 
// Índice que rastreia a imagem atualmente visível
let currentIndex = 0; 

// Evento para abrir a galeria, adicionando a classe que a torna visível
galery.addEventListener('click', () => {
    galeryContent.classList.add('galery-visible'); 
});

// Evento para fechar a galeria, removendo a classe que a torna visível
galeryClose.addEventListener('click', () => {
    galeryContent.classList.remove('galery-visible'); 
});

// Função que atualiza a posição da lista de imagens com base no índice atual
function updateGallery() {
    const imageWidth = galleryImages.querySelector('li').offsetWidth; // Obtém a largura de uma imagem
    const maxIndex = galleryImages.children.length - 2; // Define o índice máximo permitido

    // Garante que o índice permaneça dentro dos limites
    if (currentIndex < 0) currentIndex = 0; 
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    // Move a lista horizontalmente para mostrar a imagem correta
    galleryImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`; 
}

// Evento para mover à esquerda, decrementando o índice e atualizando a posição
leftArrow.addEventListener('click', () => {
    currentIndex--; 
    updateGallery(); 
});

// Evento para mover à direita, incrementando o índice e atualizando a posição
rightArrow.addEventListener('click', () => {
    currentIndex++; 
    updateGallery(); 
});

// Inicializa a galeria posicionando as imagens corretamente
updateGallery(); 
