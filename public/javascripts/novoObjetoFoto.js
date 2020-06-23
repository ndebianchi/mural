const inputFotoPer = document.getElementById("foto-perdido")
const botaoAddFotoPer = document.getElementById("foto-perdido-label")

function mudarBotao () {
    botaoAddFotoPer.style.backgroundColor = "#57BC90";
    botaoAddFotoPer.innerHTML = "Foto Adicionada"    
}

inputFotoPer.addEventListener('change', evt => {
    evt.preventDefault();
    mudarBotao();
})