let amigo = [];
let sorteados = []; 

function adicionarAmigo() {
    let pegarNome = document.getElementById('amigo');
    let amigoDigitado = pegarNome.value.trim();  

    if (amigoDigitado === '') {
        alert("Por favor, digite um nome");
        return;
    }

    if (amigo.includes(amigoDigitado)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigo.push(amigoDigitado);
    atualizarAmigo();
    pegarNome.value = '';
    pegarNome.focus();
}

function adicionarAmigoNaLista(nome) {
    let li = document.createElement('li');
    li.textContent = nome;
    document.getElementById('listaAmigos').appendChild(li);
}

function atualizarAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (amigo.length === 0) {
        lista.innerHTML = '<li>Nenhum amigo adicionado ainda</li>';
    } else {
        amigo.forEach(adicionarAmigoNaLista);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let amigosDisponiveis = amigo.filter(nome => !sorteados.includes(nome));

    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let sorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];
    sorteados.push(sorteado);
    document.getElementById('resultadoSorteio').textContent = `Sorteado: ${sorteado}`;
}
