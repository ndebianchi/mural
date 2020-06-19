const inputFoto = document.querySelector(".profile-pic input")
const labelFoto = document.querySelector(".profile-pic label")
const botaoEnviar = document.querySelector(".btn-enviar-foto")

function mostrarBotao () {
    botaoEnviar.style.display = "block";
    labelFoto.style.display = "none";
}

inputFoto.addEventListener('change', evt => {
    evt.preventDefault();
    mostrarBotao();
})
