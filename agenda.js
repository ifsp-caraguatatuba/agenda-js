var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');

function mostrarNovoEvento() {
    novoEvento.classList.remove('d-none');
}

function ocultarNovoEvento() {
    novoEvento.classList.add('d-none');
}

function novoEventoValido(nomeEvento, dataEvento) {
    // nome evento está vazio?
    // data evento está vazia?
    // data evento é no passado?
    return true;
}

function salvarNovoEvento(event) {
    event.preventDefault();
    var nomeEvento = inputNomeEvento.value;
    var dataEvento = new Date(inputDataEvento.value);
    if (novoEventoValido(nomeEvento, dataEvento)) {
        console.log('Evento é válido!');
    } else {
        console.log('Evento é inválido!');
    }
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);