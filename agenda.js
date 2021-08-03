var divNovoEvento = document.getElementById('novoEvento');
var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');

function mostrarNovoEvento() {
    divNovoEvento.classList.remove('d-none');
}

function fecharNovoEvento() {
    divNovoEvento.classList.add('d-none');
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', fecharNovoEvento);