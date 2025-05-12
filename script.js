// Seleciona o contêiner onde os hexágonos serão adicionados
const container = document.querySelector('.container');

// Define o número de hexágonos que serão criados
const numHexagons = 200; // Você pode ajustar este número para mais ou menos

// Array para armazenar as cores do ciclo de mudança
const colors = ['#007bff', '#28a745', '#ffc107']; // Azul, Verde, Amarelo

// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Função para criar um hexágono
function createHexagon() {
    const hexagon = document.createElement('div'); // Cria um novo elemento div
    hexagon.classList.add('hexagon'); // Adiciona a classe 'hexagon'

    // Define posições aleatórias para o hexágono dentro do container
    const x = getRandomNumber(0, window.innerWidth - 50); // Posição X
    const y = getRandomNumber(0, window.innerHeight - 57.735); // Posição Y
    hexagon.style.left = `${x}px`;
    hexagon.style.top = `${y}px`;

    // Adiciona um ouvinte de evento para quando o mouse passar sobre o hexágono
    hexagon.addEventListener('mouseover', changeColor);

    container.appendChild(hexagon); // Adiciona o hexágono ao container
}

// Função para mudar a cor do hexágono
function changeColor(event) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.backgroundColor = color;
}

// Cria todos os hexágonos
for (let i = 0; i < numHexagons; i++) {
    createHexagon();
}
