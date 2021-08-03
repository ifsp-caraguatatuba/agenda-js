var divNovoEvento = document.getElementById('novoEvento');
var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var formNovoEvento = document.getElementById('formNovoEvento');

function mostrarNovoEvento() {
    divNovoEvento.classList.remove('d-none');
}

function fecharNovoEvento() {
    divNovoEvento.classList.add('d-none');
}

function salvarNovoEvento(event) {
    event.preventDefault();
    console.log(event);
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', fecharNovoEvento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);