const inputFoto = document.querySelector(".atualizarFoto input")
const labelFoto = document.querySelector(".atualizarFoto label")
const spanFoto = document.querySelector(".atualizarFoto span")

function mostrarBotao () {
    spanFoto.style.display = "block";
    labelFoto.style.display = "none";
}

inputFoto.addEventListener('change', evt => {
    evt.preventDefault();
    mostrarBotao();
})
