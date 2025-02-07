const amigo = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
let amigos = [];

function adicionarAmigo() {
    const nome = amigo.value.trim();

    if (!nome) {
        alert("Digite um nome !!!");
        return;
    }else {
        amigos.push(nome);
        amigo.value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length == 0){
        alert("Nenhum amigo para ser sorteado")
    }

     const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

}
