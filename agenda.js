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
    if (nomeEvento.trim().length === 0) return false;
    var timestampEvento = Date.parse(dataEvento);
    if (isNaN(timestampEvento)) return false;
    var timestampAtual = (new Date()).getTime();
    if (timestampEvento < timestampAtual) return false;
    return true;
}

function salvarNovoEvento(event) {
    event.preventDefault();
    var nomeEvento = inputNomeEvento.value;
    var dataEvento = inputDataEvento.value;
    if (novoEventoValido(nomeEvento, dataEvento)) {
        console.log('Evento é válido!');
    } else {
        console.log('Evento é inválido!');
    }
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);