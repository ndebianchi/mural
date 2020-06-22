const inputFotoOco = document.getElementById("foto-ocorrencia")
const botaoAddFotoOco = document.getElementById("foto-ocorrencia-label")

function mudarBotaoOco () {
    botaoAddFotoOco.style.backgroundColor = "#57BC90";
    botaoAddFotoOco.innerHTML = "Foto Adicionada"    
}

inputFotoOco.addEventListener('change', evt => {
    evt.preventDefault();
    mudarBotaoOco();
})


