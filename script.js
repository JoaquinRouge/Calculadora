let inputText = document.getElementById("text")
let botones = document.getElementsByClassName("botones").value

function agregar(valor) {
    inputText.value += valor
}

function borrar(){
    inputText.value = ""
}

function calcular() {
    const evaluar = eval(inputText.value)
    inputText.value = evaluar
}