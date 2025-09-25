// Função para buscar dados de uma URI
async function getURI(uri) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${uri}`);
    const data = await response.json();
    return data;
}

// Função para listar usuários
async function listarUsuarios() {
    const data = await getURI('users'); // Corrigido: 'usuarios' → 'getURI' com a URI correta
    data.forEach(item => {
        criarElementoLi(item.name);
    });
}

// Função para capturar a tarefa digitada
function capturandoTarefa() {
    const tarefa = document.getElementById('tarefa');
    const aux = tarefa.value;
    tarefa.value = '';
    return aux;
}

// Função para listar fotografias
async function listarFotografias() {
    const data = await getURI('photos');
    data.forEach(item => {
        criarImagem(item.thumbnailUrl);
    });
}

// Função para criar o botão da tarefa
function elementoCriarTarefa(tarefa) {
    const listaTarefas = document.getElementById('lista-tarefas');
    const elementoButton = document.createElement('button');
    elementoButton.classList.add('list-group-item', 'list-group-item-action');
    elementoButton.innerText = tarefa;
    listaTarefas.appendChild(elementoButton);

    const elementoAlerta = document.getElementById('alerta');
    elementoAlerta.classList.add('alerta-sumir');
}

// Função para criar um item de lista
function criarElementoLi(contexto) {
    const elementLi = document.createElement('li');
    elementLi.textContent = contexto;
    const listaNaoOrdenada = document.querySelector('ul');
    listaNaoOrdenada.appendChild(elementLi);
}

// Função para criar uma imagem na lista
function criarImagem(img) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = `<img src='${img}'/>`;
    const listaNaoOrdenada = document.querySelector('ul');
    listaNaoOrdenada.appendChild(elementLi);
}

// Função para mostrar alerta
function mostrarAlerta(frase) {
    const elementoAlerta = document.getElementById('alerta');
    elementoAlerta.classList.remove('alerta-sumir');
    elementoAlerta.innerText = frase;
}

// Adicionando evento ao botão de listar fotografias
const button = document.querySelector('button');
button.addEventListener('click', () => listarFotografias());

// Adicionando evento ao botão de enviar tarefa
const botaoEnviarTarefa = document.getElementById('butao-enviar-tarefa');
botaoEnviarTarefa.addEventListener('click', (e) => {
    const textoTarefa = capturandoTarefa();
    if (textoTarefa === '') {
        mostrarAlerta('Por favor preencha o campo abaixo');
        return;
    }
    elementoCriarTarefa(textoTarefa);
});