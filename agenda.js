var divNovoEvento = document.getElementById('novoEvento');
var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');

function mostrarNovoEvento() {
    divNovoEvento.classList.remove('d-none');
}

function fecharNovoEvento() {
    divNovoEvento.classList.add('d-none');
}

function salvarNovoEvento(event) {
    event.preventDefault();
    var nomeEvento = inputNomeEvento.value;
    var dataEvento = inputDataEvento.value;
    console.log(nomeEvento, dataEvento);
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', fecharNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);