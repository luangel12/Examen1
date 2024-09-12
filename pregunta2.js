function imc() {
    var altura = parseFloat(document.getElementById("altu"))
    var peso = parseInt(document.getElementById("peso"))

    const imc = peso/(altura^2)

    document.getElementById("imc").innerHTML = imc
}
