const inputFoto = document.querySelector(".new-foto-categoria input")
const botaoAddFoto = document.querySelector(".new-foto-categoria label")

function mudarBotao () {
    botaoAddFoto.style.backgroundColor = "#57BC90";
    botaoAddFoto.innerHTML = "Foto Adicionada"    
}

inputFoto.addEventListener('change', evt => {
    evt.preventDefault();
    mudarBotao();
})


