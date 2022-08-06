const inputTempo = document.querySelector (".inputSlideTempo")
let pontosAcumulados = 0

function mostrarTempo() {
    let spanTempo = document.querySelector(".contagemTempo")
    spanTempo.innerText = `${inputTempo.value} meses`
}

inputTempo.addEventListener("change", mostrarTempo)


const button = document.getElementsByClassName("simulatorButton")[0]

function calcularPontos() {
    const inputValor = document.getElementById("valorInput").value

    const pontosDia = document.querySelector("#pontosConquistadosDia")
    const pontosMes = document.querySelector("#pontosConquistadosMes")

    const meses = inputTempo.value

    if (meses == 0) {
        pontosMes.innerText = 0 
        if (inputValor < 40) {
            pontosDia.innerText = 0
        } else {
            let resultado = inputValor / 40
            pontosDia.innerText = resultado
        }
    } else {
        if (inputValor < 40) {
            pontosDia.innerText = 0
            pontosMes.innerText = 0
        } else {
            let resultado = inputValor / 40 
            pontosDia.innerText = resultado

            let totalMensal = resultado * 30
            pontosAcumulados = pontosAcumulados + totalMensal
            pontosMes.innerText = pontosAcumulados
        }
    }

}

button.addEventListener("click", calcularPontos)